import Hero from "@/components/Hero";
import Card from "@/components/card";
import Info from "@/components/info";
import Services from "@/components/services";
import Testimonial from "@/components/Testimonial";
import Newsletter from "@/components/newsletter";
export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <Card />
      <Services />
      <Testimonial />
      <Newsletter />
    </main>
  );
}
