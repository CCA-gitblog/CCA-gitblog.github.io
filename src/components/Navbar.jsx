import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';

export default function Navbar() {
  const location = useLocation();
  
  // 테마 상태 관리 (기본값: 시스템)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 테마 순환 로직
  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-cca-bgLight/70 dark:bg-cca-bgDark/70 backdrop-blur-xl border-b border-cca-borderLight dark:border-cca-borderDark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 로고 */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-5 h-5 bg-cca-primary dark:bg-white group-hover:bg-cca-primary dark:group-hover:bg-cca-neon transition-colors rounded-sm"></div>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white transition-colors">CCA</span>
        </Link>

        {/* 메뉴 */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/about" className={`${location.pathname === '/about' ? 'text-cca-primary dark:text-white' : 'text-slate-500 dark:text-slate-400'} hover:text-cca-primary dark:hover:text-white transition-colors`}>
            Story
          </Link>
          <Link to="/clubs" className={`${location.pathname === '/clubs' ? 'text-cca-primary dark:text-white' : 'text-slate-500 dark:text-slate-400'} hover:text-cca-primary dark:hover:text-white transition-colors`}>
            Clubs
          </Link>
          <Link to="/activities" className={`${location.pathname === '/activities' ? 'text-cca-primary dark:text-white' : 'text-slate-500 dark:text-slate-400'} hover:text-cca-primary dark:hover:text-white transition-colors`}>
            Activities
          </Link>
        </div>

        {/* 우측 컨트롤 (테마 버튼 & Contact) */}
        <div className="flex items-center gap-4">
          <button 
            onClick={cycleTheme}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center justify-center"
            title={`Current Theme: ${theme}`}
          >
            {theme === 'light' && <FiSun size={18} />}
            {theme === 'dark' && <FiMoon size={18} />}
            {theme === 'system' && <FiMonitor size={18} />}
          </button>
          
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden sm:block text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 hover:text-cca-primary dark:hover:text-white border border-cca-borderLight dark:border-cca-borderDark px-4 py-2 rounded-full transition-all">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}