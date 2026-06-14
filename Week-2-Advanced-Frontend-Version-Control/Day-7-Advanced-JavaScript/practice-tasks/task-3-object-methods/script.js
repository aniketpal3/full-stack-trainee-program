const book = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 320,

  details: function () {
    return `Book: ${this.title}<br>Author: ${this.author}<br>Pages: ${this.pages}`;
  }
};

document.getElementById("output").innerHTML = book.details();

console.log(book.details());