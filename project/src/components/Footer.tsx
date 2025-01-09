import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-2xl font-bold">Brimath</span>
            </div>
            <p className="text-gray-400">
              Empowering students with mathematical excellence since 2020
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                <span>contact@brimath.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-indigo-400" />
                <span>123 Math Street, Education City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="hover:text-indigo-400 transition-colors">Courses</a></li>
              <li><a href="/plans" className="hover:text-indigo-400 transition-colors">Plans</a></li>
              <li><a href="/testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</a></li>
              <li><a href="/signup" className="hover:text-indigo-400 transition-colors">Sign Up</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brimath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;