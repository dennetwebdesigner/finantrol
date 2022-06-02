"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const currentTime = new Date();
    let i = 0;

    await queryInterface.bulkInsert(
      "marketplaces",
      [
        {
          id: ++i,
          name: `marketplace_${i}`,
          status: 1,
          user_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          name: `marketplace_${i}`,
          status: 1,
          user_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          name: `marketplace_${i}`,
          status: 1,
          user_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          name: `marketplace_${i}`,
          status: 1,
          user_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("marketplaces", null, {});
  },
};
