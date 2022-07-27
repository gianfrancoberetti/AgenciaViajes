'use strict';


const {testimonialesSchema, TESTIMONIALES_TABLE} = require('./../models/testimoniales.model');


module.exports = {
  async up (queryInterfacte) {
    await queryInterfacte.createTable(TESTIMONIALES_TABLE, testimonialesSchema);
  },

  async down (queryInterface) {
    await queryInterfacte.dropTable(TESTIMONIALES_TABLE, testimonialesSchema);

  }
};
