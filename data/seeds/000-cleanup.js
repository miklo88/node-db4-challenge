exports.seed = async knex => {
  await knex("carls_recipes").truncate();
  await knex("ingredients").truncate();
  await knex("recipes").truncate();
};
