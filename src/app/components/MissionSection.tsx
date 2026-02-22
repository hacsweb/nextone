import { motion } from "motion/react";
import { Shield, Palette, Monitor } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { fadeInUp, staggerContainer, viewportOnce } from "./motion-variants";
import teamPhoto from "figma:asset/431f1750f73efab36635975aaae3b58aa8cde98c.png";

const pillars = [
  {
    icon: Monitor,
    label: "守り",
    title: "ITインフラ",
    desc: "ネットワーク構築、PC修理、セキュリティ。\n業務を止めない「デジタル用心棒」。",
    color: "#00997A",
    rgb: "0, 153, 122",
  },
  {
    icon: Palette,
    label: "攻め",
    title: "クリエイティブ",
    desc: "Web制作、写真撮影。\n「成果」を生む広報・ブランディングを一括代行。",
    color: "#C8B692",
    rgb: "200, 182, 146",
  },
  {
    icon: Shield,
    label: "足回り",
    title: "総務代行",
    desc: "車両管理、ベンダー折衝。\n面倒なバックオフィス業務を丸ごとお任せ。",
    color: "#c0392b",
    rgb: "192, 57, 43",
  },
];

export function MissionSection() {
  return (
    <section
      id="mission"
      className="py-16 md:py-32 relative noise-overlay"
      style={{ backgroundColor: "#12100e" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* ── Top: Photo + Mission Text ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row gap-8 md:gap-16 mb-14 md:mb-20"
        >
          {/* Photo side */}
          <motion.div
            variants={fadeInUp}
            className="md:w-5/12 relative rounded-lg overflow-hidden"
            style={{ minHeight: "260px" }}
          >
            <ImageWithFallback
              src={teamPhoto}
              alt="NEXT-ONE チーム打ち合わせ"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,182,146,0.08) 0%, rgba(12,12,16,0.5) 100%)",
              }}
            />
            {/* Decorative corner accents */}
            <div
              className="absolute top-4 left-4 w-8 h-8"
              style={{
                borderTopWidth: "2px",
                borderTopStyle: "solid",
                borderTopColor: "rgba(200,182,146,0.4)",
                borderLeftWidth: "2px",
                borderLeftStyle: "solid",
                borderLeftColor: "rgba(200,182,146,0.4)",
              }}
            />
            <div
              className="absolute bottom-4 right-4 w-8 h-8"
              style={{
                borderBottomWidth: "2px",
                borderBottomStyle: "solid",
                borderBottomColor: "rgba(200,182,146,0.4)",
                borderRightWidth: "2px",
                borderRightStyle: "solid",
                borderRightColor: "rgba(200,182,146,0.4)",
              }}
            />
          </motion.div>

          {/* Text side */}
          <motion.div className="md:w-7/12 flex flex-col justify-center" variants={fadeInUp}>
            <p
              className="text-sm uppercase tracking-widest mb-3 sm:mb-4"
              style={{
                fontWeight: 600,
                letterSpacing: "0.2em",
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#C8B692",
              }}
            >
              Our Mission
            </p>
            <h2
              className="mb-5 sm:mb-6 max-w-5xl"
              style={{
                fontFamily: "'Shippori Mincho', serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                lineHeight: 1.35,
                letterSpacing: "0.02em",
                color: "#ffffff",
              }}
            >
              「あちこち電話する手間」、
              <br className="hidden md:inline" />
              <span className="gradient-text">なくしませんか?</span>
            </h2>
            <p
              className="mb-5 sm:mb-6"
              style={{
                fontSize: "clamp(15px, 2.5vw, 16px)",
                lineHeight: 1.8,
                color: "#ffffff",
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              「PCはあそこの修理屋」「HPは東京の制作会社」「写真は地元の写真館」…
              <br className="hidden md:inline" />
              何かあるたびにバラバラの業者へ連絡するのは、もう終わりにしましょう。
            </p>
            <div
              className="p-4 sm:p-5 rounded-md"
              style={{
                background: "rgba(200, 182, 146, 0.04)",
                borderLeftWidth: "3px",
                borderLeftStyle: "solid",
                borderLeftColor: "rgba(200, 182, 146, 0.3)",
                width: "100%",
              }}
            >
              <p
                className="text-[15px]"
                style={{
                  lineHeight: 1.8,
                  color: "#ffffff",
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                NEXT-ONEは、「ITインフラ (守り)」から「Web集客 (攻め)」、
                <br className="hidden sm:inline" />
                さらには「社用車の手配(足回り)」まで。
                <br className="hidden sm:inline" />
                「ここに電話すれば、全部なんとかなる」
                <br className="hidden sm:inline" />
                そんな、地域一番のビジネス・パートナーを目指しています。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Three Pillars ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-5"
        >
          {pillars.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="rounded-lg p-6 relative overflow-hidden group cursor-default transition-all duration-500"
              style={{
                background: `rgba(200, 182, 146, 0.05)`,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: `rgba(${item.rgb}, 0.15)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${item.rgb}, 0.35)`;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `rgba(${item.rgb}, 0.15)`;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at bottom, rgba(${item.rgb}, 0.06) 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: `rgba(${item.rgb}, 0.1)` }}
                >
                  <item.icon size={22} style={{ color: item.color }} />
                </div>

                <span
                  className="text-xs tracking-widest mb-2 block"
                  style={{
                    color: item.color,
                    fontWeight: 600,
                    fontFamily: "'Shippori Mincho', serif",
                  }}
                >
                  {item.label}
                </span>
                <h3
                  className="text-xl mb-3"
                  style={{
                    fontFamily: "'Shippori Mincho', serif",
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    lineHeight: 1.8,
                    color: "#ffffff",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Tagline */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-16"
        >
          <p
            className="text-sm"
            style={{
              color: "#ffffff",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            NEXT-ONEは、この3つの領域をワンストップで完結させる
          </p>
          <p
            className="text-xl md:text-2xl mt-2 gradient-text"
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontWeight: 700,
            }}
          >
            「地域No.1のビジネス・コンシェルジュ」
          </p>
        </motion.div>
      </div>
    </section>
  );
}