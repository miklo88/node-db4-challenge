// Update with your config settings.

module.exports = {
  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./dev.sqlite3"
  //   },
  //   // necessary when using sqlite3
  //   useNullAsDefault: true
  // },
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/recipes.db3"
    },
    // necessary when using sqlite3
    useNullAsDefault: true,
    // generates migration files in a data/migrations
    mirgrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
