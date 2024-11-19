import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Career from './pages/Career';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Works from './pages/Works';
import WorkDetail from './pages/projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:id" element={<WorkDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  // `Navbar` と `Footer` を表示しないパスを定義
  const hideNavbarRoutes = ['/work/:id'];
  const hideFooterRoutes = ['/work/:id'];

  const hideNavbar = hideNavbarRoutes.some((route) =>
    location.pathname.startsWith(route.replace(':id', ''))
  );
  const hideFooter = hideFooterRoutes.some((route) =>
    location.pathname.startsWith(route.replace(':id', ''))
  );

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavbar && <Navbar />} {/* 特定のルートでは非表示 */}
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />} {/* 特定のルートでは非表示 */}
    </div>
  );
};

const HomePage: React.FC = () => (
  <>
    <About />
    <Career />
    <Skill />
    <Contact />
    <Works />
  </>
);

export default App;
