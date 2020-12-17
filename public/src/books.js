/* eslint-disable strict */
let findAuthorById = (authors, id) =>
  authors.find((author) => author.id === id);

let findBookById = (books, id) => books.find((book) => book.id === id);

function partitionBooksByBorrowedStatus(books) {
  let loanedBooks = books.filter((book) => {
    return book.borrows[0].returned === false;
  });
  let returnedBooks = books.filter((book) => {
    return book.borrows[0].returned === true;
  });
  return [loanedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let array = [];
  let borrow = book.borrows;
  borrow.forEach((record) => {
    for (let key in accounts) {
      let account = accounts[key];
      if (record.id === account.id) {
        let copy = { ...account };
        copy["returned"] = record.returned;
        array.push(copy);
      }
    }
  });
  return array.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
