import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/news', label: 'News' },
    { to: '/careers', label: 'Careers' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' }
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Animate mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        '.mobile-menu-items',
        { 
          x: -20, 
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        },
        { 
          x: 0, 
          opacity: 1, 
          stagger: 0.1,
          delay: 0.2
        }
      );
    }
  }, [isMenuOpen]);

  // Add backdrop filter when scrolled
  useEffect(() => {
    if (scrolled) {
      gsap.to(navRef.current, {
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        duration: 0.3
      });
    } else {
      gsap.to(navRef.current, {
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: 'none',
        duration: 0.3
      });
    }
  }, [scrolled]);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="Home"
        >
          <Logo />
          <span className="ml-2 text-xl font-bold text-secondary-800">
            INDIAN ARMY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `relative text-secondary-800 font-medium transition-colors duration-200
                hover:text-accent-500 px-1 py-2 ${
                  isActive 
                    ? 'text-accent-500 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-500 after:animate-underline'
                    : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex gap-3 ml-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-md text-accent-600 border border-accent-500 hover:bg-accent-50 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-md bg-accent-500 text-white hover:bg-accent-600 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary-800 p-2 focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-md"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="text-accent-500" />
          ) : (
            <FaBars size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm top-16 pt-4 px-4 z-40">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => 
                    `mobile-menu-items text-secondary-800 py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive 
                        ? 'bg-accent-50 text-accent-600 font-semibold'
                        : 'hover:bg-neutral-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  to="/login"
                  className="mobile-menu-items text-center py-3 px-4 rounded-lg border border-accent-500 text-accent-600 hover:bg-accent-50 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="mobile-menu-items text-center py-3 px-4 rounded-lg bg-accent-500 text-white hover:bg-accent-600 transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;