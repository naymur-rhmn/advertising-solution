import console from "../../../assets/images/home/svg/plan_console.svg";
import phone from "../../../assets/images/home/svg/phone.svg";
import { RiArrowRightSLine, RiArrowRightLine } from "@remixicon/react";

function Hero() {
  return (
    <section className="relative z-50 pt-[130px] pb-[180px] md:pt-[210px]  md:pb-[280px] bg-white">
      {/* background */}
      <div className="overflow-hidden">
        <div className="hero-bg-layer2">
          <div className="border1 md:h-[150px] h-[100px]"></div>
          <div className="border2 h-[80px] md:h-[150px]  -bottom-[20px] md:-bottom-[80px] md:left-[45%] left-[55%] w-[45%] md:w-[55%]"></div>
        </div>
      </div>
      {/* hero body */}
      <div className="lg-container h-full flex">
        {/* hero content */}
        <div className="w-full sm:pr-[10%] pr-5 md:pr-0 md:w-2/3 text-white relative  z-40 ">
          <h1 className="hero-title text-white">
            Full-stack <span className="text-orange-300">programmatic</span>{" "}
            advertising ecosystem
          </h1>
          <p className="text-[20px] md:text-[22px] lg:text-[26px] mb-6 mt-3 text-neutral">
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

        {/* right side images */}
        <div className="absolute w-[100%] left-0 h-[calc(100%-132px)] overflow-hidden">
          <div className="absolute left-[62%]  w-full">
            <div className="image-container hidden md:block">
              <div className="absolute top-0 left-0  translate-x-[110px]">
                <img className="" src={console} alt="" />
              </div>
              <div className="relative translate-y-24 z-20 h-[60%]">
                <img className="h-[550px]" src={phone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
