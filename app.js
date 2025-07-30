import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // ✅ Import
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookListPage from './pages/BookListPage';
import AddBookPage from './pages/AddBookPage';
import PrivateRoute from './components/PrivateRoute'; // ✅ Protected Routes

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar always visible */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* ✅ Protected Routes */}
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <BookListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-book"
          element={
            <PrivateRoute>
              <AddBookPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
