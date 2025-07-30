import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">
              Pine<span className="text-green-400">class</span>
            </h1>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="hover:text-green-400 transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="/courses" className="hover:text-green-400 transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Courses
              </a>
              <a href="/trainers" className="hover:text-green-400 transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Trainers
              </a>
              <a href="/about" className="hover:text-green-400 transition-colors duration-200 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="/contact" className="hover:text-green-400 transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Enroll Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-green-400 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-800">
              <a href="#" className="hover:text-green-400 hover:bg-blue-800 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#" className="hover:text-green-400 hover:bg-blue-800 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Courses
              </a>
              <a href="#" className="hover:text-green-400 hover:bg-blue-800 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Trainers
              </a>
              <a href="#" className="hover:text-green-400 hover:bg-blue-800 block px-3 py-2 text-base font-medium transition-colors duration-200">
                About
              </a>
              <a href="#" className="hover:text-green-400 hover:bg-blue-800 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Contact
              </a>
              <div className="pt-4 pb-2">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}