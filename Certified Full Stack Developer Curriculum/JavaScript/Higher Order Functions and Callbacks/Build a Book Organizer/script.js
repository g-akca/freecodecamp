const books = [
  {
    title: "Book A",
    authorName: "Author A",
    releaseYear: 1924
  },
  {
    title: "Book B",
    authorName: "Author B",
    releaseYear: 2003
  },
  {
    title: "Book C",
    authorName: "Author C",
    releaseYear: 1940
  },
  {
    title: "Book D",
    authorName: "Author D",
    releaseYear: 1912
  }
]

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }
  else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }
  else {
    return 0;
  }
}

let filteredBooks = books.filter(book => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);