import { useState } from "react";
import { PiOpenAiLogoDuotone } from "react-icons/pi";
import SectionIcon from "../../../shared/SectionIcon";
import FeaturesTab from "./FeaturesTab";

function MobileFeatures() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="lg:pt-20 md:pt-32 pt-20 h-[100vh]">
      <div className="lg-container  pb-6 md:pb-14  border-b">
        {/* section title */}
        <div className="text-center flex flex-col items-center px-8 md:px-4 md:w-[600px] mx-auto">
          <SectionIcon>
            <PiOpenAiLogoDuotone size={30} color="C5E2FF" />
          </SectionIcon>
          <h2 className="section-title">Creatives</h2>
          <p className="font-normal md:-mt-4">
            Provide unique user experience tailored to the specific context of
            an app and interests of the user.
          </p>
        </div>
      </div>
      <div className="lg-container pt-5 md:pt-8">
        <h3 className="text-gray-700 text-center sm:text-3xl text-[24px]">
          <span className="text-[#F6AC61]">Realize</span> any concept of the{" "}
          <span className="text-[#F6AC61]">in-app advertising!</span>
        </h3>
        {/* tabs */}
        <div className="flex gap-2 justify-center pt-5 md:pt-8">
          {
            <FeaturesTab handleTab={handleTab} activeTab={activeTab} id={1}>
              banners
            </FeaturesTab>
          }
          {
            <FeaturesTab handleTab={handleTab} activeTab={activeTab} id={2}>
              Interstitials (Full-screen banners)
            </FeaturesTab>
          }
          {
            <FeaturesTab handleTab={handleTab} activeTab={activeTab} id={3}>
              Rich-media banners
            </FeaturesTab>
          }
        </div>
        {/* tabs content display conditionaly */}
        <div className="md:mt-16 sm:mt-14 mt-8">
          {activeTab === 1 && <p>Tab 1</p>}
          {activeTab === 2 && <p>Tab 2</p>}
          {activeTab === 3 && (
            <p>
              Tab 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Libero eos autem aperiam harum voluptatem sit distinctio odio
              temporibus repudiandae ipsam?
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default MobileFeatures;
