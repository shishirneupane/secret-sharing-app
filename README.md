# secret-sharing-app

--

Create `.env` file in root folder with database info as shown below to connect to postgresql database.

DB_HOST='localhost'
DB_PORT='5432'
DB_DATABASE='my_db_name'
DB_USER='my_db_username'
DB_PASSWORD='my_db_password'

--

Also, create a table secrets in our db with `npm knex migrate:latest`. This will create a secrets table for us to work with.

--

Run `npm install` in root folder containing `package.json` of backend for installing backend dependencies. 
Then, start Node server with `npm start`. Server runs in `localhost:3700`.

--

Run `npm install` inside client folder containing `package.json` of frontend for installing frontend dependencies. 
Then, start React app with `npm start`. React app runs in `localhost:3000`.
