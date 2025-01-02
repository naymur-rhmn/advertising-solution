import SectionIcon from "../../shared/SectionIcon";
import { ImDisplay } from "react-icons/im";
import phone from "../../../assets/images/display/phone.svg";
import laptop from "../../../assets/images/display/laptop.svg";

function DIntro() {
  return (
    <section className="relative">
      <div className="lg-container">
        <div className="flex gap-6  pb-10 md:pb-44">
          <div className="flex-1 md:block hidden">
            <div className="absolute w-full left-0 h-full">
              <div className="absolute w-[700px] right-1/2 h-full">
                <div className="relative h-full w-full">
                  <img className="absolute right-4" src={laptop} alt={""} />
                  <img
                    className="absolute right-4 top-16"
                    src={phone}
                    alt={""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 z-10">
            <div className="flex flex-col md:items-start items-center  md:text-left text-center">
              <SectionIcon bgColor="#A9F2B6">
                <ImDisplay size={30} color="#52D092" />
              </SectionIcon>
              <h2 className="section-title">
                Display & mobile <br /> web
              </h2>
              <p className="text-xl md:text-2xl pb-4 md:pb-6 ">
                The most common way to reach the right audience.
              </p>
              <p className="md:text-left text-left sm:text-center">
                Show your ads to potential customers at the right place and the
                right time via Hybrid Console. For example, when they’re
                browsing their favourite websites or using mobile devices.
              </p>
            </div>
          </div>
        </div>

        {/* note card */}
        <div className="bg-white rounded-lg shadow-2xl py-8 text-center px-20 z-40 relative md:mt-14">
          <p className="text-center text-xl text-blue-500 leading-7 md:leading-8">
            Display is your chance to engage users with appealing ad formats.
            Here are some of the ad types that you can run with Hybrid Console
          </p>
        </div>
      </div>
    </section>
  );
}

export default DIntro;
