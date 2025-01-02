import Image from "next/image";
import React from "react";
export default function Hero(): JSX.Element {
  return (
    <section className=" flex flex-wrap items-center justify-between mx-auto p-4  pt-10">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12  mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                <button
                  type="button"
                  className="inline-flex items-center w-[270px] mt-6 px-2 py-2 text-lg font-medium text-center text-white bg-[#EF4444] hover:bg-[#dc5555] focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-[40px]  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
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

              <div></div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">The Fastest </h1>
                <h1 className="text-4xl lg:text-6xl font-bold"> Delivery </h1>
                <h1 className="text-4xl lg:text-6xl font-bold">
                  In <span className="text-[#EF4444]">Your City</span>
                </h1>
                <p className="text-xl mb-10 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae maiores neque eaque ea odit placeat, tenetur illum
                  distinctio nulla voluptatum a corrupti beatae tempora aperiam
                  quia id aliquam possimus aut.
                </p>
                <button className="bg-[#EF4444] text-white text-2xl font-medium px-4 py-2 rounded-[15px] shadow">
                  See the Menu
                </button>
              </div>
            </header>
          </div>
        </div>
        <div className="w-full sm:w-2/12  mt-10   mb-10">
          <div className="sm:w-6/12 relative">
            <a href="#" className="absolute  -top-20 left-0 w-60  ">
              <Image
          src="/burger_sandwich_PNG4135 1.png"
                alt="Next.js logo"
                width={226}
                height={159}
                priority
              />
            </a>
            <div className=" max-w-sm flex flex-wrap items-center justify-center  mt-10 pt-6  bg-white shadow-lg w-[258px] h-[275px] rounded-[30px]  dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5  items-center justify-center ">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Burger
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Mushroom Sauce
                </p>
                <p>
                  {" "}
                  <span className="text-[#B91C1C]">$</span>6.15
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-6/12 relative">
          <div className="">     <a href="#" className="absolute  -top-20 left-0 w-60  ">
              <Image
                src="/pizza-png-12 1.png"
                alt="Next.js logo"
                width={226}
                height={159}
                priority
              />
            </a>
            <div className=" max-w-sm flex flex-wrap items-center justify-center  mt-10 pt-6  bg-white shadow-lg w-[258px] h-[275px] rounded-[30px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5  items-center justify-center ">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Pizza
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Mushroom Sauce
                </p>
                <p>
                  
                  <span className="text-[#B91C1C]">$</span>6.15
                </p>
              </div>
            </div> </div>
       
          </div>
          
          
        </div>
        <div className="w-full sm:w-2/12  mt-10   mb-10">
          <div className="sm:w-6/12 relative">
            <a href="#" className="absolute  -top-20 left-0 w-60  ">
              <Image
                src="/Combo-Junk-Food-PNG-Image 2.png"
                alt="burger_sandwich_PNG4135 1"
                width={226}
                height={159}
                priority
              />
            </a>
            <div className=" max-w-sm flex flex-wrap items-center justify-center  mt-10 pt-6  bg-white shadow-lg w-[258px] h-[275px] rounded-[30px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5  items-center justify-center ">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Food Combo
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Mushroom Sauce
                </p>
                <p>
                  <span className="text-[#B91C1C]">$</span>6.15
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-6/12 relative ">
            <a href="#"className="absolute  -top-20 left-0 w-60  ">
              <Image
                src="/purepng 1.png"
                alt="Next.js logo"
                width={226}
                height={159}
                priority
              />
            </a>
            <div className=" max-w-sm flex flex-wrap items-center justify-center  mt-10 pt-6  bg-white shadow-lg w-[258px] h-[275px] rounded-[30px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5  items-center justify-center ">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Cake
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Mushroom Sauce
                </p>
                <p>
                  
                  <span className="text-[#B91C1C]">$</span>6.15
                </p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}
