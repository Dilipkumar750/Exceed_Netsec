import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";

import intro from "../images/intro.png";
import intro2 from "../images/blob-shape.png";
const Intro = () => {
  return (
    <>
      <section className="pt-10 overflow-hidden    md:pt-0 sm:pt-16 2xl:pt-16 mt-[60px] ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
            <div>
            <h2 className=" mb-5 text-4xl  text-black  sm:text-[40px]/[48px] border-gray-700 font-extrabold  ">
            Products and advanced IT technology.
            </h2>
             

              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600  md:mt-8">
              Our team offers you an unprecedented, personal level of service while freeing up your resources to focus on growing your business. Our support infrastructure is a highly efficient and automated platform that speeds up issue resolution and keeps your systems and people moving. We take responsibility for building custom software solutions that automate your business processes and improve efficiency.
              </p>
            </div>

            <div className="relative" data-aos="fade-left">
              

              <img
                className="relative w-full xl:max-w-xl xl:mx-auto rounded-lg xl:ms-6 2xl:origin-bottom 2xl:scale-110"
                src={intro}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
