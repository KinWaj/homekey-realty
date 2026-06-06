import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Offers from "@/components/Offers";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Testimonials />
        <Offers />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
