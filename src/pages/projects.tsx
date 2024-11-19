import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, House } from 'lucide-react';
import { works, Work } from './data/works';

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const work = works.find((w: Work) => w.id === Number(id));
  const [isOpen, setIsOpen] = useState(true); // 情報コンポーネントの開閉状態
  const navigate = useNavigate();

  if (!work) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex">
      {/* 左側情報コンポーネント */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'w-[25%]' : 'w-[5%]'
        } bg-[#2E3A59] shadow-md p-4 flex flex-col justify-between`}
      >
        {/* Header: House Icon */}
        {isOpen && (
          <div className="flex items-center mb-4">
            <House
              onClick={() => navigate('/')}
              className="text-white cursor-pointer hover:scale-110 hover:text-[#FF6B6B] transition-transform"
              size={24}
            />
            <span
              onClick={() => navigate('/')}
              className="ml-2 text-white cursor-pointer hover:text-[#FF6B6B]"
            >
              Back to Portfolio
            </span>
          </div>
        )}

        {/* Content */}
        {isOpen && (
          <div>
            <h1 className="text-white text-xl font-bold mb-4">{work.title}</h1>
            <p className="text-gray-300 mb-4">{work.description}</p>
            <div className="text-gray-300 mb-4">
              <strong>Topic:</strong>
              <div className="text-white">
               {work.topic}
              </div>
            </div>
            <div className="mb-4">
              <div className="text-gray-300">
              <strong>Skills:</strong>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {work.skillset.map((skillset) => (
                  <span
                    key={skillset}
                    className="bg-red-200 px-2.5 py-1 rounded-full text-sm font-small"
                  >
                    {skillset}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <div className="text-gray-300">
              <strong>Methods:</strong>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {work.methods.map((methods) => (
                  <span
                    key={methods}
                    className="bg-blue-200 px-2.5 py-1 rounded-full text-sm font-small"
                  >
                    {methods}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <div className="text-gray-300">
              <strong>Packages/Modules:</strong>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {work.packages.map((packages) => (
                  <span
                    key={packages}
                    className="bg-green-200 px-2.5 py-1 rounded-full text-sm font-small"
                  >
                    {packages}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mt-2">
                <a 
                  href={work.link}
                  download="Resume_KokiTaniguchi.pdf"
                  className="text-[#F5F6FA] inline-flex items-center px-6 py-3 border border-[#F5F6FA]/20 rounded-lg hover:bg-[#F5F6FA] hover:text-black transition-colors"
                >
                  Folder 
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Footer: Chevron Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="self-end bg-blue-600 text-white rounded-full p-2 hover:scale-110 transition-transform"
        >
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>

      {/* 右側空白エリア */}
      <div className="w-[70%] flex justify-center items-center">
        <div className="text-gray-400">Content goes here...</div>
      </div>
    </div>
  );
};

export default WorkDetail;
