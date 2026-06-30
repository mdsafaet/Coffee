import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// FIX PATH (make sure folder name matches exactly)
import { getStoredReadList, getStoredWishList } from '../utlities/localStorage';

const ListedBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    // Fetch books data
    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setAllBooks(data));
    }, []);

    // Filter read + wishlist books
    useEffect(() => {
        if (allBooks.length > 0) {
            const storedReadIds = getStoredReadList();
            const storedWishIds = getStoredWishList();

            const reads = allBooks.filter(book =>
                storedReadIds.includes(book.bookId)
            );

            const wishes = allBooks.filter(book =>
                storedWishIds.includes(book.bookId)
            );

            setReadList(reads);
            setWishList(wishes);
        }
    }, [allBooks]);

    return (
        <div className="max-w-6xl mx-auto my-12 px-4">

            <h1 className="text-3xl font-bold text-center mb-8">
                Books Dashboard
            </h1>

            <Tabs>

                {/* TAB BUTTONS */}
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                {/* READ TAB */}
                <TabPanel>
                    <div className="flex flex-col gap-6">
                        {readList.length === 0 ? (
                            <p>No books marked as read yet.</p>
                        ) : (
                            readList.map(book => (
                                <div
                                    key={book.bookId}
                                    className="flex gap-6 p-6 border rounded-xl items-center"
                                >
                                    <img
                                        src={book.image}
                                        alt={book.bookName}
                                        className="w-24 h-32 object-contain"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            {book.bookName}
                                        </h3>
                                        <p className="text-gray-600">
                                            By: {book.author}
                                        </p>
                                        <span className="text-sm text-green-600">
                                            {book.category}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </TabPanel>

                {/* WISHLIST TAB */}
                <TabPanel>
                    <div className="flex flex-col gap-6">
                        {wishList.length === 0 ? (
                            <p>Your wishlist is empty.</p>
                        ) : (
                            wishList.map(book => (
                                <div
                                    key={book.bookId}
                                    className="flex gap-6 p-6 border rounded-xl items-center"
                                >
                                    <img
                                        src={book.image}
                                        alt={book.bookName}
                                        className="w-24 h-32 object-contain"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            {book.bookName}
                                        </h3>
                                        <p className="text-gray-600">
                                            By: {book.author}
                                        </p>
                                        <span className="text-sm text-blue-600">
                                            {book.category}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ListedBooks;