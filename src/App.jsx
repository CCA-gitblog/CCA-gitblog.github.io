import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import About from './pages/About';

// 아직 만들지 않은 나머지 페이지들
const Activities = () => <div className="p-20 text-center text-2xl font-bold text-slate-800 dark:text-white pt-40">Activities 페이지 제작 중...</div>;

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cca-bgLight dark:bg-cca-bgDark transition-colors duration-500 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}