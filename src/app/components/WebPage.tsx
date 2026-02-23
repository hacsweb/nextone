import { motion } from "motion/react";
import {
  Check,
  XCircle,
  CheckCircle,
  Home,
  Phone,
  Info,
  CreditCard,
  ShieldCheck,
  MessageCircle,
  Camera,
  ShieldAlert,
  Gauge,
  RefreshCw,
  Crown,
  Star,
  Zap,
} from "lucide-react";
import { Link } from "react-router";
import { LineIcon } from "./ContactFooter";
import { SubNav } from "./SubNav";
import { usePageMeta } from "./usePageMeta";
import { CrossLinks } from "./CrossLinks";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  heroChild,
  staggerContainer,
  cardHover,
  viewportOnce,
} from "./motion-variants";
import webLogoImg from "../../assets/aa4ff548a28cf1a412b0f3a176c55738c3818c04.png";

/* ── WEB Red / Crimson Palette ── */
const W = {
  main: "#c0392b",
  light: "#e74c3c",
  dark: "#7b241c",
  rgb: "192, 57, 43",
};

/* ── Dark glass card helpers ── */
const glassCard: React.CSSProperties = {
  backgroundColor: "rgba(200, 182, 146, 0.03)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "rgba(200, 182, 146, 0.08)",
};
const glassCardAccent = (
  color: string,
  alpha = 0.06
): React.CSSProperties => ({
  backgroundColor: `rgba(${color}, ${alpha})`,
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: `rgba(${color}, 0.15)`,
});
const darkSectionBg = "#0C0C10";
const darkBorder: React.CSSProperties = {
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: "rgba(200,182,146,0.08)",
};

/* ═══════════════════════════════════════════
   WEB Hero — Crimson gradient + polygon mesh
   ═══════════════════════════════════════════ */
function WebHero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden text-white"
      style={{
        paddingTop: "100px",
        paddingBottom: "40px",
        background:
          "linear-gradient(135deg, #8b2020 0%, #c0392b 40%, #a93226 70%, #7b241c 100%)",
      }}
    >
      {/* Ensō (円相) SVG watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
          style={{ opacity: 0.06 }}
        >
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="white"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray="900 100"
            transform="rotate(-90 200 200)"
          />
        </svg>
      </div>

      {/* Polygon mesh SVG overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.04, mixBlendMode: "overlay" }}
      >
        <svg
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <line key={`h-${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} stroke="white" strokeWidth="0.5" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" stroke="white" strokeWidth="0.5" />
          ))}
          {[
            [0, 0, 200, 200], [400, 0, 200, 200], [200, 200, 400, 400],
            [600, 0, 400, 200], [400, 200, 600, 400], [800, 0, 600, 200],
            [600, 200, 800, 400], [1000, 0, 800, 200], [800, 200, 1000, 400],
            [1200, 0, 1000, 200], [1000, 200, 1200, 400],
            [0, 400, 200, 600], [400, 400, 200, 600], [200, 600, 400, 800],
            [600, 400, 400, 600], [800, 400, 600, 600],
            [1000, 400, 800, 600], [1200, 400, 1000, 600],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={`d-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="0.3" />
          ))}
          {[
            [0,0],[200,0],[400,0],[600,0],[800,0],[1000,0],[1200,0],
            [0,200],[200,200],[400,200],[600,200],[800,200],[1000,200],[1200,200],
            [0,400],[200,400],[400,400],[600,400],[800,400],[1000,400],[1200,400],
            [0,600],[200,600],[400,600],[600,600],[800,600],[1000,600],[1200,600],
            [0,800],[200,800],[400,800],[600,800],[800,800],[1000,800],[1200,800],
          ].map(([x, y], i) => (
            <circle key={`dot-${i}`} cx={x} cy={y} r="2" fill="white" opacity="0.5" />
          ))}
        </svg>
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 0%, rgba(60,10,10,0.5) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(12,12,16,0.7) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-20 container mx-auto px-5 sm:px-6 text-center">
        <motion.span
          className="font-bold tracking-[0.2em] text-[14px] font-english mb-4 block"
          style={{ color: W.light }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
        >
          AI-DRIVEN WEB PRODUCTION
        </motion.span>
        <motion.h1
          className="font-mincho font-bold leading-tight mb-6 text-white"
          style={{
            fontSize: "clamp(1.875rem, 0.1rem + 7.6vw, 3.75rem)",
            textShadow:
              "0 0 40px rgba(0,0,0,0.35), 0 0 80px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.3)",
          }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <span className="hidden sm:inline">
            難しい更新作業は、LINEで
            <br />
            <span style={{ color: "#ffd5d0" }}>「これ直して」</span>
            と言うだけ。
          </span>
          <span className="sm:hidden">
            難しい更新作業は、
            <br />
            LINEで
            <span style={{ color: "#ffd5d0" }}>「これ直して」</span>
            <br />
            と言うだけ。
          </span>
        </motion.h1>
        <motion.p
          className="text-white max-w-2xl mx-auto mb-10 text-[15px] md:text-[16px]"
          style={{ fontWeight: 500, lineHeight: 1.8 }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          管理画面のパスワード、忘れていませんか？
          <br className="hidden md:inline" />
          AI技術と手書きコードで実現する、「更新がラク」で「セキュリティに強い」次世代Webサイト。
          <br className="hidden md:inline" />
          御社の広報部を、NEXT-ONEが丸ごと代行します。
        </motion.p>
        <motion.button
          onClick={() => scrollToSection("production")}
          className="inline-block px-8 py-3 rounded-sm font-bold cursor-pointer"
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderTopColor: "rgba(255,255,255,0.5)",
            borderRightColor: "rgba(255,255,255,0.5)",
            borderBottomColor: "rgba(255,255,255,0.5)",
            borderLeftColor: "rgba(255,255,255,0.5)",
            color: "#fff",
            boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,1)",
            color: "rgba(192,57,43,1)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          制作プランを見る
        </motion.button>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Feature — Why No WordPress (Side-by-side)
   ═══════════════════════════════════════════ */
function FeatureSection() {
  const wpProblems = [
    {
      icon: ShieldAlert,
      label: "セキュリティ",
      text: (
        <>
          プラグイン脆弱性を突かれ、
          <span className="font-bold" style={{ color: "#ef4444" }}>
            乗っ取り被害
          </span>
          が多発。
        </>
      ),
    },
    {
      icon: Gauge,
      label: "表示速度",
      text: (
        <>
          不要なプログラムが多く、スマホでの表示が
          <span className="font-bold" style={{ color: "#ef4444" }}>
            遅い・重い
          </span>
          。
        </>
      ),
    },
    {
      icon: RefreshCw,
      label: "更新作業",
      text: (
        <>
          管理画面が複雑で、結局
          <span className="font-bold" style={{ color: "#ef4444" }}>
            放置
          </span>
          される。
        </>
      ),
    },
  ];

  const nextoneAdvantages = [
    {
      label: "鉄壁の守り",
      text: (
        <>
          WordPress不使用。プログラムが動かない「静的サイト」なので
          <span
            className="font-bold px-1 rounded-sm"
            style={{ backgroundColor: `rgba(${W.rgb}, 0.15)` }}
          >
            侵入は物理的に不可能
          </span>
          。
        </>
      ),
    },
    {
      label: "爆速表示",
      text: (
        <>
          余計な処理ゼロ。スマホでも
          <span
            className="font-bold px-1 rounded-sm"
            style={{ backgroundColor: `rgba(${W.rgb}, 0.15)` }}
          >
            一瞬で表示
          </span>
          され、顧客を逃しません。
        </>
      ),
    },
    {
      label: "AI更新代行",
      text: (
        <>
          管理画面は不要。LINEで指示するだけで、
          <span
            className="font-bold px-1 rounded-sm"
            style={{ backgroundColor: `rgba(${W.rgb}, 0.15)` }}
          >
            AIとプロが即修正
          </span>
          します。
        </>
      ),
    },
  ];

  return (
    <section
      id="feature"
      className="py-20 md:py-40 relative"
      style={{ backgroundColor: darkSectionBg }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='rgba(192,57,43,0.07)' stroke-width='0.8'/%3E%3Cpath d='M30 0L30 60M0 30L60 30' fill='none' stroke='rgba(192,57,43,0.04)' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }} />
      </div>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span
            className="font-bold tracking-[0.2em] text-[14px] font-english mb-2 block"
            style={{ color: W.main }}
          >
            WHY NO WORDPRESS?
          </span>
          <h2
            className="font-mincho font-bold mb-4"
            style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}
          >
            「とりあえずWordPress」で、
            <br className="sm:hidden" />
            本当に大丈夫ですか？
          </h2>
          <p
            className="text-[15px] md:text-[16px] max-w-4xl mx-auto"
            style={{ color: "#ffffff", lineHeight: 1.8, fontWeight: 500 }}
          >
            世界中でハッキングの標的になりやすいシステムを使うのは、会社の信用に関わります。
            <br className="hidden md:inline" />
            私たちは「静的サイト」という最も安全な方法で構築します。
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Left: WordPress problems */}
          <motion.div
            className="p-6 md:p-10 rounded-sm"
            style={{
              backgroundColor: "rgba(200,182,146,0.03)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: "rgba(200,182,146,0.08)",
              borderRightColor: "rgba(200,182,146,0.08)",
              borderBottomColor: "rgba(200,182,146,0.08)",
              borderLeftColor: "rgba(200,182,146,0.08)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
            variants={fadeInLeft}
          >
            <h3
              className="text-[18px] font-bold mb-8 flex items-center gap-2"
              style={{ color: "#ffffff" }}
            >
              <XCircle
                className="w-5 h-5"
                style={{ color: "#c0392b" }}
              />
              一般的な制作会社
            </h3>
            <ul className="space-y-6">
              {wpProblems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <item.icon
                      className="w-4 h-4"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                  <div>
                    <span
                      className="font-bold text-[13px] block mb-1"
                      style={{ color: "#ffffff" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-[14px]"
                      style={{ color: "#ffffff" }}
                    >
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: NEXT-ONE advantages */}
          <motion.div
            className="p-6 md:p-10 rounded-sm relative"
            style={{
              backgroundColor: "rgba(192,57,43,0.06)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderWidth: "2px",
              borderStyle: "solid",
              borderTopColor: W.main,
              borderRightColor: W.main,
              borderBottomColor: W.main,
              borderLeftColor: W.main,
              boxShadow: `0 8px 32px rgba(${W.rgb}, 0.15)`,
            }}
            variants={fadeInRight}
          >
            <div
              className="absolute -top-3 right-6 px-3 py-1 text-[11px] font-bold tracking-wider shadow-md"
              style={{ backgroundColor: W.main, color: "#fff" }}
            >
              推奨工法
            </div>
            <h3
              className="text-[18px] font-bold mb-8 flex items-center gap-2"
              style={{ color: W.light }}
            >
              <CheckCircle
                className="w-5 h-5"
                style={{ color: W.main }}
              />
              NEXT-ONEの次世代工法
            </h3>
            <ul className="space-y-6">
              {nextoneAdvantages.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `rgba(${W.rgb}, 0.12)` }}
                  >
                    <Check
                      className="w-4 h-4"
                      style={{ color: W.main }}
                    />
                  </div>
                  <div>
                    <span
                      className="font-bold text-[13px] block mb-1"
                      style={{ color: W.light }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-[14px]"
                      style={{ color: "#ffffff" }}
                    >
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Production (制作プラン — 松竹梅 3プラン)
   ═══════════════════════════════════════════ */
const GOLD = "#c5a059";
const GOLD_RGB = "197, 160, 89";

function ProductionSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="production"
      className="py-20 md:py-40 relative"
      style={{ backgroundColor: darkSectionBg, ...darkBorder }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='rgba(192,57,43,0.07)' stroke-width='0.8'/%3E%3Cpath d='M30 0L30 60M0 30L60 30' fill='none' stroke='rgba(192,57,43,0.04)' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span
            className="font-bold tracking-[0.2em] text-[14px] font-english mb-2 block"
            style={{ color: W.main }}
          >
            PRODUCTION PLAN
          </span>
          <h2
            className="font-mincho font-bold mb-4"
            style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}
          >
            制作プラン
          </h2>
          <p
            className="text-[15px] md:text-[16px] max-w-3xl mx-auto"
            style={{ color: "#ffffff", lineHeight: 1.8, fontWeight: 500 }}
          >
            写真撮影・文章作成・デザイン、すべてお任せください。
            <br className="hidden md:inline" />
            <span className="font-bold" style={{ color: GOLD }}>
              「社長は何もしなくていい」
            </span>
            ——それが、NEXT-ONEの全部入りパッケージです。
          </p>
        </motion.div>

        {/* ── Concept Banner ── */}
        <motion.div
          className="max-w-3xl mx-auto mb-12 md:mb-20 p-5 md:p-6 rounded-sm text-center"
          style={{
            backgroundColor: `rgba(${GOLD_RGB}, 0.06)`,
            borderWidth: "1px",
            borderStyle: "solid",
            borderTopColor: `rgba(${GOLD_RGB}, 0.25)`,
            borderRightColor: `rgba(${GOLD_RGB}, 0.25)`,
            borderBottomColor: `rgba(${GOLD_RGB}, 0.25)`,
            borderLeftColor: `rgba(${GOLD_RGB}, 0.25)`,
          }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p
            className="text-[14px] md:text-[15px]"
            style={{ color: "#ffffff", lineHeight: 1.8, fontWeight: 500 }}
          >
            「5万円で作れる業者もあるけど…？」——その業者さんは、
            <span className="font-bold" style={{ color: W.light }}>
              写真撮影や文章作成
            </span>
            までやってくれますか？
            <br className="hidden md:inline" />
            NEXT-ONEは
            <span className="font-bold" style={{ color: GOLD }}>
              撮影からライティング・デザインまで全部引き受けます。
            </span>
            <br className="hidden md:inline" />
            <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
              社長の時間を守る——それがこの価格の理由です。
            </span>
          </p>
        </motion.div>

        {/* ── 3 Plan Cards ── */}
        <motion.div
          className="grid md:grid-cols-3 gap-5 md:gap-6 items-start max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* ── ライトプラン（梅）── */}
          <motion.div
            className="rounded-sm flex flex-col overflow-hidden md:mt-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: "rgba(255, 255, 255, 0.30)",
              borderRightColor: "rgba(255, 255, 255, 0.30)",
              borderBottomColor: "rgba(255, 255, 255, 0.30)",
              borderLeftColor: "rgba(255, 255, 255, 0.30)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
            variants={fadeInUp}
            whileHover={cardHover}
          >
            {/* Badge */}
            <div
              className="py-1.5 text-center text-[11px] font-bold tracking-wider font-english"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.7)",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "rgba(255,255,255,0.1)",
              }}
            >
              <Zap className="w-3.5 h-3.5 inline mr-1" />
              ENTRY
            </div>
            {/* Header */}
            <div className="p-5 md:p-6 text-center">
              <h3
                className="text-[18px] md:text-[20px] font-bold font-mincho"
                style={{ color: "#ffffff" }}
              >
                ライトプラン
              </h3>
              <p
                className="text-[13px] mt-1"
                style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}
              >
                まずは名刺代わりに。スピード重視
              </p>
            </div>
            {/* Price */}
            <div className="text-center pb-5">
              <span
                className="font-english font-bold text-[36px] md:text-[40px]"
                style={{ color: "#ffffff" }}
              >
                250,000
              </span>
              <span className="text-[14px] ml-1" style={{ color: "#ffffff", fontWeight: 500 }}>
                円〜（税別）
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                税込 275,000円〜
              </p>
            </div>
            {/* Features */}
            <div
              className="px-5 md:px-6 pb-6 flex flex-col flex-grow"
              style={{
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: "rgba(255,255,255,0.08)",
              }}
            >
              <ul
                className="space-y-3 text-[14px] md:text-[15px] my-5 flex-grow"
                style={{ color: "#ffffff", fontWeight: 500, lineHeight: 1.7 }}
              >
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  ランディングページ（縦長1P完結）
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  お問い合わせフォーム設置
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  スマホ完全対応（レスポンシブ）
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  セールスライティング構成案
                </li>
              </ul>
              <p
                className="text-[13px] mb-5 px-3 py-2 rounded-sm text-center"
                style={{
                  color: "#ffffff",
                  fontWeight: 500,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  lineHeight: 1.6,
                }}
              >
                最短2週間で公開。
                <br className="hidden md:inline" />
                ビジネスのスタートダッシュに。
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full py-3 text-center text-[14px] font-bold transition-colors cursor-pointer rounded-sm"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${W.rgb}, 0.6)`;
                  e.currentTarget.style.color = W.light;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                相談する
              </button>
            </div>
          </motion.div>

          {/* ── スタンダードプラン（竹）── RECOMMENDED ── */}
          <motion.div
            className="rounded-sm flex flex-col overflow-hidden relative"
            style={{
              backgroundColor: `rgba(${GOLD_RGB}, 0.06)`,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderWidth: "2px",
              borderStyle: "solid",
              borderTopColor: GOLD,
              borderRightColor: GOLD,
              borderBottomColor: GOLD,
              borderLeftColor: GOLD,
              boxShadow: `0 8px 40px rgba(0,0,0,0.3), 0 0 50px rgba(${GOLD_RGB}, 0.10)`,
            }}
            variants={fadeInUp}
            whileHover={{
              y: -8,
              boxShadow: `0 24px 70px rgba(${GOLD_RGB}, 0.18), 0 0 60px rgba(${GOLD_RGB}, 0.12)`,
              transition: { duration: 0.3 },
            }}
          >
            {/* Dual badges */}
            <div
              className="flex items-center justify-center gap-2 py-2 text-[12px] font-bold tracking-wider"
              style={{
                backgroundColor: GOLD,
                color: "#1a1a1a",
              }}
            >
              <Crown className="w-4 h-4" />
              <span>人気No.1</span>
              <span style={{ opacity: 0.4 }}>|</span>
              <Camera className="w-3.5 h-3.5" />
              <span>撮影込み</span>
            </div>
            {/* Header */}
            <div
              className="p-5 md:p-6 text-center"
              style={{
                backgroundColor: "rgba(12,12,16,0.5)",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: `rgba(${GOLD_RGB}, 0.15)`,
              }}
            >
              <h3
                className="text-[20px] md:text-[22px] font-bold font-mincho"
                style={{ color: "#ffffff" }}
              >
                スタンダードプラン
              </h3>
              <p
                className="text-[13px] mt-1"
                style={{ color: GOLD, fontWeight: 500 }}
              >
                迷ったらこれ。撮影付きの丸投げパック
              </p>
            </div>
            {/* Price */}
            <div className="text-center py-5">
              <span
                className="font-english font-bold text-[40px] md:text-[48px]"
                style={{ color: "#ffffff" }}
              >
                450,000
              </span>
              <span className="text-[14px] ml-1" style={{ color: "#ffffff", fontWeight: 500 }}>
                円〜（税別）
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                税込 495,000円〜
              </p>
            </div>

            {/* Photo shooting highlight */}
            <div
              className="mx-5 md:mx-6 mb-4 px-4 py-3 rounded-sm text-center"
              style={{
                backgroundColor: `rgba(${GOLD_RGB}, 0.10)`,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: `rgba(${GOLD_RGB}, 0.25)`,
              }}
            >
              <p className="text-[13px] font-bold" style={{ color: "#ffffff" }}>
                <Camera className="w-4 h-4 inline mr-1.5" style={{ color: GOLD }} />
                プロカメラマン出張撮影（半日 / 50カット）
                <span className="font-bold" style={{ color: GOLD }}>
                  {" "}込み
                </span>
              </p>
            </div>

            {/* Features */}
            <div className="px-5 md:px-6 pb-6 flex flex-col flex-grow">
              <ul
                className="space-y-3.5 text-[14px] md:text-[15px] mb-5 flex-grow"
                style={{ color: "#ffffff", fontWeight: 500, lineHeight: 1.7 }}
              >
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  <span>
                    TOPページ ＋ 下層
                    <span className="font-bold" style={{ color: "#ffffff" }}>5ページ</span>
                    （会社概要・事業紹介・採用など）
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  スマホ完全対応（レスポンシブ）
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  お知らせ更新機能（CMS）
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  お問い合わせフォーム実装
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  <span>
                    <span className="font-bold" style={{ color: "#ffffff" }}>脱WordPress</span>
                    ——鉄壁のセキュリティ
                  </span>
                </li>
              </ul>
              <p
                className="text-[13px] mb-5 px-3 py-2.5 rounded-sm text-center"
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  backgroundColor: `rgba(${GOLD_RGB}, 0.06)`,
                  lineHeight: 1.6,
                  borderWidth: "1px",
                  borderStyle: "dashed",
                  borderColor: `rgba(${GOLD_RGB}, 0.2)`,
                }}
              >
                「写真がないから作れない」とは言わせません。
                <br className="hidden md:inline" />
                プロが撮影まで全部やります。
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full py-4 text-center text-[16px] font-bold hover:opacity-90 transition-colors cursor-pointer relative overflow-hidden group rounded-sm"
                style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
              >
                <span className="relative z-10">このプランで相談する</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-500" />
              </button>
            </div>
          </motion.div>

          {/* ── プレミアムプラン（松）── */}
          <motion.div
            className="rounded-sm flex flex-col overflow-hidden md:mt-6"
            style={{
              backgroundColor: `rgba(${W.rgb}, 0.05)`,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: `rgba(${W.rgb}, 0.35)`,
              borderRightColor: `rgba(${W.rgb}, 0.35)`,
              borderBottomColor: `rgba(${W.rgb}, 0.35)`,
              borderLeftColor: `rgba(${W.rgb}, 0.35)`,
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
            variants={fadeInUp}
            whileHover={cardHover}
          >
            {/* Badge */}
            <div
              className="py-1.5 text-center text-[11px] font-bold tracking-wider font-english"
              style={{
                backgroundColor: `rgba(${W.rgb}, 0.12)`,
                color: W.light,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: `rgba(${W.rgb}, 0.15)`,
              }}
            >
              <Star className="w-3.5 h-3.5 inline mr-1" />
              BRANDING
            </div>
            {/* Header */}
            <div className="p-5 md:p-6 text-center">
              <h3
                className="text-[18px] md:text-[20px] font-bold font-mincho"
                style={{ color: "#ffffff" }}
              >
                プレミアムプラン
              </h3>
              <p
                className="text-[13px] mt-1"
                style={{ color: W.light, fontWeight: 500 }}
              >
                地域No.1を目指す、Web上の自社ビル
              </p>
            </div>
            {/* Price */}
            <div className="text-center pb-5">
              <span
                className="font-english font-bold text-[36px] md:text-[40px]"
                style={{ color: "#ffffff" }}
              >
                800,000
              </span>
              <span className="text-[14px] ml-1" style={{ color: "#ffffff", fontWeight: 500 }}>
                円〜（税別）
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                税込 880,000円〜
              </p>
            </div>
            {/* Features */}
            <div
              className="px-5 md:px-6 pb-6 flex flex-col flex-grow"
              style={{
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: `rgba(${W.rgb}, 0.1)`,
              }}
            >
              <ul
                className="space-y-3 text-[14px] md:text-[15px] my-5 flex-grow"
                style={{ color: "#ffffff", fontWeight: 500, lineHeight: 1.7 }}
              >
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  <span>
                    ページ数
                    <span className="font-bold" style={{ color: "#ffffff" }}>無制限</span>
                    （10P〜）
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  インタビュー・ライティング取材
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  プロ撮影 ＋ 動画撮影
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  予約システム / EC機能
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  完全オーダーメイドデザイン
                </li>
              </ul>
              <p
                className="text-[13px] mb-5 px-3 py-2 rounded-sm text-center"
                style={{
                  color: "#ffffff",
                  fontWeight: 500,
                  backgroundColor: `rgba(${W.rgb}, 0.06)`,
                  lineHeight: 1.6,
                }}
              >
                御社のブランドを再定義する、
                <br className="hidden md:inline" />
                完全オーダーメイド。
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full py-3 text-center text-[14px] font-bold transition-colors cursor-pointer rounded-sm"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: `rgba(${W.rgb}, 0.4)`,
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = W.light;
                  e.currentTarget.style.backgroundColor = `rgba(${W.rgb}, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${W.rgb}, 0.4)`;
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                相談する
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* ── その他制作メニュー ── */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p
            className="text-[13px] font-bold mb-3"
            style={{ color: "#ffffff" }}
          >
            その他制作メニュー
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[13px]">
            {[
              { label: "名刺・ロゴ制作", price: "¥50,000~", taxIn: "（税込 ¥55,000~）" },
              { label: "チラシデザイン", price: "¥30,000~", taxIn: "（税込 ¥33,000~）" },
              { label: "動画制作", price: "要見積もり", taxIn: "" },
            ].map((item) => (
              <span
                key={item.label}
                className="px-4 py-2 rounded-sm text-center"
                style={{
                  ...glassCard,
                  color: "#ffffff",
                  fontWeight: 500,
                }}
              >
                {item.label}: {item.price}
                {item.taxIn && (
                  <span className="block text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {item.taxIn}
                  </span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── 全プラン共通メッセージ ── */}
        <motion.div
          className="max-w-3xl mx-auto mt-10 md:mt-14 p-5 md:p-6 rounded-sm text-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderTopColor: "rgba(255,255,255,0.08)",
            borderRightColor: "rgba(255,255,255,0.08)",
            borderBottomColor: "rgba(255,255,255,0.08)",
            borderLeftColor: "rgba(255,255,255,0.08)",
          }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p
            className="text-[13px] md:text-[14px]"
            style={{ color: "#ffffff", lineHeight: 1.8, fontWeight: 500 }}
          >
            <Info className="w-4 h-4 inline mr-1.5" style={{ color: GOLD }} />
            全プラン共通：WordPress不使用の
            <span className="font-bold" style={{ color: "#ffffff" }}>セキュリティ最強工法</span>
            ＋ LINEで「ここ直して」と送るだけの
            <span className="font-bold" style={{ color: "#ffffff" }}>AI更新代行</span>
            付き。
            <br className="hidden md:inline" />
            面倒な管理画面は一切不要です。
          </p>
        </motion.div>

        {/* ── TECH × WEB 同時契約特典 ── */}
        <motion.div
          className="max-w-3xl mx-auto mt-8 md:mt-10 p-5 md:p-6 rounded-lg text-center"
          style={{
            backgroundColor: `rgba(${GOLD_RGB}, 0.10)`,
            borderWidth: "2px",
            borderStyle: "solid",
            borderTopColor: GOLD,
            borderRightColor: GOLD,
            borderBottomColor: GOLD,
            borderLeftColor: GOLD,
          }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h3
            className="text-[18px] md:text-[20px] font-bold font-mincho mb-2"
            style={{ color: GOLD }}
          >
            <Crown className="w-5 h-5 inline mr-1.5 -mt-0.5" />
            TECH × WEB 同時契約特典
          </h3>
          <p
            className="text-[14px] md:text-[15px] mb-4"
            style={{ color: "#ffffff", lineHeight: 1.8, fontWeight: 500 }}
          >
            IT保守サポート（TECH Premium）をご契約のお客様は、
            <br className="hidden md:inline" />
            Web制作費用が{" "}
            <span
              className="font-bold text-[18px] md:text-[20px]"
              style={{ color: GOLD }}
            >
              特別優待価格
            </span>{" "}
            になります。
          </p>
          <p
            className="text-[12px] md:text-[13px]"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}
          >
            ※ PCもHPも、窓口を一つにまとめることで、
            <br className="hidden md:inline" />
            コストカットと業務効率化が同時に実現します。
            <br className="hidden md:inline" />
            詳しくは「番頭」までお問い合わせください。
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Subscription (保守・運用 — 顧問料モデル)
   ═══════════════════════════════════════════ */
function SubscriptionSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="subscription"
      className="py-20 md:py-40 relative"
      style={{ backgroundColor: darkSectionBg, ...darkBorder }}
    >
      <div className="absolute inset-0 bg-asanoha pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span
            className="font-bold tracking-[0.2em] text-[14px] font-english mb-2 block"
            style={{ color: "#C8B692" }}
          >
            SUBSCRIPTION
          </span>
          <h2
            className="font-mincho font-bold mb-4"
            style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}
          >
            保守・運用（ランニング）
          </h2>
          <p
            className="text-[15px] md:text-[16px] max-w-3xl mx-auto"
            style={{ color: "#ffffff", lineHeight: 1.8, fontWeight: 500 }}
          >
            税理士や社労士への顧問料と同じ——
            <br className="hidden md:inline" />
            <span className="font-bold" style={{ color: GOLD }}>
              「何かあった時にすぐ連絡できる安心」
            </span>
            を、月額で。
          </p>
        </motion.div>

        {/* ── Concept Banner ── */}
        <motion.div
          className="max-w-3xl mx-auto mb-12 md:mb-20 p-5 md:p-6 rounded-sm text-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderTopColor: "rgba(255,255,255,0.08)",
            borderRightColor: "rgba(255,255,255,0.08)",
            borderBottomColor: "rgba(255,255,255,0.08)",
            borderLeftColor: "rgba(255,255,255,0.08)",
          }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p
            className="text-[14px] md:text-[15px]"
            style={{ color: "#ffffff", lineHeight: 1.8, fontWeight: 500 }}
          >
            面倒なサーバー管理から、日々の更新・ITトラブル対応まで。
            <br className="hidden md:inline" />
            あなたの会社の
            <span className="font-bold" style={{ color: GOLD }}>
              「番頭（BOSS）」
            </span>
            として、
            <span className="font-bold" style={{ color: "#ffffff" }}>
              LINEひとつで何でも相談できる
            </span>
            体制を整えます。
          </p>
        </motion.div>

        {/* ── 3 Plan Cards ── */}
        <motion.div
          className="grid md:grid-cols-3 gap-5 md:gap-6 items-start max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* ── ライトプラン（守 - Defense）── */}
          <motion.div
            className="rounded-sm flex flex-col overflow-hidden md:mt-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: "rgba(255,255,255,0.25)",
              borderRightColor: "rgba(255,255,255,0.25)",
              borderBottomColor: "rgba(255,255,255,0.25)",
              borderLeftColor: "rgba(255,255,255,0.25)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
            variants={fadeInUp}
            whileHover={cardHover}
          >
            {/* Badge */}
            <div
              className="py-1.5 text-center text-[11px] font-bold tracking-wider font-english"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.7)",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "rgba(255,255,255,0.1)",
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5 inline mr-1" />
              DEFENSE
            </div>
            {/* Header */}
            <div className="p-5 md:p-6 text-center">
              <h3
                className="text-[18px] md:text-[20px] font-bold font-mincho"
                style={{ color: "#ffffff" }}
              >
                ライトプラン
              </h3>
              <p
                className="text-[12px] mt-1 font-english font-bold tracking-wider"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                守
              </p>
              <p
                className="text-[13px] mt-1"
                style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}
              >
                維持・管理だけ安く頼みたい方に
              </p>
            </div>
            {/* Price */}
            <div className="text-center pb-5">
              <span className="text-[14px]" style={{ color: "#ffffff", fontWeight: 500 }}>¥</span>
              <span
                className="font-english font-bold text-[36px] md:text-[40px]"
                style={{ color: "#ffffff" }}
              >
                10,000
              </span>
              <span className="text-[14px] ml-1" style={{ color: "#ffffff", fontWeight: 500 }}>
                /月（税別）
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                税込 ¥11,000/月
              </p>
            </div>
            {/* Features */}
            <div
              className="px-5 md:px-6 pb-6 flex flex-col flex-grow"
              style={{
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: "rgba(255,255,255,0.08)",
              }}
            >
              <ul
                className="space-y-3 text-[14px] md:text-[15px] my-5 flex-grow"
                style={{ color: "#ffffff", fontWeight: 500, lineHeight: 1.7 }}
              >
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  サーバー / ドメイン費用込み
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  セキュリティ対策（SSL / WAF）
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  定期バックアップ
                </li>
              </ul>
              <p
                className="text-[12px] px-3 py-2 rounded-sm text-center mb-5"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 500,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  lineHeight: 1.5,
                }}
              >
                ※ 修正・更新は都度お見積もり
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full py-3 text-center text-[14px] font-bold transition-colors cursor-pointer rounded-sm"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${W.rgb}, 0.6)`;
                  e.currentTarget.style.color = W.light;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                相談する
              </button>
            </div>
          </motion.div>

          {/* ── スタンダード（頼 - Reliable）── RECOMMENDED ── */}
          <motion.div
            className="rounded-sm flex flex-col overflow-hidden relative"
            style={{
              backgroundColor: `rgba(${GOLD_RGB}, 0.06)`,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderWidth: "2px",
              borderStyle: "solid",
              borderTopColor: GOLD,
              borderRightColor: GOLD,
              borderBottomColor: GOLD,
              borderLeftColor: GOLD,
              boxShadow: `0 8px 40px rgba(0,0,0,0.3), 0 0 50px rgba(${GOLD_RGB}, 0.10)`,
            }}
            variants={fadeInUp}
            whileHover={{
              y: -8,
              boxShadow: `0 24px 70px rgba(${GOLD_RGB}, 0.18), 0 0 60px rgba(${GOLD_RGB}, 0.12)`,
              transition: { duration: 0.3 },
            }}
          >
            {/* Dual badges */}
            <div
              className="flex items-center justify-center gap-2 py-2 text-[12px] font-bold tracking-wider"
              style={{
                backgroundColor: GOLD,
                color: "#1a1a1a",
              }}
            >
              <Crown className="w-4 h-4" />
              <span>人気No.1</span>
              <span style={{ opacity: 0.4 }}>|</span>
              <MessageCircle className="w-3.5 h-3.5" />
              <span>番頭サポート付き</span>
            </div>
            {/* Header */}
            <div
              className="p-5 md:p-6 text-center"
              style={{
                backgroundColor: "rgba(12,12,16,0.5)",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: `rgba(${GOLD_RGB}, 0.15)`,
              }}
            >
              <h3
                className="text-[20px] md:text-[22px] font-bold font-mincho"
                style={{ color: "#ffffff" }}
              >
                スタンダード
              </h3>
              <p
                className="text-[12px] mt-1 font-english font-bold tracking-wider"
                style={{ color: `rgba(${GOLD_RGB}, 0.6)` }}
              >
                頼
              </p>
              <p
                className="text-[13px] mt-1"
                style={{ color: GOLD, fontWeight: 500 }}
              >
                LINEで修正依頼し放題の番頭プラン
              </p>
            </div>
            {/* Price */}
            <div className="text-center py-5">
              <span className="text-[14px]" style={{ color: "#ffffff", fontWeight: 500 }}>¥</span>
              <span
                className="font-english font-bold text-[40px] md:text-[48px]"
                style={{ color: "#ffffff" }}
              >
                25,000
              </span>
              <span className="text-[14px] ml-1" style={{ color: "#ffffff", fontWeight: 500 }}>
                /月（税別）
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                税込 ¥27,500/月
              </p>
            </div>

            {/* LINE support highlight */}
            <div
              className="mx-5 md:mx-6 mb-4 px-4 py-3 rounded-sm text-center"
              style={{
                backgroundColor: `rgba(${GOLD_RGB}, 0.10)`,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: `rgba(${GOLD_RGB}, 0.25)`,
              }}
            >
              <p className="text-[13px] font-bold" style={{ color: "#ffffff" }}>
                <MessageCircle className="w-4 h-4 inline mr-1.5" style={{ color: GOLD }} />
                <span style={{ color: GOLD }}>LINEで相談OK</span>
                {" "}— ITトラブル・PC操作も対応
              </p>
            </div>

            {/* Features */}
            <div className="px-5 md:px-6 pb-6 flex flex-col flex-grow">
              <ul
                className="space-y-3.5 text-[14px] md:text-[15px] mb-5 flex-grow"
                style={{ color: "#ffffff", fontWeight: 500, lineHeight: 1.7 }}
              >
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  <span>
                    ライトプランの内容
                    <span className="font-bold" style={{ color: "#ffffff" }}>すべて</span>
                    含む
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  <span>
                    画像 / 文字の
                    <span className="font-bold" style={{ color: "#ffffff" }}>修正更新（月3回目安）</span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  <span>
                    <span className="font-bold" style={{ color: GOLD }}>ITトラブル / PC操作のLINE相談</span>
                    <span
                      className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-sm font-bold"
                      style={{
                        backgroundColor: `rgba(${GOLD_RGB}, 0.2)`,
                        color: GOLD,
                      }}
                    >
                      NEW
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  メールアドレス追加・設定代行
                </li>
              </ul>
              <p
                className="text-[13px] mb-5 px-3 py-2.5 rounded-sm text-center"
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  backgroundColor: `rgba(${GOLD_RGB}, 0.06)`,
                  lineHeight: 1.6,
                  borderWidth: "1px",
                  borderStyle: "dashed",
                  borderColor: `rgba(${GOLD_RGB}, 0.2)`,
                }}
              >
                「PCの調子が悪い」もLINEで即解決。
                <br className="hidden md:inline" />
                御社の番頭として、何でもお任せください。
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full py-4 text-center text-[16px] font-bold hover:opacity-90 transition-colors cursor-pointer relative overflow-hidden group rounded-sm"
                style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
              >
                <span className="relative z-10">このプランで相談する</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-500" />
              </button>
            </div>
          </motion.div>

          {/* ── プレミアム（攻 - Aggressive）── */}
          <motion.div
            className="rounded-sm flex flex-col overflow-hidden md:mt-6"
            style={{
              backgroundColor: `rgba(${W.rgb}, 0.05)`,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: `rgba(${W.rgb}, 0.35)`,
              borderRightColor: `rgba(${W.rgb}, 0.35)`,
              borderBottomColor: `rgba(${W.rgb}, 0.35)`,
              borderLeftColor: `rgba(${W.rgb}, 0.35)`,
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
            variants={fadeInUp}
            whileHover={cardHover}
          >
            {/* Badge */}
            <div
              className="py-1.5 text-center text-[11px] font-bold tracking-wider font-english"
              style={{
                backgroundColor: `rgba(${W.rgb}, 0.12)`,
                color: W.light,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: `rgba(${W.rgb}, 0.15)`,
              }}
            >
              <Star className="w-3.5 h-3.5 inline mr-1" />
              AGGRESSIVE
            </div>
            {/* Header */}
            <div className="p-5 md:p-6 text-center">
              <h3
                className="text-[18px] md:text-[20px] font-bold font-mincho"
                style={{ color: "#ffffff" }}
              >
                プレミアム
              </h3>
              <p
                className="text-[12px] mt-1 font-english font-bold tracking-wider"
                style={{ color: `rgba(${W.rgb}, 0.5)` }}
              >
                攻
              </p>
              <p
                className="text-[13px] mt-1"
                style={{ color: W.light, fontWeight: 500 }}
              >
                Webで集客したい・会議したい方に
              </p>
            </div>
            {/* Price */}
            <div className="text-center pb-5">
              <span className="text-[14px]" style={{ color: "#ffffff", fontWeight: 500 }}>¥</span>
              <span
                className="font-english font-bold text-[36px] md:text-[40px]"
                style={{ color: "#ffffff" }}
              >
                50,000
              </span>
              <span className="text-[14px] ml-1" style={{ color: "#ffffff", fontWeight: 500 }}>
                /月（税別）
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                税込 ¥55,000/月
              </p>
            </div>
            {/* Features */}
            <div
              className="px-5 md:px-6 pb-6 flex flex-col flex-grow"
              style={{
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: `rgba(${W.rgb}, 0.1)`,
              }}
            >
              <ul
                className="space-y-3 text-[14px] md:text-[15px] my-5 flex-grow"
                style={{ color: "#ffffff", fontWeight: 500, lineHeight: 1.7 }}
              >
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  <span>
                    スタンダードの内容
                    <span className="font-bold" style={{ color: "#ffffff" }}>すべて</span>
                    含む
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  <span>
                    月1回の
                    <span className="font-bold" style={{ color: "#ffffff" }}>定例ミーティング</span>
                    （Zoom / 訪問）
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  アクセス解析レポート
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: W.light }} />
                  ブログ記事作成アドバイス
                </li>
              </ul>
              <p
                className="text-[13px] mb-5 px-3 py-2 rounded-sm text-center"
                style={{
                  color: "#ffffff",
                  fontWeight: 500,
                  backgroundColor: `rgba(${W.rgb}, 0.06)`,
                  lineHeight: 1.6,
                }}
              >
                毎月の定例会で、Webを「攻めの武器」に。
                <br className="hidden md:inline" />
                集客戦略を一緒に考えます。
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full py-3 text-center text-[14px] font-bold transition-colors cursor-pointer rounded-sm"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: `rgba(${W.rgb}, 0.4)`,
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = W.light;
                  e.currentTarget.style.backgroundColor = `rgba(${W.rgb}, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${W.rgb}, 0.4)`;
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                相談する
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* ── 全プラン共通メッセージ ── */}
        <motion.div
          className="max-w-3xl mx-auto mt-10 md:mt-14 p-5 md:p-6 rounded-sm text-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderTopColor: "rgba(255,255,255,0.08)",
            borderRightColor: "rgba(255,255,255,0.08)",
            borderBottomColor: "rgba(255,255,255,0.08)",
            borderLeftColor: "rgba(255,255,255,0.08)",
          }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p
            className="text-[13px] md:text-[14px]"
            style={{ color: "#ffffff", lineHeight: 1.8, fontWeight: 500 }}
          >
            <Info className="w-4 h-4 inline mr-1.5" style={{ color: GOLD }} />
            全プラン共通：サーバー・ドメイン費用込み。契約の縛りはありません。
            <br className="hidden md:inline" />
            <span style={{ color: "rgba(255,255,255,0.7)" }}>
              税理士への顧問料のように、御社のWeb・ITを守る「安心の経費」としてご活用ください。
            </span>
          </p>
        </motion.div>

        {/* ── TECH × WEB 同時契約特典 ── */}
        <motion.div
          className="max-w-3xl mx-auto mt-8 md:mt-10 p-5 md:p-6 rounded-lg text-center"
          style={{
            backgroundColor: `rgba(${GOLD_RGB}, 0.10)`,
            borderWidth: "2px",
            borderStyle: "solid",
            borderTopColor: GOLD,
            borderRightColor: GOLD,
            borderBottomColor: GOLD,
            borderLeftColor: GOLD,
          }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h3
            className="text-[18px] md:text-[20px] font-bold font-mincho mb-2"
            style={{ color: GOLD }}
          >
            <Crown className="w-5 h-5 inline mr-1.5 -mt-0.5" />
            TECH × WEB 同時契約特典
          </h3>
          <p
            className="text-[14px] md:text-[15px] mb-4"
            style={{ color: "#ffffff", lineHeight: 1.8, fontWeight: 500 }}
          >
            IT保守サポート（TECH Premium）をご契約のお客様は、
            <br className="hidden md:inline" />
            Web保守費用が{" "}
            <span
              className="font-bold text-[18px] md:text-[20px]"
              style={{ color: GOLD }}
            >
              特別優待価格
            </span>{" "}
            になります。
          </p>
          <p
            className="text-[12px] md:text-[13px]"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}
          >
            ※ PCもHPも、窓口を一つにまとめることで、
            <br className="hidden md:inline" />
            コストカットと業務効率化が同時に実現します。
            <br className="hidden md:inline" />
            詳しくは「番頭」までお問い合わせください。
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Web Contact Footer
   ═══════════════════════════════════════════ */
function WebContactFooter() {
  return (
    <footer
      id="contact"
      className="text-white pt-20 md:pt-40 pb-10"
      style={{
        backgroundColor: "#0C0C10",
        borderTopWidth: "4px",
        borderTopStyle: "solid",
        borderTopColor: W.main,
      }}
    >
      <motion.div
        className="max-w-3xl mx-auto px-5 sm:px-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2
          className="font-mincho font-bold mb-6"
          style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}
        >
          Webの悩み、プロが診断します。
        </h2>
        <p
          className="mb-10 text-[15px] md:text-[16px]"
          style={{ color: "#ffffff", lineHeight: 1.8, fontWeight: 500 }}
        >
          「今のHP、スマホで見づらいかも？」「リース契約の更新が近い」
          <br className="hidden md:inline" />
          そんな時は、まず無料診断を。現在のサイトの健康状態をチェックします。
        </p>

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <motion.a
            href="https://lin.ee/ieroOsn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-8 py-4 rounded-full flex items-center justify-center relative overflow-hidden group cursor-pointer transition-all duration-300"
            style={{
              fontWeight: 700,
              backgroundColor: "#06c755",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            <LineIcon className="w-7 h-7 mr-3 relative z-10" />
            <div className="text-left relative z-10">
              <span className="block text-[10px] opacity-90 leading-none mb-1">
                24時間受付 / 法人専用
              </span>
              <span className="text-[18px]">LINEで無料診断・相談</span>
            </div>
          </motion.a>
          <p
            className="text-[12px] mt-2"
            style={{ color: "#ffffff" }}
          >
            制作のご依頼・見積もりはお電話でも:{" "}
            <a
              href="tel:0568706558"
              className="font-bold inline-flex items-center gap-1"
              style={{ color: "#ffffff" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = W.light)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#ffffff")
              }
            >
              <Phone className="w-3 h-3" /> 0568-70-6558
            </a>{" "}
            (平日9:00-18:00)
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-16 pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500">
        <p>&copy; 2026 NEXT-ONE. All Rights Reserved.</p>
        <div className="mt-4 md:mt-0 flex gap-4">
          <Link
            to="/"
            className="text-gray-400 hover:text-white inline-flex items-center gap-1"
          >
            <Home className="w-3 h-3" /> 総合トップへ戻る
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   Main Web Page
   ═══════════════════════════════════════════ */
export function WebPage() {
  usePageMeta({
    title: "WEB | AI駆動Web制作 | NEXT-ONE",
    description:
      "AIを活用した安全なWeb制作。採用サイト・LP・MEO対策まで、LINEひとつで更新依頼が完了。WordPress不要でハッキングリスクゼロ。",
  });

  return (
    <div
      className="font-sans antialiased"
      style={{
        backgroundColor: "#0C0C10",
        color: "#ffffff",
      }}
    >
      <SubNav
        divisionLabel="WEB"
        accentColor={W.main}
        navItems={[
          { label: "脱WPとは", sectionId: "feature", icon: <Info /> },
          { label: "制作費", sectionId: "production", icon: <CreditCard /> },
          { label: "保守", sectionId: "subscription", icon: <ShieldCheck /> },
        ]}
        ctaLabel="Web無料診断"
        ctaSectionId="contact"
        ctaIcon={<MessageCircle />}
      />
      {/* Hero + FeatureSection wrapper with floating logo */}
      <div className="relative overflow-hidden">
        <WebHero />
        <FeatureSection />
        {/* NEXT-ONE WEB logo — centred at the hero / feature boundary */}
        <div
          className="absolute pointer-events-none select-none hidden md:block"
          style={{
            right: "-1%",
            top: "60vh",
            transform: "translateY(-50%)",
            width: "clamp(360px, 32vw, 540px)",
            zIndex: 10,
          }}
        >
          <motion.img
            src={webLogoImg}
            alt=""
            aria-hidden="true"
            className="w-full h-auto"
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 0.12, x: 0, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
          />
        </div>
      </div>
      <ProductionSection />
      <SubscriptionSection />
      <CrossLinks currentPage="web" />
      <WebContactFooter />
    </div>
  );
}