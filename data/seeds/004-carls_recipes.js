exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex("instructions").insert([
    // { id: 1, name: "Chocolate Milk" },
    { recipe_id: 1, ingredient_id: 1 },
    { recipe_id: 1, ingredient_id: 2 },
    { recipe_id: 1 },

    { recipe_id: 2, ingredient_id: 1 },
    { recipe_id: 2, ingredient_id: 3 },
    { recipe_id: 2 },

    { recipe_id: 3 },
    { recipe_id: 3, ingredient_id: 6 },
    { recipe_id: 3, ingredient_id: 8 },
    { recipe_id: 3, ingredient_id: 7 },
    { recipe_id: 3, ingredient_id: 2 },
    { recipe_id: 3, ingredient_id: 9 },
    { recipe_id: 3, ingredient_id: 11 },
    { recipe_id: 3, ingredient_id: 12 },
    { recipe_id: 3, ingredient_id: 10 },
    { recipe_id: 3 },

    { recipe_id: 4, ingredient_id: 1 },
    { recipe_id: 4, ingredient_id: 4 },
    { recipe_id: 4 },

    { recipe_id: 5, ingredient_id: 1 },
    { recipe_id: 5, ingredient_id: 5 },
    { recipe_id: 5 }
  ]);
};
//   return knex("carls_recipes")
//     .del()
//     .then(function() {
//       // Inserts seed entries
//       return knex("carls_recipes").insert([
//         // { id: 1, name: "Chocolate Milk" },
//         { recipe_id: 1, ingredient_id: 1 },
//         { recipe_id: 1, ingredient_id: 2 },
//         { recipe_id: 1 },

//         { recipe_id: 2, ingredient_id: 1 },
//         { recipe_id: 2, ingredient_id: 3 },
//         { recipe_id: 2 },

//         { recipe_id: 3 },
//         { recipe_id: 3, ingredient_id: 6 },
//         { recipe_id: 3, ingredient_id: 8 },
//         { recipe_id: 3, ingredient_id: 7 },
//         { recipe_id: 3, ingredient_id: 2 },
//         { recipe_id: 3, ingredient_id: 9 },
//         { recipe_id: 3, ingredient_id: 11 },
//         { recipe_id: 3, ingredient_id: 12 },
//         { recipe_id: 3, ingredient_id: 10 },
//         { recipe_id: 3 },

//         { recipe_id: 4, ingredient_id: 1 },
//         { recipe_id: 4, ingredient_id: 4 },
//         { recipe_id: 4 },

//         { recipe_id: 5, ingredient_id: 1 },
//         { recipe_id: 5, ingredient_id: 5 },
//         { recipe_id: 5 }
//       ]);
//     });
// };
