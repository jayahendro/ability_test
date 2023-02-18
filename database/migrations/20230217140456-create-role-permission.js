"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("RolePermissions", {
      role_id: {
        type: Sequelize.INTEGER,
      },
      permission_id: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("RolePermissions", {
      fields: ["role_id"],
      type: "unique",
      name: "constraint_fkey_role_permission",
    });
    await queryInterface.addConstraint("RolePermissions", {
      fields: ["permission_id"],
      type: "unique",
      name: "constraint_fkey_permission_role",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("RolePermissions");
  },
};
