import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2E3A59] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left - Name */}
          <div className="mb-4 md:mb-0">
            <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-12 md:h-12 shrink-0">
              <img 
                onClick={scrollToTop} 
                src={"/logo/logo_bg.png"}
                alt="Profile"
                className="relative rounded-3xl w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold">Koki Taniguchi</h1>
            <p className="text-gray-400">Data/Finance Analyst</p>
          </div>

          {/* Link */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <Github className="w-6 h-6 hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-gray-400 transition-colors" />
            </a>
            <a href="mailto:tani06.bu@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6 hover:text-gray-400 transition-colors" />
            </a>
          </div>

          
          <button 
            onClick={scrollToTop} 
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            Back to Top
          </button>
        </div>

        {/* 下部 - コピーライト */}
        <div className="text-center text-gray-[#2E3A59] mt-6">
          <p>&copy; {currentYear} Koki Taniguchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;