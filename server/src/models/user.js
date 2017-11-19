export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-z]+$/i
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Please enter a valid email address'
        },
        isLowercase: {
          msg: 'Your email must be in lowercase'
        }
      },
      unique: {
        args: true,
        msg: 'This email already exist, enter a new email address'
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });
  /* User associations */
  Users.associate = (model) => {
    Users.hasMany(model.Events, {
      foreignKey: 'userId',
      as: 'events'
    });
    Users.hasMany(model.Centers, {
      foreignKey: 'userId',
      as: 'centers'
    });
  };
  return Users;
};
