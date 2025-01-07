import React from "react";
import Image from "next/image";

export default function Testimonial(): JSX.Element {
  return (
    <section className=" flex flex-wrap w-full items-center justify-between mx-auto p-4  pt-10">
      <div className="flex flex-wrap w-full">
        <div className="w-full sm:w-6/12  mb-10 ">
          <div className="mt-6 font-[sans-serif]">
            <div className="max-w-4xl mx-auto relative h-[445px] rounded-[35px] shadow-md m-6 p-6">
              <div className="text-center"></div>

              <div className="max-w-xl mt-16 mx-auto ">
                <div className="flex flex-wrap justify-center items-center text-center">
                  <Image
                    className="w-28 h-28  "
                    src="/Group 30.png"
                    alt="Next.js logo"
                    width={76}
                    height={76}
                    priority
                  />
                  <div className="mt-4">
                    <h4 className="text-gray-800 text-base font-extrabold">
                      Willians Jhone
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      CEO & Co-Founder
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm leading-relaxed">
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>

              <div className="bg-[#EF4444] w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer absolute left-0 top-0 bottom-0 my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-[#fff] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="bg-[#EF4444] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer absolute right-0 top-0 bottom-0 my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-[#fff] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-6/12  mb-10">
          <Image
            className="dark:invert inline-flex items-center justify-center ms-6 right-0 text-xs "
            src="/3-36085_fast-food-banner-junk-food-transparent-background 1.png"
            alt="Next.js logo"
            width={750}
            height={445}
            priority
          />
        </div>
      </div>
    </section>
  );
}
