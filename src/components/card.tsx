"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import { CounterContext } from "@/components/shoppingCart";

export default function Card(): JSX.Element {
  const [counts, setCounts] = useState({
    gyro: 0,
    enchilada: 0,
    greenBeans: 0,
    pizza: 0,
    chickenPotPie: 0,
    greenSalad: 0,
  });

  const addToCart = (item: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [item]: prevCounts[item] + 1,
    }));
  };

  const removeFromCart = (item: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [item]: Math.max(prevCounts[item] - 1, 0),
    }));
  };

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
            <div
              className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl"
              id="gyro-sandwich"
            >
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
                <button
                  onClick={() => removeFromCart("gyro")}
                  className="mt-2 bg-red-500 text-white py-2 px-4 rounded"
                >
                  -
                </button>
                <span className="mx-2">{counts.gyro}</span>
                <button
                  onClick={() => addToCart("gyro")}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl"
              id="enchilada"
            >
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
                <button
                  onClick={() => removeFromCart("enchilada")}
                  className="mt-2 bg-red-500 text-white py-2 px-4 rounded"
                >
                  -
                </button>
                <span className="mx-2">{counts.enchilada}</span>
                <button
                  onClick={() => addToCart("enchilada")}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl"
              id="green-beans"
            >
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
                <button
                  onClick={() => removeFromCart("greenBeans")}
                  className="mt-2 bg-red-500 text-white py-2 px-4 rounded"
                >
                  -
                </button>
                <span className="mx-2">{counts.greenBeans}</span>
                <button
                  onClick={() => addToCart("greenBeans")}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl"
              id="pizza"
            >
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
                <button
                  onClick={() => removeFromCart("pizza")}
                  className="mt-2 bg-red-500 text-white py-2 px-4 rounded"
                >
                  -
                </button>
                <span className="mx-2">{counts.pizza}</span>
                <button
                  onClick={() => addToCart("pizza")}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl"
              id="chicken-pot-pie"
            >
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
                <button
                  onClick={() => removeFromCart("chickenPotPie")}
                  className="mt-2 bg-red-500 text-white py-2 px-4 rounded"
                >
                  -
                </button>
                <span className="mx-2">{counts.chickenPotPie}</span>
                <button
                  onClick={() => addToCart("chickenPotPie")}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl"
              id="green-salad"
            >
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
                <button
                  onClick={() => removeFromCart("greenSalad")}
                  className="mt-2 bg-red-500 text-white py-2 px-4 rounded"
                >
                  -
                </button>
                <span className="mx-2">{counts.greenSalad}</span>
                <button
                  onClick={() => addToCart("greenSalad")}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
