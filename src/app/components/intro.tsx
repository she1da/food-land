import React from "react";
import Image from "next/image";

export default function Intro(): JSX.Element {
  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  {/* <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  /> */}

                  <Image
                    className="w-full rounded-2xl"
                    src="/unsplash_lP5MCM6nZ5A.png"
                    alt="Next.js logo"
                    width={98}
                    height={98}
                    priority
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  {/* <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  /> */}
                  <Image
                    className=" w-full rounded-2xl"
                    src="/unsplash_ZuIDLSz3XLg.png"
                    alt="Next.js logo"
                    width={98}
                    height={98}
                    priority
                  />
                </div>
                <div className="py-3 sm:py-4">
                  {/* <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  /> */}

                  <Image
                    className=" w-full rounded-2xl"
                    src="/unsplash_CLMpC9UhyTo.png"
                    alt="Next.js logo"
                    width={98}
                    height={98}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Food is an important part Of a balanced Diet
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit
                eu velit in consequat.
              </p>

              <a
                href="javascript:void(0)"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-full px-7 bg-[#EF4444] hover:bg-opacity-90"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
