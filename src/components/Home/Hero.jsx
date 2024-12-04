import console from "../../assets/plan_console.svg";
import phone from "../../assets/phone.svg";
import { RiArrowRightSLine, RiArrowRightLine } from "@remixicon/react";

function Hero() {
  return (
    <section className="relative h-[100vh] z-40">
      <div className="hero-bg-layer1 -z-10"></div>
      <div className="hero-bg-layer2">
        <div className="border1"></div>
        <div className="border2"></div>
      </div>
      {/* hero content */}
      <div className="max-w-screen-lg mx-auto p-4 z-50 relative">
        <div className="w-2/3  mt-[160px] text-white">
          <h1 className="text-[54px] leading-normal ">
            Full-stack <span className="text-orange-300">programmatic</span>{" "}
            advertising ecosystem
          </h1>
          <p className="text-3xl mt-6 mb-8">
            Flexible solutions for agencies and brands
          </p>
          <button className="uppercase bg-white pl-4 pr-4 py-3.5 text-gray-700 rounded text-sm flex gap-1 items-center group">
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
      {/* right side image */}
      <div className="right-img-group absolute top-[300px] right-0  z-30 w-2/3 ">
        <div className="float-right images-wraper relative z-10">
          <div className="absolute z-30">
            <img className="" src={phone} alt="" />
          </div>
          <div className="-translate-y-28 translate-x-[100px]">
            <img className="h-full " src={console} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
