import React, { Component, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext'



const NavBar = () => {
    const {books} = useContext(BookContext)

    return (
        <div className='navbar'>
            <h1>Reading List</h1>
            <p>Currently you have {books.length} books to get through...</p>
        </div>
    )
}

export default NavBar
