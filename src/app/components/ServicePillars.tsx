import { motion } from "motion/react";
import { PenTool, Camera, Car, ArrowRight, Check, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import techCardPhoto from "../../assets/a346cb44a3f31a74ae796ef6447f53ba764e8d77.png";
import webCardPhoto from "../../assets/fdb355c6615d5d755144cd6613bb07028e9a927d.png";
import photoSlide1 from "../../assets/94854640e209eda9a82e6888862b668529198a76.png";
import photoSlide2 from "../../assets/5729be57e56d114312e9d388938cc26e7e5e04f8.png";
import photoSlide3 from "../../assets/9d3017e4950643f21c8d6e790333f193f9dc19a6.png";
import {
  fadeInUp,
  staggerContainer,
  staggerWide,
  glowCardHover,
  viewportOnce,
} from "./motion-variants";

/* ── Wa-Modern Service Colors (和モダン) ── */
const SERVICES = {
  tech: { color: "#00997A", rgb: "0, 153, 122", label: "TECH" },
  web: { color: "#c0392b", rgb: "192, 57, 43", label: "WEB" },
  photo: { color: "#1e40af", rgb: "30, 64, 175", label: "PHOTO" },
  car: { color: "#7e22ce", rgb: "126, 34, 206", label: "CAR" },
};

/* ── PHOTO Slideshow images ── */
const PHOTO_SLIDES = [
  photoSlide1,
  photoSlide2,
  photoSlide3,
];

export function ServicePillars() {
  const navigate = useNavigate();

  return (
    <section
      id="service"
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: "#0C0C10" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm uppercase tracking-widest mb-4"
            style={{
              fontWeight: 600,
              letterSpacing: "0.2em",
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#C8B692",
            }}
          >
            Business Pillars
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mb-4"
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 1rem + 3vw, 2.5rem)",
              letterSpacing: "0.02em",
              color: "#ffffff",
            }}
          >
            4つの<span className="gradient-text">専門領域</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[15px] max-w-lg mx-auto"
            style={{
              color: "#ffffff",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            御社に必要なサービスを、一つの窓口から。
          </motion.p>
        </motion.div>

        {/* All 4 service cards */}
        <motion.div
          variants={staggerWide}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* TECH - Featured Card */}
          <motion.div
            className="rounded-lg overflow-hidden mb-8 md:mb-12"
            style={{
              background: "rgba(200, 182, 146, 0.05)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(0, 153, 122, 0.2)",
            }}
            variants={fadeInUp}
            whileHover={{
              y: -4,
              transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
            }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Left: Photo + Logo overlay */}
              <div className="md:w-2/5 relative overflow-hidden" style={{ minHeight: "280px" }}>
                <ImageWithFallback
                  src={techCardPhoto}
                  alt="PC修理・ITサポート"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,153,122,0.15) 0%, rgba(12,12,16,0.7) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                </div>
              </div>
              <div className="md:w-3/5 p-6 md:p-14">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[11px] px-2.5 py-1 tracking-wider"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      color: "#00997A",
                      backgroundColor: "rgba(0,153,122,0.08)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "rgba(0,153,122,0.2)",
                      borderRadius: "2px",
                    }}
                  >
                    事業の基盤
                  </span>
                </div>
                <h4
                  className="text-xl md:text-2xl mb-4"
                  style={{
                    fontFamily: "'Shippori Mincho', serif",
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  「詳しい社員」に頼るリスク、ご存知ですか？
                </h4>
                <p
                  className="mb-6"
                  style={{
                    lineHeight: 2,
                    color: "#ffffff",
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  トラブル対応で、大切な社員の時間を奪ってはいけません。
                  <br className="hidden md:inline" />
                  最短即日で駆けつける「情シス代行」にお任せください。
                  <br className="hidden md:inline" />
                  まずはここから、NEXT-ONEとの付き合いを始めてください。
                </p>
                <div className="flex gap-2 flex-wrap mb-8">
                  {["PC修理", "GWS導入", "ネットワーク", "セキュリティ"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1"
                        style={{
                          backgroundColor: "rgba(0, 153, 122, 0.08)",
                          color: "#00997A",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          borderColor: "rgba(0, 153, 122, 0.15)",
                          fontWeight: 500,
                          fontFamily: "'Noto Sans JP', sans-serif",
                          borderRadius: "2px",
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <motion.button
                  onClick={() => navigate("/tech")}
                  className="inline-flex items-center px-8 py-3 text-sm cursor-pointer transition-all"
                  style={{
                    fontWeight: 600,
                    fontFamily: "'Noto Sans JP', sans-serif",
                    backgroundColor: "#00997A",
                    color: "#ffffff",
                    borderRadius: "2px",
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  TECH事業の詳細を見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* 3-column grid */}
          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6"
            variants={staggerContainer}
          >
            {/* WEB */}
            <motion.div
              className="rounded-lg overflow-hidden flex flex-col"
              style={{
                background: "rgba(200, 182, 146, 0.05)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: `rgba(${SERVICES.web.rgb}, 0.15)`,
              }}
              variants={fadeInUp}
              whileHover={glowCardHover}
            >
              {/* Photo */}
              <div className="relative h-40 overflow-hidden">
                <ImageWithFallback
                  src={webCardPhoto}
                  alt="Web制作 ワークスペース"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(12,12,16,1) 0%, rgba(12,12,16,0.3) 60%, transparent 100%)",
                  }}
                />
                <div className="absolute top-3 right-3">
                  <PenTool className="w-5 h-5" style={{ color: "#c0392b" }} />
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <h3
                    className="text-2xl tracking-wider px-2 py-0.5 rounded"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      color: "#c0392b",
                      backgroundColor: "rgba(255,255,255,0.95)",
                    }}
                  >
                    WEB
                  </h3>
                </div>
                <h4
                  className="text-lg mb-3"
                  style={{
                    fontFamily: "'Shippori Mincho', serif",
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  難しい更新作業は、LINEで
                  <br className="hidden md:inline" />
                  「これ直して」と言うだけ。
                </h4>
                <p
                  className="text-sm mb-6 flex-grow"
                  style={{
                    lineHeight: 1.8,
                    color: "#ffffff",
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  WordPressを使わないから、ハッキングの心配も
                  <br className="hidden md:inline" />
                  ゼロ。
                  <br className="hidden md:inline" />
                  AIを活用した「お節介なWeb制作」です。
                </p>
                <div className="mt-auto">
                  <ul
                    className="text-xs space-y-1.5 mb-6"
                    style={{ color: "#ffffff" }}
                  >
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5" style={{ color: "#c0392b" }} />
                      採用サイト / 集客LP
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5" style={{ color: "#c0392b" }} />
                      MEO対策 (マップ検索)
                    </li>
                  </ul>
                  <motion.button
                    onClick={() => navigate("/web")}
                    className="block w-full text-center py-2.5 text-sm cursor-pointer transition-colors"
                    style={{
                      fontWeight: 600,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "rgba(192, 57, 43, 0.3)",
                      color: "#c0392b",
                      backgroundColor: "rgba(192, 57, 43, 0.05)",
                      borderRadius: "2px",
                    }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(192, 57, 43, 0.9)",
                      color: "rgba(255,255,255,1)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    詳細を見る
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* PHOTO */}
            <motion.div
              className="rounded-lg overflow-hidden flex flex-col"
              style={{
                background: "rgba(200, 182, 146, 0.05)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: `rgba(${SERVICES.photo.rgb}, 0.15)`,
              }}
              variants={fadeInUp}
              whileHover={glowCardHover}
            >
              {/* Sliding Photo Gallery */}
              <div className="relative h-40 overflow-hidden">
                <div
                  className="absolute inset-0 flex"
                  style={{
                    width: `${PHOTO_SLIDES.length * 100}%`,
                    animation: `photo-slide ${PHOTO_SLIDES.length * 4}s ease-in-out infinite`,
                  }}
                >
                  {PHOTO_SLIDES.map((src, i) => (
                    <ImageWithFallback
                      key={i}
                      src={src}
                      alt={`撮影事例 ${i + 1}`}
                      className="h-full object-cover"
                      style={{ width: `${100 / PHOTO_SLIDES.length}%` }}
                    />
                  ))}
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(12,12,16,1) 0%, rgba(12,12,16,0.3) 60%, transparent 100%)",
                  }}
                />
                <div className="absolute top-3 right-3">
                  <Camera className="w-5 h-5" style={{ color: "#1e40af" }} />
                </div>
                {/* "撮影込み" badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[10px] px-2 py-1 tracking-wider"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      color: "#1e40af",
                      backgroundColor: "rgba(30, 64, 175, 0.15)",
                      backdropFilter: "blur(8px)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "rgba(30, 64, 175, 0.3)",
                      borderRadius: "2px",
                    }}
                  >
                    BUSINESS DOC
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <h3
                    className="text-2xl tracking-wider px-2 py-0.5 rounded"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      color: "#1e40af",
                      backgroundColor: "rgba(255,255,255,0.95)",
                    }}
                  >
                    PHOTO
                  </h3>
                </div>
                <h4
                  className="text-lg mb-3"
                  style={{
                    fontFamily: "'Shippori Mincho', serif",
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  御社の「熱量」まで、
                  <br className="hidden md:inline" />
                  写っていますか？
                </h4>
                <p
                  className="text-sm mb-6 flex-grow"
                  style={{
                    lineHeight: 1.8,
                    color: "#ffffff",
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  求職者が見ているのは、立派な設備より、
                  <br className="hidden md:inline" />
                  働く人の「顔」です。プロが熱量ごと撮ります。
                </p>
                <div className="mt-auto">
                  <ul
                    className="text-xs space-y-1.5 mb-6"
                    style={{ color: "#ffffff" }}
                  >
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5" style={{ color: "#1e40af" }} />
                      採用・広報パック
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5" style={{ color: "#1e40af" }} />
                      ビジネス・ポートレート
                    </li>
                  </ul>
                  <motion.button
                    onClick={() => navigate("/photo")}
                    className="block w-full text-center py-2.5 text-sm cursor-pointer transition-colors"
                    style={{
                      fontWeight: 600,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "rgba(30, 64, 175, 0.3)",
                      color: "#1e40af",
                      backgroundColor: "rgba(30, 64, 175, 0.05)",
                      borderRadius: "2px",
                    }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(30, 64, 175, 0.9)",
                      color: "rgba(255,255,255,1)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    詳細を見る
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* CAR - Members Only */}
            <motion.div
              className="rounded-lg p-6 md:p-10 relative overflow-hidden flex flex-col sm:col-span-2 md:col-span-1"
              style={{
                background: "rgba(200, 182, 146, 0.02)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: `rgba(${SERVICES.car.rgb}, 0.08)`,
              }}
              variants={fadeInUp}
            >
              {/* Gold badge at top-right */}
              <div
                className="absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5"
                style={{
                  backgroundColor: "rgba(200, 182, 146, 0.12)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "rgba(200, 182, 146, 0.35)",
                  borderRadius: "2px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Lock className="w-3 h-3" style={{ color: "#C8B692" }} />
                <span
                  className="text-[10px] tracking-[0.1em]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    color: "#C8B692",
                  }}
                >
                  MEMBERS ONLY
                </span>
              </div>

              {/* Overlay */}
              <div
                className="absolute inset-0 z-10 flex items-center justify-center flex-col cursor-pointer"
                style={{
                  backgroundColor: "rgba(12, 12, 16, 0.75)",
                  backdropFilter: "blur(3px)",
                }}
                onClick={() => navigate("/car")}
              >
                <p
                  className="text-xl px-4 py-2"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    transform: "rotate(-12deg)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgba(126, 34, 206, 0.3)",
                    backgroundColor: "rgba(126, 34, 206, 0.1)",
                    color: "#ffffff",
                  }}
                >
                  MEMBERS ONLY
                </p>
                <p
                  className="text-xs mt-3"
                  style={{
                    fontWeight: 500,
                    color: "#ffffff",
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  TECH会員様 限定の「裏メニュー」
                </p>
                <p
                  className="text-xs mt-2"
                  style={{
                    fontWeight: 600,
                    color: "#a855f7",
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  詳細を見る →
                </p>
              </div>

              <div className="flex items-center justify-between mb-6 opacity-40">
                <h3
                  className="text-2xl tracking-wider"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    color: "#7e22ce",
                  }}
                >
                  CAR
                </h3>
                <Car className="w-7 h-7" style={{ color: "#7e22ce" }} />
              </div>
              <h4
                className="text-lg mb-3 opacity-40"
                style={{
                  fontFamily: "'Shippori Mincho', serif",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                TECH会員様 限定の「裏メニュー」
              </h4>
              <p
                className="text-sm mb-6 opacity-40 flex-grow"
                style={{
                  lineHeight: 1.8,
                  color: "#ffffff",
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                社用車探しから車検代行、ドラレコ取付まで。
                <br className="hidden md:inline" />
                面倒な車両管理も、会員特別レートで代行します。
              </p>
              <div className="mt-auto opacity-40">
                <ul
                  className="text-xs space-y-1.5 mb-6"
                  style={{ color: "#ffffff" }}
                >
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5" /> 新車/中古車 販売仲介
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5" /> 車検・整備代行
                  </li>
                </ul>
                <button
                  className="block w-full text-center py-2.5 text-sm cursor-not-allowed"
                  style={{
                    fontWeight: 600,
                    backgroundColor: "rgba(240, 236, 228, 0.03)",
                    color: "#ffffff",
                    borderRadius: "2px",
                  }}
                >
                  Coming Soon
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}