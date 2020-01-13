exports.seed = async knex => {
  await knex("recipes").insert([
    { recipe_name: "Chocolate Milk" },
    { recipe_name: "Chocolate Covered Strawberries" },
    { recipe_name: "Chocolate Crepes" },
    { recipe_name: "Chocolate Covered Peanuts" },
    { recipe_name: "Chocolate Covered Pretzels" }
  ]);
};
