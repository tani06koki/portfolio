import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  type: string[];
  link: string;
  skillset: string[];
  topic: string;
  methods: string[];
}

const Works: React.FC = () => {
  const works: Work[] = [
    {
      id: 1,
      title: "The Impact of COVID-19 on Petroleum Consumption by the Industrial Sector in the US",
      description: "Description of project 1",
      imageUrl: "/image/project_img/ts_petroleum",
      type: ["Research"],
      topic: "Timeseries",
      skillset: ["R", "Quarto"],
      methods: ["ARIMA", "ETS", "Seasonal Naive"],
      link: "https://rpubs.com/tkok0012/1243256",
    },
    {
      id: 2,
      title: "Amazon consumer Behaviour",
      description: "K-means Cluster Analysis - Presentation Slides",
      imageUrl: "/image/project_img/amazon_customer.png",
      type: ["Research", "Visualisation"],
      topic: "Customer Segment",
      skillset: ["Graphic Design", "Data Visualisation", "Quarto"],
      methods: ["k-means", "Cluster Analysis"],
      link: "https://rpubs.com/tkok0012/1243573",
    },
    {
      id: 3,
      title: "Technical Analysis of Small-Agressive Stock prices",
      description: "Description of project 3",
      imageUrl: "/api/placeholder/300/200",
      type: ["Research"],
      topic: "Finance",
      link: "https://example.com",
      skillset: ["R", "Python"],
      methods: ["Sharpe Ratio", "MACD&Singal Line", "RSI"],
    },
    {
      id: 4,
      title: "Risk Analysis by VaR",
      description: "Description of project 3",
      imageUrl: "/api/placeholder/300/200",
      type: ["Research"],
      topic: "Finance",
      link: "https://example.com",
      skillset: ["Python"],
      methods: ["Montecal", "MACD&Singal Line", "RSI"],
    },
    {
      id: 5,
      title: "Exploring Brand Perception and Repeat Purchase Behavior Through Unsupervised Learning",
      description: "Unsupervised Learning - Cluster Analysis and Principal Component Analysis",
      imageUrl: "/image/project_img/brand_perception",
      type: ["Research"],
      topic: "Branding",
      link: "https://rpubs.com/tkok0012/1243558",
      skillset: ["R"],
      methods: ["Cluster Analysis", "PCA", "Regression"],
    },
    {
      id: 6,
      title: "Impact on wheat and flour price in Bangladesh by Russia-Ukrain War",
      description: "Description of project 3",
      imageUrl: "/api/placeholder/300/200",
      type: ["Research"],
      topic: "Marketing",
      link: "https://example.com",
      skillset: ["R"],
      methods: ["ARIMA", "ETS", "Bagging ETS", "Piece-wise Linear Regression"],
    },
    {
      id: 7,
      title: "Portfolio Optimisation by Excel",
      description: "Market Efficient Frontier and Security Market Line",
      imageUrl: "/api/placeholder/300/200",
      type: ["Research"],
      topic: "Finance",
      link: "https://example.com",
      skillset: ["Excel", "VBA"],
      methods: ["Solver"],
    },
    {
      id: 8,
      title: "The influence on Consumer Price Index by the several increases of consumption tax in Japan",
      description: "Description of project 3",
      imageUrl: "/api/placeholder/300/200",
      type: ["Research"],
      topic: "Economics",
      link: "https://example.com",
      skillset: ["R"],
      methods: ["ARIMA", "ETS", "Bagging ETS", "Piece-wise Linear Regression"],
    },
    {
      id: 9,
      title: "Evaluating the Impact of Agricultural Sector Developments on Poverty Reduction in developing countries in Asia",
      description: "Description of project 3",
      imageUrl: "/image/project_img/applied",
      type: ["Research"],
      topic: "Marketing",
      link: "https://example.com",
      skillset: ["R"],
      methods: ["OLS Regression", "Regularized Regression", "Random Forest"],
    },
    {
      id: 10,
      title: "Koki's Portfolio",
      description: "This portfolio website",
      imageUrl: "/image/project_img/KokisPortfolio.png",
      type: ["App/Dashboard"],
      topic: "Marketing",
      link: "https://github.com/tani06koki/portfolio",
      skillset: ["React", "Vercel"],
      methods: [],
    },
    // Add more works here
  ];

  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredWorks = selectedType
    ? works.filter((work) => work.type.includes(selectedType))
    : works;

  return (
    <section id="Works" className="bg-[#F5F6FA] text-black pb-24 px-4">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto pt-24 pb-24"
    >
      <h1 className="text-center text-5xl font-bold pb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text w-full flex justify-center items-center">
        Portfolio
      </h1>

      <div className="flex max-w-[80%] gap-4 pb-28 p-8 justify-center items-center sm:max-w-[80%]">
        {["App/Dashboard", "Research", "Visualisation"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(selectedType === type ? null : type)}
            className={`px-4 py-2 rounded-full ${
              selectedType === type ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            } transition-colors text-sm sm:text-base`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorks.map((work, index) => (
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
                group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 
                text-transparent bg-clip-text">{work.title}</h3>
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

              
              {work.link && (
                <a 
                  href={work.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 
                    transition-colors font-medium"
                >
                  View Project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </section>
  );
};

export default Works;
