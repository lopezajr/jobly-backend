"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");



const isProduction = process.env.NODE_ENV === "production";
  
  
  const db = new Client({
    connectionString: isProduction ? getDatabaseUri(): "postgres://lopezjr:512411@localhost:5432/jobly",
    ssl: isProduction ? {rejectUnauthorized: false} :false,
  });
 

db.connect();

module.exports = db;