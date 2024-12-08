import { RiArrowRightLine } from "@remixicon/react";
import expertise from "../../../assets/customer-relationship-management.png";
import reward from "../../../assets/reward.png";
import professional from "../../../assets/professional-development.png";
import diplomat from "../../../assets/diplomat.png";
import GlobusSVG from "./GlobusSVG";
import OverviewCard from "./OverviewCard";

function Overview() {
  return (
    <section className="h-full  sticky -top-[280px]">
      <div className="h-full w-full">
        <div className="about-overlay -z-10"></div>
        <div className="max-w-screen-lg px-4 mx-auto z-50 ">
          {/* section title */}
          <div className="mb-6 md:pt-[75px] sm:pt-[20px] pt-2">
            <h2 className="text-[24px] sm:text-[28px] md:text-[40px] lg:text-[44px] text-primary">
              What We Do?
            </h2>
            <p className="text-[18px] md:text-[22px] lg:text-[24px] ">
              Set of programmatic tools for any advertising objectives
            </p>
          </div>
          {/* content */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 h-full">
            {/* left cols */}
            <div>
              <p className="font-light leading-relaxed">
                Our holistic stack <b>is designed to effectively address</b> all
                the challenges which may have agencies and brands that employ{" "}
                <b>programmatic advertising.</b>
              </p>
            </div>
            {/* right cols */}
            <div>
              <p className="mb-4 font-light leading-relaxed">
                Each of our versatile tools&services can be{" "}
                <b>seamlessly integrated with the others</b> — all backed by a
                machine learning approach and other top-notch technologies to
                drive maximum results.
              </p>
              <button className="flex gap-1.5 font-light items-center text-violet-800 group">
                Go to cases{" "}
                <RiArrowRightLine
                  className="group-hover:translate-x-0.5"
                  size={18}
                />
              </button>
            </div>
          </div>
        </div>
        {/* globus and overview */}
        <div className="h-full flex w-full ">
          {/* animated globus */}
          <div className="flex-1 h-[800px] w-[1000px] relative overflow-hidden">
            <div className="absolute h-full w-full right-[5%]">
              <div className="h-[800px] w-[1000px] absolute -right-[10%]">
                <GlobusSVG />
              </div>
            </div>
          </div>
          {/* About Overview */}
          <div className="flex-1 pl-3 lg:relative absolute left-[50%] lg:left-0 -translate-x-[50%] lg:-translate-x-0 pt-[200px] lg:pt-0  w-full ">
            <div className="grid grid-cols-2 gap-y-24 pt-24 lg:pl-0 sm:pl-[108px] pl-4 md:mx-0 w-full">
              <OverviewCard
                text={"Years of expertise"}
                number={"10"}
                img={reward}
              />
              <OverviewCard
                text={"Professionals"}
                number={"120+"}
                img={professional}
              />
              <OverviewCard
                text={"Represented in 12 countries"}
                number={"12"}
                img={diplomat}
              />
              <OverviewCard text={"Clients"} number={"2000+"} img={expertise} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
