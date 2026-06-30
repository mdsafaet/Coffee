import { useEffect, useState } from 'react';
import BookCards from './BookCards';

export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/booksData.json')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="px-10">
  <h1 className="text-4xl font-bold text-center mb-10">
    Books
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {books.map(book => (
      <BookCards key={book.bookId} book={book} />
    ))}
  </div>
</div>
  );
};