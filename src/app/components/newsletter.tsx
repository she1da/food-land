import React from "react";
import Image from "next/image";

export default function Newsletter(): JSX.Element {
  return (
    <section className=" flex flex-wrap w-full items-center justify-between mx-auto p-4 m-10  pt-10">
      <div className="flex flex-wrap w-full">
        <div className="bg-gray-900 w-full  rounded-3xl">
          <div className="mx-auto grid w-full  grid-cols-2 ">
            <div className="relative  sm:w-1/2  ">
              <div className="absolute -top-20">
                <Image
                  className=""
                  src="/burger_sandwich_PNG4135 2.png"
                  alt="Next.js logo"
                  width={620}
                  height={750}
                  priority
                />
              </div>
            </div>
            <div className=" sm:w-1/2 ">
              <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                <div className="  font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
                  <h2 className="inline sm:block lg:inline xl:block">
                    Subcribe To Our Newsletter
                  </h2>
                </div>
                <div className="flex gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex rounded-md bg-[#EF4444] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  We care about your data. Read our{" "}
                  <a
                    href="https://www.swellai.com/privacy"
                    className="font-semibold text-white"
                  >
                    privacy&nbsp;policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
