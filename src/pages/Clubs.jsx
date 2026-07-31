import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiChevronDown, FiExternalLink, FiMapPin, FiClock } from 'react-icons/fi';
import clubsData from '../data/clubs.json';

export default function Clubs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('전체');
  const [expandedId, setExpandedId] = useState(null);

  // 요청하신 지역 순서대로 배열을 고정 (UX 향상)
  const categories = ['전체', '서울', '경인', '충청', '영남', '호남'];

  // 검색 및 지역 필터링
  const filteredClubs = useMemo(() => {
    return clubsData.filter(club => {
      const matchCategory = activeCategory === '전체' || club.category === activeCategory;
      const matchSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          club.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-cca-bgLight dark:bg-cca-bgDark transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* --- 좌측: 고정형 컨트롤 패널 --- */}
        <aside className="w-full md:w-1/4 md:sticky md:top-28 h-fit flex flex-col gap-8">
          
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
              Directory.
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              전국 53개 연합 동아리 네트워크
            </p>
          </div>

          {/* 검색창 */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="text-slate-400 group-focus-within:text-cca-primary dark:group-focus-within:text-cca-neon transition-colors" size={18} />
            </div>
            <input
              type="text"
              placeholder="동아리 이름 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-cca-surfaceDark/40 border border-slate-200 dark:border-cca-borderDark rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-cca-primary dark:focus:border-cca-neon focus:ring-1 focus:ring-cca-primary dark:focus:ring-cca-neon transition-all shadow-sm"
            />
          </div>

          {/* 지역 카테고리 필터 */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setExpandedId(null);
                }}
                className={`flex-shrink-0 text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-cca-primary/10 dark:bg-cca-neon/10 text-cca-primary dark:text-cca-neon' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-cca-surfaceDark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        {/* --- 우측: 지역별 아코디언 리스트 섹션 --- */}
        <main className="w-full md:w-3/4">
          
          <div className="flex justify-between items-end mb-6 pb-4 border-b border-slate-200 dark:border-cca-borderDark">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Showing <span className="text-slate-900 dark:text-white">{filteredClubs.length}</span> clubs in {activeCategory}
            </span>
          </div>

          <motion.div layout className="flex flex-col">
            <AnimatePresence mode="popLayout">
              {filteredClubs.length > 0 ? (
                filteredClubs.map((club) => {
                  const isExpanded = expandedId === club.id;

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      key={club.id}
                      className="border-b border-slate-200/60 dark:border-cca-borderDark/60 group"
                    >
                      <div 
                        onClick={() => setExpandedId(isExpanded ? null : club.id)}
                        className="flex flex-col sm:flex-row sm:items-center justify-between py-6 cursor-pointer bg-transparent hover:bg-slate-50/50 dark:hover:bg-cca-surfaceDark/30 px-2 sm:px-4 rounded-xl transition-colors duration-300"
                      >
                        <div className="flex items-center gap-6">
                          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white min-w-[120px]">
                            {club.name}
                          </h2>
                          <div className="hidden sm:flex gap-2">
                            {club.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs font-mono text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/10">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-6 mt-4 sm:mt-0">
                          {/* 우측에 지역명 표시 */}
                          <span className="text-sm font-medium text-cca-primary dark:text-cca-neon">
                            {club.category}
                          </span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-[#111111] text-slate-500 dark:text-slate-400 group-hover:bg-cca-primary/10 dark:group-hover:bg-cca-neon/10 group-hover:text-cca-primary dark:group-hover:text-cca-neon transition-colors"
                          >
                            <FiChevronDown size={16} />
                          </motion.div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 mx-2 sm:mx-4 mb-6 mt-2 bg-slate-50 dark:bg-[#0a0f0d] rounded-2xl border border-slate-200 dark:border-cca-borderDark/80 relative">
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cca-primary dark:bg-cca-neon rounded-l-2xl"></div>
                              
                              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-8">
                                {club.description}
                              </p>
                              
                              <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 pt-6">
                                <div className="flex items-center gap-2">
                                  <FiMapPin className="text-cca-primary dark:text-cca-neon" />
                                  <span>{club.room || "위치 정보 미기재"}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <FiClock className="text-cca-primary dark:text-cca-neon" />
                                  <span>{club.time || "모임 시간 미기재"}</span>
                                </div>
                                
                                {club.link !== "#" && (
                                  <a 
                                    href={club.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="ml-auto flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-cca-primary dark:hover:text-cca-neon transition-colors"
                                  >
                                    공식 페이지 이동 <FiExternalLink />
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-32 text-center"
                >
                  <div className="w-16 h-16 mb-4 rounded-full bg-slate-100 dark:bg-cca-surfaceDark flex items-center justify-center">
                    <FiSearch size={24} className="text-slate-400" />
                  </div>
                  <p className="text-lg font-bold text-slate-900 dark:text-white mb-2">해당 지역에 검색된 동아리가 없습니다.</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">다른 키워드나 지역을 선택해 보세요.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </main>

      </div>
    </div>
  );
}