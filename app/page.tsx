import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Integrations from "@/components/Integrations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      {/* <Benefits /> */}
      {/* <Pricing /> */}
      <Integrations />
      <Footer />
    </div>
  );
}