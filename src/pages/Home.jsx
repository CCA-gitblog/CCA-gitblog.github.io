import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHexagon, FiTerminal, FiShield } from 'react-icons/fi';

// --- [고급 애니메이션] 마우스 트래킹 스포트라이트 카드 ---
function FeatureCard({ title, description, icon: Icon }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02, translateY: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col text-left p-8 rounded-2xl bg-cca-surfaceLight dark:bg-cca-surfaceDark border border-cca-borderLight dark:border-cca-borderDark overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-500"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 hidden dark:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 229, 122, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-cca-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:hidden"></div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#111111] border border-slate-200 dark:border-cca-borderDark flex items-center justify-center mb-6 group-hover:border-cca-primary/30 dark:group-hover:border-cca-neon/50 group-hover:bg-white dark:group-hover:bg-black transition-all duration-300 shadow-sm">
          <Icon className="text-slate-600 dark:text-slate-400 group-hover:text-cca-primary dark:group-hover:text-cca-neon transition-colors duration-300" size={22} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{description}</p>
      </div>
    </motion.div>
  );
}

// --- [신규 추가] 제네시스 마그마 스타일의 시네마틱 텍스트 스크롤 컴포넌트 ---
function ScrollRevealText({ text, highlight }) {
  return (
    <div className="overflow-hidden py-1">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white"
      >
        {highlight ? (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cca-primary to-emerald-500 dark:from-cca-neon dark:to-emerald-400">
            {text}
          </span>
        ) : (
          text
        )}
      </motion.div>
    </div>
  );
}

// --- 메인 홈 페이지 ---
export default function Home() {
  const blurReveal = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-cca-bgLight dark:bg-cca-bgDark transition-colors duration-500">
      
      {/* 3D 둥둥 떠다니는 배경 글로우 오브젝트 */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cca-primary/10 dark:bg-cca-primary/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 dark:bg-cca-neon/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* 1. 메인 히어로 섹션 (화면 겹침 방지를 위한 Flex 레이아웃 적용) */}
      <section className="relative z-10 w-full min-h-screen max-w-6xl px-6 flex flex-col justify-between items-center text-center pt-32 pb-10">
        
        {/* 상단 여백용 빈 블록 */}
        <div className="flex-1"></div>

        <motion.div initial="hidden" animate="visible" variants={stagger} className="w-full flex flex-col items-center">
          
          <motion.div variants={blurReveal} className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-cca-borderDark bg-white/50 dark:bg-cca-surfaceDark/50 backdrop-blur-md text-xs font-mono tracking-widest text-cca-primary dark:text-cca-neon shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cca-primary dark:bg-cca-neon animate-pulse"></span>
            NATIONAL CYBER SECURITY UNION
          </motion.div>
          
          <motion.h1 variants={blurReveal} className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
            미래 보안의 기준, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cca-primary to-emerald-500 dark:from-white dark:to-slate-500">
              우리가 설계합니다.
            </span>
          </motion.h1>
          
          <motion.p variants={blurReveal} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl font-medium leading-relaxed tracking-tight">
            전국 53개 대학 정보보안 동아리와 함께 압도적인 속도와 신뢰성으로 <br className="hidden md:block" />
            대한민국 사이버 생태계의 새로운 해결책을 증명합니다.
          </motion.p>
          
          <motion.div variants={blurReveal} className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link to="/clubs" className="w-full sm:w-auto group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cca-primary to-emerald-500 dark:from-cca-neon dark:to-emerald-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <button className="relative w-full px-8 py-4 bg-cca-primary dark:bg-white text-white dark:text-black rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-cca-primary/20 dark:shadow-none">
                동아리 둘러보기
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 group-hover:translate-x-1 transition-transform"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-white dark:bg-transparent text-slate-700 dark:text-white border border-slate-200 dark:border-cca-borderDark rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-cca-surfaceDark transition-all active:scale-[0.98]">
                연합 활동 내역
              </button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* 스크롤 인디케이터 (겹치지 않게 하단으로 자연스럽게 밀어냄) */}
        <div className="flex-1 flex flex-col justify-end w-full mt-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Scroll to explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. 제네시스 마그마 스타일 시네마틱 텍스트 스크롤 섹션 */}
      <section className="relative z-10 w-full min-h-[70vh] max-w-6xl px-6 flex flex-col justify-center py-32 border-y border-cca-borderLight/50 dark:border-cca-borderDark/50 my-20">
        <div className="flex flex-col gap-4">
          <ScrollRevealText text="53개의 대학," highlight={false} />
          <ScrollRevealText text="수천 명의 화이트해커." highlight={false} />
          <ScrollRevealText text="우리가 만드는" highlight={false} />
          <ScrollRevealText text="절대적 안전의 세계." highlight={true} />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed"
        >
          단순한 커뮤니티를 넘어, 대한민국을 대표하는 보안 인프라로 자리 잡았습니다. 
          실전 기반의 정보 공유와 끊임없는 기술 연구를 통해 가장 견고한 방어선을 구축합니다.
        </motion.div>
      </section>

      {/* 3. 인터랙티브 마우스 스포트라이트 카드 섹션 */}
      <section className="relative z-10 w-full max-w-6xl px-6 pb-40">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1 }}>
            <FeatureCard 
              title="전국 최대 규모 인프라" 
              description="전국 53개 대학의 정보보안 동아리가 소속되어 활발한 인프라와 네트워킹을 공유합니다." 
              icon={FiHexagon} 
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}>
            <FeatureCard 
              title="뉴비들을 위한 내부세미나 개최" 
              description="연합 내부 세미나를 통해 뉴비들의 보안 실력을 키울 수 있는 교류의 장을 마련합니다." 
              icon={FiTerminal} 
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.3 }}>
            <FeatureCard 
              title="올바른 보안 윤리" 
              description="화이트해커로서의 윤리 의식을 함양하고 건강하고 안전한 사이버 생태계를 구축합니다." 
              icon={FiShield} 
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}