import { motion } from "motion/react";
import { MapPin, Clock, Phone, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "./motion-variants";

import nagoyaPhoto from "../../assets/8497b42b806cbade48f4e76d71125666fbdc8d91.png";

const NAGOYA_PHOTO = nagoyaPhoto;

const companyData = [
  { dt: "運営", dd: "合同会社HACS" },
  {
    dt: "対応エリア",
    dd: "愛知県 小牧市 / 清須市 / 一宮市 / 名古屋市北部",
  },
  {
    dt: "事業内容",
    dd: "IT保守、Web制作、写真撮影、車両管理",
  },
  {
    dt: "対応時間",
    dd: "平日 9:00〜18:00（緊急時は時間外対応可）",
  },
];

const strengths = [
  { icon: Clock, text: "最短30分で現場到着", color: "#00997A" },
  { icon: Phone, text: "24時間LINE受付", color: "#C8B692" },
  { icon: Users, text: "専任担当制で安心", color: "#c0392b" },
];

export function CompanyInfo() {
  return (
    <section
      id="company"
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: "#0C0C10" }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-5 sm:px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Section header */}
        <motion.div className="mb-12" variants={fadeInUp}>
          <p
            className="text-sm uppercase tracking-widest mb-2"
            style={{
              fontWeight: 600,
              letterSpacing: "0.2em",
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#C8B692",
            }}
          >
            Company
          </p>
          <h2
            className=""
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 1rem + 3vw, 2.5rem)",
              color: "#ffffff",
            }}
          >
            NEXT-ONE
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Company details + Representative */}
          <motion.div className="lg:w-1/2" variants={fadeInLeft}>
            {/* Company details */}
            <motion.dl
              className="space-y-4 text-sm mb-8"
              style={{ color: "#ffffff" }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {companyData.map((item) => (
                <motion.div
                  key={item.dt}
                  variants={fadeInUp}
                  className="flex pb-3"
                  style={{
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "rgba(200, 182, 146, 0.06)",
                  }}
                >
                  <dt
                    className="w-28 shrink-0"
                    style={{ fontWeight: 600, color: "#ffffff" }}
                  >
                    {item.dt}
                  </dt>
                  <dd style={{ color: "#ffffff" }}>
                    {item.dd}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>

            {/* Strengths */}
            <div className="grid grid-cols-3 gap-3">
              {strengths.map((s) => (
                <div
                  key={s.text}
                  className="p-3 rounded-lg text-center"
                  style={{
                    background: "rgba(200, 182, 146, 0.03)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgba(200, 182, 146, 0.06)",
                  }}
                >
                  <s.icon
                    className="w-5 h-5 mx-auto mb-2"
                    style={{ color: s.color }}
                  />
                  <p
                    className="text-[12px]"
                    style={{
                      fontWeight: 600,
                      color: "#ffffff",
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Map + locality */}
          <motion.div className="lg:w-1/2" variants={fadeInRight}>
            {/* Map photo */}
            <div
              className="h-64 lg:h-80 rounded-lg relative overflow-hidden group mb-6"
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(200, 182, 146, 0.08)",
              }}
            >
              <ImageWithFallback
                src={NAGOYA_PHOTO}
                alt="名古屋市・尾張エリア"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 z-10 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: "rgba(12, 12, 16, 0.6)" }}
              />
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(200, 182, 146, 0.06) 0%, transparent 70%)",
                }}
              />
              <p
                className="absolute bottom-4 right-4 text-xs z-20"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "#ffffff",
                }}
              >
                Komaki / Kiyosu / Ichinomiya
              </p>
              <div className="absolute top-4 left-4 z-20">
                <p
                  className="text-[12px] tracking-wider"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    color: "#C8B692",
                  }}
                >
                  SERVICE AREA
                </p>
              </div>
            </div>

            {/* Locality message */}
            <motion.div
              className="p-6 rounded-lg"
              style={{
                background: "rgba(200, 182, 146, 0.03)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(200, 182, 146, 0.1)",
              }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <p
                className="mb-3 flex items-center gap-2 text-sm"
                style={{ color: "#C8B692", fontWeight: 600 }}
              >
                <MapPin className="w-4 h-4" /> 地域密着の理由
              </p>
              <p
                className="text-xs"
                style={{
                  lineHeight: 2,
                  color: "#ffffff",
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                ITトラブルは「今すぐ直してほしい」ものばかりです。
                <br className="hidden md:inline" />
                大手サポートセンターのように電話をたらい回しにしたり、訪問が数日後になることはありません。
                <br className="hidden md:inline" />
                地元の「番頭」として、すぐに駆けつけられる距離感を大切にしています。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}