import console from "../../assets/plan_console.svg";
import phone from "../../assets/phone.svg";
import { RiArrowRightSLine, RiArrowRightLine } from "@remixicon/react";

function Hero() {
  return (
    <section className="relative h-[100vh] z-40 overflow-hidden">
      {/* background */}
      <div className="hero-bg-layer1 -z-10"></div>
      <div className="hero-bg-layer2">
        <div className="border1 md:h-[150px] h-[100px]"></div>
        <div className="border2 h-[80px] md:h-[150px]  -bottom-[20px] md:-bottom-[80px] md:left-[45%] left-[60%] "></div>
      </div>
      {/* hero content */}
      <div className="max-w-screen-lg mx-auto p-4 z-50 relative h-full">
        <div className="w-full sm:pr-[10%] pr-5 md:pr-0 md:w-2/3 md:mt-[160px] sm:mt-[100px] mt-[80px]  text-white">
          <h1 className="lg:text-[54px] md:text-[46px] text-[28px] sm:text-[32px] leading-normal ">
            Full-stack <span className="text-orange-300">programmatic</span>{" "}
            advertising ecosystem
          </h1>
          <p className="text-[20px] md:text-[22px] lg:text-[26px] mb-6 mt-3">
            Flexible solutions for agencies and brands
          </p>
          <button className="uppercase bg-white pl-4 pr-4 py-3 md:py-3.5 text-gray-700 rounded text-sm flex gap-1 items-center group">
            Work with us{" "}
            <span className="transition group-hover:translate-x-1 group-hover:hidden ">
              <RiArrowRightSLine className="" color="#374151" size={20} />
            </span>
            <span className="transition hidden group-hover:translate-x-1 group-hover:block ">
              <RiArrowRightLine className="" color="#374151" size={20} />
            </span>
          </button>
        </div>
      </div>
      {/* right side images */}
      <div className="right-img-group absolute top-[280px] xl:left-[61%] lg:left-[50%] md:left-[50%]  z-30 md:max-w-[675px] w-full h-auto sm:block hidden">
        <div className="float-right images-wraper relative z-10">
          <div className="hidden md:block absolute z-30">
            <img className="xl:h-auto  h-[500px]" src={phone} alt="" />
          </div>
          <div className="-translate-y-28 translate-x-[100px]">
            <img
              className="xl:h-auto xl:w-full h-[300px] md:h-[500px] w-full"
              src={console}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
