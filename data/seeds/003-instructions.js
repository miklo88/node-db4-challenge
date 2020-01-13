exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          recipe_id: 1,
          instruction_number: 1,
          instructions: "pour chocolate into milk"
        },
        { recipe_id: 1, instruction_number: 2, instructions: "stir" },
        {
          recipe_id: 1,
          instruction_number: 3,
          instructions: "make chocolate milk mustache"
        },
        { recipe_id: 2, instruction_number: 1, instructions: "warm chocolate" },
        {
          recipe_id: 2,
          instruction_number: 2,
          instructions: "dip strawberry into chocolate"
        },
        {
          recipe_id: 2,
          instruction_number: 3,
          instructions: "enjoy chocolate covered strawberries"
        },

        {
          recipe_id: 3,
          instruction_number: 1,
          instructions: "gather ingredients."
        },
        {
          recipe_id: 3,
          instruction_number: 2,
          instructions: "sift flour and sugar and cocoa."
        },
        {
          recipe_id: 3,
          instruction_number: 3,
          instructions: "combine milk, eggs, vanilla in separate container"
        },
        {
          recipe_id: 3,
          instruction_number: 4,
          instructions:
            "pinch of salt and mix wet and dry ingredients together with a whisk"
        },
        {
          recipe_id: 3,
          instruction_number: 5,
          instructions: "heat nonstick pan, coat generously with butter"
        },
        {
          recipe_id: 3,
          instruction_number: 6,
          instructions: "add batter cook 30 seconds each side until done."
        },
        {
          recipe_id: 3,
          instruction_number: 7,
          instructions: "serve with nutella and fresh fruit!"
        },
        { recipe_id: 4, instruction_number: 1, instructions: "warm chocolate" },
        {
          recipe_id: 4,
          instruction_number: 2,
          instructions: "dip peanuts into chocolate"
        },
        {
          recipe_id: 4,
          instruction_number: 3,
          instructions: "enjoy chocolate covered peanuts"
        },
        { recipe_id: 5, instruction_number: 1, instructions: "warm chocolate" },
        {
          recipe_id: 5,
          instruction_number: 2,
          instructions: "dip pretzels into chocolate"
        },
        {
          recipe_id: 5,
          instruction_number: 3,
          instructions: "enjoy chocolate covered pretzels"
        }
      ]);
    });
};
