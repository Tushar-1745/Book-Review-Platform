// GET /api/authors
exports.getAllAuthors = async (req, res) => {
    try {
      const authors = await Book.findAll({
        attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('author')), 'author']],
      });
  
      const authorList = authors.map(a => a.author);
      res.json(authorList);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch authors' });
    }
  };
  