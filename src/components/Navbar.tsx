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
    <div>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block text-[#F5F6FA] fixed w-full z-50 transition-all duration-300 ${
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
        </div>
      </nav>

      {/* Mobile Floating Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden fixed bottom-6 right-6 bg-[#FF6B6B] p-3 rounded-full shadow-lg focus:outline-none z-50"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex items-center justify-center bg-[#2E3A59]">
          <div className="space-y-4 flex flex-col items-center">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-white py-2 text-lg transition-colors hover:text-[#FF6B6B]
                  ${activeSection === id ? 'text-[#F5F6FA]' : 'text-gray-300'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
