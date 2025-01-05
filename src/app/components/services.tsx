import React from "react";
import Image from "next/image";

export default function Services(): JSX.Element {
  return (
    <section className=" flex flex-wrap w-full items-center justify-between mx-auto p-4  pt-10">
      <div className="w-full  items-center justify-center">
        <span>Product</span>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Most Popular Items
        </h2>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="grid  grid-cols-3 w-full  justify-items-center">
          <div className="p-6 m-6  w-full justify-self-auto">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <Image
                  className=" w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/Ellipse 10.png"
                  alt="Next.js logo"
                  width={98}
                  height={98}
                  priority
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Qualityfull Food
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasur and prasising pain was bron.
                </span>
                <div className="flex mt-4 md:mt-6"></div>
              </div>
            </div>
          </div>
          <div className="p-6 m-6  w-full justify-self-auto ">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <Image
                  className=" w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/Ellipse 10.png"
                  alt="Next.js logo"
                  width={98}
                  height={98}
                  priority
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Qualityfull Food
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasur and prasising pain was bron.
                </span>
                <div className="flex mt-4 md:mt-6"></div>
              </div>
            </div>
          </div>
          <div className="p-6 m-6  w-full justify-self-auto">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <Image
                  className=" w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/Ellipse 10.png"
                  alt="Next.js logo"
                  width={98}
                  height={98}
                  priority
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Qualityfull Food
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasur and prasising pain was bron.
                </span>
                <div className="flex mt-4 md:mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
