
require('dotenv').config()
const envImport = require('@grimtech/envimport')
const DATABASE_PASSWORD = envImport('DATABASE_PASSWORD')
const DATABASE_USERNAME = envImport('DATABASE_USERNAME')
const DATABASE_HOST = envImport('DATABASE_HOST')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sbtp', DATABASE_USERNAME, DATABASE_PASSWORD, {
  dialect: 'postgres',
  host: DATABASE_HOST
});

(async function () {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})()

const cards = [
    {
        id: 1,
        content: 'Hello, world',
        image: 'https://placekitten.com/150/200'
    },
    {
        id: 2,
        content: 'Try this',
        image: 'https://placekitten.com/150/200'
    },
    {
        id: 3,
        content: 'Again',
        image: 'https://placekitten.com/150/200'
    }
];

const findIndex = (cardId) => cards.findIndex(({ id }) => id === parseInt(cardId));

const getNextId = () => {
    if (cards.length) {
        const { id: lastId } = cards[cards.length - 1]
        return  lastId + 1;
    } else {
        return 1;
    }
}

const updateById = (id, content) => {
    const index = findIndex(id);

    cards[index].content = content;

    return cards[index];
}

const create = (content) => {
    const card = {
        id: getNextId(),
        content,
    };

    cards.push(card);

    return card;
}

const findById = (cardId) => cards.find(({id}) => id === parseInt(cardId));

const removeById = (cardId) => {
    const index = findIndex(cardId);

    if (index !== -1) {
        cards.splice(index, 1)
    }
}

const all = () => cards;

module.exports = {
    updateById,
    create,
    findById,
    removeById,
    all,
};