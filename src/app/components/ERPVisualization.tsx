import { useState, useMemo, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import nextOneLogo from "figma:asset/c120dd2e4651f1c668b0455a3c90d90d969c2ae7.png";

/* ═══════════════════════════════════════════
   Types
   ═══════════════════════════════════════════ */
interface ServiceModule {
  id: string;
  name: string;
  nameJa: string;
  description: string;
  angle: number;
  color: string;
  colorHex: string;
  gradientFrom: string;
  gradientTo: string;
  path: string | null;
  badge?: string;
}

/* ═══════════════════════════════════════════
   NEXT-ONE Service Data — Wa-Modern 和モダン palette
   Order: TECH → PHOTO → CAR → WEB
   ═══════════════════════════════════════════ */
const services: ServiceModule[] = [
  {
    id: "tech",
    name: "TECH",
    nameJa: "IT保守・インフラ",
    description: "「詳しい社員」に頼るリスク、ご存知ですか？最短即日の「情シス代行」。",
    angle: 0,
    color: "0, 153, 122",
    colorHex: "#00997A",
    gradientFrom: "#00997A",
    gradientTo: "#00d4aa",
    path: "/tech",
  },
  {
    id: "photo",
    name: "PHOTO",
    nameJa: "ビジネス・ドキュメンタリー撮影",
    description: "御社の「熱量」を写す。働く人の汗、真剣な眼差し、プロの空気感をそのまま切り取ります。",
    angle: 90,
    color: "30, 64, 175",
    colorHex: "#1e40af",
    gradientFrom: "#1e40af",
    gradientTo: "#3b82f6",
    path: "/photo",
  },
  {
    id: "car",
    name: "CAR",
    nameJa: "車両管理・販売仲介",
    description: "社用車探しから車検代行まで。TECH会員様限定の「裏メニュー」。",
    angle: 180,
    color: "126, 34, 206",
    colorHex: "#7e22ce",
    gradientFrom: "#7e22ce",
    gradientTo: "#a855f7",
    path: "/car",
    badge: "MEMBERS ONLY",
  },
  {
    id: "web",
    name: "WEB",
    nameJa: "AI駆動Web制作",
    description: "LINEで「これ直して」と送るだけ。管理画面不要の次世代サイト。",
    angle: 270,
    color: "192, 57, 43",
    colorHex: "#c0392b",
    gradientFrom: "#c0392b",
    gradientTo: "#e74c3c",
    path: "/web",
  },
];

/* ════════════��═════════════════════════════
   Helpers
   ═══════════════════════════════════════════ */
const DEG2RAD = Math.PI / 180;

function posOnCircle(angleDeg: number, radiusPx: number) {
  const rad = (angleDeg - 90) * DEG2RAD;
  return {
    x: Math.cos(rad) * radiusPx,
    y: Math.sin(rad) * radiusPx,
  };
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

/* Hook to track window width for responsive scaling */
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle, { passive: true });
    return () => window.removeEventListener("resize", handle);
  }, []);
  return width;
}

/* ═══════════════════════════════════════════
   Floating Particles — gentle gold dust
   ═══════════════════════════════════════════ */
function useParticles(count: number) {
  return useMemo(() => {
    const colors = [
      "rgba(200, 182, 146, 0.2)",
      "rgba(200, 182, 146, 0.15)",
      "rgba(0, 153, 122, 0.12)",
      "rgba(192, 57, 43, 0.1)",
    ];
    const pts: { x: number; y: number; size: number; delay: number; color: string }[] = [];
    for (let i = 0; i < count; i++) {
      const golden = (i * 0.618033988749895) % 1;
      const row = Math.floor(i / 4);
      pts.push({
        x: (golden * 100 + i * 17) % 100,
        y: (row * 25 + i * 13.7) % 100,
        size: 1.5 + (i % 3) * 1,
        delay: (i * 0.33) % 4,
        color: colors[i % colors.length],
      });
    }
    return pts;
  }, [count]);
}

/* ═══════════════════════════════════════════
   Connection Lines (SVG) — ink brush style
   ═══════════════════════════════════════════ */
function ConnectionLines({
  containerSize,
  orbitRadius,
  activeId,
}: {
  containerSize: number;
  orbitRadius: number;
  activeId: string | null;
}) {
  const cx = containerSize / 2;
  const cy = containerSize / 2;

  return (
    <svg
      viewBox={`0 0 ${containerSize} ${containerSize}`}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    >
      <defs>
        {services.map((svc) => {
          const p = posOnCircle(svc.angle, orbitRadius);
          return (
            <linearGradient
              key={`grad-${svc.id}`}
              id={`line-grad-${svc.id}`}
              x1={cx}
              y1={cy}
              x2={cx + p.x}
              y2={cy + p.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(200, 182, 146, 0.03)" />
              <stop
                offset="100%"
                stopColor={
                  activeId === svc.id
                    ? `rgba(${svc.color}, 0.4)`
                    : `rgba(200, 182, 146, 0.08)`
                }
              />
            </linearGradient>
          );
        })}
      </defs>

      {services.map((svc) => {
        const p = posOnCircle(svc.angle, orbitRadius);
        const isAct = activeId === svc.id;
        return (
          <line
            key={`conn-${svc.id}`}
            x1={cx}
            y1={cy}
            x2={cx + p.x}
            y2={cy + p.y}
            stroke={`url(#line-grad-${svc.id})`}
            strokeWidth={isAct ? 1.5 : 0.5}
            strokeDasharray={isAct ? "none" : "4 6"}
            className={isAct ? "" : "animate-dash-flow"}
            style={{
              transition: "stroke-width 0.4s, opacity 0.4s",
              opacity: isAct ? 1 : 0.4,
            }}
          />
        );
      })}
    </svg>
  );
}

/* ═══════════════════════════════════════════
   Service Card — Clean wa-modern node
   ═══════════════════════════════════════════ */
function ServiceCard({
  svc,
  isActive,
  onActivate,
  onDeactivate,
  onNavigate,
  orbitRadius,
  isMobile,
  orbitPaused,
}: {
  svc: ServiceModule;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  onNavigate: () => void;
  orbitRadius: number;
  isMobile: boolean;
  orbitPaused: boolean;
}) {
  const pos = posOnCircle(svc.angle, orbitRadius);
  const cardSize = isMobile ? 90 : 140;
  const isMembersOnly = svc.path === null;

  return (
    <div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
        zIndex: isActive ? 30 : 10,
      }}
    >
      {/* Counter-rotation wrapper */}
      <div
        className="flex flex-col items-center"
        style={{
          animation: "orbit-reverse 50s linear infinite",
          animationPlayState: orbitPaused ? "paused" : "running",
        }}
      >
        <button
          className="relative rounded-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer"
          style={{
            width: `${cardSize}px`,
            height: `${cardSize}px`,
            background: isActive
              ? `linear-gradient(135deg, rgba(${svc.color}, 0.55) 0%, rgba(${svc.color}, 0.3) 100%)`
              : `linear-gradient(135deg, rgba(${svc.color}, 0.35) 0%, rgba(${svc.color}, 0.18) 100%)`,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: isActive
              ? `rgba(${svc.color}, 0.6)`
              : `rgba(${svc.color}, 0.3)`,
            backdropFilter: "blur(16px) saturate(1.4)",
            WebkitBackdropFilter: "blur(16px) saturate(1.4)",
            boxShadow: isActive
              ? `0 8px 32px rgba(${svc.color}, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
              : `0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
            transform: isActive ? "scale(1.08)" : "scale(1)",
            opacity: isMembersOnly ? 0.5 : 1,
          }}
          onClick={() => {
            if (isMobile) {
              if (isActive) onNavigate();
              else onActivate();
            } else {
              onNavigate();
            }
          }}
          onMouseEnter={() => !isMobile && onActivate()}
          onMouseLeave={() => !isMobile && onDeactivate()}
        >
          {/* Mini NEXT-ONE Logo */}
          <span
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontWeight: 700,
              fontSize: isMobile ? "9px" : "12px",
              letterSpacing: "0.02em",
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            NEXT
            <span
              style={{
                color: isActive ? `rgba(${svc.color}, 1)` : "rgba(200, 182, 146, 0.6)",
                transition: "color 0.4s",
              }}
            >
              -ONE
            </span>
          </span>
          {/* Service name */}
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: isMobile ? "12px" : "18px",
              letterSpacing: "0.12em",
              lineHeight: 1,
              marginTop: isMobile ? "2px" : "4px",
              color: isActive ? svc.colorHex : `rgba(${svc.color}, 0.85)`,
              transition: "color 0.4s",
              textShadow: isActive ? `0 0 12px rgba(${svc.color}, 0.5)` : "none",
            }}
          >
            {svc.name}
          </span>

          {/* Members Only lock overlay */}
          {isMembersOnly && (
            <div
              className="absolute inset-0 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "rgba(12, 12, 16, 0.4)",
              }}
            />
          )}
        </button>

        {/* Hover info below */}
        <div
          className="mt-2 text-center pointer-events-none transition-all duration-500"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateY(0)" : "translateY(-4px)",
          }}
        >
          <p
            className="whitespace-nowrap"
            style={{
              fontSize: isMobile ? "9px" : "10px",
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            {svc.nameJa}
          </p>
          {!isMobile && (
            <p
              className="mt-1 max-w-[160px]"
              style={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: "10px",
                lineHeight: 1.5,
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              {svc.description}
            </p>
          )}
          {svc.badge && (
            <span
              className="inline-block mt-1 px-2 py-0.5"
              style={{
                fontSize: "8px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontFamily: "'Space Grotesk', sans-serif",
                color: svc.colorHex,
                backgroundColor: `rgba(${svc.color}, 0.1)`,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: `rgba(${svc.color}, 0.2)`,
              }}
            >
              {svc.badge}
            </span>
          )}
          {svc.path && (
            <p
              className="mt-1"
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: svc.colorHex,
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              {isMobile ? "もう一度タップで詳細 →" : "クリックで詳細 →"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════ */
export function ERPVisualization() {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const particles = useParticles(12);
  const isMobile = useIsMobile();
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();

  const orbitRadius = isMobile ? 170 : 300;
  const hubSize = isMobile ? 140 : 300;
  const hubInner = isMobile ? 116 : 260;
  const containerSize = isMobile ? 460 : 780;

  /* Mobile: scale the entire orbital rig to fit viewport minus 20px padding */
  const mobileScale = isMobile
    ? Math.min(1, (windowWidth - 20) / containerSize)
    : 1;

  const handleActivate = useCallback((id: string) => setActiveModule(id), []);
  const handleDeactivate = useCallback(() => setActiveModule(null), []);
  const handleNavigate = useCallback(
    (svc: ServiceModule) => {
      if (svc.path) navigate(svc.path);
    },
    [navigate]
  );

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0C0C10" }}
    >
      {/* ── Background layers ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 60% 60% at 65% 50%, rgba(200, 182, 146, 0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 35% 35% at 25% 30%, rgba(0, 153, 122, 0.05) 0%, transparent 60%)",
            "radial-gradient(ellipse 35% 35% at 80% 70%, rgba(192, 57, 43, 0.04) 0%, transparent 60%)",
          ].join(", "),
        }}
      />
      <div className="absolute inset-0 bg-asanoha pointer-events-none" />

      {/* ── Floating Particles — gold dust ── */}
      {particles.map((pt, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full pointer-events-none animate-float-gentle"
          style={{
            left: `${pt.x}%`,
            top: `${pt.y}%`,
            width: `${pt.size}px`,
            height: `${pt.size}px`,
            backgroundColor: pt.color,
            animationDelay: `${pt.delay}s`,
            animationDuration: `${4 + (i % 3)}s`,
          }}
        />
      ))}

      {/* ── Main Split Layout ── */}
      <div
        className={`relative z-10 w-full min-h-screen flex ${
          isMobile ? "flex-col items-center justify-center px-5 py-20 gap-8" : "flex-row items-center"
        }`}
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* ── Left: Hero Text ── */}
        <div
          className={isMobile ? "text-center w-full" : "flex-shrink-0 pl-12 lg:pl-20"}
          style={{ width: isMobile ? "100%" : "45%", zIndex: 20 }}
        >
          <h1
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontWeight: 700,
              fontSize: isMobile ? "clamp(1.2rem, 5.5vw, 1.8rem)" : "clamp(22px, 4vw, 48px)",
              lineHeight: 1.45,
              color: "#ffffff",
              letterSpacing: "0.03em",
              marginBottom: "4px",
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}
          >
            パソコンのこと、もう社長が
            <br className="hidden md:inline" />
            <span style={{ color: "#C8B692" }}>悩まなくていい</span>んです。
          </h1>

          {/* Sub-copy */}
          <p
            className={isMobile ? "mt-3" : "mt-4"}
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontWeight: 700,
              fontSize: isMobile ? "clamp(14px, 4vw, 18px)" : "clamp(16px, 2vw, 22px)",
              lineHeight: 1.5,
              color: "#C8B692",
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}
          >
            あちこち電話する手間、なくしませんか？
          </p>

          <p
            className={isMobile ? "mt-4" : "mt-6"}
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: isMobile ? "clamp(13px, 3.5vw, 15px)" : "clamp(13px, 1.5vw, 16px)",
              lineHeight: 1.9,
              color: "#ffffff",
              maxWidth: "480px",
              margin: isMobile ? "16px auto 0" : undefined,
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}
          >
            故障も、ネットも、ホームページも。
            {!isMobile && <br />}
            面倒なデジタル業務は、地元の「<span style={{ fontWeight: 700, color: "#C8B692" }}>IT係</span>」に全部丸投げしてください。
            {!isMobile && <br />}
            小牧・一宮エリアを走る「<span style={{ fontWeight: 700, color: "#C8B692" }}>デジタル番頭</span>」が、御社のバックオフィスを支えます。
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex ${isMobile ? "flex-col gap-3 mt-6 w-full" : "gap-4 mt-8"}`}
          >
            <a
              href="https://lin.ee/ieroOsn"
              target="_blank"
              rel="noopener noreferrer"
              className={`py-3 cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2 no-underline ${isMobile ? "w-full" : "px-6"}`}
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "14px" : "15px",
                backgroundColor: "#06c755",
                color: "#ffffff",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#06c755",
                borderRadius: "2px",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ flexShrink: 0 }}>
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで番頭を呼ぶ
            </a>

            <button
              className={`py-3 cursor-pointer transition-all duration-300 ${isMobile ? "w-full" : "px-6"}`}
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "14px" : "15px",
                backgroundColor: "transparent",
                color: "#ffffff",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(200, 182, 146, 0.3)",
                borderRadius: "2px",
              }}
              onClick={() => {
                document
                  .getElementById("service")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(200, 182, 146, 0.1)";
                e.currentTarget.style.borderColor = "rgba(200, 182, 146, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(200, 182, 146, 0.3)";
              }}
            >
              サービス一覧を見る
            </button>
          </div>

          {/* Free consultation badge */}
          <p
            className={`mt-3 ${isMobile ? "text-center" : ""}`}
            style={{
              fontSize: "12px",
              color: "rgba(200, 182, 146, 0.6)",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            ※ 初回診断・ご相談は無料です
          </p>
        </div>

        {/* ── Right: Orbital Visualization ── */}
        <div
          className={isMobile
            ? "relative w-full flex justify-center"
            : "relative flex-1 flex items-center justify-center"
          }
          style={isMobile ? { height: `${containerSize * mobileScale}px` } : undefined}
        >
          <div
            className="relative"
            style={{
              width: `${containerSize}px`,
              height: `${containerSize}px`,
              transform: isMobile ? `scale(${mobileScale})` : undefined,
              transformOrigin: "top center",
            }}
          >
            {/* ── Orbit rings — gold ink brush style ── */}
            {[0, -40, 40].map((offset, i) => (
              <div
                key={`ring-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: `${orbitRadius * 2 + offset}px`,
                  height: `${orbitRadius * 2 + offset}px`,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  borderWidth: i === 0 ? "1.5px" : "1px",
                  borderStyle: i === 0 ? "solid" : "dashed",
                  borderColor:
                    i === 0
                      ? "rgba(200, 182, 146, 0.2)"
                      : "rgba(200, 182, 146, 0.08)",
                }}
              />
            ))}

            {/* ── Orbit Turntable ── */}
            <div
              className="absolute inset-0"
              style={{
                animation: "orbit 50s linear infinite",
                animationPlayState: activeModule !== null ? "paused" : "running",
              }}
            >
              <ConnectionLines
                containerSize={containerSize}
                orbitRadius={orbitRadius}
                activeId={activeModule}
              />
              {services.map((svc) => (
                <ServiceCard
                  key={svc.id}
                  svc={svc}
                  isActive={activeModule === svc.id}
                  onActivate={() => handleActivate(svc.id)}
                  onDeactivate={handleDeactivate}
                  onNavigate={() => handleNavigate(svc)}
                  orbitRadius={orbitRadius}
                  isMobile={isMobile}
                  orbitPaused={activeModule !== null}
                />
              ))}
            </div>

            {/* ── Central Hub ── */}
            <div
              className="absolute rounded-full flex items-center justify-center"
              style={{
                width: `${hubSize}px`,
                height: `${hubSize}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(200, 182, 146, 0.2)",
                boxShadow: "0 0 60px rgba(200, 182, 146, 0.06)",
                zIndex: 20,
              }}
            >
              {/* Background */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(200, 182, 146, 0.06) 0%, rgba(12, 12, 16, 0.95) 100%)",
                }}
              />

              {/* Spinning inner ring — gold */}
              <div
                className="absolute rounded-full animate-spin-slow"
                style={{
                  width: `${hubInner}px`,
                  height: `${hubInner}px`,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderTopColor: "rgba(200, 182, 146, 0.15)",
                  borderRightColor: "rgba(200, 182, 146, 0.05)",
                  borderBottomColor: "rgba(0, 153, 122, 0.1)",
                  borderLeftColor: "rgba(200, 182, 146, 0.05)",
                }}
              />

              {/* Branding */}
              <div className="relative z-10 text-center px-3">
                <img
                  src={nextOneLogo}
                  alt="NEXT-ONE"
                  className="mx-auto mb-1"
                  style={{
                    width: isMobile ? "120px" : "240px",
                    height: "auto",
                    filter: "invert(1)",
                    mixBlendMode: "screen",
                  }}
                />
                <p
                  className="tracking-[0.15em] uppercase"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: isMobile ? "6px" : "9px",
                    color: "rgba(200, 182, 146, 0.55)",
                  }}
                >
                  Total Solution for SMB
                </p>
                {/* Gold line */}
                <div
                  className="mx-auto mt-2"
                  style={{
                    width: isMobile ? "28px" : "50px",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(200, 182, 146, 0.3), transparent)",
                  }}
                />
                {!isMobile && (
                  <p
                    className="mt-3 font-bold whitespace-nowrap"
                    style={{
                      fontSize: "11px",
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: "rgba(255, 255, 255, 1)",
                      lineHeight: 1.6,
                      margin: "8px auto 0",
                    }}
                  >
                    愛知県尾張エリアの中小企業を
                    <br className="hidden md:inline" />
                    IT・Web・写真・車でトータルサポート
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom SCROLL indicator ── */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-20">
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(200, 182, 146, 0.35)",
          }}
        >
          SCROLL
        </p>
        <div
          className="mx-auto mt-2"
          style={{
            width: "1px",
            height: "24px",
            background: "linear-gradient(180deg, rgba(200, 182, 146, 0.4), transparent)",
          }}
        />
      </div>
    </section>
  );
}