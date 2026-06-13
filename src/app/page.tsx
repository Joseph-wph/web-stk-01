import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Why from "@/components/sections/why";
import Work from "@/components/sections/work";
import Testimonial from "@/components/sections/testimonial";
import Form from "@/components/sections/form";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="w-full mx-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Why />
      <Work />
      <Testimonial />
      <Form />
      <Footer />
    </main>
  );
}
