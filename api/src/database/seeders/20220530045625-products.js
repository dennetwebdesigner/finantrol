"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const currentTime = new Date();
    let i = 0;

    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: ++i,
          name: `produict_${i}`,
          code: `code_${i}`,
          value: `${currentTime.getDay() + i}.${currentTime.getDay()}`,
          description: "qualquer",
          stock: "00",
          tags: `${currentTime.getDay()}, ${currentTime.getMonth()}, ${currentTime.getYear()}`,
          marketplace_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          name: `produict_${i}`,
          code: `code_${i}`,
          value: `${currentTime.getDay() + i}.${currentTime.getDay()}`,
          description: "qualquer",
          stock: "00",
          tags: `${currentTime.getDay()}, ${currentTime.getMonth()}, ${currentTime.getYear()}`,
          marketplace_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          name: `produict_${i}`,
          code: `code_${i}`,
          value: `${currentTime.getDay() + i}.${currentTime.getDay()}`,
          description: "qualquer",
          stock: "00",
          tags: `${currentTime.getDay()}, ${currentTime.getMonth()}, ${currentTime.getYear()}`,
          marketplace_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          name: `produict_${i}`,
          code: `code_${i}`,
          value: `${currentTime.getDay() + i}.${currentTime.getDay()}`,
          description: "qualquer",
          stock: "00",
          tags: `${currentTime.getDay()}, ${currentTime.getMonth()}, ${currentTime.getYear()}`,
          marketplace_id: i,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
