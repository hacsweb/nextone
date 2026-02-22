import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { Phone } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "./motion-variants";
import { useNavigate } from "react-router";

function LineIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

const CONSULTATION_PHOTO = consultationPhoto;

export function ContactFooter() {
  const navigate = useNavigate();

  return (
    <footer
      id="contact"
      className="relative"
      style={{ backgroundColor: "#0C0C10" }}
    >
      {/* CTA Banner */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-5xl mx-auto px-5 sm:px-6 py-24 md:py-32"
      >
        <div
          className="rounded-lg relative overflow-hidden"
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(200, 182, 146, 0.12)",
          }}
        >
          {/* Background photo */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src={CONSULTATION_PHOTO}
              alt="コンサルテーション"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(12,12,16,0.93) 0%, rgba(12,12,16,0.85) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 p-6 md:p-16 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm uppercase tracking-[0.2em] mb-4"
                style={{
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#C8B692",
                }}
              >
                Contact
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="mb-4 relative"
                style={{
                  fontFamily: "'Shippori Mincho', serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 1rem + 3vw, 2.5rem)",
                  letterSpacing: "0.02em",
                  color: "#ffffff",
                }}
              >
                まずは、御社の
                <br className="hidden md:inline" />
                <span className="gradient-text">「現状」</span>
                を少しだけお聞かせください。
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="max-w-md mx-auto mb-8 relative text-[15px]"
                style={{
                  lineHeight: 2,
                  color: "#ffffff",
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                売り込みはいたしません。
                <br className="hidden md:inline" />
                「パソコンが遅い」 「HPをどうにかしたい」など、
                <br className="hidden md:inline" />
                世間話のつもりでご相談ください。
                <br className="hidden md:inline" />
                最適な解決策を無料でアドバイスします。
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col gap-4 max-w-sm mx-auto relative"
              >
                <motion.a
                  href="https://lin.ee/ieroOsn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-8 py-4 rounded-full flex items-center justify-center relative overflow-hidden group cursor-pointer transition-all duration-300"
                  style={{
                    fontWeight: 700,
                    backgroundColor: "#06c755",
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                  <LineIcon className="w-7 h-7 mr-3 relative z-10" />
                  <div className="text-left relative z-10">
                    <span className="block text-[10px] opacity-90 leading-none mb-1">
                      24時間受付 / 法人専用
                    </span>
                    <span className="text-[18px]">LINEで無料診断・相談</span>
                  </div>
                </motion.a>

                {/* Phone number */}
                <div className="text-center">
                  <p
                    className="text-[11px] mb-1"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    お急ぎの方はこちら
                  </p>
                  <a
                    href="tel:0568706558"
                    className="inline-flex items-center gap-2 transition-colors"
                    style={{ color: "#ffffff" }}
                  >
                    <Phone className="w-5 h-5" />
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                      }}
                    >
                      0568-70-6558
                    </span>
                    <span
                      className="text-[12px]"
                      style={{ color: "#ffffff" }}
                    >
                      (平日9:00-18:00)
                    </span>
                  </a>
                </div>

                <p
                  className="mt-2 text-xs text-center"
                  style={{ color: "#ffffff" }}
                >
                  ※個人のお客様（PC修理・記念撮影）の専用窓口は
                  <span
                    className="ml-1 inline-flex items-center gap-1 px-2 py-0.5 text-[10px] tracking-wider"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      color: "#C8B692",
                      backgroundColor: "rgba(200, 182, 146, 0.08)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "rgba(200, 182, 146, 0.15)",
                      borderRadius: "2px",
                    }}
                  >
                    COMING SOON
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div
        className="max-w-6xl mx-auto px-5 sm:px-6 pb-12"
        style={{
          borderTopWidth: "1px",
          borderTopStyle: "solid",
          borderTopColor: "rgba(200, 182, 146, 0.06)",
          paddingTop: "3rem",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3
              className="text-xl mb-3 flex items-center gap-0.5"
              style={{
                fontFamily: "'Shippori Mincho', serif",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              NEXT
              <span style={{ color: "#C8B692" }}>-ONE</span>
            </h3>
            <p
              className="text-sm"
              style={{
                lineHeight: 1.8,
                color: "#ffffff",
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              愛知県尾張エリアの中小企業を、まるごと支えるビジネス・コンシェルジュ。
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries({
            サービス: [
              { label: "TECH (IT保守)", path: "/tech" },
              { label: "WEB (制作)", path: "/web" },
              { label: "PHOTO (撮影)", path: "/photo" },
              { label: "CAR (車両)", path: null },
            ],
            会社情報: [
              { label: "運営会社", path: null },
              { label: "対応エリア", path: null },
              { label: "ブログ", path: null },
            ],
            法務: [
              { label: "プライバシーポリシー", path: null },
              { label: "特定商取引法に基づく表記", path: null },
            ],
          }).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-sm mb-4"
                style={{
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.path ?? "#"}
                      onClick={(e) => {
                        if (link.path) {
                          e.preventDefault();
                          navigate(link.path);
                        }
                      }}
                      className="text-sm transition-colors cursor-pointer"
                      style={{ color: "#ffffff" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#C8B692";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#ffffff";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "rgba(200, 182, 146, 0.04)",
          }}
        >
          <p
            className="text-xs"
            style={{ color: "#ffffff" }}
          >
            &copy; 2026 NEXT-ONE (合同会社HACS). All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "LINE"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs transition-colors"
                style={{ color: "#ffffff" }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export { LineIcon };