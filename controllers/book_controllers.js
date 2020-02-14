var Book = require("../Book/Book");

var books = [];

var id = 0;

module.exports = {
  list: (req, res) => {
    res.status(200).send(books);
  },
  create: (req, res) => {
    let { title, author } = req.body;
    var newBook = new Book(id, title, author);

    books.push(newBook);

    ++id;

    res.status(200).send(books);
  },
  update: (req, res) => {
    let id = parseInt(req.params.id);

    let bookLocationIndex = books.findIndex(book => book.id === id);

    if (bookLocationIndex > -1) {
      if (req.body.title) {
        books[bookLocationIndex].setTitle(req.body.title);
      }
      if (req.body.author) {
        books[bookLocationIndex].setAuthor(req.body.author);
      }

      res.status(200).send(books);
    }
  },
  delete: (req, res) => {
    let id = parseInt(req.params.id);
    let bookLocationIndex = books.findIndex(book => book.id === id);
    if (bookLocationIndex > -1) {
      books.splice(bookLocationIndex, 1);
      res.status(200).send(books);
    }
  }
};
