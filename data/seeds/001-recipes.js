exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, recipe_name: "Chocolate Milk" },
        { id: 2, recipe_name: "Chocolate Covered Strawberries" },
        { id: 3, recipe_name: "Chocolate Crepes" },
        { id: 4, recipe_name: "Chocolate Covered Peanuts" },
        { id: 5, recipe_name: "Chocolate Covered Pretzels" }
      ]);
    });
};
