exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("id");
    table.text("name").notNullable();
  });

  await knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.text("name").notNullable();
    // foreign key?
  });
  await knex.schema
    .createTable("instructions", table => {
      table.increments("id");
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("instruction_number")
        .unsigned()
        .notNullable();
      table.text("instructions").notNullable();
    })
    .createTable("carls_recipes", table => {
      table.increments();
      table.float("quantity").notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists("carls_recipes")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
