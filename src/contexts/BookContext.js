import React, {createContext, useState} from 'react'

export const BookContext = createContext()



const BookContextProvider = (props) => {
  const [books, setBooks] =  useState([
        {title: 'Name', author: 'some guy', id: 1},
        {title: 'Name', author: 'some guy', id: 2},
        {title: 'Name', author: 'some guy', id: 3},
        {title: 'Name', author: 'some guy', id: 4},
        {title: 'Name', author: 'some guy', id: 5}
    ])
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: Math.random()}])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider

