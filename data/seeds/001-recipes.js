exports.seed = function(knex, Promise) {
  // // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
  //     // Inserts seed entries
  //     return knex('table_name').insert([
  //       {id: 1, colName: 'rowValue1'},
  //       {id: 2, colName: 'rowValue2'},
  //       {id: 3, colName: 'rowValue3'}
  //     ]);
  //   });
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "recipeName", ingredients: "" },
        { id: 2, name: "recipeName" },
        { id: 3, name: "recipeName" }

        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
