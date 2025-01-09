import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${className}`}
  >
    {children}
  </Link>
);

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-indigo-600">Brimath</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/plans">Plans</NavLink>
            <NavLink to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;