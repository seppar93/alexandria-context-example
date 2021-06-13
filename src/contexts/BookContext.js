import React, {createContext, useState} from 'react'

export const BookContext = createContext()




const BookContextProvider = (props) => {
  const [books, setBooks] =  useState([
        {title: 'Name', id: 1},
        {title: 'Name', id: 2},
        {title: 'Name', id: 3},
        {title: 'Name', id: 4},
        {title: 'Name', id: 5}
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider

