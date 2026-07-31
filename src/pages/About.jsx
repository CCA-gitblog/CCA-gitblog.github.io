import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGitMerge, FiAward, FiUsers } from 'react-icons/fi';

// CCA 핵심 미션 데이터
const missions = [
  {
    id: "01",
    title: "교두보",
    subtitle: "Bridgehead",
    description: "타 학교 사이버보안 동아리원들과의 경계를 허뭅니다. 새로운 인사이트를 나누고 시너지를 창출할 수 있는 설레는 네트워킹 기회를 지속적으로 제공합니다.",
    tags: ["Networking", "Insight", "Synergy"],
    icon: FiGitMerge
  },
  {
    id: "02",
    title: "등용문",
    subtitle: "Gateway",
    description: "BoB(차세대 보안리더 양성 프로그램), TeamH4C 협업, 그리고 기업 연계 과제 등 실무 중심의 특별한 경험을 통해 압도적인 개인 성장의 발판을 마련합니다.",
    tags: ["BoB", "TeamH4C", "Real-world Project"],
    icon: FiAward
  },
  {
    id: "03",
    title: "인력풀",
    subtitle: "Talent Pool",
    description: "전국 단위의 방대한 우수 인재 네트워크를 활용하여 대규모 스터디, 심화 프로젝트, CTF 대회 출전을 위한 최적의 팀빌딩(구인) 환경을 지원합니다.",
    tags: ["Study", "Project", "CTF Team"],
    icon: FiUsers
  }
];

export default function About() {
  const [activeIdx, setActiveIdx] = useState(0);

  // 현재 활성화된 미션의 아이콘 컴포넌트 추출
  const ActiveIcon = missions[activeIdx].icon;

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-32 pb-32 overflow-hidden bg-cca-bgLight dark:bg-cca-bgDark transition-colors duration-500">
      
      {/* 최상단 배경 은은한 글로우 효과 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-cca-primary/5 dark:bg-cca-neon/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 1. 에디토리얼 스타일의 선언문(Manifesto) 섹션 */}
      <section className="relative z-10 w-full max-w-6xl px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start"
        >
          {/* 좌측 강렬한 타이포그래피 */}
          <div className="lg:w-2/5">
            <div className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-cca-borderDark bg-white/50 dark:bg-cca-surfaceDark/50 w-fit backdrop-blur-md text-xs font-mono tracking-widest text-cca-primary dark:text-cca-neon shadow-sm uppercase">
              Established 2022
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
              We <br />
              Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cca-primary to-emerald-500 dark:from-cca-neon dark:to-emerald-400">
                Safety.
              </span>
            </h1>
          </div>

          {/* 우측 세련된 본문 텍스트 */}
          <div className="lg:w-3/5 flex flex-col gap-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed tracking-tight lg:pt-16">
            <p>
              <strong className="text-slate-900 dark:text-white font-bold">CCA(Cybersecurity Clubs Association)</strong>는 현재 전국 54개의 정보보안 동아리 및 여러 협력 단체와 힘을 합쳐 만든 국내 최대 규모의 정보보호 동아리 연합입니다.
            </p>
            <p>
              우리는 전국에 흩어져 있는 많은 정보보안 동아리들에게 다양한 교육, 프로젝트, 그리고 네트워킹을 통해 더욱 풍부한 대학생활과 압도적인 개인 성장 기회를 제공합니다.
            </p>
            <p>
              이를 통해 동아리 임원진들이 안고 있는 가장 큰 고민 중 하나인 <span className="text-cca-primary dark:text-cca-neon font-bold">동아리 활동 기획의 부담을 완화</span>하고, 모두가 상생하는 건강한 사이버 생태계를 구축하는 것을 목적으로 합니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. 하이엔드 인터랙티브 미션 쇼케이스 (와우 포인트) */}
      <section className="relative z-10 w-full max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-12 text-center md:text-left">
            3 Core Missions.
          </h2>

          {/* 하드웨어 베젤을 연상케 하는 아우터 박스 */}
          <div className="relative w-full rounded-[32px] border border-slate-200 dark:border-cca-borderDark bg-slate-100 dark:bg-cca-bg p-2 md:p-3 shadow-2xl shadow-cca-primary/5 dark:shadow-none">
            
            {/* 이너 스크린 영역 */}
            <div className="relative rounded-[24px] overflow-hidden bg-white dark:bg-[#0A0E0B] flex flex-col lg:flex-row min-h-[550px]">
              
              {/* 테크니컬한 백그라운드 격자(Grid) 무늬 */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none z-0"></div>

              {/* --- 좌측 탭 메뉴 --- */}
              <div className="w-full lg:w-1/3 flex flex-row lg:flex-col border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-cca-borderDark z-10 bg-white/50 dark:bg-black/20 backdrop-blur-md overflow-x-auto lg:overflow-visible scrollbar-hide">
                {missions.map((mission, idx) => (
                  <div
                    key={mission.id}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)} // 모바일 터치 대응
                    className="relative flex-1 lg:flex-none p-6 md:p-10 cursor-pointer group flex flex-col justify-center min-w-[140px]"
                  >
                    {/* 활성화 인디케이터 (프레이머 모션 매직) */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] lg:h-auto lg:top-0 lg:bottom-0 lg:w-[3px] lg:right-auto bg-transparent">
                      {activeIdx === idx && (
                        <motion.div
                          layoutId="missionIndicator"
                          className="w-full h-full bg-cca-primary dark:bg-cca-neon"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                    
                    <div className={`text-sm font-mono mb-2 transition-colors duration-300 ${activeIdx === idx ? 'text-cca-primary dark:text-cca-neon font-bold' : 'text-slate-400 dark:text-slate-500'}`}>
                      MISSION {mission.id}
                    </div>
                    <h3 className={`text-xl md:text-3xl font-black tracking-tight transition-colors duration-300 ${activeIdx === idx ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400'}`}>
                      {mission.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* --- 우측 디스플레이 뷰포트 --- */}
              <div className="w-full lg:w-2/3 relative min-h-[400px] lg:min-h-0 overflow-hidden z-10">
                
                {/* 다크모드 전용 브라운관 스캔라인 효과 */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 dark:opacity-100 z-50"></div>

                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 p-8 md:p-14 flex flex-col justify-center"
                  >
                    {/* 거대한 배경 숫자 워터마크 */}
                    <div className="absolute right-4 bottom-4 md:right-10 md:bottom-10 text-[120px] md:text-[240px] font-black text-slate-900/[0.03] dark:text-white/[0.02] font-mono leading-none pointer-events-none select-none">
                      {missions[activeIdx].id}
                    </div>

                    {/* 미션 아이콘 */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-8 shadow-sm relative z-10">
                      <ActiveIcon className="text-cca-primary dark:text-cca-neon" size={32} />
                    </div>

                    {/* 미션 타이틀 & 서브타이틀 */}
                    <h4 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight flex flex-col md:flex-row md:items-end gap-2 md:gap-4 relative z-10">
                      {missions[activeIdx].title}
                      <span className="text-lg md:text-xl font-bold text-cca-primary dark:text-cca-neon font-mono uppercase tracking-widest pb-1">
                        {missions[activeIdx].subtitle}
                      </span>
                    </h4>

                    {/* 미션 상세 설명 */}
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl mt-6 relative z-10">
                      {missions[activeIdx].description}
                    </p>

                    {/* 테크 배지(태그) */}
                    <div className="flex flex-wrap gap-3 mt-10 relative z-10">
                      {missions[activeIdx].tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-full text-xs font-bold font-mono bg-white dark:bg-black/50 border border-slate-200 dark:border-cca-borderDark text-slate-600 dark:text-slate-300 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
            </div>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
}