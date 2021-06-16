import React from "react";

import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider from './contexts/AuthContext'
import BookContext from "./contexts/BookContext";
import NewBookForm from "./components/BookForm";


function App() {
  return (
    <div className="App">
      <BookContext>
        <NavBar />
        <BookList/>
        <NewBookForm/>
      </BookContext>

    </div>
  );
}

export default App;
