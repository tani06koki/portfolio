import React, { useState, useEffect } from 'react';

interface Experience {
  type: string[];
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  website?: string;
  projects: string[];
  image: string; // URL to the image
}

const Career: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("Work"); // Default to "Work"
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger animation once the component is mounted
    setIsMounted(true);
  }, []);
  
  const experiences: Experience[] = [
    {
      type: ["Work"],
      company: "Truestar.Inc",
      role: "Data Analyst",
      period: "JUN 2023 - Present",
      description: "Clean and analyze open datasets, conduct trend analysis by tools like Dataiku, Alteryx, Python, SQL, and R. Deliver actionable insights through Tableau visualizations.",
      tech: ["R", "Python", "SQL", "Snowflake", "Dataiku", "Alteryx", "JIRA"],
      website: "https://en.truestar.co.jp/",
      projects: ["Project A", "Project B", "Project C"],
      image: "https://via.placeholder.com/150" // Example image URL
    },
    {
      type: ["Work"],
      company: "Monash University Student Association | Kuala Lumpur",
      role: "Honorary Advisory Committee",
      period: "January 2024 - Present",
      description: "Provide guidance to the current finance team and introduced automation for real-time budget tracking system by Google App Script.",
      tech: ["Google App Script", "Automation", "Financial Statement"],
      website: "https://musa.monash.edu.my/",
      projects: ["Project D", "Project E"],
      image: "https://via.placeholder.com/150"
    },
    {
      type: ["Work"],
      company: "Andaze.Ltd | Tokyo",
      role: "Cloud System Engineer",
      period: "November 2021 - August 2024",
      description: "Established and led the Information Systems department, implementing Microsoft Azure for internal infrastructure.",
      tech: ["Microsoft Apps", "Microsoft Azure", "Intune", "Power Automation", "Cyber Security"],
      website: "https://andaze.com/en/",
      projects: ["Project D", "Project E"],
      image: "/image/career/Andaze.png"
    },
    {
      type: ["Work"],
      company: "Monash University Student Association | Kuala Lumpur",
      role: "Head of Finance (Treasurer)",
      period: "January 2023 - December 2023",
      description: "Managed an annual budget of RM540K, streamlining financial processes and ensuring equitable fund allocation across departments via google app and SAP S/4 HANA.",
      tech: ["Accounting", "Google Apps", "SAP S/4HANA", "ASANA", "Audit"],
      website: "https://musa.monash.edu.my/",
      projects: ["Project D", "Project E"],
      image: "https://via.placeholder.com/150"
    },
    {
      type: ["Academic"],
      company: "Monash University | Malaysia",
      role: "Bachelor of Business and Commerce",
      period: "July 2021 - November 2024",
      description: "Major: Business Analytics | Banking and Finance Management",
      tech: ["R", "SAS", "Excel VBA", "Portfolio Management", "Derivatives", "Corporate Finance", "Credit Analysis"],
      website: "https://www.monash.edu.my/",
      projects: ["Project D", "Project E"],
      image: "https://via.placeholder.com/150"
    }
    // Add other experiences...
  ];

  const filteredExperiences = experiences.filter((exp) => exp.type.includes(selectedType));

  return (
    <section id="Career" className="bg-[#2E3A59] text-black py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold pb-12 text-[#F5F6FA] flex justify-center items-center">
          Experience
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 pb-16">
          {["Work", "Academic"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-3xl ${selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-[#F5F6FA] rounded-3xl p-6 relative transform transition-transform duration-700 ease-out ${
                isMounted 
                  ? index % 2 === 0 
                    ? 'translate-x-0 opacity-100'  // 偶数: 左からのアニメーション
                    : 'translate-x-0 opacity-100'  // 奇数: 右からのアニメーション
                  : index % 2 === 0 
                    ? '-translate-x-full opacity-0' // 偶数: 初期状態は左側にオフセット
                    : 'translate-x-full opacity-0'  // 奇数: 初期状態は右側にオフセット
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Delay each item for a staggered effect
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#2E3A59]">{exp.role}</h3>
                  <p className="text-gray-500">{exp.company}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-black-300 mb-4">{exp.description}</p>
              <div className="text-black flex flex-wrap gap-2 mb-12">
                {exp.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-200 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              {exp.website && (
                <p className="absolute bottom-8 right-12">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 pb-0 text-blue-600 hover:text-purple-600 transition-colors font-medium"
                  >
                    Visit Website →
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;