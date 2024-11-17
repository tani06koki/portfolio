import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['About', 'Career', 'Skill', 'Works'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setMenuOpen(false); // Close menu after selecting section
    }
  };

  const navItems = [
    { id: 'About', label: 'About Me' },
    { id: 'Career', label: 'Career' },
    { id: 'Skill', label: 'Skill' },
    { id: 'Works', label: 'Works' },
  ];

  return (
    <nav
      className={`text-[#F5F6FA] fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#2E3A59] backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-white/100"
          >
            Koki's Portfolio
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-white relative py-2 transition-colors hover:text-[#FF6B6B]
                  ${scrolled ? 'text-white' : 'bg-transparent'}
                  ${activeSection === id ? 'text-[#F5F6FA]' : 'text-black'}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:w-full after:h-0.5 after:bg-[#FF6B6B] after:scale-x-0 
                  after:transition-transform hover:after:scale-x-100
                  ${activeSection === id ? 'after:scale-x-100' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu toggle button in a circle at the bottom right */}
        <div className="fixed bottom-4 right-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 rounded-full bg-[#2E3A59] flex items-center justify-center shadow-lg focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#2E3A59] py-8 px-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-white text-lg transition-colors hover:text-[#FF6B6B]
                    ${activeSection === id ? 'text-[#F5F6FA]' : 'text-black'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
