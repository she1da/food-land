"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAppContext } from "@/components/shoppingCart";
import ShoppingCart from "./ShoppingCart";

export default function Card(): JSX.Element {
  const { count, setCount } = useAppContext();
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  const [menuItems, setMenuItems] = useState([]);

  const [cartItems, setCartItems] = useState<
    { id: string; title: string; count: number; image: string }[]
  >([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=5&apiKey=6f2e110e9b304f47b7758c49a21235c1"
      );
      const data = await response.json();
      setMenuItems(data.results);
    };

    fetchMenuItems();
  }, []);

  useEffect(() => {
    console.log({ count });
  }, [count]);

  const addToCart = (id: string) => {
    const itemToAdd = menuItems.find((item) => item.id === id);
    if (!itemToAdd) return;

    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item.id === id
    );

    if (existingItemIndex > -1) {
      updatedCartItems[existingItemIndex].count += 1;
    } else {
      updatedCartItems.push({
        id,
        title: itemToAdd.title,
        count: 1,
        image: itemToAdd.image,
      });
    }

    setCartItems(updatedCartItems);
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  useEffect(() => {
    localStorage.setItem("cartTime", new Date().getTime().toString());
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (id: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0),
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
          {menuItems.map((item) => (
            <div key={item.id} className="">
              <div
                className="max-w-md bg-white  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl"
                id={item.title.toLowerCase().replace(/\s+/g, "-")}
              >
                <a href="#">
                  <Image
                    className=" rounded-t-3xl "
                    src={item.image}
                    alt={item.title}
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
                      {item.title}
                    </h5>
                  </a>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 bg-red-500 text-white py-2 px-4 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{counts[item.id] || 0}</span>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ShoppingCart items={cartItems} />
    </section>
  );
}
