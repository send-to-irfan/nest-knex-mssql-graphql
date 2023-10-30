/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          name: 'User1',
          email: 'user1@example.com',
          password: '123456',
        },
        {
          name: 'User2',
          email: 'user2@example.com',
          password: '123456',
        },
        {
          name: 'User3',
          email: 'user3@example.com',
          password: '123456',
        },
        {
          name: 'User4',
          email: 'user4@example.com',
          password: '123456',
        },
        {
          name: 'User5',
          email: 'user5@example.com',
          password: '123456',
        },
        {
          name: 'User6',
          email: 'user6@example.com',
          password: '123456',
        },
        {
          name: 'User7',
          email: 'user7@example.com',
          password: '123456',
        },
        {
          name: 'User8',
          email: 'user8@example.com',
          password: '123456',
        },
        {
          name: 'User9',
          email: 'user9@example.com',
          password: '123456',
        },
        {
          name: 'User10',
          email: 'user10@example.com',
          password: '123456',
        },
        {
          name: 'User11',
          email: 'user11@example.com',
          password: '123456',
        },
        {
          name: 'User12',
          email: 'user12@example.com',
          password: '123456',
        },
        {
          name: 'User13',
          email: 'user13@example.com',
          password: '123456',
        },
        {
          name: 'User14',
          email: 'user14@example.com',
          password: '123456',
        },
        {
          name: 'User15',
          email: 'user15@example.com',
          password: '123456',
        },
        {
          name: 'User16',
          email: 'user16@example.com',
          password: '123456',
        },
        {
          name: 'User17',
          email: 'user17@example.com',
          password: '123456',
        },
        {
          name: 'User18',
          email: 'user18@example.com',
          password: '123456',
        },
        {
          name: 'User19',
          email: 'user19@example.com',
          password: '123456',
        },
        {
          name: 'User20',
          email: 'user20@example.com',
          password: '123456',
        },
      ]);
    });
};
