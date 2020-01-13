exports.seed = async knex => {
  await knex("recipes").insert([
    {
      recipe_name: "Chocolate Milk",
      instructions:
        "pour chocolate into milk, stir. enjoy a milkchocolate mustache."
    },
    {
      recipe_name: "Chocolate Covered Strawberries",
      instructions:
        "warm chocolate, dip strawberry into chocolate. enjoy chocolate covered strawberries"
    },
    {
      recipe_name: "Chocolate Crepes",
      instructions:
        "gather ingredients. sift flour, sugar, cocoa powder. add milk, whisk in eggs and splash in the vanilla. pinch of salt and mix wet and dry ingredients together. heat nonstick pan, coat generously with butter, add batter cook 30 seconds each side until done. serve with nutella and fresh fruit!"
    },
    {
      recipe_name: "Chocolate Covered Peanuts",
      instructions:
        "warm chocolate, dip peanuts into chocolate and enjoy chocolate covered peanuts"
    },
    {
      recipe_name: "Chocolate Covered Pretzels",
      instructions:
        "warm chocolate, dip pretzels into chocolate. enjoy chocolate covered pretzels"
    }
  ]);
};
