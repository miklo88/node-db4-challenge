exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("carls_recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("carls_recipes").insert([
        // { id: 1, name: "Chocolate Milk" },
        { recipe_id: 1, ingredient_id: 1, insrtuction_number: 1 },
        { recipe_id: 1, ingredient_id: 2, insrtuction_number: 2 },
        { recipe_id: 1, insrtuction_number: 3 },

        { recipe_id: 2, ingredient_id: 1, insrtuction_number: 1 },
        { recipe_id: 2, ingredient_id: 3, insrtuction_number: 2 },
        { recipe_id: 2, insrtuction_number: 3 },

        { recipe_id: 3, insrtuction_number: 1 },
        { recipe_id: 3, ingredient_id: 6, insrtuction_number: 2 },
        { recipe_id: 3, ingredient_id: 8, insrtuction_number: 3 },
        { recipe_id: 3, ingredient_id: 7, insrtuction_number: 4 },
        { recipe_id: 3, ingredient_id: 2, insrtuction_number: 5 },
        { recipe_id: 3, ingredient_id: 9, insrtuction_number: 6 },
        { recipe_id: 3, ingredient_id: 11, insrtuction_number: 7 },
        { recipe_id: 3, ingredient_id: 12, insrtuction_number: 8 },
        { recipe_id: 3, ingredient_id: 10, insrtuction_number: 9 },
        { recipe_id: 3, insrtuction_number: 10 },

        { recipe_id: 4, ingredient_id: 1, insrtuction_number: 1 },
        { recipe_id: 4, ingredient_id: 4, insrtuction_number: 2 },
        { recipe_id: 4, insrtuction_number: 3 },

        { recipe_id: 5, ingredient_id: 1, insrtuction_number: 1 },
        { recipe_id: 5, ingredient_id: 5, insrtuction_number: 2 },
        { recipe_id: 5, insrtuction_number: 3 }
      ]);
    });
};
