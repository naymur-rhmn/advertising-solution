import { useEffect, useState, useRef } from "react";
import { RiBuilding3Fill } from "@remixicon/react";
import { HiMenuAlt2 } from "react-icons/hi";
import { TbMenu4 } from "react-icons/tb";
import { FiBarChart } from "react-icons/fi";
import PlatformCard from "./platformCard";
import platform from "../../../assets/page/home/svg/platform-1.svg";
import insight from "../../../assets/page/home/svg/insights.svg";
import setting from "../../../assets/page/home/svg/console.svg";
import report from "../../../assets/page/home/svg/report.svg";

function PlatformOverview() {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const counterRef = useRef(null);

  const pausePoint = [30, 60];
  const intervalDuration = 1500;

  useEffect(() => {
    // IntersectionObserver API
    const observer = new IntersectionObserver(
      // callback function
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      // option
      { threshold: 0.8 } // Trigger when 80% of the section is visible
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || counter >= 100) return;
    let interval;

    const loadingCounter = () => {
      // start interval with deep clean
      clearInterval(interval);

      interval = setInterval(() => {
        setCounter((prev) => {
          // stop at 100
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          // pause and resume interval
          if (pausePoint.includes(prev + 1)) {
            clearInterval(interval);
            setTimeout(loadingCounter, intervalDuration);
          }
          return prev + 1;
        });
      }, 50);
    };
    loadingCounter();

    return () => clearInterval(interval);
  }, [isVisible]);

  // svg asset
  // Circle loading styles
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (counter / 100) * circumference;

  return (
    <section className="bg-white relative z-50">
      <div className="bg-section-alt relative"></div>
      <div className="relative overflow-hidden h-full w-full">
        <div className="lg-container z-20">
          {/* section title */}
          <div className="py-4">
            <div className="h-24 w-24 rounded-full bg-[#A8A6F9] flex items-center justify-center">
              <RiBuilding3Fill size={60} color="#D4D3FF" />
            </div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[40px] lg:text-[44px]">
              Adaptive Platform
            </h2>
            <p className="text-[18px] md:text-[22px] lg:text-[24px] font-light">
              Unified Platform – Boundless Potential
            </p>
          </div>
          {/* groups container */}
          <div className="mt-28 ">
            {/* first group */}
            <div className="flex gap-4">
              {/* group content */}
              <div className="flex-1">
                <h3 className="md:text-[26px] sm:text-2xl text-xl uppercase">
                  Plan, launch, analyze, report
                </h3>
                {/* content cards */}
                <div className="mt-10 flex flex-col gap-10">
                  <PlatformCard
                    gradientBg={"orangebg"}
                    title={"Adaptive Insights"}
                    desc={
                      "Plan your campaigns in advance and get a complete understanding of the market."
                    }
                  >
                    <FiBarChart size={22} color="white" />
                  </PlatformCard>

                  <PlatformCard
                    gradientBg={"indigobg"}
                    title={"Adaptive console"}
                    desc={
                      "Plan your campaigns in advance and get a complete understanding of the market."
                    }
                  >
                    <TbMenu4 size={22} color="white" />
                  </PlatformCard>

                  <PlatformCard
                    gradientBg={"greenbg"}
                    title={"Adaptive reports"}
                    desc={
                      "Plan your campaigns in advance and get a complete understanding of the market."
                    }
                  >
                    <HiMenuAlt2 size={22} color="white" />
                  </PlatformCard>
                </div>
              </div>
              {/* group image */}
              <div className="flex-1">
                <div className="absolute left-0 w-full">
                  <div className="absolute left-[53%] w-full h-full ">
                    <div className="bg-green-300 rounded-xl w-[650px]">
                      <img
                        className="imgboxshadow group-img relative w-[650px] h-full"
                        src={platform}
                        alt="adaptive insights"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second group */}
            <div ref={counterRef} className="mt-[160px] flex pb-10">
              {/* group content */}
              <div className="flex-1 pb-20">
                <h3 className="md:text-[26px] sm:text-2xl text-xl uppercase">
                  Reduce costs. <br />
                  Drive maximum results.
                </h3>
                <div className="mt-10">
                  <PlatformCard
                    gradientBg={"orangebg"}
                    title={"Adaptive platform"}
                    desc={
                      "Is a solid foundation to set up your own programmatic department. Take programmatic in-house with our adaptable and customisable toolkit. We can design it according to your brandbook."
                    }
                  >
                    <FiBarChart size={22} color="white" />
                  </PlatformCard>
                </div>
              </div>
              {/* group image */}
              <div className="flex-1">
                <div className="absolute left-0 w-full">
                  <div className="absolute left-[53%] w-full h-full ">
                    <div className="w-[650px] h-[380px] rounded-xl">
                      <div className="imgboxshadow h-full w-full  flex items-center justify-center bg-slate-100 relative">
                        {/* loading counter svg */}
                        <div className="h-[280px] w-[280px] rounded-full">
                          <svg width="280" height="280" viewBox="0 0 120 120">
                            {/* Define gradient */}
                            <defs>
                              <linearGradient
                                id="gradientStroke"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop offset="0%" stopColor="#F0ABFC" />
                                {/* Start color */}
                                <stop offset="100%" stopColor="#93C5FD" />
                                {/* End color */}
                              </linearGradient>
                            </defs>
                            <circle
                              cx="60"
                              cy="60"
                              r={45}
                              fill="#EDEEFF" // Background color inside the circle
                            />
                            {/* Background Circle */}
                            <circle
                              cx="60"
                              cy="60"
                              r={radius}
                              stroke="#E5E6F9"
                              strokeWidth="3"
                              fill="none"
                            />
                            {/* Foreground Circle */}
                            <circle
                              cx="60"
                              cy="60"
                              r={radius}
                              stroke="url(#gradientStroke)" // Apply the gradient
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                              transform="rotate(-90 60 60)" // Rotate to start at top middle
                            />
                            {/* Loading Text */}
                            <text
                              x="50%"
                              y="50%"
                              textAnchor="middle"
                              dy="3em"
                              fontSize="10px"
                              fontWeight="light"
                              fill="#3F3F67"
                            >
                              result
                            </text>
                            {/* Counter Value */}
                            <text
                              x="50%"
                              y="50%"
                              textAnchor="middle"
                              fontWeight="bold"
                              fill="#490B90"
                            >
                              {/* Counter Value */}
                              <tspan x="50%" dy=".3em" fontSize="30px">
                                {counter}%
                              </tspan>
                              {/* Additional Text Below */}
                              {/* <tspan x="50%" dy="1.9em" fontSize="10px">
                                  result
                                </tspan> */}
                            </text>
                          </svg>
                        </div>
                        {/* animate image with loading */}
                        <div className="absolute  top-0 left-0">
                          <div className={"center-of-counter"}>
                            <img src={report} alt="" />
                          </div>
                          <div className="center-of-counter">
                            <img src={insight} alt="" />
                          </div>
                          <div
                            className={`${
                              counter < 5
                                ? "console-of-counter"
                                : "center-of-counter "
                            } absolute z-50`}
                          >
                            <img src={setting} alt="" />
                          </div>
                          {/* absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformOverview;
