"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          full_name: "Leonardo",
          email: "leo@test.com",
          // com a mudança no nome das colunas, precisamos colocar no seed o formato correspondente a este novo nome
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          full_name: "JEduardo",
          email: "edu@test.com",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};
