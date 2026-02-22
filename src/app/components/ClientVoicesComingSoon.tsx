import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "./motion-variants";

export function ClientVoicesComingSoon() {
  return (
    <section
      className="py-24 md:py-32 relative noise-overlay"
      style={{ backgroundColor: "#12100e" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm uppercase tracking-widest mb-3"
            style={{
              fontWeight: 600,
              letterSpacing: "0.2em",
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#C8B692",
            }}
          >
            Client Voices
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mb-4"
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 1rem + 3vw, 2.5rem)",
              color: "#ffffff",
            }}
          >
            お客様の<span className="gradient-text">声</span>
          </motion.h2>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-lg mx-auto rounded-lg p-10 md:p-14 text-center"
          style={{
            background: "rgba(200, 182, 146, 0.03)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderTopColor: "rgba(200, 182, 146, 0.08)",
            borderRightColor: "rgba(200, 182, 146, 0.08)",
            borderBottomColor: "rgba(200, 182, 146, 0.08)",
            borderLeftColor: "rgba(200, 182, 146, 0.08)",
          }}
        >
          <MessageSquare
            className="w-10 h-10 mx-auto mb-5"
            style={{ color: "rgba(200, 182, 146, 0.25)" }}
          />
          <p
            className="text-sm uppercase tracking-widest mb-3"
            style={{
              fontWeight: 600,
              letterSpacing: "0.2em",
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#C8B692",
            }}
          >
            Coming Soon
          </p>
          <p
            className="text-[14px]"
            style={{
              color: "rgba(255,255,255,0.45)",
              fontFamily: "'Noto Sans JP', sans-serif",
              lineHeight: 1.8,
            }}
          >
            お客様の声を準備中です。
            <br />
            近日公開予定ですので、しばらくお待ちください。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
