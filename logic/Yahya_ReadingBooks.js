class Book {
  constructor(time, alice, bob) {
    this.time = time;
    this.alice = alice;
    this.bob = bob;
  }
}

function solve(totalChoosenBooks, listBook) {
  const limiter = totalChoosenBooks;
  let alicebook = 0;
  let bobBook = 0;
  let bookFull = 0;
  let timeFull = 0;
  let timeFull2 = 0;

  for (let x = 0; x < listBook.length; x++) {
    if (listBook[x].alice && listBook[x].bob === 1) {
      if (bookFull !== limiter) {
        bookFull++;
        timeFull = timeFull + listBook[x].time;
      }
    }
  }

  for (let x = 0; x < listBook.length; x++) {
    if (listBook[x].alice === 1 && listBook[x].bob === 0) {
      alicebook++;
      timeFull2 = timeFull2 + listBook[x].time;
    } else if (listBook[x].alice === 0 && listBook[x].bob === 1) {
      bobBook++;
      timeFull2 = timeFull2 + listBook[x].time;
    }
  }

  if (bookFull === limiter) {
    return timeFull;
  } else if (bookFull !== limiter) {
    if (bookFull + (alicebook + bobBook) / 2 === limiter) {
      return timeFull + timeFull2;
    } else {
      return -1;
    }
  }
}

console.log(
  solve(4, [
    new Book(7, 1, 1),
    new Book(2, 1, 1),
    new Book(8, 1, 1),
    new Book(4, 0, 1),
    new Book(1, 0, 1),
    new Book(1, 1, 1),
    new Book(1, 0, 1),
    new Book(3, 0, 0),
  ])
);

console.log(
  solve(2, [
    new Book(6, 0, 0),
    new Book(9, 0, 0),
    new Book(1, 0, 1),
    new Book(2, 1, 1),
    new Book(5, 1, 0),
  ])
);

console.log(
  solve(3, [
    new Book(3, 0, 0),
    new Book(2, 1, 0),
    new Book(3, 1, 0),
    new Book(5, 0, 1),
    new Book(3, 0, 1),
  ])
);
