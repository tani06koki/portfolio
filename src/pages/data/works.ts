export interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  filePath: string;
  link: string;
  type: string[];
  topic: string;
  skillset: string[];
  methods: string[];
  packages: string[] 
}

export const works: Work[] = [
  {
    id: 1,
    title: "The Impact of COVID-19 on Petroleum Consumption by the Industrial Sector in the US",
    description: "Description of project 1",
    imageUrl: "/project/01/img/01",
    filePath: "/project/01/doc/01.html",
    link: "https://github.com/tani06koki/petroleum_consumption_US",
    type: ["Research"],
    topic: "Timeseries",
    skillset: ["R", "Quarto"],
    methods: ["ARIMA", "ETS", "Seasonal Naive"],
    packages:["fpp2", "tidyverse", "forecast"],
  },
  {
    id: 2,
    title: "Amazon consumer Behaviour",
    description: "K-means Cluster Analysis - Presentation Slides",
    imageUrl: "/project/02/img/02.png",
    filePath: "/project/02/doc/quarto.html",
    link: "https://rpubs.com/tkok0012/1243573",
    type: ["Research", "Visualisation"],
    topic: "Customer Segment",
    skillset: ["R", "Quarto"],
    methods: ["K-means Cluster Analysis"],
    packages:["fpp2"],
  },
  {
    id: 3,
    title: "Technical Analysis of Small-Agressive Stock prices",
    description: "I did this code for the reflective essay for an investing unit in my university. The refrective essay can be seen in the folder link below",
    imageUrl: "/project/03/img/03.png",
    filePath: "/project/03/doc/r.html",
    link: "https://github.com/tani06koki/TechnicalAnalysis_Practice.git",
    type: ["Practice"],
    topic: "Finance",
    skillset: ["R", "Python"],
    methods: ["Sharpe Ratio", "MACD & Singal Line", "RSI"],
    packages:["ggplot2"],
  },
  {
    id: 4,
    title: "Risk Analysis of an equally weighted portfolio by the three methods of VaR",
    description: "A practice to calculate VaR by three methods, Historical, parametric, and Monte Carlo",
    imageUrl: "/project/04/img/04.png",
    filePath: "/project/04/doc/04.html",
    link: "https://github.com/tani06koki/RiskAnalysis_Practice",
    type: ["Practice"],
    topic: "Finance",
    skillset: ["Python"],
    methods: ["Monte Carlo", "Parametric Method", "Historical Method"],
    packages:["numpy", "pandas", "datetime","yfinance", "matplotlib","scipy"],
  },
  {
    id: 5,
    title: "Exploring Brand Perception and Repeat Purchase Behavior Through Unsupervised Learning",
    description: "Unsupervised Learning - Cluster Analysis and Principal Component Analysis",
    imageUrl: "/project/05/img/05",
    filePath: "/project/05/doc/Brand_Perception_Analysis.html",
    link: "https://rpubs.com/tkok0012/1243558",
    type: ["Research"],
    topic: "Branding",
    skillset: ["R"],
    methods: ["Cluster Analysis", "PCA", "Regression"],
    packages:["tidyverse", "tidymodels", "dpylr", "ggplot", "cluster", "dendextend", "psych", "gapminder"],
  },
  {
    id: 6,
    title: "Impact on wheat and flour price in Bangladesh by Russia-Ukrain War",
    description: "This project is under maintenance.",
    imageUrl: "/project/06/img/06",
    filePath: "",
    link: "https://example.com",
    type: ["Research"],
    topic: "Marketing",
    skillset: ["R"],
    methods: ["ARIMA", "ETS", "Bagging ETS", "Piece-wise Linear Regression"],
    packages:["fpp2"],
  },
  {
    id: 7,
    title: "Portfolio Optimisation by Excel",
    description: "Market Efficient Frontier and Security Market Line",
    imageUrl: "/project/07/img/07.png",
    link: "https://1drv.ms/f/s!AlCi1rOCvNANh4tiRBmmmS57kcXANg?e=KHRwBS",
    filePath: "/project/07/doc/07.pdf",
    type: ["Practice"],
    topic: "Finance",
    skillset: ["Excel", "VBA", "Solver"],
    methods: ["Market Efficient Frontier", "Security Market Line"],
    packages:["fpp2"],
  },
  //{
    //id: 8,
    //title: "The influence on Consumer Price Index by the several increases of consumption tax in Japan",
    //description: "Description of project 3",
    //imageUrl: "/api/placeholder/300/200",
    //filePath: "",
    //link: "https://example.com",
    //type: ["Research"],
    //topic: "Economics",
    //skillset: ["R"],
    //methods: ["ARIMA", "ETS", "Bagging ETS", "Piece-wise Linear Regression"],
    //packages:["fpp2"],
  //},
  {
    id: 9,
    title: "Evaluating the Impact of Agricultural Sector Developments on Poverty Reduction in developing countries in Asia",
    description: "",
    imageUrl: "/project/09/img/09",
    filePath: "/project/09/doc/script.html",
    link: "https://github.com/tani06koki/AppliedAnalytics_SDGs.git",
    type: ["Practice"],
    topic: "SDGs",
    skillset: ["R"],
    methods: ["OLS Regression", "Regularized Regression", "Random Forest"],
    packages:["fpp2"],
  },
  {
    id: 10,
    title: "Koki's Portfolio",
    description: "This portfolio website",
    imageUrl: "/project/10/img/10.png",
    filePath: "",
    link: "https://github.com/tani06koki/portfolio",
    type: ["Development"],
    topic: "Website Development",
    skillset: ["React", "Vercel"],
    methods: ["TailwindCSS", "lucide-react"],
    packages:["fpp2"],
  },
  //{
    //id: 11,
    //title: "Scrape Yahoo Finance Screeners by BeautifulSoup",
    //description: "a practice to scrape tickers from Yahoo Finance Screeners by BeautifulSoup Module",
    //imageUrl: "/project/11/img/11.png",
    //filePath: "/project/11/doc/11.html",
    //link: "https://github.com/tani06koki/scrapeYfinance",
    //type: ["Practice"],
    //topic: "Web Scraping",
    //skillset: ["Python"],
    //methods: [],
    //packages:["BeautifulSoup"],
  //},
  // Add more works here
];

export {}; // これを末尾に追加
