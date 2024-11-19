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
    imageUrl: "/image/project_img/01",
    filePath: "",
    link: "https://rpubs.com/tkok0012/1243256",
    type: ["Research"],
    topic: "Timeseries",
    skillset: ["R", "Quarto"],
    methods: ["ARIMA", "ETS", "Seasonal Naive"],
    packages:["fpp2"],
  },
  {
    id: 2,
    title: "Amazon consumer Behaviour",
    description: "K-means Cluster Analysis - Presentation Slides",
    imageUrl: "/image/project_img/02.png",
    filePath: "",
    link: "https://rpubs.com/tkok0012/1243573",
    type: ["Research", "Visualisation"],
    topic: "Customer Segment",
    skillset: ["Graphic Design", "Data Visualisation", "Quarto"],
    methods: ["k-means", "Cluster Analysis"],
    packages:["fpp2"],
  },
  {
    id: 3,
    title: "Technical Analysis of Small-Agressive Stock prices",
    description: "Description of project 3",
    imageUrl: "/image/project_img/03.png",
    filePath: "",
    link: "https://example.com",
    type: ["Research"],
    topic: "Finance",
    skillset: ["R", "Python"],
    methods: ["Sharpe Ratio", "MACD & Singal Line", "RSI"],
    packages:["fpp2"],
  },
  {
    id: 4,
    title: "Risk Analysis of an equally weighted portfolio by the three methods of VaR",
    description: "A practice to calculate VaR by three methods, Historical, parametric, and Monte Carlo",
    imageUrl: "/image/project_img/04.png",
    filePath: "",
    link: "https://example.com",
    type: ["Research"],
    topic: "Finance",
    skillset: ["Python"],
    methods: ["Monte Carlo", "Parametric Method", "Historical Method"],
    packages:["fpp2"],
  },
  {
    id: 5,
    title: "Exploring Brand Perception and Repeat Purchase Behavior Through Unsupervised Learning",
    description: "Unsupervised Learning - Cluster Analysis and Principal Component Analysis",
    imageUrl: "/image/project_img/05",
    filePath: "",
    link: "https://rpubs.com/tkok0012/1243558",
    type: ["Research"],
    topic: "Branding",
    skillset: ["R"],
    methods: ["Cluster Analysis", "PCA", "Regression"],
    packages:["fpp2"],
  },
  {
    id: 6,
    title: "Impact on wheat and flour price in Bangladesh by Russia-Ukrain War",
    description: "Description of project 3",
    imageUrl: "/image/project_img/06",
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
    imageUrl: "/image/project_img/07.png",
    link: "https://example.com",
    filePath: "",
    type: ["Research"],
    topic: "Finance",
    skillset: ["Excel", "VBA", "Solver"],
    methods: ["Market Efficient Frontier", "Security Market Line"],
    packages:["fpp2"],
  },
  {
    id: 8,
    title: "The influence on Consumer Price Index by the several increases of consumption tax in Japan",
    description: "Description of project 3",
    imageUrl: "/api/placeholder/300/200",
    filePath: "",
    link: "https://example.com",
    type: ["Research"],
    topic: "Economics",
    skillset: ["R"],
    methods: ["ARIMA", "ETS", "Bagging ETS", "Piece-wise Linear Regression"],
    packages:["fpp2"],
  },
  {
    id: 9,
    title: "Evaluating the Impact of Agricultural Sector Developments on Poverty Reduction in developing countries in Asia",
    description: "Description of project 3",
    imageUrl: "/image/project_img/09",
    filePath: "",
    link: "https://example.com",
    type: ["Research"],
    topic: "Marketing",
    skillset: ["R"],
    methods: ["OLS Regression", "Regularized Regression", "Random Forest"],
    packages:["fpp2"],
  },
  {
    id: 10,
    title: "Koki's Portfolio",
    description: "This portfolio website",
    imageUrl: "/image/project_img/10.png",
    filePath: "",
    link: "https://github.com/tani06koki/portfolio",
    type: ["App/Website"],
    topic: "Marketing",
    skillset: ["React", "Vercel"],
    methods: [],
    packages:["fpp2"],
  },
  // Add more works here
];

export {}; // これを末尾に追加
