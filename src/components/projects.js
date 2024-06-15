import React, { useEffect, useState } from "react";
import ScrollableBg from "./scrollableBg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");
  const [projects, setProjects] = useState([]);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects",
        start: "top 20%", // Adjust these values as needed
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      },
    });
    tl.from(".project", { x: -100, opacity: 0, stagger: ".1s", duration: 1 });
  });
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          `https://api.npoint.io/d699b5c18db45847a5c5`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const projects = await response.json();
        setProjects(projects);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProjects();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <section
        id="projects"
        className="projects pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px] bg-darkBlue p-5 rounded-full ">
                  My Recent Projects
                </h2>
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-wrap justify-center -mx-4 min-h-full">
            <div className="w-full px-4"></div>
          </div>
          <div className=" flex flex-wrap -mx-4 transition-all">
            {projects.map((project) => {
              return (
                <PortfolioCard
                  ImageHref={project.imageHref}
                  category={project.category}
                  title={project.title}
                  button={project.button}
                  buttonHref={project.buttonHref}
                  githubRepo={project.githubRepo}
                  showCard={showCard}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
  githubRepo,
}) => {
  return (
    <>
      <div
        className={`project w-full project px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <ScrollableBg img={ImageHref} />

          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-slate-900 dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark ">
            <span className="text-primary mb-2 text-white block text-sm font-medium w-fit mx-auto hoverable">
              {category}
            </span>
            <h3 className="text-white  dark:text-white mb-5 text-xl font-bold w-fit mx-auto hoverable">
              {title}
            </h3>
            <a
              href={buttonHref}
              target="_blank"
              className="hoverable text-body-color text-white dark:text-dark-6 hover:border-primary hover:bg-darkBlue inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
            {githubRepo ? (
              <a href={githubRepo} target="_blank">
                <img
                  className=" absolute  right-0 bottom-0 hoverable text-red-500 circle"
                  src="/images/githubIcon.svg"
                  alt=""
                  srcset=""
                />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};
