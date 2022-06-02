"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const currentTime = new Date();
    let i = 0;

    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          id: ++i,
          firstName: `name_${i}`,
          lastName: `last_${i}`,
          birthday: `${currentTime.getDay()}/${currentTime.getMonth()}/${currentTime.getYear()}`,
          image: "qualquer",
          user_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          firstName: `name_${i}`,
          lastName: `last_${i}`,
          birthday: `${currentTime.getDay()}/${currentTime.getMonth()}/${currentTime.getYear()}`,
          image: "qualquer",
          user_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          firstName: `name_${i}`,
          lastName: `last_${i}`,
          birthday: `${currentTime.getDay()}/${currentTime.getMonth()}/${currentTime.getYear()}`,
          image: "qualquer",
          user_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          firstName: `name_${i}`,
          lastName: `last_${i}`,
          birthday: `${currentTime.getDay()}/${currentTime.getMonth()}/${currentTime.getYear()}`,
          image: "qualquer",
          user_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};
