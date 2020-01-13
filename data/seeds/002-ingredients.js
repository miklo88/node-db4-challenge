// exports.seed = function(knex) {
exports.seed = async knex => {
  await knex("ingredients").insert([
    { ingredient_name: "Chocolate", ingredient_quantity: 3 },
    { ingredient_name: "Milk", ingredient_quantity: 2 },
    { ingredient_name: "Strawberries", ingredient_quantity: 12 },
    { ingredient_name: "Peanuts", ingredient_quantity: 1 },
    { ingredient_name: "Pretzels", ingredient_quantity: 1 },
    { ingredient_name: "Flour", ingredient_quantity: 1 },
    { ingredient_name: "Cocoa Powder", ingredient_quantity: 0.25 },
    { ingredient_name: "Sugar", ingredient_quantity: 0.5 },
    { ingredient_name: "Eggs", ingredient_quantity: 4 },
    { ingredient_name: "Butter", ingredient_quantity: 2.5 },
    { ingredient_name: "Vanilla", ingredient_quantity: 0.25 },
    { ingredient_name: "Salt", ingredient_quantity: 0.25 }
  ]);
};
