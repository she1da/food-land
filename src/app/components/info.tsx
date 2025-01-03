import React from "react";

export default function Info(): JSX.Element {
  return (
    <section className=" flex flex-wrap w-full items-center justify-center mx-auto p-4  pt-10">
      <div className="grid grid-cols-3 divide-x divide-gray-400 shadow-md justify-items-center rounded-lg  p-2">
        <div className="m-6 p-2 flex items-center justify-center ">
          <span></span>
          <h5>Today 10:00am - 10:00pm</h5>
          <p>Working time</p>
        </div>
        <div className="m-6 p-2 flex items-center justify-center ">
          <span></span>
          <h5>Today 10:00am - 10:00pm</h5>
          <p>Working time</p>
        </div>
        <div className="m-6 p-2 flex items-center justify-center ">
          <span></span>
          <h5>Today 10:00am - 10:00pm</h5>
          <p>Working time</p>
        </div>
      </div>
    </section>
  );
}
