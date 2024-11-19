import React from 'react';
import { Mail, Github, Linkedin, Download, Instagram} from 'lucide-react';

const About: React.FC = () => {
  const email = "tani06.bu@gmail.com";
  const githubUrl = "https://github.com/tani06koki"; // Replace with your GitHub URL
  const linkedinUrl = "https://www.linkedin.com/in/koki-taniguchi-9242b5226/"; // Replace with your LinkedIn URL
  const instagramUrl = "https://www.instagram.com/kk_tngc/"; // Replace with your Instagram URL


  return (
    <section id="About" className="bg-[#2E3A59] text-black pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
            <div className="absolute inset-0 bg-white/80 rounded-3xl rotate-6"></div>
            <img 
              src={"/image/profile.jpeg"}
              alt="Profile"
              className="relative rounded-3xl w-full h-full object-cover"
            />
          </div>

          {/* Bio Section */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-white/100 text-4xl md:text-5xl font-bold mb-2">Koki Taniguchi</h1>
              <p className="text-[#F5F6FA] text-lg font-medium">Data/Business/Finance Analyst</p>
            </div>
            
            <p className="text-[#F5F6FA] text-lg leading-relaxed max-w-2xl">
              Hi there! As a data and financial analyst, I find fulfillment in uncovering meaningful insights from data and seeing them translate into valuable strategies and informed decision-making. I aim to capture the essence behind the numbers and deliver clear, precise analysis that supports business growth and transformation.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href={`mailto:${email}`}
                className="inline-flex items-center px-6 py-3 bg-[#FF6B6B] text-white rounded-lg hover:bg-blue-300 hover:text-[#2E3A59] transition-colors"
              >
                Contact Me <Mail className="ml-2 w-4 h-4" />
              </a>
              <a 
                href={"/doc/Resume_KokiTaniguchi.pdf"}
                download="Resume_KokiTaniguchi.pdf"
                className="text-[#F5F6FA] inline-flex items-center px-6 py-3 border border-[#F5F6FA]/20 rounded-lg hover:bg-[#F5F6FA] hover:text-black transition-colors"
              >
                Download CV <Download className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F6FA] hover:text-[#FF6B6B] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F6FA] hover:text-[#FF6B6B] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F6FA] hover:text-[#FF6B6B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;