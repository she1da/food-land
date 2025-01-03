import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/card";
import Info from "./components/info";
import Services from "./components/services";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Info />
        <Card />
        <Services />
      </main>
    </div>
  );
}
