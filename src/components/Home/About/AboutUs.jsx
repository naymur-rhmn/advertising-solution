import { RiArrowRightLine } from "@remixicon/react";
import expertise from "../../../assets/customer-relationship-management.png";
import reward from "../../../assets/reward.png";
import professional from "../../../assets/professional-development.png";
import diplomat from "../../../assets/diplomat.png";
import AboutCard from "./AboutCard";
import GlobusSVG from "./GlobusSVG";

function AboutUs() {
  return (
    <section className="bg-white sticky -top-44 -z-0 ">
      <div className="relative h-full w-full overflow-hidden">
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
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
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
          <div className="flex gap-8 mt-5 ">
            {/* animated globus */}
            <div className="absolute lg:w-[1000px] lg:h-[800px] lg:right-[47%] md:w-[800px] md:h-[600px] md:right-[30%] w-[1000px] h-[800px]   top-[320px] md:top-[350px] -z-50">
              <GlobusSVG />
            </div>
            {/* About Overview pt-14*/}
            <div className="grid grid-cols-2 gap-y-24 w-8/10 mx-auto lg:w-1/2 lg:ml-[50%] lg:pl-3 pb-[150px] pt-[100px]">
              <AboutCard
                text={"Years of expertise"}
                number={"10"}
                img={reward}
              />
              <AboutCard
                text={"Professionals"}
                number={"120+"}
                img={professional}
              />
              <AboutCard
                text={"Represented in 12 countries"}
                number={"12"}
                img={diplomat}
              />
              <AboutCard text={"Clients"} number={"2000+"} img={expertise} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
