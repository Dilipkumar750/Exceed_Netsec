import React from "react";
import img1 from "../images/servicescard/Mail-server-Solutions-_Exchange-and-Third-Party_.png";
import img2 from "../images/lanwan.jpg";
import img3 from "../images/it & services.jpeg";
import img4 from "../images/backup.jpg";
import free from "../images/clients/wireless.png";
import train from "../images/clients/train.png";
import one from "../images/pics/one1.png";
import two from "../images/pics/two.png";
import ms from "../images/pics/mic.png";
import ba from "../images/pics/ba.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services" className="bg-white py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="text-center mb-5 text-5xl  text-black sm:text-[40px]/[48px] md:text-center block font-extrabold  underline  decoration-[#79df13] underline-offset-8">
            Our Services
          </h2>

          <div className="flex justify-center"></div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
          We are deeply committed to the growth and success of our clients.          </h2>

          <div></div>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all  ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-xl shadow-2xl p-3 group ">
              <div className="m-2 text-justify text-sm ">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={one}
                />
                <h2 className="font-semibold my-4 text-2xl text-center md:text-2xl  hover:text-white">
                  Mail security
                </h2>
                <p className="text-md font-medium">
                We offer comprehensive mail server solutions, including Microsoft Exchange and third-party options. Our services ensure secure, efficient, and reliable email communication for your organization. We provide seamless setup, migration, and ongoing support tailored to your needs. Trust us to enhance your email infrastructure with robust and scalable solutions.                </p>
              </div>
              <Link to="/services">
                <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#67f529] to-[#67f529] hover:bg-[#67f529]  hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    View More
                  </span>
                </button>
              </Link>
             </div>
           <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group ">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={two}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Dual Firewall
                </h2>
                <p className="text-md font-medium">
                Our solution's dual-layer firewall architecture enhances security by integrating two layers of firewall protection and meticulously analyzing both incoming and outgoing network traffic. This layered defense significantly reduces the risk of unauthorized access and narrows the range of threats to servers and essential data. Our goal is to protect critical infrastructure and maintain the secrecy and integrity of sensitive data.                </p>
              </div>
              <Link to="/services">
                <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#67f529] to-[#67f529] hover:bg-[#67f529]  hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    View More
                  </span>
                </button>
              </Link>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group ">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={ms}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  MS Office Dynamics 365
                </h2>
                <p className="text-md font-medium">
                An effective IT security awareness training program should begin with an introduction to cybersecurity, highlighting the importance of protecting company data and resources. It should explain common threats such as malware, phishing, ransomware, and social engineering. The training should be fully practical, with hands-on exercises to ensure participants understand and can apply the concepts.
                </p>
              </div>
              <Link to="/services">
                <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#67f529] to-[#67f529] hover:bg-[#67f529]  hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    View More
                  </span>
                </button>
              </Link>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group ">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={ba}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Ransomware Backups
                </h2>
                <p className="text-md font-medium">
                An effective IT security awareness training program should begin with an introduction to cybersecurity, highlighting the importance of protecting company data and resources. It should explain common threats such as malware, phishing, ransomware, and social engineering. The training should be fully practical, with hands-on exercises to ensure participants understand and can apply the concepts.
                </p>
              </div>{" "}
              <Link to="/services">
                <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#67f529] to-[#67f529] hover:bg-[#67f529]  hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    View More
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </div>
  );
};

export default Services;
