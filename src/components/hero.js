import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(headerRef.current, { x: -500, opacity: 0, duration: 1 })
      .from(paragraphRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.5")
      .from(".logo", { rotate: 360, opacity: 0, duration: 1 }, "-=0.5") // "-=0.5" means start 0.5 seconds before the previous animation ends
      .from(".aboutBtns", { scale: 0, opacity: 0, duration: 1 }, "-=0.5"); // "-=0.5" means start 0.5 seconds before the previous animation ends
  }); // defaults to an empty dependency array '[]' and no scoping.

  return (
    <div
      id="about"
      className=" flex flex-col-reverse gap-6  md:ps-24 md:flex-row justify-between items-center "
    >
      <div className=" w-full md:w-1/2">
        <h1
          ref={headerRef}
          className=" ms-5 text-5xl text-white mb-10 hoverable w-fit"
        >
          Hi, i'm Hushim
        </h1>
        <p ref={paragraphRef} className=" text-gray400 w-full md:w-2/3  p-5">
          During these <span className=" text-white hoverable ">3 years</span>{" "}
          as{" "}
          <span className=" text-white hoverable">
            Full-Stack web developer.
          </span>{" "}
          My role has extended beyond coding to effective communication with
          various departments, to define new features and spearheading the
          development of new apps.
        </p>
        <div className="flex flex-row gap-5 mt-5">
          <a href="/Hashim_Abdullah_cv.pdf" target="_blank">
            <button className="download-btn px-5 py-3 bg-white hover:bg-black hover:text-white  rounded-full  aboutBtns">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <img width="400" src="/hmLogo.png" alt="" className="logo" />
      </div>
    </div>
  );
};

export default Hero;
