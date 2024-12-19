import { MdDashboard } from "react-icons/md";
import appStore from "../../../../assets/page/mobile/svg/app-store.svg";
import Promo from "../../Promo/Promo";

function MobileApp() {
  return (
    <section className="relative -mt-6">
      {/* section gradient bg */}
      <div className="absolute md:-top-36 -top-4 left-0 h-[105%] lg:h-[100%] md:h-[140%] w-full bg-gradient-to-r to-[white] from-[#faf5f5] -skew-y-12 -z-10">
        {/* line */}
        <div className="h-8 lg:w-[40%] w-[60%] bg-gradient-to-l to-[#44f9ad] from-[#492EF9] absolute -bottom-8 right-0"></div>
        {/* line */}
        <div className="h-8 lg:w-[15%] w-[25%] bg-[#ECEFFA] absolute -bottom-16 right-0"></div>
        {/* square line svg */}
        <div
          className={`lg:h-48 h-24 w-[40%] absolute left-0 bottom-0 square-line`}
        ></div>
      </div>
      {/* section container */}
      <div className="lg-container">
        <div className="flex">
          {/* section image */}
          <div className="flex-1 hidden lg:block">
            <div className="absolute left-0 h-full w-full">
              <div className="absolute h-full right-[51%] w-[690px]">
                <img src={appStore} alt="" />
              </div>
            </div>
          </div>

          {/* section content */}
          <div className="flex-1 z-10 pb-14 lg:pb-[calc(175px+11%)]">
            <Promo
              title={"In-App"}
              btnText={"See Examples of Hybrid gallery"}
              Component={MdDashboard}
            >
              <p>
                Mobile apps – are an engaging and dynamic environment to capture
                users' attention. Appeal to your audience with various
                interaction-based formats.
              </p>
              <p>
                Mobile devices, unlike desktop or laptop computers, are more
                often used only by one person. This fact makes the in-app
                environment an ideal place to reach out to its owner's
                personality.
              </p>
              <p className="text-blue-600">
                Ads can be seamlessly integrated within in-app content. It isn’t
                a pushy distraction anymore, but a relevant suggestion that
                improves user experience.
              </p>
            </Promo>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;
