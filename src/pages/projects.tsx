import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, House, Menu } from 'lucide-react';
import { works, Work } from './data/works';

// PdfViewer, HtmlViewer, TableauViewer
const PdfViewer = ({ filePath }: { filePath: string }) => (
  <iframe
    src={filePath}
    width="100%"
    height="100%"
    style={{ border: "none" }}
    title="PDF Viewer"
  ></iframe>
);

const HtmlViewer = ({ filePath }: { filePath: string }) => (
  <iframe
    src={filePath}
    width="100%"
    height="100%"
    style={{ border: "none" }}
    title="HTML Viewer"
  ></iframe>
);

const TableauViewer = ({ filePath }: { filePath: string }) => (
  <iframe
    src={filePath}
    width="100%"
    height="100%"
    style={{ border: "none" }}
    title="Tableau Viewer"
  ></iframe>
);

// FileRenderer
const FileRenderer = ({ filePath }: { filePath: string }) => {
  const fileType = filePath.split('.').pop(); // ファイル拡張子を取得
  switch (fileType) {
    case "pdf":
      return <PdfViewer filePath={filePath} />;
    case "html":
      return <HtmlViewer filePath={filePath} />;
    case "tableau":
      return <TableauViewer filePath={filePath} />;
    default:
      return <div className="flex h-full items-center justify-center text-center text-gray-500">
          <div>
            <h1>No file found to render.</h1>
            <p>Click the 'Menu' button in the top-left corner for more information.</p>
          </div>
        </div>
  }
};

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const work = works.find((w: Work) => w.id === Number(id));
  const [isOpen, setIsOpen] = useState(false); // 情報コンポーネントの開閉状態
  const navigate = useNavigate();

  if (!work) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex">
      {/* 上部固定バー */}
      <div className="bg-[#2E3A59] text-white fixed top-0 left-0 w-full h-10 flex items-center justify-between px-4 z-50 shadow-md">
        {/* ハンバーガーメニューアイコン */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-[#FF6B6B] focus:outline-none"
        >
          <Menu size={28} />
        </button>
        <h1 className="text-lg font-bold">Portfolio</h1>
        <button
          onClick={() => navigate('/')}
          className="text-white hover:text-[#FF6B6B] focus:outline-none"
        >
          <House size={24} />
        </button>
      </div>
      {/* 左側情報コンポーネント */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'w-full md:w-[30%] pt-20 p-5' : 'w-0 md:w-[0%] p-0'
        } ${isOpen ? 'fixed md:static' : 'md:static'} 
        bg-[#2E3A59] shadow-md z-0 h-full min-h-screen`}
      >
      
        {isOpen ? (
          <>

            {/* Content */}
            <div>
              <h1 className="text-white text-xl font-bold mb-4">{work.title}</h1>
              <p className="text-gray-300 mb-4">{work.description}</p>
              <div className="text-gray-300 mb-4">
                <strong>Topic:</strong>
                <div className="text-white">{work.topic}</div>
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
              <div className="flex flex-wrap gap-2 mt-8 justify-center items-center">
                <a 
                  href={work.link}
                  className="relative inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg 
                  bg-white text-gray-800 shadow-md
                  hover:bg-gray-100 hover:border-gray-400 
                  hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                  <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-30 bg-[#FFFFFF]/10 transition-opacity"></span>
                  <span className="relative flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                      />
                    </svg>
                    Folder
                  </span>
                </a>
              </div>
            </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center w-[0%]">
          </div>
        )}
      </div>
      {/* 右側エリア */}
      <div
        className={`transition-all duration-100 ${
          isOpen ? 'w-full md:w-full' : 'w-full'
        } mt-10`}
      >
        <FileRenderer filePath={work.filePath} />
      </div>
    </div>
      
  );
};

export default WorkDetail;
