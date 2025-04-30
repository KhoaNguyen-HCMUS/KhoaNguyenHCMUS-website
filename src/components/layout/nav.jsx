import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/themeContext';
import { Transition } from '@headlessui/react';
import { COLORS } from '../../styles/colors';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const theme = isDark ? COLORS.dark : COLORS.light;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'contact') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className='fixed top-0 w-full z-50 transition-all duration-300'
      style={{
        backgroundColor: isScrolled ? (isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)') : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0 flex items-center space-x-3'>
            <img src='/logo.svg' alt='Logo' className='h-8 w-auto' />
            <span style={{ color: theme.text.primary }} className='font-bold text-xl'>
              Nguyễn Lê Hồ Anh Khoa
            </span>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors duration-300 cursor-pointer ${
                isDark ? 'text-yellow-400 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-200/50'
              }`}
              aria-label='Toggle theme'
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className='px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer'
                style={{
                  color: theme.text.secondary,
                  ':hover': {
                    color: theme.text.primary,
                    backgroundColor: isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.5)',
                  },
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors duration-300 cursor-pointer ${
                isDark ? 'text-yellow-400 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-200/50'
              }`}
              aria-label='Toggle theme'
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: theme.text.secondary }}
              className='p-2 rounded-md'
            >
              <span className='sr-only'>Open menu</span>
              {isOpen ? (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              ) : (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <div className={`md:hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
                  ${
                    isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Nav;
