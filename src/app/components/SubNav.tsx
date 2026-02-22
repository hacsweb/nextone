import { useState, useEffect, type ReactNode } from "react";
import { MessageCircle } from "lucide-react";

export interface NavItem {
  label: string;
  sectionId: string;
  icon: ReactNode;
}

interface SubNavProps {
  divisionLabel: string;
  accentColor: string;
  navItems: NavItem[];
  ctaLabel: string;
  ctaSectionId: string;
  ctaIcon?: ReactNode;
}

/* ── Smooth easing curve ── */
const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";

/* ── Hex to rgba helper (Motion v12 / browser compat) ── */
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ══════════════════════════════════════════════════
   Icon item with hover/tap tooltip
   ══════════════════════════════════════════════════ */
function NavIconItem({
  item,
  isActive,
  accentColor,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  accentColor: string;
  onClick: () => void;
}) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center justify-end"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* ── Tooltip label (slides in from left of icon) ── */}
      <div
        className="absolute right-full mr-2 md:mr-3 pointer-events-none whitespace-nowrap"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateX(0)" : "translateX(8px)",
          transition: `all 0.4s ${EASE_OUT}`,
          transitionDelay: "0.04s",
        }}
      >
        <div
          className="relative flex items-center px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg"
          style={{
            background: "rgba(20,20,28,0.95)",
            backdropFilter: "blur(12px)",
            boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)`,
          }}
        >
          <span
            className="text-[11px] md:text-[12px] font-bold"
            style={{ color: "#fff" }}
          >
            {item.label}
          </span>
          {/* Arrow pointing right */}
          <div
            className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45"
            style={{ background: "rgba(20,20,28,0.95)" }}
          />
        </div>
      </div>

      {/* ── Icon button ── */}
      <button
        onClick={onClick}
        className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl transition-all"
        style={{
          background: isActive
            ? hexToRgba(accentColor, 0.145)
            : show
              ? "rgba(255,255,255,0.06)"
              : "transparent",
          color: isActive
            ? accentColor
            : show
              ? "#fff"
              : "rgba(255,255,255,0.4)",
          transition: `all 0.3s ${EASE_OUT}`,
          transform: show ? "scale(1.08)" : "scale(1)",
        }}
      >
        {/* Active glow ring */}
        {isActive && (
          <span
            className="absolute inset-0 rounded-xl"
            style={{
              boxShadow: `inset 0 0 0 1.5px ${hexToRgba(accentColor, 0.27)}, 0 0 12px ${hexToRgba(accentColor, 0.13)}`,
            }}
          />
        )}
        {/* Active dot indicator */}
        {isActive && (
          <span
            className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-[3px] h-3 rounded-full"
            style={{
              background: accentColor,
              boxShadow: `0 0 8px ${hexToRgba(accentColor, 0.4)}`,
            }}
          />
        )}
        <span className="relative z-10 [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-[18px] md:[&>svg]:h-[18px]">
          {item.icon}
        </span>
      </button>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   Main SubNav Component — unified rail for all sizes
   ══════════════════════════════════════════════════ */
export function SubNav({
  divisionLabel,
  accentColor,
  navItems,
  ctaLabel,
  ctaSectionId,
  ctaIcon,
}: SubNavProps) {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [ctaShow, setCtaShow] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
      const ids = navItems.map((item) => item.sectionId);
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const resolvedCtaIcon = ctaIcon ?? <MessageCircle />;

  return (
    <div
      className="fixed z-40 flex flex-col items-center right-2 md:right-4 transition-all duration-700"
      style={{
        top: scrolled ? "88px" : "96px",
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? "auto" : "none",
        transition: `all 0.7s ${EASE_OUT}`,
      }}
    >
      <div
        className="flex flex-col items-center gap-0.5 p-1 md:p-1.5 rounded-2xl"
        style={{
          background: "rgba(18,18,24,0.82)",
          backdropFilter: "blur(24px) saturate(1.4)",
          boxShadow: `
            0 8px 40px rgba(0,0,0,0.35),
            0 0 0 1px rgba(255,255,255,0.05),
            inset 0 1px 0 rgba(255,255,255,0.04)
          `,
        }}
      >
        {/* Division Badge */}
        <div
          className="w-9 md:w-10 h-6 md:h-7 flex items-center justify-center rounded-lg text-[8px] md:text-[9px] tracking-[0.2em] uppercase font-english font-bold"
          style={{
            background: `linear-gradient(135deg, ${accentColor}, ${hexToRgba(accentColor, 0.73)})`,
            color: "#fff",
            boxShadow: `0 2px 8px ${hexToRgba(accentColor, 0.2)}`,
          }}
        >
          {divisionLabel}
        </div>

        {/* Separator */}
        <div
          className="w-5 my-0.5 md:my-1"
          style={{
            height: "1px",
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
          }}
        />

        {/* Nav Items */}
        {navItems.map((item) => (
          <NavIconItem
            key={item.sectionId}
            item={item}
            isActive={activeSection === item.sectionId}
            accentColor={accentColor}
            onClick={() => scrollToSection(item.sectionId)}
          />
        ))}

        {/* Separator */}
        <div
          className="w-5 my-0.5 md:my-1"
          style={{
            height: "1px",
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
          }}
        />

        {/* CTA Icon with hover/tap tooltip */}
        <div
          className="relative flex items-center justify-end"
          onMouseEnter={() => setCtaShow(true)}
          onMouseLeave={() => setCtaShow(false)}
        >
          {/* CTA Tooltip */}
          <div
            className="absolute right-full mr-2 md:mr-3 pointer-events-none whitespace-nowrap"
            style={{
              opacity: ctaShow ? 1 : 0,
              transform: ctaShow ? "translateX(0)" : "translateX(8px)",
              transition: `all 0.4s ${EASE_OUT}`,
              transitionDelay: "0.04s",
            }}
          >
            <div
              className="relative flex items-center px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${hexToRgba(accentColor, 0.8)})`,
                boxShadow: `0 4px 16px ${hexToRgba(accentColor, 0.27)}`,
              }}
            >
              <span className="text-[11px] md:text-[12px] font-bold text-white">
                {ctaLabel}
              </span>
              <div
                className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45"
                style={{ background: hexToRgba(accentColor, 0.8) }}
              />
            </div>
          </div>

          <button
            onClick={() => scrollToSection(ctaSectionId)}
            className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl text-white"
            style={{
              background: ctaShow
                ? `linear-gradient(135deg, ${accentColor}, ${hexToRgba(accentColor, 0.8)})`
                : hexToRgba(accentColor, 0.13),
              color: ctaShow ? "#fff" : accentColor,
              boxShadow: ctaShow
                ? `0 4px 20px ${hexToRgba(accentColor, 0.27)}`
                : "none",
              transition: `all 0.35s ${EASE_OUT}`,
              transform: ctaShow ? "scale(1.1)" : "scale(1)",
            }}
          >
            <span className="[&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-[18px] md:[&>svg]:h-[18px]">
              {resolvedCtaIcon}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}