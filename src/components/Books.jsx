import { useEffect, useState } from 'react'
import BookCards from './BookCards';

export const Books = () => {


      const [books, setBooks]=useState ([]);

      useEffect(() => {

        fetch('./booksData.json')
          .then(response => response.json())
          .then(data => setBooks(data))

      }, []);


  return (
    <div>
      
        <h1 className='text-center text-2xl font-bold'>Books</h1>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
         {books.map(book => (
          <BookCards book={book} key={book.bookId} />
        ))}
        
    </div>  
       
    


    </div>
  )
}
