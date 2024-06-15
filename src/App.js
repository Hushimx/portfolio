import logo from "./logo.svg";

import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Header from "./components/header";
import Portfolio from "./components/projects";
import Skils from "./components/skils";
import Contact from "./components/contact";
import intro from "./intro.mp4";
function App() {
  const circleRef = useRef(null);
  const introRef = useRef(null);
  let [loading, setLoading] = useState(true);
  let currentPosition = { x: 0, y: 0 };
  useEffect(() => {
    if (introRef.current) {
      introRef.current.play();
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }
  }, []);
  useEffect(() => {
    let animationFrameId;

    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }

    function handleMouseMove(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const hoveredElement = document.elementFromPoint(mouseX, mouseY);

      if (
        hoveredElement &&
        hoveredElement !== circleRef.current &&
        hoveredElement.classList.contains("hoverable")
      ) {
        const elementRect = hoveredElement.getBoundingClientRect();
        const scrollX = window.pageXOffset;
        const scrollY = window.pageYOffset;
        const increasedSize = 15; // Increase size by 15px

        // Set circle size to match the element hovered over and make it bigger
        const newWidth = elementRect.width + increasedSize;
        const newHeight = elementRect.height + increasedSize;

        circleRef.current.style.width = newWidth + "px";
        circleRef.current.style.height = newHeight + "px";
        if (!hoveredElement.classList.contains("circle")) {
          circleRef.current.style.borderRadius = "0";
        }

        // Apply the calculated position to keep it centered
        const offsetX = lerp(
          currentPosition.x,
          elementRect.left + scrollX - increasedSize / 2,
          1
        );
        const offsetY = lerp(
          currentPosition.y,
          elementRect.top + scrollY - increasedSize / 2,
          1
        );

        currentPosition = { x: offsetX, y: offsetY };
      } else {
        // Reset the size of the circle if no longer hovering over a hoverable element
        circleRef.current.style.width = "40px"; // Default width
        circleRef.current.style.height = "40px"; // Default height
        circleRef.current.style.borderRadius = "50%";
        if (hoveredElement && hoveredElement.tagName === "P") {
          circleRef.current.style.opacity = 0.5;
        } else {
          circleRef.current.style.opacity = 1;
        }
        // Calculate the position of the circle relative to the mouse and scroll
        const scrollX = window.pageXOffset;
        const scrollY = window.pageYOffset;
        const elementWidth = circleRef.current.offsetWidth;
        const elementHeight = circleRef.current.offsetHeight;
        const offsetX = mouseX - elementWidth / 2 + scrollX;
        const offsetY = mouseY - elementHeight / 2 + scrollY;

        // Apply the calculated position
        currentPosition = { x: offsetX, y: offsetY };
      }
    }

    function animate() {
      const element = circleRef.current;
      const currentX = parseFloat(element.style.left) || 0;
      const currentY = parseFloat(element.style.top) || 0;
      const targetX = currentPosition.x;
      const targetY = currentPosition.y;
      const easing = 0.1;

      const newX = lerp(currentX, targetX, easing);
      const newY = lerp(currentY, targetY, easing);

      element.style.left = `${newX}px`;
      element.style.top = `${newY}px`;

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <>
      <div
        ref={circleRef}
        className=" w-10 h-10  border-2 border-white absolute  rounded-full  circleDiv hidden md:block  z-50"
      ></div>

      {loading ? (
        <div className="w-full h-screen flex justify-center items-center text-white z-50 fixed bg-black">
          <video ref={introRef} src={intro} muted></video>
        </div>
      ) : (
        <div className="container w-full mx-auto  ">
          <Header />
          <Hero />
          <Skils />
          <Portfolio />
          <Contact />
          <div class="text-center mb-10">
            <ul class="flex justify-center mt-5 space-x-5">
              <li>
                <a
                  href="https://x.com/HashimJilani_"
                  target="_blank"
                  class="text-gray-500 hover:text-gray-900"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hushimx"
                  target="_blank"
                  class="text-gray-500 hover:text-gray-900"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://leetcode.com/u/hushim/"
                  target="_blank"
                  class="text-gray-500 hover:text-gray-900"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>LeetCode icon</title>
                      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
