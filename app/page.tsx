import Ecosystem from "@/components/Ecosystem";
import HeroSection from "../components/HeroSection";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Platform from "@/components/Platform";

import { productData } from "@/utils/constants";
import { platformData } from "@/utils/constants";

export default function Home() {
  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>

      <section id="ecosystem">
        <Ecosystem />
      </section>

      <section id="products">
        <Products data={productData} />
      </section>
      
      <Platform data={platformData} />
      <Footer />
    </main>
  );
}
