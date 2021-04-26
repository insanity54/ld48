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
      const { CardSet, Card } = models;
      Card.belongsTo(CardSet);
    }
  };
  Card.init({
    number: DataTypes.STRING,
    rarity: DataTypes.ENUM(['C', 'U', 'R', 'SR', 'UR', 'P']),
    name: DataTypes.STRING,
    type: DataTypes.ENUM(['support', 'character', 'event']),
    cost: DataTypes.STRING,
    source: DataTypes.STRING,
    color: DataTypes.ENUM(['red', 'yellow', 'green', 'blue', 'purple']),
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