// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import Politica from './pages/Politica';

export default function App() {
  return (
    <Router>
      <div className="bg-light text-dark min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/politica" element={<Politica />} />
        </Routes>
      </div>
    </Router>
  );
}