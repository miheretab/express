'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Treasures', [
        {id: 100, latitude: '1.33125924', longitude: '103.8980486', name: 'T1'},
        {id: 101, latitude: '1.32255754', longitude: '103.8943086', name: 'T2'},
        {id: 102, latitude: '1.3166356', longitude: '103.8891225', name: 'T3'},
        {id: 103, latitude: '1.31286055', longitude: '103.8545565', name: 'T4'},
        {id: 104, latitude: '1.34439896', longitude: '103.8765938', name: 'T5'},
        {id: 105, latitude: '1.33616189', longitude: '103.8770866', name: 'T6'},
        {id: 106, latitude: '1.32552844', longitude: '103.8691014', name: 'T7'},
        {id: 107, latitude: '1.32303589', longitude: '103.8774815', name: 'T8'},
        {id: 108, latitude: '1.33465304', longitude: '103.870449', name: 'T9'},
        {id: 109, latitude: '1.32606138', longitude: '103.8793007', name: 'T10'},
        {id: 110, latitude: '1.25886946', longitude: '103.898879', name: 'T11'},
        {id: 111, latitude: '1.26973345', longitude: '103.8810448', name: 'T12'},
        {id: 112, latitude: '1.32914713', longitude: '103.8334781', name: 'T13'},
        {id: 113, latitude: '1.32960595', longitude: '103.8807937', name: 'T14'},
        {id: 114, latitude: '1.33700251', longitude: '103.8492249', name: 'T15'},
        {id: 115, latitude: '1.27845714', longitude: '103.8571762', name: 'T16'},
        {id: 116, latitude: '1.36019784', longitude: '103.8563582', name: 'T17'},
        {id: 117, latitude: '1.31551921', longitude: '103.8632839', name: 'T18'}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Treasures', null, {});
  }
};
