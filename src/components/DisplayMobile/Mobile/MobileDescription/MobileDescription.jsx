import { useState } from "react";
import phone from "../../../../assets/images/mobile/iphone11.png";
import UpwardTriangle from "./UpwardTriangle";
const descriptionContent = {
  firstContent:
    "Hybe enables app developers to run retargeting, and UA (soon) campaigns themselves or in a co-managed and fully-managed way with full transparency on campaigns’ setup and optimizations by leveraging a transparent SaaS pricing model.",
  secondContent:
    "Hybe is an in-house mobile programmatic platform featuring performance-based pricing, real-time bidding, and optimization algorithms. It is a self-service platform that allows app developers to run retargeting campaigns themselves or in a completely managed way with full transparency on campaigns’ setup and optimizations.",
};

const MobileDescription = () => {
  const [tab, setTab] = useState(1);

  const handleTab = (tab) => {
    setTab(tab);
  };
  return (
    <section className="md:mt-[110px] sm:mt-[60px] mt-10 relative sm:pb-36 pb-10">
      {/* section bg */}
      <div className="absolute top-[90px] left-0 h-[70%] w-full bg-gradient-to-l to-[#492EF9] from-[#DC2A81] -skew-y-12">
        {/* line */}
        <div className="h-8 md:h-16 lg:w-[35%] w-[45%] bg-gradient-to-l to-[#44f9ad] from-[#492EF9] absolute md:-top-16 -top-8 left-0"></div>
        {/* line */}
        <div className="h-8 md:h-16 lg:w-[30%] w-[30%] bg-[#ECEFFA] absolute md:-bottom-16 -bottom-8 right-0"></div>
      </div>
      {/* section container */}
      <div className="lg-container relative">
        <div className=" h-full shadow-2xl grid md:grid-cols-[40%_55%] grid-col-1 justify-between bg-white rounded-lg">
          {/* bg image */}
          <div className="hidden md:block h-full w-full overflow-hidden relative bg-black rounded-l-lg">
            <p className="uppercase bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl font-bold tracking-wider absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/3">
              HYBE
            </p>
            <div
              style={{ backgroundImage: `url(${phone})` }}
              className="h-full bg-no-repeat bg-cover bg-left-top "
            ></div>
            <div className="absolute top-0 h-full right-0 translate-x-[100px]">
              <UpwardTriangle />
            </div>
          </div>
          {/* display title in small diveces */}
          <div className="flex md:hidden bg-black py-4 items-center justify-center rounded-t-lg">
            <p className="uppercase bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl font-semibold tracking-wider">
              HYBE
            </p>
          </div>

          {/* content */}
          <div className="pr-10 pl-10 md:pl-0 md:py-10 sm:py-8 py-6">
            <h4 className="text-red-500 md:text-2xl text-[20px] md:mb-8 sm:mb-6 mb-4">
              Hybe – is an in-house mobile programmatic platform featuring
              performance
            </h4>
            <p className="min-h-[170px] pb-4 md:pb-6 ">
              {tab === 1 && descriptionContent.firstContent}
              {tab === 2 && descriptionContent.secondContent}
            </p>
            {/* tab */}
            <div className="flex items-center gap-1">
              <div onClick={() => handleTab(1)} className="py-1 cursor-pointer">
                <div
                  style={{ backgroundColor: tab === 1 ? "red" : "#9CA3AF" }}
                  className={`h-[3px] w-8 `}
                ></div>
              </div>
              <div onClick={() => handleTab(2)} className="py-1 cursor-pointer">
                <div
                  style={{ backgroundColor: tab === 2 ? "red" : "#9CA3AF" }}
                  className={`h-[3px] w-8 `}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDescription;
