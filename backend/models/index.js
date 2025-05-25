const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Book = require('./book')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.Review = require('./review')(sequelize, Sequelize);

// Associations with explicit foreignKey on both sides
db.Book.hasMany(db.Review, { foreignKey: 'bookId' });
db.Review.belongsTo(db.Book, { foreignKey: 'bookId' });

db.User.hasMany(db.Review, { foreignKey: 'userId' });
db.Review.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
