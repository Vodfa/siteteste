import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-serif">
            <img
              src="https://i.imgur.com/3zs4AW4.png" // Substitua pelo link da sua imagem
              alt="Logo"
              className="h-12 w-13"
            />
            <span>MassenaMonnerat</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-black' : 'text-gray-500'
              } hover:text-black transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/projetos"
              className={`${
                isActive('/projetos') ? 'text-black' : 'text-gray-500'
              } hover:text-black transition-colors`}
            >
              Projetos
            </Link>
            <Link
              to="/equipe"
              className={`${
                isActive('/equipe') ? 'text-black' : 'text-gray-500'
              } hover:text-black transition-colors`}
            >
              Equipe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projetos"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </Link>
              <Link
                to="/equipe"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}