

import {MongoClient} from 'mongodb';

import dotenv from 'dotenv';
dotenv.config({path: './.env'});

const connectionString = process.env.MONGODB_URI;

const client = new MongoClient(connectionString);

let cnxn;
try {
    cnxn = await client.connect()
    console.log("Connected to MongoDB")
} catch (err) {
    console.error(err)
}

let db = cnxn.db("jobs-db");

export default db;

