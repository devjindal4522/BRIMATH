import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import Courses from './pages/Courses';
import Plans from './pages/Plans';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuth = localStorage.getItem('adminAuth');
  return isAuth ? <>{children}</> : <Navigate to="/admin" />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;