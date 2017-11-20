// import dependencies
import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import { Users } from '../models';

/**
 * This is a UserSignup class that allows a User to sign-up
 * @export
 * @class UserSignup
 */
export class UserSignup {
  /**
 * @param {object} req - The request object from the client
 * @param {object} res - The response object to the client
 * @return {object} JSON - this is returned to notify the user of account creation
 * @static
 * @memberof UserSignup
 */
  static signUp(req, res) {
    const { name, email, confirmPassword } = req.body;
    let { password } = req.body;
    console.log('this is the password', password, 'and confirmed', confirmPassword);
    /* Checks password */
    if (!validator.equals(password, confirmPassword)) {
      return res.status(400).send({
        status: 'Fail',
        message: `Please your password ${password} do not match ${confirmPassword}`
      });
    }
    if (validator.isEmpty(password)) {
      return res.status(400).send({
        status: 'Fail',
        message: 'Please enter a valid password'
      });
    }
    if (!validator.isLength(password, { min: 8, max: undefined })) {
      return res.status(400).send({
        status: 'Fail',
        message: 'Please your password cannot be less than 8 characters'
      });
    }

    /* encrypt password and stores in the database
    along with some user information */
    password = bcrypt.hashSync(password, 10);
    return Users
      .create({
        name,
        email,
        password,
      })
      .then((user) => {
        res.status(201).send({
          status: 'Success',
          message: 'Your account has been created',
          name: user.name,
          id: user.id
        });
      })
      .catch((err) => {
        return res.status(400).send({
          status: 'Fail',
          message: err.errors[0].message
        });
      });
  }
}



/**
 * This is a UserSignin class that allows a user to signin
 * a token is generated for token based authentication
 * @export
 * @class UserSignin
 */
export class UserSignin {
  /**
 * @param {object} req - The req
 * @param {object} res - The res
 * @return {object} JSON 
 * @static
 * @memberof UserSignin
 */
  static signIn(req, res) {
    /* grab the email and password from the req.body
      these values are parsed and then if there is an error it is returned
      if
     */

    const { email, password, confirmPassword } = req.body;
    console.log(email, password)
    if (!validator.equals(password, confirmPassword)) {
      return res.status(400).send({
        status: 'Fail',
        message: `Please your password ${password} do not match ${confirmPassword}`
      });
    }
    if (validator.isEmpty(password)) {
      return res.status(400).send({
        status: 'Fail',
        message: 'Please enter your password'
      });
    }
    if (validator.isEmpty(email)) {
      return res.status(400).send({
        status: 'Fail',
        message: 'Please enter your email address'
      });
    }
    return Users // check the db if user has already signedup
      .findOne({
        where: {
          email,
        }
      })
      .then((user) => {
        if (!user) { // returns an error if user has not signedup yet
          return res.status(400).send({
            status: 'Fail',
            err: 'User Not Found'
          });
        }
        if (bcrypt.compareSync(password, user.password)) {
          /*  if user has an account,
            compare password with what we have in the db.
            if password is correct, save the user id in a token
            and send this to the user for authentication.
           */
          const payload = { id: user.id, admin: user.isAdmin };
          console.log(payload);
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '3h'
          });
          return res.status(200).send({
            status: 'Success',
            message: 'Token generation and signin successful',
            data: token,
          });
        }
        return res.status(400).send({
          status: 'Fail',
          message: 'Incorrect Login Details supplied'
        });
      });
  }
}