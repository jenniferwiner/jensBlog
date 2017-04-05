
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { title: 'My First Post',
          body: 'Here is my try at making a full CRUD app! GO!'
        }
      ]);
    });
};
