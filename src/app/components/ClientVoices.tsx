import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import factoryPhoto from "../../assets/fc89eeec03b61251fd681e1771e9db437801e69c.png";
import restaurantPhoto from "../../assets/20f567ac3e8871240f38c0627942da1a48b7071b.png";
import constructionPhoto from "../../assets/3597387e136734568f2c3c96cbdd11c7604abd16.png";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "./motion-variants";

/* ── Client Photos ── */
const PHOTOS = {
  factory: factoryPhoto,
  restaurant: restaurantPhoto,
  construction: constructionPhoto,
};

interface Testimonial {
  name: string;
  role: string;
  company: string;
  industry: string;
  photo: string;
  quote: string;
  services: { label: string; color: string }[];
}

const testimonials: Testimonial[] = [
  {
    name: "鈴木 健太",
    role: "代表取締役",
    company: "鈴木製作所",
    industry: "製造業 / 従業員15名",
    photo: PHOTOS.factory,
    quote:
      "パソコンが壊れるたびに半日潰れていたのが、NEXT-ONEさんのおかげで電話一本で解決するようになりました。採用サイトも作ってもらい、今年の応募数は去年の3倍です。",
    services: [
      { label: "TECH", color: "#00997A" },
      { label: "WEB", color: "#c0392b" },
    ],
  },
  {
    name: "田中 美咲",
    role: "オーナー",
    company: "Bistro Tanaka",
    industry: "飲食業 / 従業員8名",
    photo: PHOTOS.restaurant,
    quote:
      "お店の写真をプロに撮ってもらったら、Googleマップの閲覧数が一気に増えました。ホームページも一緒に作ってもらえて、「ここに頼めば全部やってくれる」安心感がすごいです。",
    services: [
      { label: "PHOTO", color: "#1e40af" },
      { label: "WEB", color: "#c0392b" },
    ],
  },
  {
    name: "山田 大輔",
    role: "専務取締役",
    company: "山田建設工業",
    industry: "建設業 / 従業員32名",
    photo: PHOTOS.construction,
    quote:
      "新事務所の開設でネット回線、Wi-Fi、PC手配、社用車まで全部お願いしました。窓口が一つだから打ち合わせも一回で済んで、予定より2週間早くオープンできました。",
    services: [
      { label: "TECH", color: "#00997A" },
      { label: "CAR", color: "#7e22ce" },
    ],
  },
];

export function ClientVoices() {
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
          <motion.p
            variants={fadeInUp}
            className="text-[15px] max-w-md mx-auto"
            style={{
              color: "#ffffff",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            尾張エリアの中小企業を支え続けてきた、NEXT-ONEの実績をご紹介します。
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="rounded-lg overflow-hidden group"
              style={{
                background: "rgba(200, 182, 146, 0.03)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(200, 182, 146, 0.08)",
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
              }}
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={t.photo}
                  alt={t.company}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(12,12,16,0.95) 0%, rgba(12,12,16,0.3) 50%, transparent 100%)",
                  }}
                />
                {/* Industry badge */}
                <div className="absolute bottom-3 left-4">
                  <p
                    className="text-[12px]"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    {t.industry}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Quote icon */}
                <Quote
                  className="w-5 h-5 mb-3"
                  style={{ color: "rgba(200, 182, 146, 0.25)" }}
                />

                <p
                  className="text-sm mb-5"
                  style={{
                    lineHeight: 1.9,
                    color: "#ffffff",
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  {t.quote}
                </p>

                {/* Service badges */}
                <div className="flex gap-2 mb-4">
                  {t.services.map((s) => (
                    <span
                      key={s.label}
                      className="text-[10px] px-2 py-0.5 tracking-wider"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        color: s.color,
                        backgroundColor: `${s.color}15`,
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: `${s.color}25`,
                        borderRadius: "2px",
                      }}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div
                  className="mb-4"
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(200,182,146,0.12), transparent)",
                  }}
                />

                {/* Name */}
                <div className="flex items-center gap-3">
                  <div>
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: "'Shippori Mincho', serif",
                        fontWeight: 600,
                        color: "#ffffff",
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[12px]"
                      style={{
                        color: "#ffffff",
                        fontFamily: "'Noto Sans JP', sans-serif",
                      }}
                    >
                      {t.company} {t.role}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3"
                        fill="#C8B692"
                        style={{ color: "#C8B692" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}