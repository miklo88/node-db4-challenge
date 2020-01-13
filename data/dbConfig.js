const knex = require("knex");

const config = require("../knexfile");

//  WE MUST SELET THE DEVELOPMENT OBJECT FROM OUR KNEXFILE
const db = knex(config.development);

module.exports = db;
