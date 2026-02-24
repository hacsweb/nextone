import { motion } from "motion/react";
import { Monitor, PenTool, Camera, Car, ArrowRight, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { fadeInUp, staggerContainer, viewportOnce } from "./motion-variants";

/* ── Service definitions (TOP page category colors) ── */
const ALL_SERVICES = [
  {
    key: "tech",
    label: "TECH",
    tagline: "IT保守・インフラ支援",
    desc: "最短即日の情シス代行",
    path: "/tech",
    color: "#00997A",
    rgb: "0,153,122",
    Icon: Monitor,
  },
  {
    key: "web",
    label: "WEB",
    tagline: "AI駆動Web制作",
    desc: "LINEで更新、WPゼロの安全設計",
    path: "/web",
    color: "#c0392b",
    rgb: "192,57,43",
    Icon: PenTool,
  },
  {
    key: "photo",
    label: "PHOTO",
    tagline: "ビジネス・ドキュメンタリー撮影",
    desc: "御社の「熱量」をプロが撮る",
    path: "/photo",
    color: "#1e40af",
    rgb: "30,64,175",
    Icon: Camera,
  },
  {
    key: "car",
    label: "CAR",
    tagline: "車両管理・販売仲介",
    desc: "TECH会員様限定の裏メニュー",
    path: "/car",
    color: "#7e22ce",
    rgb: "126,34,206",
    Icon: Car,
    badge: "MEMBERS ONLY",
  },
];

interface CrossLinksProps {
  /** Current page key — this service will be excluded */
  currentPage: "tech" | "web" | "photo" | "car";
}

export function CrossLinks({ currentPage }: CrossLinksProps) {
  const navigate = useNavigate();
  const others = ALL_SERVICES.filter((s) => s.key !== currentPage);

  return (
    <section
      className="py-16 md:py-24 relative"
      style={{ backgroundColor: "#0C0C10" }}
    >
      {/* Top border line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: "min(80%, 600px)",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(200,182,146,0.12), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        {/* Section title */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeInUp}
            className="text-[11px] uppercase tracking-[0.2em] mb-3"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              color: "#C8B692",
            }}
          >
            Other Services
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontWeight: 700,
              fontSize: "clamp(1.25rem, 0.8rem + 2vw, 1.75rem)",
              color: "#ffffff",
              letterSpacing: "0.02em",
            }}
          >
            他のサービスも見る
          </motion.h2>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {others.map((service) => (
            <motion.button
              key={service.key}
              variants={fadeInUp}
              onClick={() => navigate(service.path)}
              className="group relative rounded-lg p-5 md:p-6 text-left cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: `rgba(${service.rgb}, 0.04)`,
                borderWidth: "1px",
                borderStyle: "solid",
                borderTopColor: `rgba(${service.rgb}, 0.12)`,
                borderRightColor: `rgba(${service.rgb}, 0.12)`,
                borderBottomColor: `rgba(${service.rgb}, 0.12)`,
                borderLeftColor: `rgba(${service.rgb}, 0.12)`,
              }}
              whileHover={{
                y: -3,
                backgroundColor: `rgba(${service.rgb}, 0.08)`,
                borderTopColor: `rgba(${service.rgb}, 0.25)`,
                borderRightColor: `rgba(${service.rgb}, 0.25)`,
                borderBottomColor: `rgba(${service.rgb}, 0.25)`,
                borderLeftColor: `rgba(${service.rgb}, 0.25)`,
                transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Badge (CAR only) */}
              {service.badge && (
                <div
                  className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5"
                  style={{
                    backgroundColor: "rgba(200, 182, 146, 0.1)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderTopColor: "rgba(200, 182, 146, 0.25)",
                    borderRightColor: "rgba(200, 182, 146, 0.25)",
                    borderBottomColor: "rgba(200, 182, 146, 0.25)",
                    borderLeftColor: "rgba(200, 182, 146, 0.25)",
                    borderRadius: "2px",
                  }}
                >
                  <Lock
                    className="w-2.5 h-2.5"
                    style={{ color: "#C8B692" }}
                  />
                  <span
                    className="text-[9px] tracking-[0.08em]"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      color: "#C8B692",
                    }}
                  >
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Icon + Label row */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: `rgba(${service.rgb}, 0.1)`,
                  }}
                >
                  <service.Icon
                    className="w-4 h-4"
                    style={{ color: service.color }}
                  />
                </div>
                <span
                  className="text-lg tracking-wider"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    color: service.color,
                  }}
                >
                  {service.label}
                </span>
              </div>

              {/* Tagline */}
              <p
                className="text-[13px] mb-1"
                style={{
                  fontFamily: "'Shippori Mincho', serif",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                {service.tagline}
              </p>

              {/* Description */}
              <p
                className="text-[12px] mb-4"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Noto Sans JP', sans-serif",
                  lineHeight: 1.6,
                }}
              >
                {service.desc}
              </p>

              {/* Arrow link */}
              <div
                className="flex items-center gap-1.5 text-[12px] transition-all duration-300"
                style={{
                  color: service.color,
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 600,
                }}
              >
                <span>詳細を見る</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Back to TOP link */}
        <motion.div
          className="text-center mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-[13px] cursor-pointer transition-colors duration-300"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#C8B692";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.4)";
            }}
          >
            <ArrowRight
              className="w-3.5 h-3.5 rotate-180"
            />
            TOPページに戻る
          </button>
        </motion.div>
      </div>
    </section>
  );
}