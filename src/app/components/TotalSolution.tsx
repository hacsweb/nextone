import { motion } from "motion/react";
import { ArrowDown, Globe, Camera, Monitor, Car, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import recruitPhoto from "figma:asset/d5ee6c8838fc3fb2a3f016235f2db0896ff70321.png";
import startupPhoto from "figma:asset/2ecacb8412f772d8e188af8b8a791d9f1069bf69.png";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "./motion-variants";

/* ── Service color palette ── */
const COLORS = {
  web: { main: "#c0392b", rgb: "192, 57, 43" },
  photo: { main: "#1e40af", rgb: "30, 64, 175" },
  tech: { main: "#00997A", rgb: "0, 153, 122" },
  car: { main: "#7e22ce", rgb: "126, 34, 206" },
};

const ICONS: Record<string, React.ReactNode> = {
  WEB: <Globe className="w-3.5 h-3.5" />,
  PHOTO: <Camera className="w-3.5 h-3.5" />,
  TECH: <Monitor className="w-3.5 h-3.5" />,
  CAR: <Car className="w-3.5 h-3.5" />,
};

type ServiceKey = "web" | "photo" | "tech" | "car";

interface BadgeProps {
  label: string;
  colorKey: ServiceKey;
}

function ServiceBadge({ label, colorKey }: BadgeProps) {
  const c = COLORS[colorKey];
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] sm:text-[12px] tracking-wide whitespace-nowrap"
      style={{
        fontWeight: 600,
        backgroundColor: `rgba(${c.rgb}, 0.08)`,
        color: c.main,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: `rgba(${c.rgb}, 0.15)`,
        borderRadius: "2px",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {ICONS[label]}
      {label}
    </span>
  );
}

function PlusSign() {
  return (
    <span
      className="text-[15px] sm:text-[16px] mx-0.5 sm:mx-1"
      style={{ color: "#ffffff", fontWeight: 700 }}
    >
      +
    </span>
  );
}

function EqualsResult({ text }: { text: string }) {
  return (
    <span
      className="relative inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 text-[12px] sm:text-[14px] overflow-hidden whitespace-nowrap"
      style={{
        fontWeight: 700,
        background: "linear-gradient(135deg, #C8B692, #00997A)",
        color: "#0C0C10",
        borderRadius: "2px",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <span className="relative z-10">{text}</span>
    </span>
  );
}

interface CaseCardProps {
  caseLabel: string;
  problem: string;
  badges: { label: string; colorKey: ServiceKey }[];
  resultLabel: string;
  solution: React.ReactNode;
  photo: string;
  photoAlt: string;
}

function CaseCard({
  caseLabel,
  problem,
  badges,
  resultLabel,
  solution,
  photo,
  photoAlt,
}: CaseCardProps) {
  return (
    <motion.div
      className="rounded-lg relative overflow-hidden"
      style={{
        background: "rgba(200, 182, 146, 0.03)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "rgba(200, 182, 146, 0.08)",
      }}
      variants={fadeInUp}
      whileHover={{
        y: -4,
      }}
      transition={{ duration: 0.4 }}
    >
      {/* Photo header */}
      <div className="relative h-44 overflow-hidden">
        <ImageWithFallback
          src={photo}
          alt={photoAlt}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(12,12,16,1) 5%, rgba(12,12,16,0.6) 40%, rgba(12,12,16,0.2) 100%)",
          }}
        />
        {/* Case label overlay */}
        <div className="absolute bottom-4 left-6">
          <div
            className="inline-block px-3 py-1 text-[12px] tracking-wider"
            style={{
              fontWeight: 700,
              background: "rgba(200, 182, 146, 0.12)",
              backdropFilter: "blur(8px)",
              color: "#C8B692",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(200, 182, 146, 0.2)",
              fontFamily: "'Space Grotesk', sans-serif",
              borderRadius: "2px",
            }}
          >
            {caseLabel}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Problem / Before */}
        <div
          className="p-4 mb-5 rounded-md"
          style={{
            backgroundColor: "rgba(240, 236, 228, 0.03)",
            borderLeftWidth: "3px",
            borderLeftStyle: "solid",
            borderLeftColor: "rgba(192, 57, 43, 0.4)",
          }}
        >
          <p
            className="text-[12px] tracking-wider mb-1"
            style={{
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            BEFORE
          </p>
          <h3
            className="text-[16px] md:text-[18px]"
            style={{
              fontWeight: 700,
              fontFamily: "'Shippori Mincho', serif",
              color: "#ffffff",
            }}
          >
            {problem}
          </h3>
        </div>

        {/* Arrow divider */}
        <div className="flex justify-center my-4">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" style={{ color: "#C8B692" }} />
          </motion.div>
        </div>

        {/* Equation: badges + result */}
        <div className="flex items-center flex-wrap sm:flex-nowrap justify-center mb-5 gap-x-0.5 sm:gap-x-1 gap-y-2">
          {badges.map((b, i) => (
            <span key={b.label} className="inline-flex items-center shrink-0">
              {i > 0 && <PlusSign />}
              <ServiceBadge label={b.label} colorKey={b.colorKey} />
            </span>
          ))}
          <span
            className="text-[15px] sm:text-[16px] mx-0.5 sm:mx-1 shrink-0"
            style={{ color: "#ffffff", fontWeight: 700 }}
          >
            =
          </span>
          <EqualsResult text={resultLabel} />
        </div>

        {/* Solution / After */}
        <div
          className="p-4 rounded-md"
          style={{
            backgroundColor: "rgba(0, 153, 122, 0.03)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(0, 153, 122, 0.08)",
          }}
        >
          <p
            className="text-[12px] tracking-wider mb-2"
            style={{
              fontWeight: 700,
              color: "#00997A",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            AFTER
          </p>
          <p
            className="text-[13px] sm:text-[14px]"
            style={{
              lineHeight: 1.8,
              color: "#ffffff",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            {solution}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TotalSolution() {
  return (
    <section
      id="solution"
      className="py-24 md:py-32 relative noise-overlay"
      style={{ backgroundColor: "#12100e" }}
    >
      {/* Title group */}
      <motion.div
        className="max-w-6xl mx-auto px-5 sm:px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeInUp}>
          <p
            className="text-sm uppercase tracking-widest mb-4"
            style={{
              fontWeight: 600,
              letterSpacing: "0.2em",
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#C8B692",
            }}
          >
            Total Solution
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 1rem + 3vw, 2.5rem)",
              letterSpacing: "0.02em",
              color: "#ffffff",
            }}
          >
            「組み合わせ」で、
            <br className="sm:hidden" />
            <span className="gradient-text">経営はもっと加速する。</span>
          </h2>
          <p
            className="text-[15px] max-w-xl mx-auto mb-12 md:mb-20"
            style={{
              color: "#ffffff",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            単一サービスでは届かない成果を、NEXT-ONEのワンストップ体制が実現します。
          </p>
        </motion.div>
      </motion.div>

      {/* Case cards */}
      <motion.div
        className="max-w-6xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-6 lg:gap-8 text-left"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <CaseCard
          caseLabel="CASE.1 — 採用強化"
          problem="「求人を出しても人が来ない…」"
          photo={recruitPhoto}
          photoAlt="採用コンサルティング"
          badges={[
            { label: "WEB", colorKey: "web" },
            { label: "PHOTO", colorKey: "photo" },
            { label: "TECH", colorKey: "tech" },
          ]}
          resultLabel="採用力UP!"
          solution={
            <>
              プロカメラマンによる「働く姿」の撮影と、求職者に刺さる採用サイト制作で応募数アップ。
              さらに入社後のPCセットアップやアカウント発行まで、
              <span
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(200, 182, 146, 0.4)",
                  textUnderlineOffset: "3px",
                  textDecorationThickness: "1.5px",
                }}
              >
                一本の電話で完結
              </span>
              します。
            </>
          }
        />

        <CaseCard
          caseLabel="CASE.2 — 創業・拠点開設"
          problem="「何から手配すればいいか分からない」"
          photo={startupPhoto}
          photoAlt="新規拠点開設"
          badges={[
            { label: "TECH", colorKey: "tech" },
            { label: "WEB", colorKey: "web" },
            { label: "CAR", colorKey: "car" },
          ]}
          resultLabel="最速オープン!"
          solution={
            <>
              ネット回線工事、Wi-Fi構築、ロゴ・名刺作成、そして営業車の確保まで。
              オフィスの立ち上げに必要なインフラを、
              <span
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(200, 182, 146, 0.4)",
                  textUnderlineOffset: "3px",
                  textDecorationThickness: "1.5px",
                }}
              >
                最短スケジュールで一括手配
              </span>
              します。
            </>
          }
        />
      </motion.div>

      {/* ── Service Navigation Cards ── */}
      <motion.div
        className="max-w-6xl mx-auto px-5 sm:px-6 mt-16 md:mt-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p
          variants={fadeInUp}
          className="text-center mb-8"
          style={{
            fontFamily: "'Shippori Mincho', serif",
            fontWeight: 700,
            fontSize: "clamp(1.1rem, 0.6rem + 2vw, 1.5rem)",
            color: "#ffffff",
          }}
        >
          各サービスの詳細はこちら
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          variants={staggerContainer}
        >
          {([
            {
              name: "TECH",
              nameJa: "IT保守・インフラ",
              path: "/tech",
              colorKey: "tech" as ServiceKey,
              icon: <Monitor className="w-5 h-5" />,
            },
            {
              name: "WEB",
              nameJa: "AI駆動Web制作",
              path: "/web",
              colorKey: "web" as ServiceKey,
              icon: <Globe className="w-5 h-5" />,
            },
            {
              name: "PHOTO",
              nameJa: "ビジネス・ドキュメンタリー撮影",
              path: "/photo",
              colorKey: "photo" as ServiceKey,
              icon: <Camera className="w-5 h-5" />,
            },
            {
              name: "CAR",
              nameJa: "車両管理・販売仲介",
              path: "/car",
              colorKey: "car" as ServiceKey,
              icon: <Car className="w-5 h-5" />,
              badge: "MEMBERS ONLY",
            },
          ]).map((svc) => {
            const c = COLORS[svc.colorKey];
            return (
              <motion.div key={svc.name} variants={fadeInUp}>
                <Link
                  to={svc.path}
                  className="group block rounded-lg p-4 md:p-5 text-center transition-all duration-400 no-underline relative overflow-hidden"
                  style={{
                    backgroundColor: `rgba(${c.rgb}, 0.04)`,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: `rgba(${c.rgb}, 0.12)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${c.rgb}, 0.35)`;
                    e.currentTarget.style.backgroundColor = `rgba(${c.rgb}, 0.08)`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${c.rgb}, 0.12)`;
                    e.currentTarget.style.backgroundColor = `rgba(${c.rgb}, 0.04)`;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      backgroundColor: `rgba(${c.rgb}, 0.1)`,
                      color: c.main,
                    }}
                  >
                    {svc.icon}
                  </div>

                  {/* Name */}
                  <p
                    className="mb-0.5"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "15px",
                      letterSpacing: "0.1em",
                      color: c.main,
                    }}
                  >
                    {svc.name}
                  </p>
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {svc.nameJa}
                  </p>

                  {/* Badge or arrow */}
                  {svc.badge ? (
                    <span
                      className="inline-block text-[9px] px-2 py-0.5 tracking-wider"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        color: c.main,
                        backgroundColor: `rgba(${c.rgb}, 0.08)`,
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: `rgba(${c.rgb}, 0.15)`,
                        borderRadius: "2px",
                      }}
                    >
                      {svc.badge}
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1 text-[12px] transition-all duration-300"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      詳しく見る
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}