import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div >
         <Header /> 
 <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero/>
   
      
      </main>
      <Footer />  

    </div>

  );
}
