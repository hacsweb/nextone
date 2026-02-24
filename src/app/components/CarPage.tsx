import { motion } from "motion/react";
import {
  Car,
  Check,
  Search,
  Wrench,
  Radio,
  Home,
  Lock,
  MessageCircle,
  Shield,
  ArrowRight,
  Crown,
  ChevronRight,
  Package,
  Clock,
  Truck,
  Sparkles,
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
import carLogoImg from "../../assets/37964a356e46b543dff5874309b251e02ea7340a.png";

/* ══════════════════════════════════════════════
   Design Tokens — "Midnight Garage" Theme
   ══════════════════════════════════════════════ */
/* Purple accent — mystery, exclusivity */
const C = {
  main: "#7e22ce",
  light: "#a855f7",
  dark: "#581c87",
  rgb: "126, 34, 206",
};
/* Gold — luxury, importance */
const AU = {
  main: "#C8B692",
  light: "#E6D8B5",
  dark: "#A89B7A",
  rgb: "200, 182, 146",
};
/* Jade green — TECH cross-sell */
const JADE = {
  main: "#00997A",
  light: "#00b38f",
  rgb: "0, 153, 122",
};

/* Dark backgrounds — 会員制バー atmosphere */
const BG = {
  base: "#1a1a1a",
  deep: "#111111",
  black: "#0d0d0d",
  card: "rgba(255,255,255,0.025)",
  section: "#151515",
};

const darkBorder: React.CSSProperties = {
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: "rgba(255,255,255,0.05)",
};

/* Smooth scroll helper */
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/* ═══════════════════════════════════════════
   1. HERO — Midnight Garage
   ═══════════════════════════════════════════ */
function CarHero() {
  return (
    <section
      className="relative min-h-[65vh] flex items-center justify-center overflow-hidden text-white"
      style={{
        paddingTop: "80px",
        paddingBottom: "48px",
        background:
          "linear-gradient(160deg, #0d0d0d 0%, #1a0a2e 40%, #0d0d0d 100%)",
      }}
    >
      {/* Bokeh Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "screen", clipPath: "inset(80px 0 0 0)" }}
      >
        <svg
          viewBox="0 0 1200 800"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="bokehCp" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="40%" stopColor="#7e22ce" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#7e22ce" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bokehAu" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E6D8B5" stopOpacity="0.15" />
              <stop offset="40%" stopColor="#C8B692" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#C8B692" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bokehCw" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.2" />
              <stop offset="40%" stopColor="white" stopOpacity="0.06" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="120" r="100" fill="url(#bokehCp)" opacity="0.5" />
          <circle cx="200" cy="70" r="50" fill="url(#bokehAu)" opacity="0.5" />
          <circle cx="1050" cy="130" r="140" fill="url(#bokehCp)" opacity="0.35" />
          <circle cx="1100" cy="90" r="60" fill="url(#bokehCw)" opacity="0.4" />
          <circle cx="980" cy="70" r="40" fill="url(#bokehAu)" opacity="0.4" />
          <circle cx="70" cy="650" r="90" fill="url(#bokehCp)" opacity="0.25" />
          <circle cx="160" cy="720" r="50" fill="url(#bokehCw)" opacity="0.3" />
          <circle cx="1080" cy="680" r="70" fill="url(#bokehAu)" opacity="0.2" />
          <circle cx="350" cy="80" r="25" fill="url(#bokehCw)" opacity="0.2" />
          <circle cx="700" cy="700" r="30" fill="url(#bokehAu)" opacity="0.12" />
          <circle cx="440" cy="160" r="3.5" fill="#a855f7" opacity="0.12" />
          <circle cx="660" cy="120" r="2.5" fill="#E6D8B5" opacity="0.1" />
          <circle cx="300" cy="500" r="3" fill="#a855f7" opacity="0.08" />
        </svg>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-[5%] right-[10%] w-[300px] h-[300px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${C.rgb},0.08) 0%, transparent 70%)`,
          filter: "blur(50px)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${AU.rgb},0.05) 0%, transparent 70%)`,
          filter: "blur(50px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 50%, transparent 30%, rgba(13,13,13,0.65) 100%)",
        }}
      />

      {/* Corner frames */}
      <div
        className="absolute top-6 left-6 w-12 h-12 md:top-10 md:left-10 md:w-20 md:h-20"
        style={{
          borderLeftWidth: "2px",
          borderLeftStyle: "solid",
          borderLeftColor: `rgba(${C.rgb},0.2)`,
          borderTopWidth: "2px",
          borderTopStyle: "solid",
          borderTopColor: `rgba(${C.rgb},0.2)`,
        }}
      />
      <div
        className="absolute bottom-6 right-6 w-12 h-12 md:bottom-10 md:right-10 md:w-20 md:h-20"
        style={{
          borderRightWidth: "2px",
          borderRightStyle: "solid",
          borderRightColor: `rgba(${C.rgb},0.2)`,
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
          borderBottomColor: `rgba(${C.rgb},0.2)`,
        }}
      />

      <div className="relative z-20 container mx-auto px-5 sm:px-6 text-center">
        {/* MEMBERS ONLY badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-6 px-5 py-2.5"
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderTopColor: `rgba(${AU.rgb}, 0.3)`,
            borderRightColor: `rgba(${AU.rgb}, 0.3)`,
            borderBottomColor: `rgba(${AU.rgb}, 0.3)`,
            borderLeftColor: `rgba(${AU.rgb}, 0.3)`,
            backgroundColor: `rgba(${AU.rgb}, 0.06)`,
            borderRadius: "2px",
          }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
        >
          <Lock className="w-4 h-4" style={{ color: AU.main }} strokeWidth={2.5} />
          <span
            className="text-[11px] md:text-[12px] tracking-[0.2em] font-english"
            style={{ fontWeight: 700, color: AU.main }}
          >
            MEMBERS ONLY
          </span>
        </motion.div>

        <motion.span
          className="block font-english font-bold text-[13px] md:text-[14px] tracking-[0.25em] mb-3 md:mb-4"
          style={{ color: C.light }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
        >
          MIDNIGHT GARAGE
        </motion.span>

        <motion.h1
          className="font-mincho font-bold leading-tight mb-6"
          style={{
            fontSize: "clamp(1.8rem, 0.1rem + 7.6vw, 3.5rem)",
            color: "#ffffff",
            textShadow:
              "0 0 40px rgba(0,0,0,0.35), 0 0 80px rgba(0,0,0,0.2)",
          }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
        >
          <span className="hidden md:inline">
            ITだけじゃない。
            <br />
            総務の<span style={{ color: AU.main }}>「足回り」</span>も支えます。
          </span>
          <span className="md:hidden">
            ITだけじゃない。
            <br />
            総務の
            <br />
            <span style={{ color: AU.main }}>「足回り」</span>も
            <br />
            支えます。
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto mb-8 text-[14px] md:text-[16px]"
          style={{ color: "rgba(255,255,255,0.55)", lineHeight: 2 }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
        >
          TECH顧問契約を締結されている
          <span className="font-bold" style={{ color: AU.light }}>会員様限定</span>の
          <br className="hidden md:inline" />
          車両コンシェルジュサービスです。
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          variants={heroChild}
          initial="hidden"
          animate="visible"
        >
          <button
            onClick={() => scrollTo("services")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-[14px] font-bold cursor-pointer transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${C.main}, ${C.dark})`,
              color: "#ffffff",
              boxShadow: `0 8px 32px rgba(${C.rgb}, 0.25)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 12px 40px rgba(${C.rgb}, 0.4)`;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 8px 32px rgba(${C.rgb}, 0.25)`;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Car className="w-5 h-5" strokeWidth={2} />
            サービスを見る
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-[14px] font-bold cursor-pointer transition-all duration-300"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: `rgba(${AU.rgb}, 0.3)`,
              borderRightColor: `rgba(${AU.rgb}, 0.3)`,
              borderBottomColor: `rgba(${AU.rgb}, 0.3)`,
              borderLeftColor: `rgba(${AU.rgb}, 0.3)`,
              color: AU.main,
              backgroundColor: `rgba(${AU.rgb}, 0.05)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = AU.main;
              e.currentTarget.style.backgroundColor = `rgba(${AU.rgb}, 0.1)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `rgba(${AU.rgb}, 0.3)`;
              e.currentTarget.style.backgroundColor = `rgba(${AU.rgb}, 0.05)`;
            }}
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2} />
            LINEで相談
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   2. VELVET ROPE — Non-member Banner (TECH cross-sell)
   ═══════════════════════════════════════════ */
function VelvetRopeBanner() {
  return (
    <section className="relative py-10 md:py-16" style={{ backgroundColor: BG.base }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <motion.div
          className="rounded-xl p-6 md:p-8 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(${JADE.rgb},0.08) 0%, rgba(${JADE.rgb},0.02) 100%)`,
            borderWidth: "1px",
            borderStyle: "solid",
            borderTopColor: `rgba(${JADE.rgb},0.25)`,
            borderRightColor: `rgba(${JADE.rgb},0.25)`,
            borderBottomColor: `rgba(${JADE.rgb},0.25)`,
            borderLeftColor: `rgba(${JADE.rgb},0.25)`,
          }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 80% 100% at 0% 50%, rgba(${JADE.rgb},0.06) 0%, transparent 60%)`,
            }}
          />

          <div className="relative z-10">
            {/* Header row */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: `rgba(${JADE.rgb},0.12)` }}
              >
                <Shield size={20} style={{ color: JADE.main }} strokeWidth={2.5} />
              </div>
              <div>
                <p
                  className="font-english font-bold text-[11px] tracking-[0.15em] mb-0.5"
                  style={{ color: JADE.main }}
                >
                  FOR NON-MEMBERS
                </p>
                <p
                  className="font-mincho font-bold text-[15px] md:text-[16px]"
                  style={{ color: "#ffffff" }}
                >
                  まだTECH会員ではないお客様へ
                </p>
              </div>
            </div>

            {/* Body text */}
            <p
              className="text-[13px] md:text-[14px] mb-5"
              style={{ lineHeight: 1.9, color: "rgba(255,255,255,0.6)" }}
            >
              この車両サービスは、
              <span className="font-bold" style={{ color: "#ffffff" }}>
                IT保守（TECH）またはWEB制作をご契約の「会員様限定」
              </span>
              の特別優待メニューです。
              <br className="hidden md:inline" />
              一般のお客様の車両整備・販売は、現在ご紹介のみとさせていただいております。
              <br className="hidden md:inline" />
              NEXT-ONEの「デジタル番頭」サービスにご興味のある方は、まずはTECHページをご覧ください。
            </p>

            {/* CTA */}
            <Link
              to="/tech"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[13px] font-bold transition-all duration-300"
              style={{
                color: "#ffffff",
                backgroundColor: JADE.main,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = JADE.light;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = JADE.main;
              }}
            >
              TECH事業を見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. CONCIERGE MENU — 3 Services
   ═══════════════════════════════════════════ */
function ConciergeMenuSection() {
  const services = [
    {
      icon: Search,
      engLabel: "VEHICLE SALES",
      title: "オークション代行",
      catchphrase: "プロのルートで、最高の一台を。",
      desc: "中古車オークション直送から新車・リース契約の仲介まで。ディーラーを通さない独自ルートで、会員様に最適な一台をお探しします。",
      targetPsych: "「ディーラーより安く、いい車を探してきてよ。」",
      details: [
        "中古車オークション直送",
        "新車・リース契約の仲介",
        "会員特別レートでのご案内",
        "ナンバー登録手続き代行",
      ],
    },
    {
      icon: Wrench,
      engLabel: "INSPECTION",
      title: "車検コンシェルジュ",
      catchphrase: "鍵を渡すだけ。あとはお任せ。",
      desc: "車検の時期管理から、車両の引取り・代車手配・提携工場での整備・納車まで。ムダな整備のカット提案もお任せください。",
      targetPsych: "「車検の手続きが面倒。全部やっておいて。」",
      details: [
        "引取り＆納車対応",
        "代車手配",
        "提携工場での整備手配",
        "ムダな整備のカット提案",
      ],
    },
    {
      icon: Radio,
      engLabel: "INSTALLATION",
      title: "パーツ取付（持込OK）",
      catchphrase: "ネットで買ったドラレコ、付けます。",
      desc: "Amazon・楽天で安く購入したナビ・ドラレコ・タイヤ。「持ち込みお断り」の壁を、会員特権で突破します。",
      targetPsych: "「安く買ったはいいけど、付けてくれる店がない…」",
      details: [
        "ドライブレコーダー取付",
        "カーナビ・バックカメラ",
        "ETC車載器セットアップ",
        "タイヤ交換・持込OK",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-32 relative"
      style={{ backgroundColor: BG.base, ...darkBorder }}
    >
      {/* Purple ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${C.rgb},0.04) 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span
            className="font-english font-bold text-[12px] md:text-[14px] tracking-[0.25em] mb-2 block"
            style={{ color: C.light }}
          >
            CONCIERGE MENU
          </span>
          <h2
            className="font-mincho font-bold mb-4"
            style={{
              fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)",
              color: "#ffffff",
            }}
          >
            会員様限定コンシェルジュ
          </h2>
          <p
            className="text-[14px] md:text-[15px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            「修理工場」ではなく
            <span className="font-bold" style={{ color: AU.main }}>
              「執事」
            </span>
            として、お車のあらゆるお悩みに応えます。
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              className="rounded-xl p-6 md:p-8 relative overflow-hidden group cursor-default flex flex-col"
              style={{
                backgroundColor: BG.card,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderTopColor: `rgba(${C.rgb}, 0.15)`,
                borderRightColor: `rgba(${C.rgb}, 0.15)`,
                borderBottomColor: `rgba(${C.rgb}, 0.15)`,
                borderLeftColor: `rgba(${C.rgb}, 0.15)`,
              }}
              variants={fadeInUp}
              whileHover={cardHover}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at bottom, rgba(${C.rgb}, 0.06) 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Icon + labels */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `rgba(${AU.rgb}, 0.08)` }}
                  >
                    <svc.icon
                      size={24}
                      style={{ color: AU.main }}
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <p
                      className="font-english font-bold text-[11px] tracking-[0.15em]"
                      style={{ color: C.light }}
                    >
                      {svc.engLabel}
                    </p>
                    <h3
                      className="font-mincho font-bold text-[18px] md:text-[20px]"
                      style={{ color: "#ffffff" }}
                    >
                      {svc.title}
                    </h3>
                  </div>
                </div>

                {/* Catchphrase */}
                <p
                  className="text-[15px] md:text-[16px] font-bold mb-3"
                  style={{ color: AU.main }}
                >
                  {svc.catchphrase}
                </p>

                {/* Description */}
                <p
                  className="text-[13px] md:text-[14px] mb-5"
                  style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}
                >
                  {svc.desc}
                </p>

                {/* Details */}
                <ul className="text-[13px] space-y-2.5 mb-5 flex-grow" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {svc.details.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <Check
                        className="w-4 h-4 shrink-0"
                        style={{ color: C.light }}
                        strokeWidth={2.5}
                      />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Target psychology quote */}
                <div
                  className="p-3 rounded-lg mt-auto"
                  style={{
                    backgroundColor: `rgba(${C.rgb}, 0.04)`,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderTopColor: `rgba(${C.rgb}, 0.08)`,
                    borderRightColor: `rgba(${C.rgb}, 0.08)`,
                    borderBottomColor: `rgba(${C.rgb}, 0.08)`,
                    borderLeftColor: `rgba(${C.rgb}, 0.08)`,
                  }}
                >
                  <p
                    className="text-[12px] italic"
                    style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
                  >
                    {svc.targetPsych}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. HOW TO ORDER — 3 Steps (LINE flow)
   ═══════════════════════════════════════════ */
function HowToOrderSection() {
  const steps = [
    {
      num: "01",
      icon: Sparkles,
      title: "困りごとを思いつく",
      desc: "「タイヤ替えたいな」「軽トラ探して」\n何でもOKです。",
    },
    {
      num: "02",
      icon: MessageCircle,
      title: "いつものLINEを開く",
      desc: "TECH顧問契約で普段お使いの\n公式LINEをそのまま使えます。",
    },
    {
      num: "03",
      icon: Truck,
      title: "メッセージを送るだけ",
      desc: "型番とか分からなくてもOK。\n写真を撮って送ってください。",
    },
  ];

  return (
    <section
      id="howto"
      className="py-16 md:py-32 relative"
      style={{ backgroundColor: BG.section, ...darkBorder }}
    >
      {/* Gold ambient glow */}
      <div
        className="absolute bottom-0 left-[10%] w-[400px] h-[400px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${AU.rgb},0.03) 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span
            className="font-english font-bold text-[12px] md:text-[14px] tracking-[0.25em] mb-2 block"
            style={{ color: C.light }}
          >
            HOW TO ORDER
          </span>
          <h2
            className="font-mincho font-bold mb-4"
            style={{
              fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)",
              color: "#ffffff",
            }}
          >
            ご依頼方法
          </h2>
          <p className="text-[14px] md:text-[15px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            システムは不要。いつもの
            <span className="font-bold" style={{ color: AU.main }}>LINE</span>
            で完結します。
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="text-center relative"
              variants={fadeInUp}
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 right-0 w-1/2 h-px pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, rgba(${C.rgb},0.2), rgba(${C.rgb},0.05))`,
                    transform: "translateX(50%)",
                  }}
                />
              )}

              {/* Step number */}
              <div className="relative inline-block mb-5">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                  style={{
                    background: `linear-gradient(135deg, rgba(${C.rgb},0.1) 0%, rgba(${C.rgb},0.03) 100%)`,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderTopColor: `rgba(${C.rgb},0.2)`,
                    borderRightColor: `rgba(${C.rgb},0.2)`,
                    borderBottomColor: `rgba(${C.rgb},0.2)`,
                    borderLeftColor: `rgba(${C.rgb},0.2)`,
                  }}
                >
                  <step.icon size={28} style={{ color: AU.main }} strokeWidth={2} />
                </div>
                <span
                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center font-english font-bold text-[11px]"
                  style={{
                    backgroundColor: C.main,
                    color: "#ffffff",
                  }}
                >
                  {step.num}
                </span>
              </div>

              <h3
                className="font-mincho font-bold text-[16px] md:text-[18px] mb-3"
                style={{ color: "#ffffff" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[13px] md:text-[14px] whitespace-pre-line"
                style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.5)" }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. CTA SECTION — LINE Contact
   ═══════════════════════════════════════════ */
function CTASection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-32 relative"
      style={{ backgroundColor: BG.base, ...darkBorder }}
    >
      {/* Purple ambient glow */}
      <div
        className="absolute top-[20%] left-[15%] w-[400px] h-[400px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${C.rgb},0.05) 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      <motion.div
        className="max-w-3xl mx-auto px-5 sm:px-6 text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span
            className="font-english font-bold text-[12px] md:text-[14px] tracking-[0.25em] block"
            style={{ color: C.light }}
          >
            CONTACT
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="font-mincho font-bold mb-4"
          style={{
            fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)",
            color: "#ffffff",
          }}
        >
          LINEで車担当へ相談
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-[14px] md:text-[15px] mb-10"
          style={{ lineHeight: 1.9, color: "rgba(255,255,255,0.5)" }}
        >
          「ちょっとバンパー擦っちゃった」「変な音がする」など、
          <br className="hidden md:inline" />
          <span className="font-bold" style={{ color: AU.main }}>雑談レベルで構いません。</span>
          写真・動画を送っていただければ診断します。
        </motion.p>

        {/* CTA Card */}
        <motion.div
          variants={fadeInUp}
          className="rounded-xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(${C.rgb},0.06) 0%, rgba(${AU.rgb},0.03) 100%)`,
            borderWidth: "1px",
            borderStyle: "solid",
            borderTopColor: `rgba(${C.rgb}, 0.2)`,
            borderRightColor: `rgba(${C.rgb}, 0.2)`,
            borderBottomColor: `rgba(${C.rgb}, 0.2)`,
            borderLeftColor: `rgba(${C.rgb}, 0.2)`,
          }}
        >
          {/* Glow effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 100%, rgba(${C.rgb}, 0.06) 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            <Car
              className="w-14 h-14 mx-auto mb-6"
              style={{ color: AU.main }}
              strokeWidth={1.5}
            />
            <h3
              className="font-mincho font-bold text-[20px] md:text-[24px] mb-3"
              style={{ color: "#ffffff" }}
            >
              いつものLINEで
              <br className="hidden md:inline" />
              「車の件」とメッセージをください。
            </h3>
            <p
              className="text-[14px] mb-8"
              style={{ lineHeight: 2, color: "rgba(255,255,255,0.5)" }}
            >
              担当者が即座に動きます。
            </p>

            <motion.a
              href="https://lin.ee/ieroOsn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-lg text-[16px] font-bold text-white cursor-pointer transition-all duration-300 relative overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${C.main}, ${C.dark})`,
                boxShadow: `0 8px 32px rgba(${C.rgb}, 0.3)`,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <LineIcon className="w-6 h-6" />
                <span className="text-left">
                  <span className="block text-[10px] opacity-80 leading-none mb-1">
                    TECH会員専用LINE
                  </span>
                  <span className="text-[16px]">LINEで車担当へ相談</span>
                </span>
              </span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700" />
            </motion.a>
          </div>
        </motion.div>

        {/* Micro copy */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-[11px] md:text-[12px]"
          style={{ color: "rgba(255,255,255,0.3)", lineHeight: 1.8 }}
        >
          ※本サービスはTECH事業の顧問契約者様のみご利用いただけます。
          <br className="hidden md:inline" />
          会員でない方は、まず
          <Link
            to="/tech"
            className="underline transition-colors"
            style={{ color: C.light }}
          >
            TECH事業のご案内
          </Link>
          をご覧ください。
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   6. FOOTER
   ═══════════════════════════════════════════ */
function CarFooter() {
  return (
    <footer
      className="pt-8 pb-8 md:pb-10"
      style={{
        backgroundColor: BG.deep,
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: `rgba(${C.rgb}, 0.15)`,
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-5 sm:px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[12px] gap-3"
        style={{ color: "rgba(255,255,255,0.4)" }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <p>&copy; 2026 NEXT-ONE. All Rights Reserved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-1 transition-colors"
          style={{ color: "rgba(255,255,255,0.4)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              "rgba(255,255,255,0.4)";
          }}
        >
          <Home className="w-3 h-3" /> 総合トップへ戻る
        </Link>
      </motion.div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   MAIN — CarPage
   ═══════════════════════════════════════════ */
export function CarPage() {
  usePageMeta({
    title: "CAR | 車両コンシェルジュ | NEXT-ONE",
    description:
      "TECH会員様限定の車両コンシェルジュ。オークション代行、車検コンシェルジュ、パーツ持込取付を特別レートで対応。愛知・尾張エリア。",
  });

  return (
    <div
      className="font-sans antialiased relative"
      style={{ backgroundColor: BG.base, color: "#ffffff" }}
    >
      <SubNav
        divisionLabel="CAR"
        accentColor={C.main}
        navItems={[
          { label: "サービス", sectionId: "services", icon: <Car strokeWidth={2} /> },
          { label: "ご依頼方法", sectionId: "howto", icon: <MessageCircle strokeWidth={2} /> },
        ]}
        ctaLabel="LINE相談"
        ctaSectionId="contact"
        ctaIcon={<MessageCircle strokeWidth={2} />}
      />

      {/* Watermark Logo */}
      <div
        className="absolute pointer-events-none select-none hidden md:block"
        style={{
          right: "5%",
          top: "60vh",
          transform: "translateY(-50%)",
          width: "clamp(240px, 20vw, 360px)",
          zIndex: 10,
        }}
      >
        <motion.div
          className="relative"
          initial={{ x: 80, scale: 0.9 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
        >
          {/* White circle behind the logo */}
          <motion.div
            aria-hidden="true"
            className="absolute rounded-full"
            style={{ width: "75%", height: 0, paddingBottom: "75%", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#ffffff" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
          />
          <motion.img
            src={carLogoImg}
            alt=""
            aria-hidden="true"
            className="w-[80%] h-auto relative z-[1] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
          />
        </motion.div>
      </div>

      <CarHero />
      <VelvetRopeBanner />
      <ConciergeMenuSection />
      <HowToOrderSection />
      <CTASection />
      <CrossLinks currentPage="car" />
      <CarFooter />
    </div>
  );
}