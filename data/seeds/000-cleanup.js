exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex("carls_recipes").truncate();
  await knex("instructions").truncate();
  await knex("ingredients").truncate();
  await knex("recipes").truncate();
};
