import { motion } from "motion/react";
import {
  Check,
  Ban,
  Gift,
  Crown,
  Home,
  Phone,
  Settings,
  FileText,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Wifi,
  MapPin,
  Users,
  ShieldOff,
  Target,
  Cloud,
  Camera,
  Car,
  Heart,
  Mail,
  Sparkles,
  ArrowDown,
  ChevronRight,
  Headset,
  ShieldCheck,
  Zap,
  ArrowRight,
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
import techLogoImg from "../../assets/65d1e9f79388d6e072d3444f7356f01ff674409a.png";

/* ══════════════════════════════════════════════
   Design Tokens — "Digital Fortress" Theme
   ══════════════════════════════════════════════ */
/* Cyan accent — technology, precision */
const CY = {
  main: "#00997A",
  light: "#00d4aa",
  dark: "#006B5A",
  rgb: "0, 153, 122",
};
/* Gold accent — trust, contract */
const AU = {
  main: "#C8B692",
  light: "#E6D8B5",
  dark: "#A89B7A",
  rgb: "200, 182, 146",
};

/* Dark backgrounds — sumi-black palette */
const BG = {
  base: "#1a1a1a",
  deep: "#111111",
  card: "rgba(255,255,255,0.03)",
  cardHover: "rgba(255,255,255,0.06)",
  section: "#141414",
  overlay: "rgba(0,0,0,0.4)",
};

const glassCard: React.CSSProperties = {
  backgroundColor: BG.card,
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderTopColor: "rgba(255,255,255,0.06)",
  borderRightColor: "rgba(255,255,255,0.06)",
  borderBottomColor: "rgba(255,255,255,0.06)",
  borderLeftColor: "rgba(255,255,255,0.06)",
};

const darkBorder: React.CSSProperties = {
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: "rgba(255,255,255,0.05)",
};

/* ═══════════════════════════════════════════
   1. Hero — Digital Fortress Command Center
   ═══════════════════════════════════════════ */
function TechHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[65vh] flex items-center justify-center overflow-hidden text-white"
      style={{
        paddingTop: "100px",
        paddingBottom: "48px",
        background:
          "linear-gradient(160deg, #0a0f1a 0%, #0d1520 40%, #111a28 100%)",
      }}
    >
      {/* Grid lines — circuit board */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Circuit SVG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.05 }}
      >
        <svg
          viewBox="0 0 1200 800"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="0" y1="200" x2="400" y2="200" stroke={CY.light} strokeWidth="0.5" />
          <line x1="500" y1="200" x2="1200" y2="200" stroke={CY.light} strokeWidth="0.5" />
          <line x1="0" y1="400" x2="700" y2="400" stroke={CY.light} strokeWidth="0.5" />
          <line x1="800" y1="400" x2="1200" y2="400" stroke={CY.light} strokeWidth="0.5" />
          <line x1="0" y1="600" x2="300" y2="600" stroke={CY.light} strokeWidth="0.5" />
          <line x1="900" y1="600" x2="1200" y2="600" stroke={CY.light} strokeWidth="0.5" />
          <line x1="400" y1="0" x2="400" y2="300" stroke={CY.light} strokeWidth="0.5" />
          <line x1="800" y1="100" x2="800" y2="500" stroke={CY.light} strokeWidth="0.5" />
          {[
            [400, 200], [500, 200], [700, 400], [800, 400],
            [300, 600], [900, 600], [400, 300], [800, 100],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3" fill={CY.light} opacity="0.6" />
          ))}
        </svg>
      </div>
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 0%, rgba(10,15,26,0.7) 100%)" }}
      />
      {/* Bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(26,26,26,1) 0%, transparent 40%)" }}
      />
      {/* Cyan glow */}
      <div
        className="absolute top-[10%] right-[15%] w-[400px] h-[400px] pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(${CY.rgb},0.08) 0%, transparent 70%)`, filter: "blur(60px)" }}
      />

      <div className="relative z-20 container mx-auto px-5 sm:px-6 text-center">
        <motion.span
          className="font-bold tracking-[0.25em] text-[12px] md:text-[14px] font-english mb-4 block"
          style={{ color: CY.light }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
        >
          DIGITAL FORTRESS — IT COMMAND CENTER
        </motion.span>
        <motion.h1
          className="font-mincho font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(1.875rem, 0.1rem + 7.6vw, 3.75rem)" }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          「詳しい社員」に頼るの、
          <br />
          もう<span style={{ color: CY.light }}>終わりにしませんか？</span>
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mb-10 text-[15px] md:text-[16px]"
          style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <span className="hidden md:inline">
            その社員さんが辞めてしまったら、社内のパスワードや設定は誰が管理しますか？
            <br />
            経営リスクを回避し、本業に集中するための
          </span>
          <span className="md:hidden">
            その社員さんが辞めてしまったら、パスワードや設定は誰が？経営リスクを回避し、本業に集中するための
          </span>
          <span className="font-bold" style={{ color: AU.light }}>
            「デジタル番頭」
          </span>
          サービスです。
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={heroChild}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() => scrollTo("plans")}
            className="inline-block px-8 py-3.5 rounded-sm font-bold cursor-pointer"
            style={{
              backgroundColor: CY.main,
              color: "#fff",
              boxShadow: `0 0 24px rgba(${CY.rgb}, 0.35)`,
            }}
            whileHover={{ scale: 1.05, boxShadow: `0 0 36px rgba(${CY.rgb}, 0.5)` }}
            whileTap={{ scale: 0.97 }}
          >
            顧問契約プランを見る
          </motion.button>
          <motion.button
            onClick={() => scrollTo("contact")}
            className="inline-block px-8 py-3.5 rounded-sm font-bold cursor-pointer"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: CY.light,
              borderRightColor: CY.light,
              borderBottomColor: CY.light,
              borderLeftColor: CY.light,
              color: CY.light,
              backgroundColor: `rgba(${CY.rgb}, 0)`,
            }}
            whileHover={{ scale: 1.05, backgroundColor: `rgba(${CY.rgb}, 0.12)` }}
            whileTap={{ scale: 0.97 }}
          >
            まずは無料セキュリティ診断
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   2. Pain — 課題提起 (Full Dark)
   ═══════════════════════════════════════════ */
function PainSection() {
  const risks = [
    {
      icon: ShieldOff,
      label: "ブラックボックス化",
      text: (
        <>
          その社員が辞めたら、パスワードも設定も
          <span className="font-bold" style={{ color: "#ef4444" }}>
            誰も分からなくなる。
          </span>
        </>
      ),
    },
    {
      icon: Target,
      label: "売上の低下",
      text: (
        <>
          トラブル対応に追われ、本来やるべき
          <span className="font-bold" style={{ color: "#ef4444" }}>
            「営業・実務」の時間が削られる。
          </span>
        </>
      ),
    },
    {
      icon: AlertTriangle,
      label: "セキュリティホール",
      text: (
        <>
          自己流の設定で、
          <span className="font-bold" style={{ color: "#ef4444" }}>
            ウイルス感染や情報漏洩
          </span>
          の穴ができる。
        </>
      ),
    },
  ];

  const solutions = [
    { label: "プロのチーム管理", text: "属人化ゼロ。誰が辞めてもシステムは止まりません。" },
    { label: "本業に集中", text: "面倒なIT管理はすべて丸投げ。社長は経営に専念してください。" },
  ];

  return (
    <section id="pain" className="py-20 md:py-40 relative" style={{ backgroundColor: BG.base, ...darkBorder }}>
      {/* Subtle circuit pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="font-bold tracking-[0.2em] text-[14px] font-english mb-2 block" style={{ color: CY.main }}>
            THREAT ANALYSIS
          </span>
          <h2
            className="font-mincho font-bold mb-4"
            style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}
          >
            「詳しい社員」に頼るリスク、
            <br className="sm:hidden" />
            ご存知ですか？
          </h2>
          <p className="text-[15px] max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.9 }}>
            多くの企業様で、パソコンに詳しい若手社員が「兼任情シス」をやらされています。
            <br className="hidden md:block" />
            しかし、それは経営上、大きなリスクを孕んでいます。
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Left: Risks */}
          <motion.div
            className="p-6 md:p-10 rounded-lg"
            style={{
              backgroundColor: "rgba(239,68,68,0.04)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: "rgba(239,68,68,0.15)",
              borderRightColor: "rgba(239,68,68,0.15)",
              borderBottomColor: "rgba(239,68,68,0.15)",
              borderLeftColor: "rgba(239,68,68,0.15)",
            }}
            variants={fadeInLeft}
          >
            <h3 className="text-[18px] font-bold mb-8 flex items-center gap-2" style={{ color: "#ef4444" }}>
              <AlertTriangle className="w-5 h-5" />
              兼任情シスの限界
            </h3>
            <ul className="space-y-6">
              {risks.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(239,68,68,0.08)" }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: "#ef4444" }} />
                  </div>
                  <div>
                    <span className="font-bold text-[13px] block mb-1" style={{ color: "rgba(255,255,255,0.9)" }}>
                      {item.label}
                    </span>
                    <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Solutions */}
          <motion.div
            className="p-6 md:p-10 rounded-lg relative"
            style={{
              backgroundColor: `rgba(${CY.rgb}, 0.04)`,
              borderWidth: "2px",
              borderStyle: "solid",
              borderTopColor: CY.main,
              borderRightColor: CY.main,
              borderBottomColor: CY.main,
              borderLeftColor: CY.main,
              boxShadow: `0 8px 32px rgba(${CY.rgb}, 0.1)`,
            }}
            variants={fadeInRight}
          >
            <div
              className="absolute -top-3 right-6 px-3 py-1 text-[11px] font-bold tracking-wider shadow-md"
              style={{ backgroundColor: CY.main, color: "#fff" }}
            >
              SOLUTION
            </div>
            <h3 className="text-[18px] font-bold mb-8 flex items-center gap-2" style={{ color: CY.light }}>
              <CheckCircle className="w-5 h-5" style={{ color: CY.main }} />
              NEXT-ONEの解決策
            </h3>
            <ul className="space-y-6">
              {solutions.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `rgba(${CY.rgb}, 0.1)` }}
                  >
                    <Check className="w-4 h-4" style={{ color: CY.main }} />
                  </div>
                  <div>
                    <span className="font-bold text-[13px] block mb-1" style={{ color: CY.light }}>
                      {item.label}
                    </span>
                    <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.6)" }}>
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
   3. Solutions — 「機能」ではなく「解決策」
   ═══════════════════════════════════════════ */
function SolutionSection() {
  const solutions = [
    {
      icon: Headset,
      badge: "REMOTE SUPPORT",
      headline: "隣の席に『IT部』がいる感覚。",
      body: "「画面が固まった！」——LINE一本でご連絡ください。TeamViewer等で画面を共有し、その場でカーソルを動かして解決。電話をたらい回しにする大手とは違い、顔の見えるスタッフが即対応します。",
      features: ["LINE一本で即対応", "遠隔操作でその場解決", "平均対応時間 15分以内"],
      accentRgb: CY.rgb,
      accent: CY.main,
    },
    {
      icon: Cloud,
      badge: "CLOUD / GWS",
      headline: "『USBメモリ』でのデータ移動は、もう禁止です。",
      body: "USBメモリの紛失＝顧客データ漏洩。Google Workspace導入で「どこでもスマホで資料が見られるクラウドオフィス」を実現。メール、カレンダー、ファイル共有を一元化し、データの紛失・盗難リスクをゼロにします。",
      features: ["データ紛失リスクゼロ", "スマホで資料確認OK", "Google Gemini AI活用研修付"],
      accentRgb: "251, 188, 5",
      accent: "#FBBC05",
    },
    {
      icon: ShieldCheck,
      badge: "SECURITY",
      headline: "ウイルス感染＝倒産。御社の『信用』を守ります。",
      body: "ランサムウェアによる身代金要求、不正アクセスによる顧客情報流出——中小企業こそ狙われる時代です。UTM（統合脅威管理）導入、ウイルス対策ソフトの一元管理で、見えない脅威から御社の信用を守ります。",
      features: ["UTM / ファイアウォール導入", "ウイルス対策ソフト一元管理", "ランサムウェア対策"],
      accentRgb: "239, 68, 68",
      accent: "#ef4444",
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-40 relative" style={{ backgroundColor: BG.section, ...darkBorder }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="font-bold tracking-[0.2em] text-[14px] font-english mb-2 block" style={{ color: CY.main }}>
            SOLUTION
          </span>
          <h2
            className="font-mincho font-bold mb-4"
            style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}
          >
            社長の「困った」を秒速で解決
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {solutions.map((s) => (
            <motion.div
              key={s.badge}
              className="rounded-xl p-6 md:p-8 flex flex-col relative group"
              style={{
                backgroundColor: BG.overlay,
                borderWidth: "1px",
                borderStyle: "solid",
                borderTopColor: "rgba(255,255,255,0.06)",
                borderRightColor: "rgba(255,255,255,0.06)",
                borderBottomColor: "rgba(255,255,255,0.06)",
                borderLeftColor: "rgba(255,255,255,0.06)",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              variants={fadeInUp}
              whileHover={{
                y: -4,
                borderTopColor: `rgba(${s.accentRgb}, 0.4)`,
                borderRightColor: `rgba(${s.accentRgb}, 0.4)`,
                borderBottomColor: `rgba(${s.accentRgb}, 0.4)`,
                borderLeftColor: `rgba(${s.accentRgb}, 0.4)`,
                boxShadow: `0 8px 32px rgba(${s.accentRgb}, 0.12), 0 0 0 0px rgba(0,0,0,0)`,
                transition: { duration: 0.35 },
              }}
            >
              {/* Badge */}
              <span
                className="absolute top-4 right-4 text-[10px] font-bold tracking-widest font-english px-2 py-0.5 rounded-sm"
                style={{
                  backgroundColor: `rgba(${s.accentRgb}, 0.1)`,
                  color: s.accent,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderTopColor: `rgba(${s.accentRgb}, 0.2)`,
                  borderRightColor: `rgba(${s.accentRgb}, 0.2)`,
                  borderBottomColor: `rgba(${s.accentRgb}, 0.2)`,
                  borderLeftColor: `rgba(${s.accentRgb}, 0.2)`,
                }}
              >
                {s.badge}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: `rgba(${s.accentRgb}, 0.1)` }}
              >
                <s.icon className="w-6 h-6" style={{ color: s.accent }} />
              </div>

              {/* Headline */}
              <h3
                className="font-mincho font-bold text-[17px] md:text-[19px] mb-4 leading-snug"
                style={{ color: "#ffffff" }}
              >
                {s.headline}
              </h3>

              {/* Body */}
              <p className="text-[13px] mb-6 flex-grow" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
                {s.body}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                    <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: s.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. GWS Section — Google Workspace (Dark)
   ═══════════════════════════════════════════ */
const GWS_COLORS = {
  blue: "#4285F4",
  red: "#EA4335",
  yellow: "#FBBC05",
  green: "#34A853",
};
const STEP_COLORS = [GWS_COLORS.blue, GWS_COLORS.red, GWS_COLORS.yellow, GWS_COLORS.green];

function GWSSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const steps = [
    { num: 1, icon: <Settings className="w-[20px] h-[20px]" style={{ color: GWS_COLORS.blue }} />, title: "アカウント設計・初期設定", desc: "貴社の組織構造に合わせたドメイン設計・ユーザー構成を行い、最適なWorkspace環境を構築。" },
    { num: 2, icon: <Mail className="w-[20px] h-[20px]" style={{ color: GWS_COLORS.red }} />, title: "メール移行サポート", desc: "既存メール環境からGmailへ、過去データやアドレス帳を失わずスムーズに移行。" },
    { num: 3, icon: <Users className="w-[20px] h-[20px]" style={{ color: GWS_COLORS.yellow }} />, title: "社員向け操作レクチャー（訪問）", desc: "現場に出向いて、PCが苦手な方にも丁寧にハンズオン指導。定着するまで伴走。" },
    { num: 4, icon: <Sparkles className="w-[20px] h-[20px]" style={{ color: GWS_COLORS.green }} />, title: "Google Gemini (AI) 活用研修", desc: "最新AI機能を業務効率化に活かすための実践ワークショップ。", highlight: true },
  ];

  return (
    <section id="gws" className="py-14 sm:py-20 md:py-40 relative overflow-hidden" style={{ backgroundColor: BG.deep, ...darkBorder }}>
      {/* Google-colored ambient glow (very subtle on dark bg) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "#ffffff",
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Section header */}
        <motion.div className="text-center mb-10 md:mb-20" variants={fadeInUp}>
          <span
            className="inline-flex items-center gap-1.5 font-bold text-[11px] sm:text-[12px] tracking-[0.15em] px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5"
            style={{
              color: GWS_COLORS.blue,
              backgroundColor: "rgba(66,133,244,0.1)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: "rgba(66,133,244,0.2)",
              borderRightColor: "rgba(66,133,244,0.2)",
              borderBottomColor: "rgba(66,133,244,0.2)",
              borderLeftColor: "rgba(66,133,244,0.2)",
            }}
          >
            <Cloud className="w-3.5 h-3.5" /> GOOGLE WORKSPACE
          </span>
          <h2
            className="font-mincho mb-3 sm:mb-4"
            style={{ color: "#1a1a2e", fontWeight: 800, lineHeight: 1.3, fontSize: "clamp(1.375rem, 0.5rem + 3.8vw, 2.5rem)" }}
          >
            Google Workspace
            <br className="sm:hidden" />
            導入・活用支援
          </h2>
          <p className="text-[13px] sm:text-[15px] md:text-[17px] max-w-2xl mx-auto" style={{ color: "rgba(0,0,0,0.55)", lineHeight: 1.7 }}>
            サーバーも、FAXも、ホワイトボードも、すべてクラウドへ。
            <br className="hidden md:inline" />
            技術者3名体制で「現場」を変える、完全ハンズオン型の導入支援です。
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
          {/* Left: Steps */}
          <motion.div
            className="w-full md:w-[55%] flex flex-col rounded-xl overflow-hidden"
            style={{
              backgroundColor: "rgba(0,0,0,0.02)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: "rgba(0,0,0,0.08)",
              borderRightColor: "rgba(0,0,0,0.08)",
              borderBottomColor: "rgba(0,0,0,0.08)",
              borderLeftColor: "rgba(0,0,0,0.08)",
            }}
            variants={fadeInLeft}
          >
            <div
              className="px-4 sm:px-7 md:px-10 pt-6 sm:pt-8 md:pt-10 pb-5 md:pb-7"
              style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(0,0,0,0.08)" }}
            >
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-mincho mb-3 max-w-2xl" style={{ color: "#1a1a2e", fontWeight: 800, lineHeight: 1.45 }}>
                <span className="hidden sm:inline">
                  「事務所に戻らないと仕事ができない」
                  <br />
                  その常識を<span style={{ color: GWS_COLORS.red }}>変える</span>。
                </span>
                <span className="sm:hidden">
                  「事務所に戻らないと仕事ができない」その常識を<span style={{ color: GWS_COLORS.red }}>変える</span>。
                </span>
              </h3>
              <p className="text-[13px] sm:text-[15px]" style={{ color: "rgba(0,0,0,0.5)", lineHeight: 1.7 }}>
                <span className="hidden sm:inline">
                  NEXT-ONEは単なる導入代行ではありません。
                  <br />
                  貴社の業務フローを理解し、最適なクラウド環境を構築。
                  <br />
                  導入後の定着まで伴走する、ハンズオン型の支援です。
                </span>
                <span className="sm:hidden">
                  NEXT-ONEは単なる導入代行ではありません。貴社の業務フローを理解し、最適なクラウド環境を構築。導入後の定着まで伴走します。
                </span>
              </p>
            </div>
            <div className="px-4 sm:px-7 md:px-10 py-5 sm:py-7 md:py-9 flex-1 flex flex-col">
              <h4 className="flex items-center gap-2.5 mb-6" style={{ color: GWS_COLORS.blue, fontWeight: 700 }}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md" style={{ backgroundColor: GWS_COLORS.blue }}>
                  <Zap className="w-4 h-4 text-white" />
                </span>
                <span className="text-[15px] md:text-[16px]">DXスターターパック内容</span>
              </h4>
              <div className="space-y-3 sm:space-y-4 flex-1">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: step.highlight ? "rgba(234,67,53,0.06)" : "rgba(0,0,0,0.02)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderTopColor: step.highlight ? "rgba(234,67,53,0.18)" : "rgba(0,0,0,0.06)",
                      borderRightColor: step.highlight ? "rgba(234,67,53,0.18)" : "rgba(0,0,0,0.06)",
                      borderBottomColor: step.highlight ? "rgba(234,67,53,0.18)" : "rgba(0,0,0,0.06)",
                      borderLeftColor: step.highlight ? "rgba(234,67,53,0.18)" : "rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                      <span
                        className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center font-bold text-[12px] sm:text-[14px] text-white rounded-md"
                        style={{ backgroundColor: STEP_COLORS[(step.num - 1) % 4] }}
                      >
                        {step.num}
                      </span>
                      <span className="opacity-70">{step.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                        <p className="text-[13px] sm:text-[15px]" style={{ color: "#1a1a2e", fontWeight: 700 }}>
                          {step.title}
                        </p>
                        {step.highlight && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full text-white flex-shrink-0" style={{ backgroundColor: GWS_COLORS.red, fontWeight: 700 }}>
                            注目
                          </span>
                        )}
                      </div>
                      <p className="text-[12px] sm:text-[14px]" style={{ color: "rgba(0,0,0,0.5)", lineHeight: 1.65 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: GWS Pricing card */}
          <motion.div className="w-full md:w-[45%] flex items-stretch justify-center" variants={fadeInRight}>
            <div
              className="w-full flex flex-col rounded-xl overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: "rgba(0,0,0,0.02)",
                boxShadow: "0 8px 40px rgba(234,67,53,0.08)",
                borderWidth: "2px",
                borderStyle: "solid",
                borderTopColor: GWS_COLORS.red,
                borderRightColor: GWS_COLORS.red,
                borderBottomColor: GWS_COLORS.red,
                borderLeftColor: GWS_COLORS.red,
              }}
            >
              {/* Ribbon */}
              <div className="text-center py-2.5" style={{ backgroundColor: GWS_COLORS.red }}>
                <span className="text-white text-[13px] tracking-wider" style={{ fontWeight: 700 }}>
                  <Crown className="w-4 h-4 inline-block mr-1.5 -mt-0.5" /> おすすめプラン
                </span>
              </div>

              <div className="p-5 sm:p-7 md:p-10 flex flex-col flex-1 text-center">
                <span
                  className="inline-block text-[12px] tracking-wider px-3 py-1 rounded-full mb-6 mx-auto"
                  style={{ color: GWS_COLORS.blue, backgroundColor: "rgba(66,133,244,0.1)", fontWeight: 700, borderWidth: "1px", borderStyle: "solid", borderTopColor: "rgba(66,133,244,0.2)", borderRightColor: "rgba(66,133,244,0.2)", borderBottomColor: "rgba(66,133,244,0.2)", borderLeftColor: "rgba(66,133,244,0.2)" }}
                >
                  STANDARD PRICE
                </span>
                <p className="text-[15px] mb-2" style={{ color: "rgba(0,0,0,0.5)" }}>通常導入支援費</p>
                <div className="flex justify-center items-end mb-1 flex-wrap">
                  <span className="font-mincho text-[36px] sm:text-[46px] md:text-[56px]" style={{ color: GWS_COLORS.red, fontWeight: 800, lineHeight: 1.1 }}>
                    198,000
                  </span>
                  <span className="text-[13px] sm:text-[15px] ml-1.5 pb-1 sm:pb-2" style={{ color: "rgba(0,0,0,0.4)", fontWeight: 500 }}>
                    円 (税込)
                  </span>
                </div>

                {/* Included list */}
                <div
                  className="my-4 sm:my-6 py-4 sm:py-5 px-4 sm:px-5 rounded-lg text-left"
                  style={{ backgroundColor: "rgba(0,0,0,0.03)", borderWidth: "1px", borderStyle: "solid", borderTopColor: "rgba(0,0,0,0.08)", borderRightColor: "rgba(0,0,0,0.08)", borderBottomColor: "rgba(0,0,0,0.08)", borderLeftColor: "rgba(0,0,0,0.08)" }}
                >
                  <p className="text-[12px] sm:text-[13px] mb-2 sm:mb-3" style={{ color: "rgba(0,0,0,0.45)", fontWeight: 700, letterSpacing: "0.05em" }}>
                    含まれるサービス
                  </p>
                  {["アカウント設計・初期設定", "メール移行サポート", "社員向け操作レクチャー（訪問）", "Google Gemini (AI) 活用研修"].map((item) => (
                    <div key={item} className="flex items-center gap-2 py-1 sm:py-1.5">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: GWS_COLORS.blue }} />
                      <span className="text-[13px] sm:text-[14px]" style={{ color: "rgba(0,0,0,0.65)" }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Divider with arrow */}
                <div className="flex items-center justify-center gap-3 my-3">
                  <div className="flex-1 h-px" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(234,67,53,0.1)", borderWidth: "1px", borderStyle: "solid", borderTopColor: "rgba(234,67,53,0.2)", borderRightColor: "rgba(234,67,53,0.2)", borderBottomColor: "rgba(234,67,53,0.2)", borderLeftColor: "rgba(234,67,53,0.2)" }}>
                    <ArrowDown className="w-5 h-5" style={{ color: GWS_COLORS.red }} />
                  </div>
                  <div className="flex-1 h-px" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
                </div>

                {/* Premium offer */}
                <div className="p-4 sm:p-5 rounded-lg text-left mb-5 sm:mb-7 mt-3" style={{ backgroundColor: "rgba(234,67,53,0.06)", borderWidth: "1px", borderStyle: "solid", borderTopColor: "rgba(234,67,53,0.2)", borderRightColor: "rgba(234,67,53,0.2)", borderBottomColor: "rgba(234,67,53,0.2)", borderLeftColor: "rgba(234,67,53,0.2)" }}>
                  <div className="flex items-center gap-2 sm:gap-2.5 mb-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md" style={{ backgroundColor: GWS_COLORS.red }}>
                      <Gift className="w-4 h-4 text-white" />
                    </span>
                    <p className="text-[13px] sm:text-[15px]" style={{ color: GWS_COLORS.red, fontWeight: 700 }}>
                      PREMIUM顧問契約なら
                    </p>
                  </div>
                  <p className="text-[13px] sm:text-[15px]" style={{ color: "rgba(0,0,0,0.6)", lineHeight: 1.7 }}>
                    年契約にてご契約いただいた場合、この導入費用を
                    <span className="text-[15px] sm:text-[17px] md:text-[20px] inline-block mx-0.5" style={{ color: GWS_COLORS.red, fontWeight: 800, borderBottomWidth: "3px", borderBottomStyle: "solid", borderBottomColor: GWS_COLORS.red }}>
                      全額無料
                    </span>
                    にいたします。
                  </p>
                </div>

                <button
                  onClick={() => scrollTo("contact")}
                  className="block w-full py-3 sm:py-4 text-[14px] sm:text-[16px] text-white cursor-pointer transition-all duration-300 hover:brightness-110 rounded-lg"
                  style={{ background: `linear-gradient(135deg, ${GWS_COLORS.red} 0%, #f28b82 100%)`, boxShadow: "0 4px 20px rgba(234,67,53,0.25)", fontWeight: 700 }}
                >
                  <span className="inline-flex items-center gap-2">
                    無料相談でデモを依頼する <ChevronRight className="w-5 h-5" />
                  </span>
                </button>
                <p className="text-[11px] sm:text-[13px] mt-3 sm:mt-4" style={{ color: "rgba(0,0,0,0.4)", lineHeight: 1.6 }}>
                  ※ ご相談は無料です。お気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. Plans — 松竹梅プラン
   ═══════════════════════════════════════════ */
function PlansSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="plans" className="py-20 md:py-40 relative" style={{ backgroundColor: BG.base, ...darkBorder }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="font-bold tracking-[0.2em] text-[14px] font-english mb-2 block" style={{ color: AU.main }}>
            MONTHLY PLANS
          </span>
          <h2 className="font-mincho font-bold mb-4" style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}>
            組織フェーズに合わせた3つの正解
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)" }}>
            コスト重視か、安心重視か。御社に最適なプランをお選びください。
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-stretch justify-center gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* ── ライト (梅) ── */}
          <motion.div
            className="w-full lg:w-1/3 rounded-xl p-6 md:p-10 flex flex-col order-2 lg:order-1"
            style={{
              backgroundColor: BG.card,
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: "rgba(156,163,175,0.3)",
              borderRightColor: "rgba(156,163,175,0.3)",
              borderBottomColor: "rgba(156,163,175,0.3)",
              borderLeftColor: "rgba(156,163,175,0.3)",
            }}
            variants={fadeInUp}
            whileHover={cardHover}
          >
            <div className="text-center mb-4">
              <h3 className="font-english font-bold text-[24px] tracking-wider" style={{ color: "#ffffff" }}>LIGHT</h3>
              <p className="font-mincho text-[12px] mt-1 font-bold" style={{ color: "rgba(255,255,255,0.5)" }}>
                とにかく安く守りたい
              </p>
            </div>
            <div className="text-center mb-6 pb-6" style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)" }}>
              <span className="font-mincho font-bold text-[36px]" style={{ color: "#ffffff" }}>30,000</span>
              <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                円/月<span className="text-[12px]">（税別）</span>
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>税込 33,000円/月</p>
            </div>
            <ul className="space-y-3 text-[14px] mb-8 flex-grow" style={{ color: "rgba(255,255,255,0.7)" }}>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "rgba(156,163,175,0.7)" }} />
                リモート保守 (月3回まで)
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "rgba(156,163,175,0.7)" }} />
                ウイルス対策ソフト管理
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "rgba(156,163,175,0.7)" }} />
                チャット相談 (無制限)
              </li>
              <li className="flex items-start gap-2 font-bold p-1 rounded" style={{ backgroundColor: "rgba(185,28,28,0.06)", color: "#ef4444" }}>
                <Ban className="w-4 h-4 mt-0.5 flex-shrink-0" />
                訪問対応なし
              </li>
            </ul>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full py-3 text-center text-[14px] font-bold transition-colors mt-auto cursor-pointer rounded-lg"
              style={{ borderWidth: "1px", borderStyle: "solid", borderTopColor: "rgba(156,163,175,0.3)", borderRightColor: "rgba(156,163,175,0.3)", borderBottomColor: "rgba(156,163,175,0.3)", borderLeftColor: "rgba(156,163,175,0.3)", color: "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = CY.main; e.currentTarget.style.color = CY.light; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(156,163,175,0.3)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
              相談する
            </button>
          </motion.div>

          {/* ── スタンダード (竹) — 👑 推奨 ── */}
          <motion.div
            className="w-full lg:w-1/3 rounded-xl p-8 md:p-12 relative transform lg:-translate-y-4 z-10 flex flex-col order-1 lg:order-2"
            style={{
              backgroundColor: `rgba(${AU.rgb}, 0.05)`,
              borderWidth: "2px",
              borderStyle: "solid",
              borderTopColor: AU.main,
              borderRightColor: AU.main,
              borderBottomColor: AU.main,
              borderLeftColor: AU.main,
              boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px rgba(${AU.rgb}, 0.08)`,
            }}
            variants={fadeInUp}
            whileHover={{
              y: -10,
              boxShadow: `0 24px 70px -4px rgba(${AU.rgb}, 0.2), 0 0 0 0px rgba(0,0,0,0)`,
              transition: { duration: 0.3 },
            }}
          >
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-[12px] font-bold tracking-wider shadow-md flex items-center gap-1.5 rounded-sm"
              style={{ backgroundColor: AU.main, color: "#0C0C10" }}
            >
              <Crown className="w-3.5 h-3.5" /> 人気No.1
            </div>
            <div className="text-center mb-6">
              <h3 className="font-english font-bold text-[30px] tracking-wider" style={{ color: "#ffffff" }}>STANDARD</h3>
              <p className="font-mincho text-[12px] mt-2 font-bold" style={{ color: AU.light }}>
                PC管理の丸投げパック
              </p>
            </div>
            <div className="text-center mb-8 pb-8" style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${AU.rgb}, 0.15)` }}>
              <span className="font-mincho font-bold text-[48px]" style={{ color: AU.light }}>50,000</span>
              <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                円/月<span className="text-[12px]">（税別）</span>
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>税込 55,000円/月</p>
            </div>
            <ul className="space-y-4 text-[15px] mb-8 flex-grow" style={{ color: "rgba(255,255,255,0.8)" }}>
              {[
                { text: "リモート保守 (無制限)", bold: true },
                { text: "定期PCメンテナンス (遠隔)", bold: true },
                { text: "アカウント管理代行", bold: true },
                { text: "月1回の定期訪問", bold: false },
                { text: "出張費コミコミ", bold: false },
              ].map((item) => (
                <li key={item.text} className={`flex items-start gap-3 ${item.bold ? "pb-3" : ""}`} style={item.bold ? { borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${AU.rgb}, 0.08)` } : undefined}>
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: AU.light }} />
                  <span className={item.bold ? "font-bold" : ""} style={{ color: "#ffffff" }}>{item.text}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full py-4 text-center text-[16px] font-bold hover:opacity-90 transition-colors shadow-lg mt-auto relative overflow-hidden group cursor-pointer rounded-lg"
              style={{ backgroundColor: AU.main, color: "#0C0C10" }}
            >
              <span className="relative z-10">このプランで相談</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-500" />
            </button>
          </motion.div>

          {/* ── プレミアム (松) ── */}
          <motion.div
            className="w-full lg:w-1/3 rounded-xl p-6 md:p-10 flex flex-col order-3 relative overflow-hidden"
            style={{
              backgroundColor: "rgba(20,20,26,0.95)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: `rgba(${CY.rgb}, 0.35)`,
              borderRightColor: `rgba(${CY.rgb}, 0.35)`,
              borderBottomColor: `rgba(${CY.rgb}, 0.35)`,
              borderLeftColor: `rgba(${CY.rgb}, 0.35)`,
            }}
            variants={fadeInUp}
            whileHover={cardHover}
          >
            <div className="absolute top-0 right-0 px-3 py-1 text-[10px] font-bold tracking-wider rounded-bl-lg" style={{ backgroundColor: CY.main, color: "#fff" }}>
              訪問もしてほしい方へ
            </div>

            <div className="mb-6 text-center">
              <h3 className="font-english font-bold text-[24px] tracking-wider" style={{ color: "#ffffff" }}>PREMIUM</h3>
              <p className="font-mincho text-[12px] mt-1 font-bold" style={{ color: CY.light }}>
                社員と家族を守る、経営者の愛
              </p>
            </div>
            <div className="mb-6 pb-6 text-center" style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${CY.rgb}, 0.15)` }}>
              <span className="font-mincho font-bold text-[36px]" style={{ color: CY.light }}>100,000</span>
              <span className="text-[14px] ml-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                円~/月<span className="text-[12px]">（税別）</span>
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>税込 110,000円~/月</p>
            </div>

            {/* Base */}
            <div className="mb-6 pb-5" style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)" }}>
              <p className="text-[10px] tracking-widest mb-3 font-english font-bold" style={{ color: CY.main }}>BASE SUPPORT</p>
              <ul className="space-y-2 text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: CY.main }} />
                  定期訪問サポート (月1回)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: CY.main }} />
                  IT資産管理 / キッティング
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: CY.main }} />
                  社内ネットワーク構築
                </li>
                <li
                  className="flex items-start gap-2 p-2 rounded-sm font-bold"
                  style={{ backgroundColor: `rgba(${CY.rgb}, 0.08)`, borderWidth: "1px", borderStyle: "solid", borderTopColor: `rgba(${CY.rgb}, 0.2)`, borderRightColor: `rgba(${CY.rgb}, 0.2)`, borderBottomColor: `rgba(${CY.rgb}, 0.2)`, borderLeftColor: `rgba(${CY.rgb}, 0.2)`, color: CY.light }}
                >
                  <Gift className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: CY.light }} />
                  GWS導入費 無料特典
                </li>
              </ul>
            </div>

            {/* Welfare */}
            <div className="flex-grow">
              <p className="text-[12px] font-bold mb-4 flex items-center gap-1.5" style={{ color: AU.main }}>
                <Heart className="w-3.5 h-3.5" /> 社員様への福利厚生:
              </p>
              <ul className="space-y-4 text-[14px]">
                <li className="flex items-start gap-3">
                  <Wifi className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0ea5e9" }} />
                  <div>
                    <span className="font-bold" style={{ color: "#ffffff" }}>プライベートIT救急箱</span>
                    <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>ご自宅のWi-Fiや実家のスマホ設定もサポート。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Camera className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#f43f5e" }} />
                  <div>
                    <span className="font-bold" style={{ color: "#ffffff" }}>家族の記念日フォト</span>
                    <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>七五三や家族写真をプロ撮影でプレゼント。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#10b981" }} />
                  <div>
                    <span className="font-bold" style={{ color: "#ffffff" }}>マイカー社割制度</span>
                    <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>車検・購入を会員レートで。家計の固定費を下げます。</p>
                  </div>
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="block w-full mt-8 py-3 text-center text-[14px] font-bold transition-colors cursor-pointer rounded-lg"
              style={{ backgroundColor: CY.main, color: "#fff" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = CY.light; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = CY.main; }}
            >
              相談する
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   6. Cross-sell Banner — TECH × WEB
   ═══════════════════════════════════════════ */
function CrossSellBanner() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 relative" style={{ backgroundColor: BG.deep }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <motion.div
          className="relative p-6 sm:p-8 md:p-12 rounded-xl overflow-hidden"
          style={{
            backgroundColor: `rgba(${AU.rgb}, 0.04)`,
            borderWidth: "2px",
            borderStyle: "solid",
            borderTopColor: AU.main,
            borderRightColor: AU.main,
            borderBottomColor: AU.main,
            borderLeftColor: AU.main,
            boxShadow: `0 0 40px rgba(${AU.rgb}, 0.08)`,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Gold shimmer */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, rgba(${AU.rgb}, 0.06) 0%, transparent 50%, rgba(${AU.rgb}, 0.03) 100%)`,
            }}
          />

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Crown className="w-6 h-6" style={{ color: AU.main }} />
              <span className="font-english font-bold tracking-[0.15em] text-[13px] md:text-[15px]" style={{ color: AU.light }}>
                TECH × WEB 同時契約特典
              </span>
            </div>
            <h3 className="font-mincho font-bold mb-4 md:mb-5" style={{ color: "#ffffff", fontSize: "clamp(1.25rem, 0.6rem + 2.5vw, 2rem)" }}>
              「デジタル番頭・完全顧問パック」
            </h3>
            <p className="text-[14px] md:text-[15px] max-w-2xl mx-auto mb-6" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.85 }}>
              <span className="hidden sm:inline">
                TECH（PC保守）をご契約のお客様は、<span className="font-bold" style={{ color: AU.light }}>WEB保守費用がお得に</span>。
                <br />
                さらに、<span className="font-bold" style={{ color: AU.light }}>Web集客コンサルティング（月次レポート）</span>を無償提供。
                <br />
                ITと集客を一括で任せて、本業に100%集中できる環境を。
              </span>
              <span className="sm:hidden">
                TECH（PC保守）をご契約のお客様は、<span className="font-bold" style={{ color: AU.light }}>WEB保守費用がお得に</span>。さらに、<span className="font-bold" style={{ color: AU.light }}>Web集客コンサルティング（月次レポート）</span>を無償提供。
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                onClick={() => scrollTo("contact")}
                className="px-6 sm:px-8 py-3 font-bold text-[14px] cursor-pointer rounded-lg"
                style={{ backgroundColor: AU.main, color: "#0C0C10" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                詳しくはお問い合わせ
              </motion.button>
              <Link
                to="/web"
                className="inline-flex items-center justify-center gap-1.5 px-6 sm:px-8 py-3 font-bold text-[14px] transition-colors rounded-lg"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderTopColor: AU.dark,
                  borderRightColor: AU.dark,
                  borderBottomColor: AU.dark,
                  borderLeftColor: AU.dark,
                  color: AU.light,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = AU.main; e.currentTarget.style.backgroundColor = `rgba(${AU.rgb}, 0.08)`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = AU.dark; e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                WEBページを見る <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   7. Spot Pricing
   ═══════════════════════════════════════════ */
function SpotSection() {
  return (
    <section id="spot" className="py-20 md:py-32 relative" style={{ backgroundColor: BG.base, ...darkBorder }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="font-mincho font-bold mb-4" style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}>
            スポット対応（単発依頼）
          </h2>
          <p className="text-[15px]" style={{ color: "rgba(255,255,255,0.55)" }}>
            <span className="font-bold" style={{ color: CY.light, borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${CY.rgb}, 0.38)` }}>
              ※顧問契約者様は、以下の作業費がすべて月額内で無料になります。
            </span>
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <table
            className="w-full min-w-[480px] text-[14px] text-left rounded-lg overflow-hidden"
            style={{ borderWidth: "1px", borderStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightColor: "rgba(255,255,255,0.06)", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}
          >
            <thead>
              <tr style={{ backgroundColor: `rgba(${CY.rgb}, 0.08)` }}>
                <th className="px-4 md:px-6 py-4 w-1/2 text-[12px] font-bold uppercase tracking-wider" style={{ color: CY.light, borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${CY.rgb}, 0.15)` }}>作業項目</th>
                <th className="px-4 md:px-6 py-4 text-[12px] font-bold uppercase tracking-wider" style={{ color: CY.light, borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${CY.rgb}, 0.15)` }}>一般料金 (税抜)</th>
                <th className="px-4 md:px-6 py-4 text-[12px] font-bold uppercase tracking-wider" style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${CY.rgb}, 0.15)`, backgroundColor: `rgba(${CY.rgb}, 0.12)`, color: CY.light }}>顧問会員</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: "基本出張診断費 (エリア内)", price: "¥10,000", taxIn: "（税込 ¥11,000）", bold: true },
                { item: "PC設定・トラブル解決 (1h)", price: "¥15,000", taxIn: "（税込 ¥16,500）", bold: false },
                { item: "ウイルス駆除・リカバリ", price: "¥30,000〜", taxIn: "（税込 ¥33,000〜）", bold: false },
              ].map((row) => (
                <tr key={row.item} style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.04)" }}>
                  <td className={`px-4 md:px-6 py-4 ${row.bold ? "font-bold" : ""}`} style={row.bold ? { color: "#ffffff" } : undefined}>{row.item}</td>
                  <td className="px-4 md:px-6 py-4">{row.price}<br /><span className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>{row.taxIn}</span></td>
                  <td className="px-4 md:px-6 py-4 font-bold" style={{ color: CY.light, backgroundColor: `rgba(${CY.rgb}, 0.04)` }}>¥0</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   8. Area Section
   ═══════════════════════════════════════════ */
function AreaSection() {
  const areas = ["小牧市", "清須市", "一宮市", "名古屋市北部"];

  return (
    <section id="area" className="py-20 md:py-40 relative" style={{ backgroundColor: BG.section, ...darkBorder }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="font-bold tracking-[0.2em] text-[14px] font-english mb-2 block" style={{ color: AU.main }}>
            SERVICE AREA
          </span>
          <h2 className="font-mincho font-bold mb-4" style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}>
            「近さ」は、安心の距離。
          </h2>
          <p className="text-[15px] max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>
            ITトラブルは「今すぐ直してほしい」ものばかりです。
            <br className="hidden md:inline" />
            地元の「番頭」として、すぐに駆けつけられる距離感を大切にしています。
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div
            className="p-6 md:p-10 rounded-xl w-full max-w-lg text-center"
            style={{
              backgroundColor: `rgba(${CY.rgb}, 0.03)`,
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: `rgba(${CY.rgb}, 0.15)`,
              borderRightColor: `rgba(${CY.rgb}, 0.15)`,
              borderBottomColor: `rgba(${CY.rgb}, 0.15)`,
              borderLeftColor: `rgba(${CY.rgb}, 0.15)`,
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5" style={{ color: CY.light }} />
              <span className="font-bold text-[16px]" style={{ color: "#ffffff" }}>愛知県 尾張エリア</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-sm text-[14px] font-bold"
                  style={{
                    backgroundColor: `rgba(${CY.rgb}, 0.06)`,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderTopColor: `rgba(${CY.rgb}, 0.15)`,
                    borderRightColor: `rgba(${CY.rgb}, 0.15)`,
                    borderBottomColor: `rgba(${CY.rgb}, 0.15)`,
                    borderLeftColor: `rgba(${CY.rgb}, 0.15)`,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-[12px] mt-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              ※上記エリア外でも対応可能な場合がございます。まずはご相談ください。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   9. CTA Footer — 無料セキュリティ診断
   ═══════════════════════════════════════════ */
function TechContactFooter() {
  return (
    <footer
      id="contact"
      className="text-white pt-20 md:pt-40 pb-10"
      style={{
        backgroundColor: BG.deep,
        borderTopWidth: "4px",
        borderTopStyle: "solid",
        borderTopColor: CY.main,
      }}
    >
      <motion.div
        className="max-w-3xl mx-auto px-5 sm:px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4" style={{ color: CY.main }} />
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="font-mincho font-bold mb-4"
          style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}
        >
          まずは無料セキュリティ診断
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mb-10 text-[15px] md:text-[16px]"
          style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}
        >
          <span className="hidden sm:inline">
            御社のパソコン、ウイルスが入っていないか<span className="font-bold" style={{ color: CY.light }}>30分でチェック</span>します。
            <br />
            「パソコンが起動しない画面」「絡まった配線」…写真は雄弁です。
            <br />
            LINEで写真を送ってください。概算見積もりと初動アドバイスを<span className="font-bold" style={{ color: AU.light }}>無料</span>で返信します。
          </span>
          <span className="sm:hidden">
            御社のパソコン、ウイルスが入っていないか<span className="font-bold" style={{ color: CY.light }}>30分でチェック</span>します。LINEで状況の写真を送ってください。概算見積もりを<span className="font-bold" style={{ color: AU.light }}>無料</span>で返信します。
          </span>
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-sm mx-auto">
          <motion.a
            href="https://lin.ee/ieroOsn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "#06c755" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <LineIcon className="w-6 h-6 mr-3" /> LINEで無料セキュリティ診断
          </motion.a>
          <p className="text-[12px] mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
            お急ぎの方はお電話で:{" "}
            <a
              href="tel:0568706558"
              className="font-bold inline-flex items-center gap-1"
              style={{ color: "rgba(255,255,255,0.6)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = CY.light)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
            >
              <Phone className="w-3 h-3" /> 0568-70-6558
            </a>{" "}
            (平日9:00-18:00)
          </p>
        </motion.div>
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
   Main Tech Page
   ═══════════════════════════════════════════ */
export function TechPage() {
  usePageMeta({
    title: "TECH | IT保守・インフラ支援 | NEXT-ONE",
    description:
      "PC修理、ネットワーク構築、Google Workspace導入、セキュリティ対策。愛知・尾張エリアへ最短即日で駆けつける「情シス代行」サービス。",
  });

  return (
    <div
      className="font-sans antialiased"
      style={{ backgroundColor: BG.base, color: "#ffffff" }}
    >
      <SubNav
        divisionLabel="TECH"
        accentColor={CY.main}
        navItems={[
          { label: "課題", sectionId: "pain", icon: <AlertTriangle /> },
          { label: "解決策", sectionId: "solutions", icon: <Headset /> },
          { label: "GWS", sectionId: "gws", icon: <Cloud /> },
          { label: "料金", sectionId: "plans", icon: <FileText /> },
          { label: "スポット", sectionId: "spot", icon: <Wrench /> },
          { label: "エリア", sectionId: "area", icon: <MapPin /> },
        ]}
        ctaLabel="無料診断"
        ctaSectionId="contact"
        ctaIcon={<ShieldCheck />}
      />
      {/* Hero + Pain wrapper with floating logo */}
      <div className="relative overflow-hidden">
        <TechHero />
        <PainSection />
        {/* NEXT-ONE TECH logo — watermark */}
        <div
          className="absolute pointer-events-none select-none hidden md:block"
          style={{ right: "-1%", top: "60vh", transform: "translateY(-50%)", width: "clamp(360px, 32vw, 540px)", zIndex: 10 }}
        >
          <motion.img
            src={techLogoImg}
            alt=""
            aria-hidden="true"
            className="w-full h-auto"
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 0.08, x: 0, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
          />
        </div>
      </div>
      <SolutionSection />
      <GWSSection />
      <PlansSection />
      <CrossSellBanner />
      <SpotSection />
      <AreaSection />
      <CrossLinks currentPage="tech" />
      <TechContactFooter />
    </div>
  );
}
