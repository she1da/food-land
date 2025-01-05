import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Info(): JSX.Element {
  return (
    <section className=" flex flex-wrap w-full items-center justify-center mx-auto p-4  pt-10">
      <div className="grid grid-cols-3 w-full divide-x divide-gray-400 shadow-md justify-items-center rounded-lg  p-2">
        <div className="m-6 p-2 flex items-center justify-center ">
          <span className="text-sm bg-[#EF4444] text-[#fff] dark:text-gray-400">
            <FontAwesomeIcon icon={faClock} className="mr-1" />
          </span>
          <h5>Today 10:00am - 10:00pm</h5>
          <p>Working time</p>
        </div>
        <div className="m-6 p-2 flex items-center justify-center ">
          <span className="text-sm bg-[#EF4444] text-[#fff] dark:text-gray-400">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
          </span>
          <h5>Washington, D.C., DC,USA</h5>
          <p>Our Location</p>
        </div>
        <div className="m-6 p-2 flex items-center justify-center ">
          <span className="text-sm bg-[#EF4444] text-[#fff] dark:text-gray-400">
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
          </span>
          <h5>+0123 456 7891</h5>
          <p>Phone Number</p>
        </div>
      </div>
    </section>
  );
}
