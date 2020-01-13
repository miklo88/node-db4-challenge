exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient_name: "Chocolate", ingredient_quantity: 3 },
        { id: 2, ingredient_name: "Milk", ingredient_quantity: 2 },
        { id: 3, ingredient_name: "Strawberries", ingredient_quantity: 12 },
        { id: 4, ingredient_name: "Peanuts", ingredient_quantity: 1 },
        { id: 5, ingredient_name: "Pretzels", ingredient_quantity: 1 },
        { id: 6, ingredient_name: "Flour", ingredient_quantity: 1 },
        { id: 7, ingredient_name: "Cocoa Powder", ingredient_quantity: 0.25 },
        { id: 8, ingredient_name: "Sugar", ingredient_quantity: 0.5 },
        { id: 9, ingredient_name: "Eggs", ingredient_quantity: 4 },
        { id: 10, ingredient_name: "Butter", ingredient_quantity: 2.5 },
        { id: 11, ingredient_name: "Vanilla", ingredient_quantity: 0.25 },
        { id: 12, ingredient_name: "Salt", ingredient_quantity: 0.25 }
      ]);
    });
};
