// Update with your config settings.
module.exports = {
  development: {
    client: "sqlite3",
    // necessary when using sqlite3
    useNullAsDefault: true,
    connection: {
      filename: "./data/recipes.sqlite3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
