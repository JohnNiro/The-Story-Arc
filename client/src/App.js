
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Login from "./components/Login";
function App() {
  const [ user, setUser ] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? { token } : null;
});
useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setUser({ token });
    }

},[]);

const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
}
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/add" element={<AddBook />} />
         <Route path="/books" element={<Books />} />
         <Route path="/about" element={<About />} />
         <Route path="/books/:id" element={<BookDetail />} />
         <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
