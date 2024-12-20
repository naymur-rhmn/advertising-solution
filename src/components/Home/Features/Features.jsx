import { FaBrain } from "react-icons/fa";
import database from "../../../assets/images/home/database.png";
import weather from "../../../assets/images/home/weather.png";
import dynamic from "../../../assets/images/home/dynamic.png";
import location from "../../../assets/images/home/location.png";
import smart from "../../../assets/images/home/smart.png";
import sync from "../../../assets/images/home/sync.png";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="relative bg-[#321767] py-10 z-50">
      <div className="feature-bg"></div>
      <div className="lg-container z-30">
        <div className="flex flex-col md:flex-row md:gap-4 ">
          <div className="md:sticky top-6 flex-1 text-center md:text-left mb-[70px] md:h-full">
            <div className="flex items-center justify-center md:justify-start mb-5">
              <div className="h-14 w-14 sm:h-18 sm:w-18 md:h-24 md:w-24 rounded-full bg-[#7416A0] flex items-center justify-center">
                <FaBrain
                  className="md:block hidden"
                  size={60}
                  color="#BD4FE3"
                />
                <FaBrain
                  className="sm:block md:hidden hidden"
                  size={40}
                  color="#BD4FE3"
                />
                <FaBrain className="sm:hidden" size={30} color="#BD4FE3" />
              </div>
            </div>
            <h2 className="md:hidden text-[24px] sm:text-[28px] md:text-[40px] lg:text-[44px] text-white mb-5">
              Ai-powered. Human guided.
            </h2>
            <h2 className="md:block hidden md:text-[40px] lg:text-[44px] text-white">
              Ai-powered.
            </h2>
            <h2 className="md:block hidden md:text-[40px] lg:text-[44px] text-white mb-5">
              Human guided.
            </h2>
            <p className="text-[18px] md:text-[22px] lg:text-[24px] text-neutral font-light">
              We harness data and machine learning to deliver intelligent and
              customised campaigns.
            </p>
          </div>

          <div className="flex-1">
            {/* feature cards */}
            <FeatureCard
              img={dynamic}
              title={"Dynamic Creative Optimization"}
              desc={
                "AI predicts users’ behavior and bids the right price for ad inventory to reach audiences most likely to convert, leading your campaign to the desired KPI and saving your money. Maximise campaign performance by CPM, CPC, CPV or CPI."
              }
            />
            <FeatureCard
              img={smart}
              title={"SmartBid"}
              desc={
                "DCO algorithm generates real-time ads personalized for every individual. Our AI identifies which creative works best for each group of users and displays the most relevant and engaging ad to drive maximum results."
              }
            />
            <FeatureCard
              img={sync}
              title={"TV-sync"}
              desc={
                "Сombine the storytelling power of traditional television with the targeting and reporting of programmatic. TV ads trigger digital ads based on what ad a user see on TV in real time."
              }
            />
            <FeatureCard
              img={weather}
              title={"Weather"}
              desc={
                "Show different banners depending on weather conditions, air pollution and other criteria. Increase your sales, clicks and engagement rates lowering CPA. It’s a surefire strategy for businesses whose sales are directly impacted by the weather."
              }
            />
            <FeatureCard
              img={location}
              title={"Places"}
              desc={
                "We use GPS coordinates transmitted in a bid request to segment audiences by their location (regulars of different places, like cafes and clothing stores). Reach your potential customers either within a set radius or at specific places."
              }
            />
            <FeatureCard
              noBorder={true}
              img={database}
              title={"DMP"}
              desc={
                "Сollect data from any source, create custom or look-alike audiences, and use ready-made audiences provided by partners. AI builds new segments, as well as enriches and customises existing ones, based on user data."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
