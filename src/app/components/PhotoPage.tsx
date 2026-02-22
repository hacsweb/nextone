import { motion } from "motion/react";
import {
  Camera,
  Check,
  Play,
  Home,
  Instagram,
  Sparkles,
  Images,
  Tag,
  MessageCircle,
  ArrowRight,
  Crown,
  Video,
  Users,
  Aperture,
  AlertTriangle,
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
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const photoLogoImg = ""; // placeholder – original figma:asset removed to fix build
import photoMainImg from "figma:asset/072b1257c4863e04056e09869bb0c5d6ce32f5de.png";
import photoPortraitImg from "figma:asset/3850f33905ba2c238a567a539e4e40bdb85d2c65.png";
import photoOfficeImg from "figma:asset/32aca65795b64a143376778a2eafaf9d087622be.png";
import photoMotionImg from "figma:asset/d950f5443267fbc6c086827af2cf37a7922e7226.png";
import photoIndustrialImg from "figma:asset/fb6c1bbdb084f2bccb0ce2a1538e060439d0c3e3.png";
import photoFactoryImg from "figma:asset/ab9372e73784798572129be5a2f86b01ece95fc4.png";
import photoOfficeGalleryImg from "figma:asset/48ea51f4a8fec99faf01dc565693a9d00904551d.png";
import photoFoodImg from "figma:asset/991195616105d1137a1d117278a3ced166b66021.png";
import photoEventImg from "figma:asset/be3dd8c3c7128387ddf840b811cc88954c7030b8.png";
import photoBrandingImg from "figma:asset/c9de4a6760d9d1ca7a3955a6529a6611a6c4fcd4.png";
import photoMeetingLaughImg from "figma:asset/9aa975f0da19aac119078f8c0c39b22ea5f4ce0a.png";
import photoEngineerFocusImg from "figma:asset/182452dd5a28641232958ba37058238061e31243.png";
import photoWorkerSmileImg from "figma:asset/098a73b3e29d3103fbc8673b57f11a2aa25b0ea1.png";
import photoWelderSparksImg from "figma:asset/9346934c50cd6c39a4d727051e2ad2911812f104.png";
import photoTypingHandsImg from "figma:asset/27bfd66065396493e9cc7f4e4de73350b8846526.png";
import photoHandshakeImg from "figma:asset/f028661394dee4f1125c9b79366e38a3eae66964.png";
import photoCraftsmanHandsImg from "figma:asset/4bcd0a561fffba0240dca4a5cf9deea850b322bd.png";

/* ══════════════════════════════════════════════
   Design Tokens — "Business Documentary" Theme
   ══════════════════════════════════════════════ */
/* Blue accent — professional, trustworthy */
const PK = {
  main: "#1e40af",
  light: "#60a5fa",
  dark: "#1e3a8a",
  rgb: "30, 64, 175",
};
/* Sky-Blue sub-accent */
const PU = {
  main: "#2563eb",
  light: "#93c5fd",
  rgb: "37, 99, 235",
};
/* Gold — for cross-sell / contract highlights */
const AU = {
  main: "#C8B692",
  light: "#E6D8B5",
  dark: "#A89B7A",
  rgb: "200, 182, 146",
};
/* Warm accent for "heat/passion" highlights */
const WARM = {
  main: "#e67e22",
  light: "#f39c12",
  rgb: "230, 126, 34",
};

/* Dark backgrounds */
const BG = {
  base: "#1a1a1a",
  deep: "#111111",
  black: "#0a0a0a",
  card: "rgba(255,255,255,0.03)",
  section: "#141414",
};

const darkBorder: React.CSSProperties = {
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: "rgba(255,255,255,0.05)",
};

/* ─── Gallery Images ─── */
const galleryImages = {
  main: photoMainImg,
  portrait: photoPortraitImg,
  office: photoOfficeImg,
  event: photoEventImg,
  motion: photoMotionImg,
  industrial: photoIndustrialImg,
  factory: photoFactoryImg,
  officeGallery: photoOfficeGalleryImg,
  food: photoFoodImg,
  branding: photoBrandingImg,
};

/* ─── People-focused Unsplash photos ─── */
const PEOPLE = {
  workerSmile: photoWorkerSmileImg,
  meetingLaugh: photoMeetingLaughImg,
  craftsmanHands: photoCraftsmanHandsImg,
  typingHands: photoTypingHandsImg,
  engineerFocus: photoEngineerFocusImg,
  welderSparks: photoWelderSparksImg,
  constructionPassion: "https://images.unsplash.com/photo-1770822662831-c361f15790ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2VyJTIwcGFzc2lvbmF0ZSUyMGRlZGljYXRpb258ZW58MXx8fHwxNzcxNDY2NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  handshake: photoHandshakeImg,
  teamCollab: "https://images.unsplash.com/photo-1758691736804-4e88c52ad58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMG1lZXRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzE0NjY1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

/* ═══════════════════════════════════════════
   1. HERO — Business Documentary
   ═══════════════════════════════════════════ */
function PhotoHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[65vh] flex items-center justify-center overflow-hidden text-white"
      style={{
        paddingTop: "80px",
        paddingBottom: "48px",
        background: "linear-gradient(160deg, #020617 0%, #0a1628 40%, #0c1a30 100%)",
      }}
    >
      {/* Bokeh Layer */}
      <div className="absolute inset-0 pointer-events-none" style={{ mixBlendMode: "screen", clipPath: "inset(80px 0 0 0)" }}>
        <svg viewBox="0 0 1200 800" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bokehPk" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bokehPu" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.25" />
              <stop offset="40%" stopColor="#2563eb" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bokehW" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="40%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bokehRing" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="60%" stopColor="white" stopOpacity="0" />
              <stop offset="75%" stopColor="white" stopOpacity="0.12" />
              <stop offset="88%" stopColor="white" stopOpacity="0.04" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="120" cy="140" r="90" fill="url(#bokehPk)" opacity="0.5" />
          <circle cx="50" cy="80" r="55" fill="url(#bokehPu)" opacity="0.5" />
          <circle cx="200" cy="60" r="40" fill="url(#bokehRing)" opacity="0.6" />
          <circle cx="1050" cy="120" r="160" fill="url(#bokehPk)" opacity="0.4" />
          <circle cx="1080" cy="100" r="70" fill="url(#bokehW)" opacity="0.5" />
          <circle cx="980" cy="80" r="45" fill="url(#bokehPu)" opacity="0.4" />
          <circle cx="1140" cy="180" r="35" fill="url(#bokehRing)" opacity="0.6" />
          <circle cx="80" cy="650" r="110" fill="url(#bokehPu)" opacity="0.3" />
          <circle cx="180" cy="720" r="60" fill="url(#bokehW)" opacity="0.35" />
          <circle cx="30" cy="580" r="45" fill="url(#bokehRing)" opacity="0.4" />
          <circle cx="1100" cy="680" r="80" fill="url(#bokehPk)" opacity="0.25" />
          <circle cx="1020" cy="740" r="50" fill="url(#bokehPu)" opacity="0.3" />
          <circle cx="350" cy="90" r="28" fill="url(#bokehW)" opacity="0.25" />
          <circle cx="850" cy="60" r="32" fill="url(#bokehPk)" opacity="0.2" />
          <circle cx="700" cy="700" r="35" fill="url(#bokehW)" opacity="0.15" />
          <circle cx="550" cy="750" r="42" fill="url(#bokehRing)" opacity="0.25" />
          <circle cx="280" cy="200" r="14" fill="url(#bokehPk)" opacity="0.3" />
          <circle cx="920" cy="250" r="18" fill="url(#bokehPu)" opacity="0.2" />
          <circle cx="440" cy="180" r="4" fill="#60a5fa" opacity="0.15" />
          <circle cx="660" cy="130" r="3" fill="white" opacity="0.1" />
          <circle cx="300" cy="500" r="3.5" fill="#93c5fd" opacity="0.1" />
          <circle cx="580" cy="650" r="4" fill="#60a5fa" opacity="0.08" />
        </svg>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-[5%] right-[8%] w-[350px] h-[350px] pointer-events-none" style={{ background: `radial-gradient(circle, rgba(${PK.rgb},0.1) 0%, transparent 70%)`, filter: "blur(50px)", mixBlendMode: "screen" }} />
      <div className="absolute bottom-[10%] left-[5%] w-[280px] h-[280px] pointer-events-none" style={{ background: `radial-gradient(circle, rgba(${PU.rgb},0.07) 0%, transparent 70%)`, filter: "blur(50px)", mixBlendMode: "screen" }} />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 75% 65% at 50% 50%, transparent 30%, rgba(2,6,23,0.6) 100%)" }} />

      {/* Corner frames */}
      <div className="absolute top-6 left-6 w-12 h-12 md:top-10 md:left-10 md:w-20 md:h-20" style={{ borderLeftWidth: "2px", borderLeftStyle: "solid", borderLeftColor: `rgba(${PK.rgb},0.2)`, borderTopWidth: "2px", borderTopStyle: "solid", borderTopColor: `rgba(${PK.rgb},0.2)` }} />
      <div className="absolute bottom-6 right-6 w-12 h-12 md:bottom-10 md:right-10 md:w-20 md:h-20" style={{ borderRightWidth: "2px", borderRightStyle: "solid", borderRightColor: `rgba(${PK.rgb},0.2)`, borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: `rgba(${PK.rgb},0.2)` }} />

      <div className="relative z-20 container mx-auto px-5 sm:px-6 text-center">
        <motion.span
          className="font-bold tracking-[0.25em] text-[12px] md:text-[14px] font-english mb-3 md:mb-4 block"
          style={{ color: PK.light }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
        >
          BUSINESS DOCUMENTARY — YOUR STORY, YOUR HEAT
        </motion.span>
        <motion.h1
          className="font-mincho font-bold leading-tight mb-4 md:mb-6"
          style={{ fontSize: "clamp(1.625rem, -0.4rem + 8.6vw, 3.75rem)", textShadow: "0 0 40px rgba(10,0,15,0.5)" }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <span className="hidden sm:inline">
            御社の<span style={{ color: WARM.light }}>「熱量」</span>まで、
            <br />
            写っていますか？
          </span>
          <span className="sm:hidden">
            御社の
            <br />
            <span style={{ color: WARM.light }}>「熱量」</span>まで、
            <br />
            写っていますか？
          </span>
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mb-8 md:mb-10 text-[14px] sm:text-[15px] md:text-[16px]"
          style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}
          variants={heroChild}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <span className="hidden sm:inline">
            求職者が見ているのは、立派な設備より、働く人の<span className="font-bold" style={{ color: "#ffffff" }}>「顔」</span>です。
            <br />
            綺麗なだけの写真は撮りません。御社の現場にある
            <br />
            <span className="font-bold" style={{ color: "#ffffff" }}>「泥臭いカッコよさ」</span>や<span className="font-bold" style={{ color: "#ffffff" }}>「プロの空気感」</span>を、そのまま切り取ります。
          </span>
          <span className="sm:hidden">
            求職者が見ているのは、立派な設備より、働く人の<span className="font-bold" style={{ color: "#ffffff" }}>「顔」</span>です。綺麗なだけの写真は撮りません。御社の<span className="font-bold" style={{ color: "#ffffff" }}>「泥臭いカッコよさ」</span>を、そのまま切り取ります。
          </span>
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={heroChild}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#gallery"
            onClick={(e) => { e.preventDefault(); scrollTo("gallery"); }}
            className="inline-block px-6 sm:px-8 py-3.5 rounded-sm font-bold text-[14px] cursor-pointer"
            style={{ backgroundColor: PK.main, color: "#fff", boxShadow: `0 0 24px rgba(${PK.rgb}, 0.3)` }}
            whileHover={{ scale: 1.05, boxShadow: `0 0 36px rgba(${PK.rgb}, 0.5)` }}
            whileTap={{ scale: 0.97 }}
          >
            GALLERYを見る
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            className="inline-block px-6 sm:px-8 py-3.5 rounded-sm font-bold text-[14px] cursor-pointer"
            style={{ borderWidth: "1px", borderStyle: "solid", borderTopColor: PK.light, borderRightColor: PK.light, borderBottomColor: PK.light, borderLeftColor: PK.light, color: PK.light, backgroundColor: `rgba(${PK.rgb}, 0)` }}
            whileHover={{ scale: 1.05, backgroundColor: `rgba(${PK.rgb}, 0.12)` }}
            whileTap={{ scale: 0.97 }}
          >
            撮影の相談・空き状況確認
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   2. Concept — "Business Documentary" Philosophy
   ═══════════════════════════════════════════ */
function ConceptSection() {
  return (
    <section id="concept" className="py-16 md:py-40 relative" style={{
      backgroundColor: BG.base,
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: "rgba(255,255,255,0.05)",
      borderRightColor: "rgba(255,255,255,0.05)",
      borderBottomColor: "rgba(255,255,255,0.05)",
      borderLeftColor: "rgba(255,255,255,0.05)",
    }}>
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none" style={{ background: `radial-gradient(circle, rgba(${PU.rgb},0.04) 0%, transparent 70%)`, filter: "blur(80px)" }} />
      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInLeft}>
            <span className="font-bold tracking-[0.2em] text-[12px] md:text-[14px] font-english mb-2 block" style={{ color: PK.main }}>
              BUSINESS DOCUMENTARY
            </span>
            <h2 className="font-mincho font-bold mb-5 md:mb-6 leading-snug" style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}>
              「フリー素材」の笑顔では、
              <br className="hidden sm:block" />
              御社の<span style={{ color: WARM.light }}>熱量</span>は伝わりません。
            </h2>
            <p className="mb-6 text-[15px]" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>
              <span className="hidden md:inline">
                どこかで見たようなフリー素材の写真を使っていませんか？
                <br />
                NEXT-ONEが撮るのは、ただの「記録写真」ではありません。
                <br />
                働く人の汗、真剣な眼差し、職場の空気——
                <br />
                仕事への<span className="font-bold" style={{ color: "#ffffff" }}>「情熱」</span>そのものを切り取ります。
              </span>
              <span className="md:hidden">
                どこかで見たようなフリー素材の写真を使っていませんか？NEXT-ONEが撮るのは、ただの「記録写真」ではありません。働く人の汗、真剣な眼差し、職場の空気——仕事への<span className="font-bold" style={{ color: "#ffffff" }}>「情熱」</span>そのものを切り取ります。
              </span>
            </p>
            <p className="text-[15px]" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>
              <span className="font-bold px-1 rounded-sm" style={{ backgroundColor: `rgba(${PK.rgb}, 0.12)`, color: PK.light }}>
                御社の現場にある「泥臭いカッコよさ」を、鮮やかなフルカラーで。
              </span>
            </p>
          </motion.div>
          <motion.div className="relative mb-8 md:mb-0" variants={fadeInRight}>
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl group" style={{ boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(${PK.rgb},0.06)` }}>
              <img
                src={galleryImages.main}
                alt="ビジネス・ドキュメンタリー撮影"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-700" />
              <span className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-[11px] md:text-[12px] tracking-widest text-white/70 z-10 font-english">
                BUSINESS DOCUMENTARY
              </span>
            </div>
            <div
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 p-3 sm:p-4 z-10 max-w-[200px] sm:max-w-none rounded-sm"
              style={{
                backgroundColor: "rgba(12,12,16,0.9)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                borderLeftWidth: "4px",
                borderLeftStyle: "solid",
                borderLeftColor: PK.main,
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: `rgba(${PK.rgb},0.15)`,
                borderRightWidth: "1px",
                borderRightStyle: "solid",
                borderRightColor: `rgba(${PK.rgb},0.15)`,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: `rgba(${PK.rgb},0.15)`,
              }}
            >
              <p className="text-[12px] font-bold" style={{ color: PK.light }}>NEXT-ONE PHOTO</p>
              <p className="text-[13px] sm:text-[14px] font-bold" style={{ color: "#ffffff" }}>
                AIレタッチで翌日納品可能
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. Service Menu — Target-specific naming
   ═══════════════════════════════════════════ */
function ServiceMenuSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="service" className="py-16 md:py-40 relative" style={{
      backgroundColor: BG.deep,
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: "rgba(255,255,255,0.05)",
      borderRightColor: "rgba(255,255,255,0.05)",
      borderBottomColor: "rgba(255,255,255,0.05)",
      borderLeftColor: "rgba(255,255,255,0.05)",
    }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          className="text-center mb-10 md:mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="font-bold tracking-[0.2em] text-[12px] md:text-[14px] font-english mb-2 block" style={{ color: PK.main }}>
            SERVICE MENU
          </span>
          <h2 className="font-mincho font-bold" style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}>
            ビジネス撮影メニュー
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* ビジネス・ポートレート */}
          <motion.div
            className="p-0 rounded-xl overflow-hidden group"
            style={{ backgroundColor: BG.card, borderWidth: "1px", borderStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightColor: "rgba(255,255,255,0.06)", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftColor: "rgba(255,255,255,0.06)" }}
            variants={fadeInUp}
            whileHover={cardHover}
          >
            <div className="h-40 sm:h-48 relative overflow-hidden">
              <img src={galleryImages.portrait} alt="ビジネス・ポートレート撮影" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-english tracking-widest text-[16px] sm:text-[20px] z-10">PORTRAIT</span>
            </div>
            <div className="p-5 sm:p-6 md:p-10">
              <h3 className="font-bold text-[16px] sm:text-[18px] mb-3 pl-3" style={{ color: "#ffffff", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: PK.main }}>
                ビジネス・ポートレート
              </h3>
              <p className="text-[13px] sm:text-[14px] mb-4" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                社長・士業・フリーランスの<span className="font-bold" style={{ color: "#ffffff" }}>「顔」</span>を撮ります。
                <br className="hidden md:inline" />
                HPの代表挨拶、名刺、SNSアイコンに。
              </p>
              <ul className="text-[12px] space-y-1 mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
                <li className="flex items-center gap-1"><Check className="w-3 h-3 shrink-0" style={{ color: PK.main }} /> 信頼感を伝える構図</li>
                <li className="flex items-center gap-1"><Check className="w-3 h-3 shrink-0" style={{ color: PK.main }} /> ビジネスシーンに特化</li>
              </ul>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
                className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-wide transition-all duration-300"
                style={{ color: PK.light, borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${PK.rgb},0.4)` }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = PK.light; e.currentTarget.style.borderColor = `rgba(${PK.rgb},0.4)`; }}
              >
                撮影を相談する <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* 採用・広報パック */}
          <motion.div
            className="p-0 rounded-xl overflow-hidden group"
            style={{ backgroundColor: BG.card, borderWidth: "1px", borderStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", borderRightColor: "rgba(255,255,255,0.06)", borderBottomColor: "rgba(255,255,255,0.06)", borderLeftColor: "rgba(255,255,255,0.06)" }}
            variants={fadeInUp}
            whileHover={cardHover}
          >
            <div className="h-40 sm:h-48 relative overflow-hidden">
              <img src={galleryImages.office} alt="採用・広報パック撮影" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-english tracking-widest text-[16px] sm:text-[20px] z-10">RECRUITMENT</span>
            </div>
            <div className="p-5 sm:p-6 md:p-10">
              <h3 className="font-bold text-[16px] sm:text-[18px] mb-3 pl-3" style={{ color: "#ffffff", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: PU.main }}>
                採用・広報パック
              </h3>
              <p className="text-[13px] sm:text-[14px] mb-4" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                社内風景・作業中の様子・集合写真を網羅。
                <br className="hidden md:inline" />
                企業の「空気感」と「人の温度」を伝えます。
              </p>
              <ul className="text-[12px] space-y-1 mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
                <li className="flex items-center gap-1"><Check className="w-3 h-3 shrink-0" style={{ color: PU.main }} /> 働く人の表情にフォーカス</li>
                <li className="flex items-center gap-1"><Check className="w-3 h-3 shrink-0" style={{ color: PU.main }} /> 採用サイト・求人広告に最適</li>
              </ul>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
                className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-wide transition-all duration-300"
                style={{ color: PK.light, borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${PK.rgb},0.4)` }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = PK.light; e.currentTarget.style.borderColor = `rgba(${PK.rgb},0.4)`; }}
              >
                撮影を相談する <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* 動画＋写真パック */}
          <motion.div
            className="p-0 rounded-xl overflow-hidden group sm:col-span-2 md:col-span-1"
            style={{ backgroundColor: `rgba(${PK.rgb},0.03)`, borderWidth: "1px", borderStyle: "solid", borderTopColor: `rgba(${PK.rgb},0.12)`, borderRightColor: `rgba(${PK.rgb},0.12)`, borderBottomColor: `rgba(${PK.rgb},0.12)`, borderLeftColor: `rgba(${PK.rgb},0.12)` }}
            variants={fadeInUp}
          >
            <div className="h-40 sm:h-48 flex items-center justify-center relative overflow-hidden">
              <img src={galleryImages.motion} alt="動画＋写真パック" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              <Play className="w-10 h-10 text-white relative z-10" />
              <span className="absolute bottom-4 text-white font-english tracking-widest text-[14px] z-10">MOVIE + PHOTO</span>
            </div>
            <div className="p-5 sm:p-6 md:p-10">
              <h3 className="font-bold text-[16px] sm:text-[18px] mb-3 pl-3" style={{ color: "#ffffff", borderLeftWidth: "4px", borderLeftStyle: "solid", borderLeftColor: PK.main }}>
                動画＋写真パック
              </h3>
              <p className="text-[13px] sm:text-[14px] mb-4" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                YouTubeやSNS用の動画素材も同時に撮影。
                <br className="hidden md:inline" />
                AIモーション変換で、静止画も「動く」コンテンツに。
              </p>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="text-[12px] px-2 py-1 rounded-sm font-bold" style={{ color: "#fff", background: `linear-gradient(135deg, ${PK.main}, ${PU.main})` }}>
                  写真も動画も一気に
                </span>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-wide transition-all duration-300"
                  style={{ color: PK.light, borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${PK.rgb},0.3)` }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = PK.light; e.currentTarget.style.borderColor = `rgba(${PK.rgb},0.3)`; }}
                >
                  相談する <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. Gallery — Full-Color, People-First
   構成比: 4割=表情, 3割=手元, 3割=空間
   ═══════════════════════════════════════════ */
function GallerySection() {
  const works = [
    /* ── 働く人の表情 (4割) ── */
    { src: PEOPLE.workerSmile, alt: "ヘルメット姿の笑顔", label: "現場の笑顔 (小牧市)", category: "EXPRESSION", tall: true },
    { src: PEOPLE.meetingLaugh, alt: "打ち合わせの談笑", label: "チームの談笑風景", category: "EXPRESSION", tall: false },
    { src: PEOPLE.engineerFocus, alt: "真剣な眼差しのエンジニア", label: "プロの眼差し (一宮市)", category: "EXPRESSION", tall: false },
    { src: PEOPLE.welderSparks, alt: "溶接の火花と職人", label: "溶接職人のドキュメンタリー", category: "EXPRESSION", tall: true },
    /* ── 手元のアップ (3割) ── */
    { src: PEOPLE.craftsmanHands, alt: "職人の手元", label: "職人の手 — 技の記録", category: "HANDS", tall: false },
    { src: PEOPLE.typingHands, alt: "キーボードを叩く指", label: "デスクワークの真剣", category: "HANDS", tall: true },
    { src: PEOPLE.handshake, alt: "握手する瞬間", label: "信頼の握手", category: "HANDS", tall: false },
    /* ── 空間・建物 (3割) ── */
    { src: galleryImages.officeGallery, alt: "オフィス空間", label: "オフィス空間撮影", category: "FACILITY", tall: true },
    { src: galleryImages.food, alt: "飲食店メニュー", label: "飲食店メニュー撮影", category: "FOOD", tall: false },
    { src: galleryImages.event, alt: "企業イベント", label: "周年記念イベント", category: "EVENT", tall: true },
  ];

  return (
    <section id="gallery" className="py-16 md:py-40 relative" style={{
      backgroundColor: BG.black,
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: "rgba(255,255,255,0.05)",
      borderRightColor: "rgba(255,255,255,0.05)",
      borderBottomColor: "rgba(255,255,255,0.05)",
      borderLeftColor: "rgba(255,255,255,0.05)",
    }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="font-bold tracking-[0.2em] text-[12px] md:text-[14px] font-english mb-2 block" style={{ color: PK.main }}>
            WORKS — FULL COLOR
          </span>
          <h2 className="font-mincho font-bold" style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}>
            その<span style={{ color: WARM.light }}>熱量</span>を、永遠の資産に。
          </h2>
          <p className="mt-2 text-[14px] md:text-[15px]" style={{ color: "rgba(255,255,255,0.45)" }}>
            愛知県内の中小企業様を中心に撮影。肌の色、作業着の汚れ、機械の油の光沢——鮮やかなフルカラーで。
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 768: 3 }}>
            <Masonry gutter="8px" className="sm:[&>*]:gap-4">
              {works.map((item) => (
                <div
                  key={item.label}
                  className="relative group cursor-pointer rounded-sm overflow-hidden"
                  style={{
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 1px 6px rgba(0,0,0,0.3)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderTopColor: "rgba(255,255,255,0.04)",
                    borderRightColor: "rgba(255,255,255,0.04)",
                    borderBottomColor: "rgba(255,255,255,0.04)",
                    borderLeftColor: "rgba(255,255,255,0.04)",
                    transition: "box-shadow 0.6s cubic-bezier(.25,.8,.25,1), border-color 0.6s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 32px rgba(${PK.rgb},0.15), 0 0 0 1px ${PK.main}`;
                    e.currentTarget.style.borderColor = PK.main;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4), 0 1px 6px rgba(0,0,0,0.3)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                  }}
                >
                  <div className="overflow-hidden relative">
                    {/* Full-color display: NO desaturation, NO monochrome */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full block transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-110 object-cover"
                      style={{ aspectRatio: item.tall ? "3 / 4" : "4 / 3" }}
                    />
                    {/* Desktop overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500 hidden md:block" />
                    <div className="absolute inset-0 flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:flex">
                      <div
                        className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500"
                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)", margin: "-1rem", padding: "2.5rem 1rem 1rem" }}
                      >
                        <span className="font-english text-[10px] tracking-[0.2em] block mb-1" style={{ color: PK.light }}>{item.category}</span>
                        <span className="text-white text-[13px] font-bold block">{item.label}</span>
                      </div>
                    </div>
                    {/* Mobile label */}
                    <div className="md:hidden absolute inset-x-0 bottom-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)", padding: "1.5rem 0.5rem 0.4rem" }}>
                      <span className="font-english text-[8px] tracking-[0.15em] block mb-0.5" style={{ color: PK.light }}>{item.category}</span>
                      <span className="text-white text-[11px] font-bold block">{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>

        <motion.div
          className="text-center mt-10 md:mt-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-bold transition-colors pb-1 text-[13px] md:text-[16px]"
            style={{ color: PK.light, borderBottomWidth: "2px", borderBottomStyle: "solid", borderBottomColor: PK.light }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = PK.light; e.currentTarget.style.borderColor = PK.light; }}
          >
            <Instagram className="w-4 h-4 mr-2" /> Instagramでポートフォリオを見る
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. Pricing — Updated Plan Names
   ═══════════════════════════════════════════ */
function PricingSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="price" className="py-16 md:py-40 relative" style={{
      backgroundColor: BG.base,
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: "rgba(255,255,255,0.05)",
      borderRightColor: "rgba(255,255,255,0.05)",
      borderBottomColor: "rgba(255,255,255,0.05)",
      borderLeftColor: "rgba(255,255,255,0.05)",
    }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          className="text-center mb-10 md:mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="font-bold tracking-[0.2em] text-[12px] md:text-[14px] font-english mb-2 block" style={{ color: PK.main }}>
            PRICING
          </span>
          <h2 className="font-mincho font-bold mb-4" style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}>
            撮影料金
          </h2>
          <p className="text-[14px] md:text-[16px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span className="font-bold" style={{ color: PK.light }}>「全データお渡し」</span>が他社との圧倒的な違い。
            <br className="hidden md:inline" />
            目的に応じたシンプルな3プランをご用意しました。
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-stretch justify-center gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* ── ビジネス・ポートレート ── */}
          <motion.div
            className="w-full lg:w-1/3 rounded-xl p-6 md:p-10 flex flex-col order-2 lg:order-1"
            style={{
              backgroundColor: BG.card,
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: "rgba(156,163,175,0.2)",
              borderRightColor: "rgba(156,163,175,0.2)",
              borderBottomColor: "rgba(156,163,175,0.2)",
              borderLeftColor: "rgba(156,163,175,0.2)",
            }}
            variants={fadeInUp}
            whileHover={cardHover}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(156,163,175,0.1)" }}>
                <Users className="w-5 h-5" style={{ color: "rgba(255,255,255,0.5)" }} />
              </div>
              <div>
                <h3 className="font-english font-bold text-[18px] tracking-wider" style={{ color: "#ffffff" }}>PORTRAIT</h3>
                <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.45)" }}>ビジネス・ポートレート</p>
              </div>
            </div>
            <p className="text-[12px] mt-2 mb-4" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              社長・士業・フリーランスの「顔」を撮ります。
            </p>
            <div className="text-center my-5 pb-5" style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgba(255,255,255,0.06)" }}>
              <span className="font-mincho font-bold text-[36px]" style={{ color: "#ffffff" }}>35,000</span>
              <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                円<span className="text-[12px]">（税別）</span>
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>税込 38,500円</p>
            </div>
            <ul className="space-y-3 text-[14px] mb-6 flex-grow" style={{ color: "rgba(255,255,255,0.65)" }}>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "rgba(156,163,175,0.6)" }} />1時間撮影 (スタジオ/出張)</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "rgba(156,163,175,0.6)" }} />レタッチ済みデータ 5カット</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "rgba(156,163,175,0.6)" }} />HPの代表挨拶、SNSアイコンに</li>
            </ul>
            <p className="text-[12px] mb-5 p-3 rounded-lg" style={{ color: "rgba(255,255,255,0.55)", backgroundColor: "rgba(255,255,255,0.03)", lineHeight: 1.7 }}>
              スマホの自撮りとは<span className="font-bold" style={{ color: "#ffffff" }}>「信頼感」</span>が違います。
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full py-3 text-center text-[14px] font-bold transition-colors mt-auto cursor-pointer rounded-lg"
              style={{ borderWidth: "1px", borderStyle: "solid", borderTopColor: "rgba(156,163,175,0.2)", borderRightColor: "rgba(156,163,175,0.2)", borderBottomColor: "rgba(156,163,175,0.2)", borderLeftColor: "rgba(156,163,175,0.2)", color: "rgba(255,255,255,0.6)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = PK.main; e.currentTarget.style.color = PK.light; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(156,163,175,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
            >
              相談する
            </button>
          </motion.div>

          {/* ── 採用・広報パック 👑 ── */}
          <motion.div
            className="w-full lg:w-1/3 rounded-xl p-8 md:p-12 relative transform lg:-translate-y-4 z-10 flex flex-col order-1 lg:order-2"
            style={{
              backgroundColor: `rgba(${PK.rgb}, 0.04)`,
              borderWidth: "2px",
              borderStyle: "solid",
              borderTopColor: PK.main,
              borderRightColor: PK.main,
              borderBottomColor: PK.main,
              borderLeftColor: PK.main,
              boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px 0px rgba(${PK.rgb}, 0.08)`,
            }}
            variants={fadeInUp}
            whileHover={{
              y: -10,
              boxShadow: `0 24px 70px -4px rgba(${PK.rgb}, 0.2), 0 0 0px 0px rgba(0,0,0,0)`,
              transition: { duration: 0.3 },
            }}
          >
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-[12px] font-bold tracking-wider shadow-md flex items-center gap-1.5 rounded-sm"
              style={{ backgroundColor: PK.main, color: "#fff" }}
            >
              <Crown className="w-3.5 h-3.5" /> 人気No.1
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `rgba(${PK.rgb}, 0.12)` }}>
                <Camera className="w-5 h-5" style={{ color: PK.light }} />
              </div>
              <div>
                <h3 className="font-english font-bold text-[20px] tracking-wider" style={{ color: "#ffffff" }}>BUSINESS</h3>
                <p className="text-[12px]" style={{ color: PK.light }}>採用・広報パック</p>
              </div>
            </div>
            <p className="text-[12px] mt-2 mb-4" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
              社内風景・作業中の様子・集合写真を網羅。
            </p>
            <div className="text-center my-5 pb-5" style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${PK.rgb}, 0.15)` }}>
              <span className="font-mincho font-bold text-[48px]" style={{ color: PK.light }}>55,000</span>
              <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                円<span className="text-[12px]">（税別）</span>
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>税込 60,500円</p>
            </div>
            <ul className="space-y-3 text-[15px] mb-6 flex-grow" style={{ color: "rgba(255,255,255,0.8)" }}>
              <li className="flex items-start gap-2 pb-3 font-bold" style={{ color: "#fff", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${PK.rgb}, 0.08)` }}>
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: PK.light }} />
                半日 (3〜4h) 撮り��題
              </li>
              <li className="flex items-start gap-2 pb-3 font-bold" style={{ color: "#fff", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${PK.rgb}, 0.08)` }}>
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: PK.light }} />
                全データお渡し (50枚〜)
              </li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: PK.light }} />AIレタッチ済み</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: PK.light }} />出張費コミコミ (尾張エリア)</li>
            </ul>
            <p className="text-[13px] mb-5 p-3 rounded-lg" style={{ color: "rgba(255,255,255,0.7)", backgroundColor: `rgba(${PK.rgb}, 0.06)`, lineHeight: 1.7, borderWidth: "1px", borderStyle: "solid", borderTopColor: `rgba(${PK.rgb}, 0.12)`, borderRightColor: `rgba(${PK.rgb}, 0.12)`, borderBottomColor: `rgba(${PK.rgb}, 0.12)`, borderLeftColor: `rgba(${PK.rgb}, 0.12)` }}>
              時間内なら、建物も人も何枚でも撮影OK。
              <br />
              <span className="font-bold" style={{ color: PK.light }}>素材不足を一気に解消</span>します。
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full py-4 text-center text-[16px] font-bold hover:opacity-90 transition-colors shadow-lg mt-auto relative overflow-hidden group cursor-pointer rounded-lg"
              style={{ backgroundColor: PK.main, color: "#fff" }}
            >
              <span className="relative z-10">このプランで相談</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-500" />
            </button>
          </motion.div>

          {/* ── 動画＋写真パック ── */}
          <motion.div
            className="w-full lg:w-1/3 rounded-xl p-6 md:p-10 flex flex-col order-3 relative overflow-hidden"
            style={{
              backgroundColor: "rgba(20,20,26,0.95)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: `rgba(${PU.rgb}, 0.3)`,
              borderRightColor: `rgba(${PU.rgb}, 0.3)`,
              borderBottomColor: `rgba(${PU.rgb}, 0.3)`,
              borderLeftColor: `rgba(${PU.rgb}, 0.3)`,
            }}
            variants={fadeInUp}
            whileHover={cardHover}
          >
            <div className="absolute top-0 right-0 px-3 py-1 text-[10px] font-bold tracking-wider rounded-bl-lg" style={{ background: `linear-gradient(135deg, ${PK.main}, ${PU.main})`, color: "#fff" }}>
              動画も写真も
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `rgba(${PU.rgb}, 0.1)` }}>
                <Video className="w-5 h-5" style={{ color: PU.light }} />
              </div>
              <div>
                <h3 className="font-english font-bold text-[20px] tracking-wider" style={{ color: "#ffffff" }}>MOVIE</h3>
                <p className="text-[12px]" style={{ color: PU.light }}>動画＋写真パック</p>
              </div>
            </div>
            <p className="text-[12px] mt-2 mb-4" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              YouTubeやSNS用の動画素材も同時に。
            </p>
            <div className="text-center my-5 pb-5" style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: `rgba(${PU.rgb}, 0.15)` }}>
              <span className="font-mincho font-bold text-[36px]" style={{ color: PU.light }}>120,000</span>
              <span className="text-[14px] ml-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                円<span className="text-[12px]">（税別）</span>
              </span>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>税込 132,000円</p>
            </div>
            <ul className="space-y-3 text-[14px] mb-6 flex-grow" style={{ color: "rgba(255,255,255,0.65)" }}>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: PU.main }} />1日撮影 (写真+動画)</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: PU.main }} />採用動画 (1分) 編集込み</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: PU.main }} />全写真データお渡し</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: PU.main }} />ドローン空撮オプション</li>
            </ul>
            <p className="text-[12px] mb-5 p-3 rounded-lg" style={{ color: "rgba(255,255,255,0.5)", backgroundColor: `rgba(${PU.rgb}, 0.05)`, lineHeight: 1.7 }}>
              YouTubeやSNS用の動画素材を一気に撮影。
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full py-3 text-center text-[14px] font-bold transition-colors cursor-pointer rounded-lg"
              style={{ backgroundColor: PU.main, color: "#fff" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = PU.light; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = PU.main; }}
            >
              相談する
            </button>
          </motion.div>
        </motion.div>

        {/* Notes — Polite Exclusion */}
        <motion.div
          className="mt-8 md:mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div
            className="max-w-3xl mx-auto p-5 md:p-6 rounded-xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: `rgba(${WARM.rgb},0.15)`,
              borderRightColor: `rgba(${WARM.rgb},0.15)`,
              borderBottomColor: `rgba(${WARM.rgb},0.15)`,
              borderLeftColor: `rgba(${WARM.rgb},0.15)`,
            }}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: WARM.main }} />
              <div>
                <p className="text-[13px] font-bold mb-2" style={{ color: WARM.light }}>
                  撮影ジャンルについて
                </p>
                <p className="text-[12px] md:text-[13px]" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                  NEXT-ONEは<span className="font-bold" style={{ color: "#ffffff" }}>「ビジネス・広報写真」の専門店</span>です。
                  <br className="hidden md:inline" />
                  七五三・成人式・ウェディング等の記念撮影は、提携する写真館をご紹介する場合がございます。
                  <br className="hidden md:inline" />
                  私たちは、<span className="font-bold" style={{ color: PK.light }}>「ビジネスで勝つための写真」</span>に全力を注ぎます。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   6. Cross-sell Banner — PHOTO × WEB (Warm Tone)
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
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(135deg, rgba(${AU.rgb}, 0.06) 0%, transparent 50%, rgba(${AU.rgb}, 0.03) 100%)` }} />

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Aperture className="w-5 h-5" style={{ color: PK.light }} />
              <span className="font-bold tracking-[0.1em] text-[13px] md:text-[15px]" style={{ color: AU.light }}>
                写真とHPは「温度」を合わせましょう
              </span>
            </div>
            <h3 className="font-mincho font-bold mb-4 md:mb-5" style={{ color: "#ffffff", fontSize: "clamp(1.25rem, 0.6rem + 2.5vw, 1.875rem)" }}>
              どんなに良い写真も、
              <br className="sm:hidden" />
              HPのデザインと合わなければ<span style={{ color: AU.light }}>台無し</span>です。
            </h3>
            <p className="text-[14px] md:text-[15px] max-w-2xl mx-auto mb-4" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
              <span className="hidden sm:inline">
                NEXT-ONEなら、WEB制作と撮影をワンストップで担当。
                <br />
                御社のブランドイメージを、写真とデザインの両面から統一します。
              </span>
              <span className="sm:hidden">
                NEXT-ONEなら、WEB制作と撮影をワンストップで担当。御社のブランドイメージを統一します。
              </span>
            </p>
            <p className="text-[13px] mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              一緒に作れば、もっと良くなる。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/web"
                className="inline-flex items-center justify-center gap-1.5 px-6 sm:px-8 py-3 font-bold text-[14px] transition-colors rounded-lg"
                style={{ backgroundColor: AU.main, color: "#0C0C10" }}
              >
                WEB制作プランを見る（撮影無料特典あり） <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 sm:px-8 py-3 font-bold text-[14px] cursor-pointer rounded-lg transition-colors"
                style={{ borderWidth: "1px", borderStyle: "solid", borderTopColor: AU.dark, borderRightColor: AU.dark, borderBottomColor: AU.dark, borderLeftColor: AU.dark, color: AU.light, backgroundColor: `rgba(${AU.rgb}, 0)` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = AU.main; e.currentTarget.style.backgroundColor = `rgba(${AU.rgb}, 0.08)`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = AU.dark; e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                お問い合わせ
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   7. CTA Footer
   ═══════════════════════════════════════════ */
function PhotoContactFooter() {
  return (
    <footer
      id="contact"
      className="text-white pt-16 md:pt-40 pb-8 md:pb-10"
      style={{ backgroundColor: BG.deep, borderTopWidth: "4px", borderTopStyle: "solid", borderTopColor: PK.main }}
    >
      <motion.div
        className="max-w-3xl mx-auto px-5 sm:px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <Camera className="w-12 h-12 mx-auto mb-4" style={{ color: PK.main }} />
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="font-mincho font-bold mb-4 md:mb-6"
          style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 0.8rem + 3vw, 2.25rem)" }}
        >
          撮影の相談・空き状況確認
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mb-8 md:mb-10 text-[14px] md:text-[15px]"
          style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}
        >
          <span className="hidden sm:inline">
            「こんな写真が撮りたい」のイメージだけでもOK。
            <br />
            LINEでご相談ください。参考写真をお送りいただければ、
            <br />
            概算見積もりと撮影プランを<span className="font-bold" style={{ color: PK.light }}>無料</span>でご提案します。
          </span>
          <span className="sm:hidden">
            「こんな写真が撮りたい」のイメージだけでもOK。LINEでご相談ください。概算見積もりを<span className="font-bold" style={{ color: PK.light }}>無料</span>でご提案します。
          </span>
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-sm mx-auto px-5 sm:px-0">
          <motion.a
            href="https://lin.ee/ieroOsn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-6 sm:px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center shadow-lg text-[14px]"
            style={{ backgroundColor: "#06c755" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <LineIcon className="w-6 h-6 mr-3" /> LINEで撮影相談
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-5 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500 gap-3"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <p>&copy; 2026 NEXT-ONE. All Rights Reserved.</p>
        <Link to="/" className="text-gray-400 hover:text-white inline-flex items-center gap-1">
          <Home className="w-3 h-3" /> 総合トップへ戻る
        </Link>
      </motion.div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   Main Photo Page
   ═══════════════════════════════════════════ */
export function PhotoPage() {
  usePageMeta({
    title: "PHOTO | ビジネス・ドキュメンタリー撮影 | NEXT-ONE",
    description:
      "御社の「熱量」を写す、ビジネス・ドキュメンタリー撮影。採用・広報・竣工撮影をプロカメラマンが出張対応。愛知・尾張エリア対応。",
  });

  return (
    <div
      className="font-sans antialiased"
      style={{ backgroundColor: BG.base, color: "#ffffff" }}
    >
      <SubNav
        divisionLabel="PHOTO"
        accentColor={PK.main}
        navItems={[
          { label: "コンセプト", sectionId: "concept", icon: <Sparkles /> },
          { label: "撮影メニュー", sectionId: "service", icon: <Camera /> },
          { label: "作例", sectionId: "gallery", icon: <Images /> },
          { label: "料金表", sectionId: "price", icon: <Tag /> },
        ]}
        ctaLabel="撮影相談"
        ctaSectionId="contact"
        ctaIcon={<MessageCircle />}
      />
      {/* Hero + Concept wrapper with floating logo */}
      <div className="relative overflow-hidden">
        <PhotoHero />
        <ConceptSection />
        {/* NEXT-ONE PHOTO logo watermark */}
        <div
          className="absolute pointer-events-none select-none hidden md:block"
          style={{ right: "-1%", top: "60vh", transform: "translateY(-50%)", width: "clamp(360px, 32vw, 540px)", zIndex: 10 }}
        >
          <motion.img
            src={photoLogoImg}
            alt=""
            aria-hidden="true"
            className="w-full h-auto"
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 0.08, x: 0, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
          />
        </div>
      </div>
      <ServiceMenuSection />
      <GallerySection />
      <PricingSection />
      <CrossSellBanner />
      <CrossLinks currentPage="photo" />
      <PhotoContactFooter />
    </div>
  );
}
