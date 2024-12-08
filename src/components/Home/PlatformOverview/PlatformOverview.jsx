import { RiBuilding3Fill } from "@remixicon/react";
import PlatformCard from "./platformCard";
import { HiMenuAlt2 } from "react-icons/hi";
import { TbMenu4 } from "react-icons/tb";
import { FiBarChart } from "react-icons/fi";
import insight from "../../../assets/platform-1.svg";
import { useEffect, useState } from "react";

function PlatformOverview() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white relative z-10">
      <div className="bg-section-alt relative"></div>
      <div className="relative overflow-hidden h-full w-full">
        <div className="max-w-screen-lg mx-auto px-4 z-20">
          {/* section title */}
          <div className="py-4">
            <div className="h-24 w-24 rounded-full bg-[#A8A6F9] flex items-center justify-center">
              <RiBuilding3Fill size={60} color="#D4D3FF" />
            </div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[40px] lg:text-[44px]">
              Adaptive Platform
            </h2>
            <p className="text-[18px] md:text-[22px] lg:text-[24px]">
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
                        src={insight}
                        alt="adaptive insights"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second group */}
            <div className="mt-[160px] flex pb-10">
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
                      <div className="imgboxshadow bg-white h-full w-full  flex items-center justify-center">
                        <div className="h-[280px] w-[280px] rounded-full bg-gradient-to-b from-fuchsia-200 to-blue-200 p-6">
                          <div className="h-full w-full bg-white rounded-full  flex items-center justify-center">
                            <p className="font-semibold text-6xl text-primary">
                              <span>{counter}</span>%
                            </p>
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
      </div>
    </section>
  );
}

export default PlatformOverview;
