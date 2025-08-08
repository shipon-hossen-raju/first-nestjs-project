

export class bookService {
  getBook(): string {
    return 'take a book!';
  }

  // get book by id
  getBookById(bookId: string): string {
    return bookId;
  }

  // create a book
  createBook(payload): string {
    return payload;
  }
}

