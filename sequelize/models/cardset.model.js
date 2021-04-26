'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CardSet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Card, CardSet } = models;
      CardSet.hasMany(Card);
    }
  };
  CardSet.init({
    name: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    setAbbr: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CardSet',
  });
  return CardSet;
};