exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "Chocolate" },
        { id: 2, name: "Milk" },
        { id: 3, name: "Strawberries" },
        { id: 4, name: "Peanuts" },
        { id: 5, name: "Pretzels" },
        { id: 6, name: "Flour" },
        { id: 7, name: "Cocoa Powder" },
        { id: 8, name: "Sugar" },
        { id: 9, name: "Eggs" },
        { id: 10, name: "Butter" },
        { id: 11, name: "Vanilla" },
        { id: 12, name: "Salt" }
      ]);
    });
};
