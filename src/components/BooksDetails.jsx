import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// 1. IMPORT YOUR STORAGE UTILITIES
import { addToStoredReadList, addToStoredWishList } from '../utlities/localStorage';

const BooksDetails = () => {
    const { bookId } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const book = books.find(book => book.bookId === Number(bookId));

    if (!book) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-accent"></span>
            </div>
        );
    }

    // 2. DEFINE THE INTERMEDIARY HANDLERS
    const handleMarkAsRead = () => {
        addToStoredReadList(book.bookId); 
    };

    const handleAddToWishlist = () => {
        addToStoredWishList(book.bookId); 
    };

    return (
        <div className="max-w-6xl mx-auto my-12 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                {/* Left Side: Image Container */}
                <div className="bg-gray-100 rounded-2xl p-12 flex justify-center items-center h-full min-h-[500px]">
                    <img
                        className="w-full max-w-[320px] object-contain rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                        src={book.image}
                        alt={book.bookName}
                    />
                </div>

                {/* Right Side: Details Content */}
                <div className="flex flex-col justify-between h-full py-4">
                    <div>
                        {/* Title & Author */}
                        <h1 className="text-4xl font-bold text-gray-900 mb-2 font-serif">{book.bookName}</h1>
                        <p className="text-lg text-gray-600 font-medium mb-4">By : {book.author}</p>
                        
                        <hr className="border-gray-200 my-4" />
                        
                        {/* Category */}
                        <p className="text-xl text-gray-700 font-medium mb-4">{book.category}</p>
                        
                        <hr className="border-gray-200 my-4" />

                        {/* Review Description */}
                        <p className="text-gray-600 leading-relaxed mb-6">
                            <span className="font-bold text-gray-900">Review : </span>
                            {book.review || "Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac..."}
                        </p>

                        {/* Tags */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-bold text-gray-900">Tag</span>
                            {book.tags?.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="px-4 py-1 bg-green-50 text-green-600 text-sm font-semibold rounded-full"
                                >
                                    #{tag}
                                </span>
                            )) || (
                                <>
                                    <span className="px-4 py-1 bg-green-50 text-green-600 text-sm font-semibold rounded-full">#Young Adult</span>
                                    <span className="px-4 py-1 bg-green-50 text-green-600 text-sm font-semibold rounded-full">#Identity</span>
                                </>
                            )}
                        </div>

                        <hr className="border-gray-200 my-4" />

                        {/* Meta Specifications Table / List */}
                        <div className="grid grid-cols-2 gap-y-3 max-w-md text-sm mb-8">
                            <span className="text-gray-500">Number of Pages:</span>
                            <span className="font-bold text-gray-900">{book.totalPages || 281}</span>

                            <span className="text-gray-500">Publisher:</span>
                            <span className="font-bold text-gray-900">{book.publisher || "J.B. Lippincott & Co."}</span>

                            <span className="text-gray-500">Year of Publishing:</span>
                            <span className="font-bold text-gray-900">{book.yearOfPublishing || 1960}</span>

                            <span className="text-gray-500">Rating:</span>
                            <span className="font-bold text-gray-900">{book.rating || 4.8}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        {/* 3. ATTACH THE HANDLERS TO THE CLICK EVENT */}
                        <button 
                            onClick={handleMarkAsRead}
                            className="btn px-7 bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 font-semibold capitalize rounded-xl"
                        >
                            Read
                        </button>
                        <button 
                            onClick={handleAddToWishlist}
                            className="btn px-7 bg-[#50B1C9] hover:bg-[#409db3] text-white border-none font-semibold capitalize rounded-xl"
                        >
                            Wishlist
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BooksDetails;