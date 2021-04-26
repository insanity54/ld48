const { Sequelize, DataTypes } = require('sequelize');
const envImport = require('@grimtech/envimport');
// const { applyExtraSetup } = require('./extra-setup');

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
const sequelize = new Sequelize(envImport('DB_CONNECTION_URL'));
// const sequelize = new Sequelize({
//     dialect: 'postgres',
//     logQueryParameters: true,
//     benchmark: true
// });

const modelDefiners = [
    require('./models/card.model'),
    require('./models/cardset.model'),
    
    // Add more models here...
    // require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize, DataTypes);
}

// We execute any extra setup after the models are defined, such as adding associations.
// applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;