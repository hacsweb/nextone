/**
 * Shared Motion animation variants — Wa-Modern (和モダン) theme
 * Using "motion" package (v12)
 * 侘び寂び: restrained, elegant motion with longer durations
 */

import type { Variants } from "motion/react";

// 🤖 ここを追加！：GooglebotやNetlifyの事前システムを検知する
const isBot = typeof navigator !== "undefined" && /bot|googlebot|crawler|spider|robot|crawling|prerender/i.test(navigator.userAgent);

// ロボットなら最初から表示(1)、人間のブラウザなら透明(0)にする
const initialOpacity = isBot ? 1 : 0;

/* ─── Fade In from Bottom ─── */
export const fadeInUp: Variants = {
  hidden: { opacity: initialOpacity, y: isBot ? 0 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ─── Fade In from Left ─── */
export const fadeInLeft: Variants = {
  hidden: { opacity: initialOpacity, x: isBot ? 0 : -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ─── Fade In from Right ─── */
export const fadeInRight: Variants = {
  hidden: { opacity: initialOpacity, x: isBot ? 0 : 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ─── Scale In ─── */
export const scaleIn: Variants = {
  hidden: { opacity: initialOpacity, scale: isBot ? 1 : 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ─── Stagger Container ─── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/* ─── Stagger Container (faster) ─── */
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

/* ─── Stagger Container (wider spacing) ─── */
export const staggerWide: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

/* ─── Hero Stagger ─── */
export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

/* ─── Hero Child ─── */
export const heroChild: Variants = {
  hidden: { opacity: initialOpacity, y: isBot ? 0 : 20, filter: isBot ? "blur(0px)" : "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ─── Page Transition ─── */
export const pageTransition: Variants = {
  initial: { opacity: initialOpacity, y: isBot ? 0 : 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ─── Card Hover — subtle lift, no glow ─── */
export const glowCardHover = {
  y: -4,
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
};

/* ─── Card Hover (legacy alias) ─── */
export const cardHover = {
  y: -3,
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
};

/* ─── Default whileInView props ─── */
export const viewportOnce = {
  once: true,
  amount: 0.15 as const,
};
