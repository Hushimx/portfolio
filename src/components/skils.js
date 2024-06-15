import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Skils = () => {
  const [showCard, setShowCard] = React.useState("all");
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "top top", // Adjust these values as needed
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      },
    });

    tl.to(".flip-card-inner", { rotateY: 180, stagger: 0.1, duration: 1 });
  });

  const handleProject = (category) => {
    setShowCard(category);
  };
  return (
    <>
      <section
        id="skills"
        className=" pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 ">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center ">
                <h2 className="text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px] bg-darkBlue p-5 rounded-full  ">
                  My Skills
                </h2>
                <p className="text-body-color text-base text-white dark:text-dark-6 ">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 flex justify-center">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`skills inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 hoverable ${
                      showCard === "all"
                        ? "activeClasses bg-primary bg-darkBlue text-white"
                        : "inactiveClasses text-body-color text-white dark:text-dark-6 hover:bg-darkBlue hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Front end")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 hoverable ${
                      showCard === "Front end"
                        ? "activeClasses bg-primary bg-darkBlue text-white"
                        : "inactiveClasses text-body-color text-white dark:text-dark-6 hover:bg-darkBlue hover:text-white"
                    }`}
                  >
                    Front end
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Back end")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 hoverable ${
                      showCard === "Back end"
                        ? "activeClasses bg-primary bg-darkBlue text-white"
                        : "inactiveClasses text-body-color text-white dark:text-dark-6 hover:bg-darkBlue hover:text-white"
                    }`}
                  >
                    Back end
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("other")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 hoverable  ${
                      showCard === "other"
                        ? "activeClasses bg-primary bg-darkBlue text-white"
                        : "inactiveClasses text-body-color text-white dark:text-dark-6 hover:bg-darkBlue hover:text-white"
                    }`}
                  >
                    Others
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-9  transition-all">
            <Skil
              img="/images/react.png"
              name="React"
              stars={3}
              type="Front end"
              headerColor=" bg-blue-500"
              showCard={showCard}
            />
            <Skil
              img="/images/javascript.png"
              name="Javascript"
              stars={3}
              type="Front end"
              headerColor=" bg-blue-500"
              showCard={showCard}
            />
            <Skil
              img="/images/ts.png"
              name="Typescript"
              stars={2}
              type="Front end"
              headerColor=" bg-blue-500"
              showCard={showCard}
            />

            <Skil
              img="/images/htmlcss.png"
              name="html and css"
              stars={4}
              type="Front end"
              headerColor=" bg-blue-500"
              showCard={showCard}
            />
            <Skil
              img="/images/bootstrap.png"
              name="Bootstrap"
              stars={3}
              type="Front end"
              headerColor=" bg-blue-500"
              showCard={showCard}
            />
            <Skil
              img="/images/nodejs.png"
              name="Node js"
              stars={3}
              type="Back end"
              headerColor=" bg-red-500"
              showCard={showCard}
            />
            <Skil
              img="/images/php.png"
              name="PHP"
              stars={2}
              type="Back end"
              headerColor=" bg-red-500"
              showCard={showCard}
            />
            <Skil
              img="/images/express.png"
              name="Express.js"
              stars={3}
              type="Back end"
              headerColor=" bg-red-500"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};
const Skil = ({ stars, type, name, img, headerColor, showCard }) => {
  return (
    <div
      className={`flip-card w-full md:w-3/12  ${
        showCard === "all" || showCard === type ? "block" : "hidden"
      }`}
    >
      <div class="flip-card-inner">
        <div class="flip-card-front ">
          <img src="/hmLogo.png" width="200" alt="" />
          <span
            className={` ${headerColor} text-white p-3 text-3xl rounded-xl `}
          >
            {type}
          </span>
        </div>
        <div class="flip-card-back">
          <img className="" src={img} width="200" alt="" />

          <h2 className=" text-3xl text-blue-500 hoverable">{name}</h2>
          <div class="w-1/2 flex items-center gap-x-1 ">
            <div
              class={`w-full h-2.5 flex flex-col justify-center overflow-hidden  ${
                stars > 0
                  ? `${headerColor} text-xs text-white text-center whitespace-nowrap transition duration-500 dark:${headerColor} `
                  : `bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600`
              }`}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${
                stars > 1
                  ? `${headerColor} text-xs text-white text-center whitespace-nowrap transition duration-500 dark:${headerColor} `
                  : `bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600`
              }`}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${
                stars > 2
                  ? `${headerColor} text-xs text-white text-center whitespace-nowrap transition duration-500 dark:${headerColor} `
                  : `bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600`
              }`}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${
                stars > 3
                  ? `${headerColor} text-xs text-white text-center whitespace-nowrap transition duration-500 dark:${headerColor} `
                  : `bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600`
              }`}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
