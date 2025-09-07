import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Career from './pages/Career';
import Help from './pages/Help';
import Login from './pages/Login';
import PageDetail from './pages/PageDetail';

const App = () => {
  const [user, setUser] = useState(() => {
    // Initialize user from localStorage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  useEffect(() => {
    // Sync user state with localStorage changes (optional)
    const handleStorageChange = () => {
      const savedUser = localStorage.getItem('user');
      setUser(savedUser ? JSON.parse(savedUser) : null);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      {user && <Header user={user} />}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/about" element={user ? <About /> : <Navigate to="/login" replace />} />
          <Route path="/service" element={user ? <Service /> : <Navigate to="/login" replace />} />
          <Route path="/career" element={user ? <Career /> : <Navigate to="/login" replace />} />
          <Route path="/help" element={user ? <Help /> : <Navigate to="/login" replace />} />
          <Route path="/page/:id" element={user ? <PageDetail /> : <Navigate to="/login" replace />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
