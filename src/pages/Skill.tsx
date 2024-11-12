import React from 'react';
import { Cloud, Code, ChartNoAxesCombined, Paintbrush, ServerCog, LayoutGrid } from 'lucide-react';


interface SkillSet {
  icons: React.ElementType;
  category: string;
  items: string[];
}
<Cloud />
const Skill: React.FC = () => {
  const skills: SkillSet[] = [
    { icons: Code, category: "Coding", items: ["R", "Python", "SQL", "Java Script", "VBA", "GAS"] },
    { icons: Cloud, category: "Cloud", items: ["Azure", "AWS", "GCP"] },
    { icons: ChartNoAxesCombined, category: "Finance", items: ["Portfolio Management", "Derivatives", "Credit Analysis", "Corporate Finance"] },
    { icons: Paintbrush, category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { icons: ServerCog, category: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB"] },
    { icons: LayoutGrid, category: "Tools", items: ["Git", "Docker", "SAS", "Alteryx", "Dataiku", "Snowflake", "Tableau", "Power BI", "Google Analytics"] }
  ];

  return (
    <section id="Skill" className="bg-[#2E3A59] text-black py-16 px-4 pb-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold pb-24 text-[#F5F6FA] flex justify-center items-center">
          Skills & Knowledge</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="rounded-xl p-10">
              <skillSet.icons className="mx-auto text-blue-300 mb-4" size={48} />  {/* Larger, centered icon */}
              <h3 className="text-center text-xl font-semibold pb-12 text-[#F5F6FA]">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center items-center">
                {skillSet.items.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#F5F6FA] rounded-lg text-sm">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;