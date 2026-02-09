import { Hero } from "@/src/components/Hero";
import { ProductSection } from "@/src/components/ProductSection";
import { HistorySection } from "@/src/components/HistorySection";
import { ResaleSection } from "@/src/components/ResaleSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#f4f1ea]">
      <Hero />
      <ProductSection />
      <HistorySection />
      <ResaleSection/>
    </div>
  );
}
