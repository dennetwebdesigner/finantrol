"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const currentTime = new Date();
    console.log(currentTime);
    const password = await bcrypt.hash("1234567890", 8);
    let i = 0;

    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: ++i,
          email: `email_${i}@seeder.com`,
          username: `username_${i}`,
          password,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          email: `email_${i}@seeder.com`,
          username: `username_${i}`,
          password,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          email: `email_${i}@seeder.com`,
          username: `username_${i}`,
          password: await bcrypt.hash("1234567890", 8),
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          email: `email_${i}@seeder.com`,
          username: `username_${i}`,
          password: await bcrypt.hash("1234567890", 8),
          createdAt: currentTime,
          updatedAt: currentTime,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
