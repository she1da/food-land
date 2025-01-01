import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="">
     
    <Header/> 
     
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      
      </main>
 <Footer/>

    </div>

  );
}
