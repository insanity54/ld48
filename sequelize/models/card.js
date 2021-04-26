'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Card.init({
    number: DataTypes.STRING,
    rarity: DataTypes.ENUM,
    name: DataTypes.STRING,
    type: DataTypes.ENUM,
    cost: DataTypes.STRING,
    source: DataTypes.STRING,
    color: DataTypes.ENUM,
    characteristic: DataTypes.STRING,
    ap: DataTypes.STRING,
    dp: DataTypes.STRING,
    parallel: DataTypes.BOOLEAN,
    text: DataTypes.STRING,
    flavor: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    release: DataTypes.STRING,
    num: DataTypes.STRING,
    fullId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};