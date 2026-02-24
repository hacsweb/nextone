import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

/* Enso (円相) logo – inline SVG data URI */
const ensoImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='%23C8B692' stroke-width='5' stroke-linecap='round' stroke-dasharray='170 18'/%3E%3C/svg%3E";

const LINE_SVG_PATH =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const LINE_URL = "https://lin.ee/ieroOsn";

/* ── Page nav links */
const pageLinks = [
  { label: "TECH", sublabel: "TECH", path: "/tech", color: "#00997A" },
  { label: "WEB", sublabel: "WEB", path: "/web", color: "#c0392b" },
  { label: "PHOTO", sublabel: "PHOTO", path: "/photo", color: "#1e40af" },
  { label: "CAR", sublabel: "CAR", path: "/car", color: "#7e22ce" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handlePageNav = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const isHome = location.pathname === "/";

  const currentAccent =
    pageLinks.find((l) => isActive(l.path))?.color ?? "#C8B692";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(12, 12, 16, 0.95)"
            : "rgba(12, 12, 16, 0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: scrolled
            ? "rgba(200, 182, 146, 0.08)"
            : "rgba(200, 182, 146, 0.04)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo + Tagline */}
          <button
            onClick={() => handlePageNav("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className="flex items-center gap-0.5"
              style={{ fontFamily: "'Shippori Mincho', serif" }}
            >
              <img
                src={ensoImage}
                alt=""
                style={{ width: "56px", height: "56px", objectFit: "contain" }}
              />
              <span
                className="text-lg tracking-wide ml-1"
                style={{ fontWeight: 700, color: "#ffffff" }}
              >
                NEXT
              </span>
              <span
                className="text-lg tracking-wide"
                style={{ fontWeight: 700, color: "#C8B692" }}
              >
                -ONE
              </span>
            </div>
            <span
              className="hidden sm:block text-[10px] tracking-[0.15em] uppercase"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                color: "#ffffff",
                borderLeftWidth: "1px",
                borderLeftStyle: "solid",
                borderLeftColor: "rgba(255,255,255,0.1)",
                paddingLeft: "12px",
              }}
            >
              Digital Banto
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {pageLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.sublabel}
                  onClick={() => handlePageNav(link.path)}
                  className="relative px-3 py-2 text-[13px] tracking-[0.08em] cursor-pointer transition-all duration-300"
                  style={{
                    fontWeight: active ? 700 : 500,
                    fontFamily: "'Noto Sans JP', sans-serif",
                    color: active ? link.color : "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color = link.color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                    }
                  }}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="header-active-bar"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                      style={{
                        width: "60%",
                        backgroundColor: link.color,
                        boxShadow: `0 0 8px ${link.color}44`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}

            {/* Desktop CTA — LINE */}
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 text-[13px] cursor-pointer transition-all duration-300 inline-flex items-center gap-1.5 no-underline"
              style={{
                fontWeight: 600,
                fontFamily: "'Noto Sans JP', sans-serif",
                backgroundColor: "#06c75520",
                color: "#06c755",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#06c75540",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#06c755";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#06c75520";
                e.currentTarget.style.color = "#06c755";
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ flexShrink: 0 }}>
                <path d={LINE_SVG_PATH} />
              </svg>
              LINE相談
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden cursor-pointer"
            style={{ color: currentAccent }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-16"
            style={{
              backgroundColor: "rgba(12, 12, 16, 0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            <nav className="flex flex-col items-center gap-6 pt-16">
              {/* Home link */}
              <button
                onClick={() => handlePageNav("/")}
                className="relative text-[16px] tracking-[0.15em] cursor-pointer transition-colors duration-300 px-6 py-2"
                style={{
                  fontWeight: isHome ? 700 : 500,
                  fontFamily: "'Shippori Mincho', serif",
                  color: isHome ? "#C8B692" : "#ffffff",
                }}
              >
                TOP
                {isHome && (
                  <span
                    className="absolute -left-1 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full"
                    style={{
                      backgroundColor: "#C8B692",
                      boxShadow: "0 0 10px rgba(200,182,146,0.4)",
                    }}
                  />
                )}
              </button>

              {pageLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.sublabel}
                    onClick={() => handlePageNav(link.path)}
                    className="relative text-[16px] tracking-[0.15em] cursor-pointer transition-colors duration-300 px-6 py-2"
                    style={{
                      fontWeight: active ? 700 : 500,
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: active ? link.color : "#ffffff",
                    }}
                  >
                    {link.label}
                    <span
                      className="ml-2 text-[11px] tracking-wider"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: active ? link.color : "#ffffff",
                      }}
                    >
                      {link.sublabel}
                    </span>
                    {active && (
                      <span
                        className="absolute -left-1 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full"
                        style={{
                          backgroundColor: link.color,
                          boxShadow: `0 0 10px ${link.color}66`,
                        }}
                      />
                    )}
                  </button>
                );
              })}

              {/* Mobile CTA — LINE */}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-6 px-8 py-3 text-[14px] cursor-pointer transition-all duration-300 inline-flex items-center gap-2 no-underline"
                style={{
                  fontWeight: 600,
                  fontFamily: "'Noto Sans JP', sans-serif",
                  backgroundColor: "#06c755",
                  color: "#ffffff",
                  borderRadius: "2px",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ flexShrink: 0 }}>
                  <path d={LINE_SVG_PATH} />
                </svg>
                LINE相談
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}