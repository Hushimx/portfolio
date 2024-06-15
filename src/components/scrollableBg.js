import React, { useRef, useEffect } from "react";

const ScrollableBg = ({ img }) => {
  const scrollableDivRef = useRef(null);
  const animationFrameRef = useRef(null);
  let hoverTimer;

  const scrollTo = (targetScrollTop) => {
    const scrollableDiv = scrollableDivRef.current;
    if (!scrollableDiv) return;

    const initialScrollTop = scrollableDiv.scrollTop;
    const distance = targetScrollTop - initialScrollTop;
    const duration = 2000; // Adjust this value for slower or faster scrolling (in milliseconds)
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      scrollableDiv.scrollTop = initialScrollTop + distance * progress;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  const handleMouseEnter = () => {
    hoverTimer = setTimeout(() => {
      scrollTo(scrollableDivRef.current.scrollHeight);
    }, 300); // Delay for 0.5 seconds
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
    scrollTo(0);
    console.log("worked");
  };

  return (
    <div
      ref={scrollableDivRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="project-window overflow-hidden rounded-[10px] h-80"
    >
      <img src={img} alt="portfolio" className="w-full" />
    </div>
  );
};

export default ScrollableBg;
