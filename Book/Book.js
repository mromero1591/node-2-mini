class Book {
  constructor(id, title, author) {
    this.id = id;
    (this.title = title), (this.author = author);
  }

  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }

  setTitle(newTitle) {
    this.title = newTitle;
    return;
  }

  setAuthor(newAuthor) {
    this.author = newAuthor;
    return;
  }
}

module.exports = Book;
