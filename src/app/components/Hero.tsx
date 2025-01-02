import Image from "next/image";
import React from "react";
export default function Hero(): JSX.Element{
    return ( <section className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-6">
       <div className="flex flex-wrap">
    <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div className="text-4xl font-bold">
          <button type="button" className="inline-flex items-center mt-6 px-2 py-2 text-sm font-medium text-center text-white bg-[#EF4444] hover:bg-[#dc5555] focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-[40px]  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
     <span>Bike Delivery</span>
<Image
          className="dark:invert inline-flex items-center justify-center ms-6 right-0 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
          src="/428-4282931_uber-for-food-delivery-food-delivery 1.png"
          alt="Next.js logo"
          width={54}
          height={54}
          priority
        />

</button>
          </div>

    
          <div>
            {/* <Image src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"/> */}
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">The Fastest  </h1>
            <h1 className="text-4xl lg:text-6xl font-bold"> Delivery    </h1>
            <h1 className="text-4xl lg:text-6xl font-bold">  In    <span className="text-[#EF4444]">Your City</span></h1>
            <p className="text-xl mb-10 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
            <button className="bg-[#EF4444] text-white text-2xl font-medium px-4 py-2 rounded shadow">See the Menu</button>
          </div>
        </header>
      </div>
    </div>
    {/* <Image src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12"/> */}
  </div>

        </section>
    )
}