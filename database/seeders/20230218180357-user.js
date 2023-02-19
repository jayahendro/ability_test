"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let hashPassword;
    await bcrypt.hash("test", saltRounds).then((hash) => {
      hashPassword = hash;
    });

    const users = [
      {
        role_id: 1,
        name: "Jaya Hendro",
        first_name: "Jaya",
        last_name: "Hendro",
        id_card: "3573020789654",
        email: "abc@test.com",
        phone: "081233456789",
        password: hashPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        role_id: 2,
        name: "Hendro Jaya",
        first_name: "Hendro",
        last_name: "Jaya",
        id_card: "3573020789654",
        email: "test@abc.com",
        phone: "081233456789",
        password: hashPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Users", users);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
