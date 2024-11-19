import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { works, Work } from './data/works'; // データをインポート

const Works: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // フィルタリングされたデータ
  const filteredWorks = selectedType
    ? works.filter((work: Work) => work.type.includes(selectedType))
    : works;

  return (
    <section id="Works" className="bg-[#F5F6FA] text-black pb-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto pt-24 pb-24"
      >
        <h1 className="text-center text-5xl font-bold pb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text w-full">
          Portfolio
        </h1>

        {/* タイプフィルター */}
        <div className="flex w-full max-w-[80%] gap-4 pb-28 px-4 justify-center items-center mx-auto">
          {["App/Website", "Research", "Visualisation"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(selectedType === type ? null : type)}
              className={`px-4 py-2 rounded-full ${
                selectedType === type ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              } transition-colors text-sm sm:text-base`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* 作品の一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work: Work, index: number) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={work.id}
              className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden 
                hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4">{work.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <strong>Type:</strong>
                  {work.type.map((type) => (
                    <span key={type} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                      {type}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <strong>Topic:</strong> {work.topic}
                </div>

                <div className="mb-4">
                  <strong>Skills:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {work.skillset.map((skillset) => (
                      <span key={skillset} className="bg-red-100 px-2.5 py-1 rounded-full text-sm font-small">
                        {skillset}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <strong>Methods:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {work.methods.map((methods) => (
                      <span key={methods} className="bg-blue-100 px-2.5 py-1 rounded-full text-sm font-small">
                        {methods}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 動的リンク */}
                <Link
                  to={`/work/${work.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors font-medium"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
