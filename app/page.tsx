import { Hero } from "@/src/components/Hero";
import { ProductSection } from "@/src/components/ProductSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#f4f1ea]">
      <Hero />
      <ProductSection />

      {/* Placeholder for future content */}
      <section className="py-20 px-8 text-center">
        <p className="text-gray-500 font-light tracking-wide">Mais conteúdo em breve...</p>
      </section>
    </div>
  );
}
