/* eslint-disable strict */
/*  */

let findAccountById = (accounts, id) =>
  accounts.find((account) => account.id === id);

let sortAccountsByLastName = (accounts) =>
  accounts.sort((a, b) =>
    a.name.last.toLowerCase() >= b.name.last.toLowerCase() ? 1 : -1
  );

function numberOfBorrows(account, books) {
  let total = 0;
  for (let book in books) {
    if (books[book].borrows.find((specific) => specific.id === account.id))
      total = total + 1;
  }
  return total;
}
function booksInPossession(account, books, authors) {
  //account loop though what they have checked out make sure returned is false
  // author id === id then find a way to push that as a object into the books array.
  let heldBooks = [];
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    const { id, title, genre, borrows } = book;
    for (let j = 0; j < borrows.length; j++) {
      if (borrows[j].id === account.id && borrows[j].returned === false) {
        for (let k = 0; k < authors.length; k++) {
          let author = authors[k];
          if (author.id === book.authorId) {
            let tempBook = { id, title, genre, author, borrows };
            heldBooks.push(tempBook);
          }
        }
      }
    }
  }
  return heldBooks;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
