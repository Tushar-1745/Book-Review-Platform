// models/book.js
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: { type: DataTypes.STRING, allowNull: false },
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    featured: { type: DataTypes.BOOLEAN, defaultValue: false },
    rating: { type: DataTypes.FLOAT, defaultValue: 0 },
  });

  // Add a static method on the Book model
  Book.findBookById = async function (id) {
    return await Book.findByPk(id); // Sequelize's method to find by primary key
  };

  return Book;
};
