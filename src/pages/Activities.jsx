import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiLink, FiTerminal, FiCrosshair, FiCpu } from 'react-icons/fi';

export default function Activities() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 스크롤에 따른 과감한 패럴랙스(시차) 및 회전 효과 변수
  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-32 overflow-hidden bg-cca-bgLight dark:bg-cca-bgDark transition-colors duration-500">
      
      {/* 1. 페이지 헤더 섹션 (과감한 등장) */}
      <section className="relative w-full max-w-6xl mx-auto px-6 mb-40 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-cca-primary to-emerald-400 dark:from-cca-neon dark:to-emerald-300 shadow-[0_0_80px_rgba(0,229,122,0.4)] flex items-center justify-center"
        >
          <FiCrosshair size={40} className="text-white dark:text-black" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight"
        >
          Beyond <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cca-primary to-emerald-500 dark:from-cca-neon dark:to-emerald-400">
            Boundaries.
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg text-slate-500 dark:text-slate-400 font-medium"
        >
          경계를 넘어 최상위 보안 네트워크와 연결됩니다.
        </motion.p>
      </section>

      {/* 2. 파트너십 섹션 (3D 스크롤 애니메이션 적용) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 mb-40 perspective-[2000px]">
        <motion.div 
          style={{ y: titleY, opacity, scale }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Strategic Partners
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            CCA는 대한민국 사이버보안의 최전선에 있는 핵심 단체들과 긴밀하게 협업하여 <br className="hidden md:block" />
            연합원들에게 독보적인 실무 경험과 네트워크를 제공합니다.
          </p>
        </motion.div>

        {/* 파트너 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          
          {/* BoB 총동문회 */}
          <motion.div 
            initial={{ opacity: 0, rotateX: 45, y: 100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative p-8 rounded-[32px] bg-white dark:bg-cca-surfaceDark border border-slate-200 dark:border-cca-borderDark shadow-xl dark:shadow-none hover:-translate-y-4 transition-transform duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">BoB 총동문회</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              차세대 보안리더 양성 프로그램(Best of the Best) 총동문회와의 교류를 통해 최상위 보안 인재들과의 네트워킹 및 멘토링 기회를 창출합니다.
            </p>
          </motion.div>

          {/* TeamH4C */}
          <motion.div 
            initial={{ opacity: 0, rotateX: 45, y: 100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="group relative p-8 rounded-[32px] bg-white dark:bg-cca-surfaceDark border border-slate-200 dark:border-cca-borderDark shadow-xl dark:shadow-none hover:-translate-y-4 transition-transform duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cca-primary/5 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">TeamH4C</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              국내 최고 수준의 화이트해커 팀 TeamH4C와 연계하여 최신 취약점 연구, 공동 세미나, 그리고 심도 있는 기술 교류를 진행합니다.
            </p>
          </motion.div>

          {/* Business H4C */}
          <motion.div 
            initial={{ opacity: 0, rotateX: 45, y: 100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="group relative p-8 rounded-[32px] bg-white dark:bg-cca-surfaceDark border border-slate-200 dark:border-cca-borderDark shadow-xl dark:shadow-none hover:-translate-y-4 transition-transform duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Business H4C</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              정보보안 전문 기업 Business H4C와의 파트너십으로 기업 연계 프로젝트, 실무 기반의 과제 수행 등 프로페셔널로 나아가는 등용문을 엽니다.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. 추천 해킹 플랫폼 (와우 포인트: 글래스모피즘 스포트라이트 카드) */}
      <section className="relative w-full max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative overflow-hidden rounded-[40px] bg-slate-900 dark:bg-black border border-slate-800 p-10 md:p-16 text-center flex flex-col items-center group shadow-2xl"
        >
          {/* 극적인 배경 광원 효과 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-cca-primary/20 via-emerald-500/20 to-blue-500/20 blur-[80px] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="relative z-10 w-20 h-20 mb-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-cca-neon">
            <FiTerminal size={40} />
          </div>

          <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            성장을 위한 완벽한 그라운드
          </h2>
          
          <p className="relative z-10 text-lg md:text-xl text-slate-400 font-medium mb-12 max-w-2xl leading-relaxed">
            해킹 입문부터 실전 응용까지, CCA가 공식적으로 추천하는 최고의 해킹 학습 플랫폼 <strong className="text-white">P4C (빡공팟)</strong>에서 실력을 증명하세요.
          </p>

          {/* 플랫폼 이동 버튼 (빛 번짐 애니메이션) */}
          <a 
            href="https://h4c.biz/p4c/web" 
            target="_blank" 
            rel="noreferrer"
            className="relative z-10 group/btn"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cca-neon to-emerald-400 rounded-full blur opacity-40 group-hover/btn:opacity-80 transition duration-500"></div>
            <button className="relative px-10 py-5 bg-white text-black rounded-full font-black text-lg flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
              <FiCpu size={24} />
              빡공팟 시작하기
              <FiLink className="ml-2 group-hover/btn:rotate-45 transition-transform" />
            </button>
          </a>
        </motion.div>
      </section>

    </div>
  );
}