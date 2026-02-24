import { HeroSection } from "./HeroSection";
import { MissionSection } from "./MissionSection";
import { ServicePillars } from "./ServicePillars";
import { TotalSolution } from "./TotalSolution";
import { ClientVoicesComingSoon } from "./ClientVoicesComingSoon";
import { CompanyInfo } from "./CompanyInfo";
import { ContactFooter } from "./ContactFooter";
import { usePageMeta } from "./usePageMeta";

export default function HomePage() {
  usePageMeta({
    title: "NEXT-ONE | 愛知・尾張エリアの中小企業をワンストップで支援",
    description:
      "愛知県尾張エリアの中小企業に特化。IT保守・Web制作・出張撮影・車両管理をワンストップで提供するNEXT-ONEの公式サイト。",
  });

  return (
    <div
      className="antialiased min-h-screen"
      style={{
        backgroundColor: "#0C0C10",
        color: "#ffffff",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <main>
        <HeroSection />
        <MissionSection />
        <ServicePillars />
        <TotalSolution />
        <ClientVoicesComingSoon />
        <CompanyInfo />
      </main>
      <ContactFooter />
    </div>
  );
}