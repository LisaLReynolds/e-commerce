# E-commerce Back End

## Description

This is the back end code for an e-commerce site that uses an Express.js API configured with Sequelize to utilize a PostgreSQL database.

## Installation

In order to use this application

1. Clone it to your local machine from github: https://github.com/LisaLReynolds/e-commerce.

2. run `npm i dotenv express pg sequelize` in your command line to install the necessary dependencies.

3. open your .env file and fill in
   DB_NAME='ecommerce_db'
   DB_USER='your_username'
   DB_PASSWORD='your_password'`

4. Navigate to `cd Develop/`, `cd db/`, once here, you may run `psql -U postgres`. Enter your password when prompted and when prompted with `postgres=#` enter `\i schema.sql`. You may enter `\q` to exit PostgreSQL.

5. Once the database has been established, enter `npm run seed` in the command line to create and seed your tables.

6. Enter `npm start` to connect to your server.

7. You may now view and interact with the data via pgAdmin and Insomnia.

## Video

Please see the link below for a video walkthrough of the application:

https://drive.google.com/file/d/1YJDB1EcanjSrUiTh_BPE4Fd4OoVfGDkH/view?usp=sharing
