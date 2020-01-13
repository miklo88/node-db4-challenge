exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("ingredients").notNullable();
    table.string("instructions").notNullable();
  });

  await knex.schema.createTable("ingredients", table => {});

  await knex.schema.createTable("instructions", table => {});
};

exports.down = async function(knex) {};
