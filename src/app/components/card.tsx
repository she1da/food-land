import React from "react";
import Image from "next/image";

export default function Card(): JSX.Element {
  return (
  
     
      
      
      
       
    <section className=" flex flex-wrap items-center justify-center mx-auto p-4  pt-10">
   


<div class="grid gap-x-8 gap-y-4 grid-cols-3">
  <div>   <div className="relative max-w-xs shadow rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <Image
                className="dark:invert inline-flex items-center justify-center ms-6 right-0 text-xs font-semibold text-blue-800 bg-blue-200 "
                src="/Mask group (2).png"
                alt="Next.js logo"
                width={458}
                height={333}
                priority
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Fast Transaction
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                Provides faster transaction, so money arrives in realtime
              </p>
              <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div></div>
  <div>    <div className="relative max-w-xs shadow rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <Image
                className="dark:invert inline-flex items-center justify-center ms-6 right-0 text-xs font-semibold text-blue-800 bg-blue-200 "
                src="/Mask group (3).png"
                alt="Next.js logo"
                width={458}
                height={333}
                priority
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Fast Transaction
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div></div>
  <div>     <div className="relative max-w-xs shadow rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <Image
                className="dark:invert inline-flex items-center justify-center ms-6 right-0 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
                src="/Mask group (1).png"
                alt="Next.js logo"
                width={458}
                height={333}
                priority
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Fast Transaction
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div></div>

</div></section>
  );
}
