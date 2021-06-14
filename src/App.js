import React from "react";

import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider from './contexts/AuthContext'
import BookContext from "./contexts/BookContext";


function App() {
  return (
    <div className="App">
      <BookContext>
        <NavBar />
      </BookContext>

    </div>
  );
}

export default App;
