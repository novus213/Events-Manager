# Events-Manager


[![Build Status](https://travis-ci.org/iidrees/Events-Manager.svg?branch=develop)](https://travis-ci.org/iidrees/Events-Manager)
[![Coverage Status](https://coveralls.io/repos/github/iidrees/Events-Manager/badge.svg)](https://coveralls.io/github/iidrees/Events-Manager)
[![Maintainability](https://api.codeclimate.com/v1/badges/507b075d1aa0f1e22e24/maintainability)](https://codeclimate.com/github/iidrees/Events-Manager/maintainability)

## Introduction

This is a project divided into three parts:

1. The Templates:
    
    * This part holds the UI or template and mock-up design for the client-side.
 
2. The Server:

    * This part holds the API that will be consumed by the user 

3. The Client:

    * This part holds the front-end functionalities that enables users to have seamless experience using the web application


## Getting Started

This is a javascript application built with [**Express**](https://expressjs.com/) framework on the nodejs platform. Authentication of users is done via [**JSON Web Tokens**](https://jwt.io/).

This is a project in three parts, and the first part is to design a UI Template to be hosted using Github Pages.
To view the UI template for the Events-Manager web application on Github Pages, you should click on this link [Events-Manager](https://iidrees.github.io/Events-Manager/template/landing.html).
To get more information on how to use the API, a good place to start would be here: [Events-Manager Doc](https://swaggerhub.com/apis/events-manager/Events-manager/1.0.0) on swaggerhub.


### Prerequisites
To view the UI Template, please use a web browser, preferably, Google Chrome and ensure you have a very good internet connection for a good web experience.
rrent-state)


## Dependencies
* Postgres
* Node

## Installation

1. Install [**Node JS**](https://nodejs.org/en/).
1. Install [**Postgres**](https://www.postgresql.org/) .
1. Clone the [**repository here**](https://github.com/kenoseni/Events-Manager-Olusola-Oseni)
1. [**cd**] into the root of the **project directory**.
1. Run `npm install` on the terminal to install Dependecies
1. Install sequelize-cli, Create Postgresql database, Navigate to server directory and run migrations:
```
npm install -g seqeulize-cli
cd server
sequelize db:migrate
```
5. Create a `.env` file in the root directory of the application. Use a different database for your testing and development. Example of the content of a .env file is shown in the .env.sample

6. Start the application:
**_Different Build Environment_**

**Production**
```
```
**Development**
```
npm run start:dev

```

## Limitations
The limitations with this current version of Event Manager includes:
* It cannot return all events created


## Tests

Sever side tests - run `npm test` on the terminal while within the **project root directory**.



### Starting
In the project root, run `npm run start:dev`.

### Features
Event Manager consists of the following features:

### Authentication

- It uses JSON Web Token (JWT) for authentication.
- Token is generated on user sign-up
- Token is perpetually verified to check the state of the user if logged in or not.
- Admin User will be created in the application with administrative priviledges to create centers

### Users

- Users can register
- Users can log in
- Users can add event
- Users can modify event
- Users can delete event

### Admin Users
- Admins can edit center
- Admins can add new center


## Usage
- Run database migration with `npm run seq:create`
- Start app development with `npm run start:dev` or `npm start`
- Install **Postman** and use to test all endpoints



## Testing

Server side testing is achieved through use of `supertest`, `mocha` and `chai` packages. `supertest` is used to make requests to the api and `mocha` is the testing framework and `chai` is the exception library. They will both be installed when you run `npm install` and the tests will run when you run `npm test`.

### Technology Stack
**UI, React & Templates**
* HTML/CSS
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Twitter Bootstrap](getbootstrap.com) / [Font Awesome](fontawesome.io/icons/)
* [Reactjs](reactjs.org)


**Server Side**
1. NodeJs
2. Express
3. Sequelize
4. [Swaggerhub](https://swaggerhub.com)





## Current state
still in the development stage


## Authors

* Idrees Ibraheem


