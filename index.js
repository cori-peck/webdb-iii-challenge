const express = require('express');
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/lambda.sqlite3',
    },
    useNullAsDefault: true,
}

const server = express();

server.use(express.json());

const port = process.env.PORT || 5050;
server.listen(port, () => 
    console.log(`API is up and running on localhost:${port}`)
);