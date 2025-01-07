import React from "react";
import Image from "next/image";

export default function Card(): JSX.Element {
  return (
    <section className=" flex flex-wrap w-full items-center justify-between mx-auto p-4  pt-10">
      <div className="w-full md:w-12/12 items-center justify-center">
        <span>Product</span>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Most Popular Items
        </h2>
      </div>

      <div className="w-full md:w-12/12">
        <div className="grid  grid-cols-3 gap-x-4 gap-y-4 ">
          <div className="justify-self-auto">
            <div className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl">
              <a href="#">
                <Image
                  className=" rounded-t-3xl "
                  src="/gyro-sandwich1-1650490757 1.png"
                  alt="Next.js logo"
                  width={485}
                  height={485}
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Gyro Sandwhich
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl">
              <a href="#">
                <Image
                  className=" rounded-t-3xl "
                  src="/Mask group.png"
                  alt="Next.js logo"
                  width={485}
                  height={485}
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Enchilade
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl">
              <a href="#">
                <Image
                  className=" rounded-t-3xl "
                  src="/Mask group (1).png"
                  alt="Next.js logo"
                  width={485}
                  height={485}
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Green Beans
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl">
              <a href="#">
                <Image
                  className=" rounded-t-3xl "
                  src="/Mask group (2).png"
                  alt="Next.js logo"
                  width={485}
                  height={485}
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Pizza
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl">
              <a href="#">
                <Image
                  className=" rounded-t-3xl "
                  src="/Mask group (3).png"
                  alt="Next.js logo"
                  width={485}
                  height={485}
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Chicken Pot Pie
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl">
              <a href="#">
                <Image
                  className=" rounded-t-3xl "
                  src="/Mask group (1).png"
                  alt="Next.js logo"
                  width={485}
                  height={485}
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Green Salad
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
