exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("id");
    table.string("recipe_name").notNullable();
    table.string("instructions").notNullable();
  });

  await knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.string("ingredient_name").notNullable();
    table.float("ingredient_quantity").notNullable();
  });

  await knex.schema.createTable("carls_recipes", table => {
    table.increments("id");
    table
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients");
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes");
    // create a primary key as a combinaton of columns
    table.primary(["ingredient_id", "recipe_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("carls_recipes");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
