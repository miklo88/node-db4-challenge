exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Chocolate Milk" },
        { id: 2, name: "Chocolate Covered Strawberries" },
        { id: 3, name: "Chocolate Crepes" },
        { id: 4, name: "Chocolate Covered Peanuts" },
        { id: 5, name: "Chocolate Covered Pretzels" }
      ]);
    });
};
