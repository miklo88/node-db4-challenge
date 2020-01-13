exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("id");
    table.string("recipe_name").notNullable();
  });

  await knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.string("ingredient_name").notNullable();
    table.float("ingredient_quantity").notNullable();
  });

  await knex.schema.createTable("instructions", table => {
    table.increments("id");
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("instruction_number").notNullable();
    table.text("instructions").notNullable();
  });

  await knex.schema.createTable("carls_recipes", table => {
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes");
    //   .onUpdate("CASCADE")
    //   .onDelete("CASCADE");
    table
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients");
    //   .onUpdate("CASCADE")
    //   .onDelete("CASCADE");
    table.date("from");
    table.date("to");
    // reate a primary key as a combinaton of columns
    table.primary(["recipe_id", "ingredient_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("carls_recipes");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
