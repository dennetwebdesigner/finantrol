"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const currentTime = new Date();
    let i = 0;

    await queryInterface.bulkInsert(
      "addressesMarketplace",
      [
        {
          id: ++i,
          marketplace_id: i,
          number: i,
          street: `street_${i}`,
          destrict: `destrict_${i}`,
          city: `city_${i}`,
          state: `state_${i}`,
          country: `country_${i}`,

          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          marketplace_id: i,
          number: i,
          street: `street_${i}`,
          destrict: `destrict_${i}`,
          city: `city_${i}`,
          state: `state_${i}`,
          country: `country_${i}`,

          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          marketplace_id: i,
          number: i,
          street: `street_${i}`,
          destrict: `destrict_${i}`,
          city: `city_${i}`,
          state: `state_${i}`,
          country: `country_${i}`,

          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          id: ++i,
          marketplace_id: i,
          number: i,
          street: `street_${i}`,
          destrict: `destrict_${i}`,
          city: `city_${i}`,
          state: `state_${i}`,
          country: `country_${i}`,

          createdAt: currentTime,
          updatedAt: currentTime,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("addressesMarketplace", null, {});
  },
};
