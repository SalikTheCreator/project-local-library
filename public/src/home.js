/* eslint-disable strict */
let totalBooksCount = (books) => books.length;

let totalAccountsCount = (accounts) => accounts.length;

function booksBorrowedCount(books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      total += 1;
    }
  }
  return total;
}

function mostCommonGenres(books) {
  let genres = books.reduce((acc, book) => {
    if (acc[book.genre]) {
      acc[book.genre]++;
    } else {
      acc[book.genre] = 1;
    }
    return acc;
  }, {});
  let keys = Object.keys(genres);
  let sortedKeys = keys.sort((k1, k2) => genres[k2] - genres[k1]);
  let array = sortedKeys.map((key) => {
    return { name: key, count: genres[key] };
  });
  return array.slice(0, 5);
}

function mostPopularBooks(books) {
  ///////////////////////////////////////////////////////////////
  function getAuthorName(authors, id) {
    let authorName = '';
    authors.forEach((author) => {
      if (author.id === id)
        authorName = `${author.name.first} ${author.name.last}`;
    });
    return authorName;
  }
  /////////////////////////////////////////////////////////////
  function sortTool(arr) {
    return arr.sort((a, b) => {
      if (a.count < b.count) return 1;
      if (a.count > b.count) return -1;
      return 0;
    });
  }
  ////////////////////////////////////////////////////////
  let arr = [];
  books.forEach((book) => {
    let newObject = {};
    newObject['name'] = book.title;
    newObject['count'] = book.borrows.length;
    arr.push(newObject);
  });
  return sortTool(arr).slice(0, 5);
}

function mostPopularAuthors(books, authors) {
  function getAuthorName(authors, id) {
    let authorName = '';
    authors.forEach((author) => {
      if (author.id === id)
        authorName = `${author.name.first} ${author.name.last}`;
    });
    return authorName;
  }
  function sortTool(arr) {
    return arr.sort((a, b) => {
      if (a.count < b.count) return 1;
      if (a.count > b.count) return -1;
      return 0;
    });
  }
  let arr = [];
  let x = books.reduce((acc, book) => {
    acc[book.authorId]
      ? (acc[book.authorId] += book.borrows.length)
      : (acc[book.authorId] = book.borrows.length);
    return acc;
  }, {});
  for (let key in x) {
    let value = x[key];
    let newObject = {};
    newObject['name'] = getAuthorName(authors, parseInt(key));
    newObject['count'] = value;
    arr.push(newObject);
  }
  return sortTool(arr).slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
