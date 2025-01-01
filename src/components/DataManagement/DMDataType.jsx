import { useState } from "react";
import SectionIcon from "../shared/SectionIcon";
import DataTypeTab from "./DataTypeTab";
import { SiGoogledataproc } from "react-icons/si";
import dataImg1 from "../../assets/images/dmp/party-data-1.svg";
import dataImg2 from "../../assets/images/dmp/party-data-2.svg";
import dataImg3 from "../../assets/images/dmp/party-data-3.svg";
import DataTypeTab2 from "./DataTypeTab2";

const tabData = [
  {
    id: 1,
    title: "1st party data",
    desc: "Use the most valuable data collected by your company, launch a look-alike campaign with which the system will find similar users to your target  ",
  },
  {
    id: 2,
    title: "2nd party data",
    desc: "Segment users, according to the results of advertising campaigns, and use them in new integrations in the Hybrid interface.",
  },
  {
    id: 3,
    title: "3rd party data",
    desc: "All known data providers are available in the Hybrid interface. Users’ interests, purchase information and more than 3,000 audience segments are ready to be used.",
  },
];

const DMDataType = () => {
  const [activeTab, setActiveTab] = useState(1);

  const activeParagraph = tabData.find((data) => data.id === activeTab);

  return (
    <section className="relative z-30 pb-24 sm:pb-28 md:pb-36 lg:pb-44 pt-[220px] sm:pt-[300px] md:pt-[430px] lg:pt-[500px] -mt-12">
      {/* bg-image */}
      <div className="absolute top-0 left-0 h-full w-full bg-[#393968] -skew-y-12 -z-10"></div>

      <div className="lg-container">
        {/* section title */}
        <div className="flex flex-col items-center text-center">
          <SectionIcon bgColor="#E4E8F9">
            <SiGoogledataproc color="#C2CBEF" size={30} />
          </SectionIcon>
          <div className="alt-section-title text-white">Data types</div>
          <p className="alt-section-subtitle text-neutral">
            Hybrid’s data cloud gives you access to 1st, 2nd and 3rd party data
            from any source to have all the relevant data available for the
            maximum success of your campaign
          </p>
        </div>

        {/* tab container */}
        <div className="flex flex-col md:flex-row mt-16 pb-5">
          {/* tab items */}
          <div className="flex-1 pr-12">
            {/* medidum device tab */}
            <div className="hidden md:block min-h-[380px]">
              {tabData.map((data) => (
                <DataTypeTab
                  key={data.id}
                  data={data}
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                />
              ))}
            </div>

            {/* small device tab */}
            <div className="md:hidden grid grid-cols-3 items-center">
              {tabData.map((data) => (
                <DataTypeTab2
                  key={data.id}
                  data={data}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ))}
            </div>
            <div className="md:hidden pb-4 mt-8 sm:min-h-[90px] min-h-[120px] ">
              <p className="text-center text-neutral px-2 sm:px-4">
                {activeParagraph.desc}
              </p>
            </div>
          </div>

          {/* dynamicaly show tab image  */}
          <div className="flex-1">
            <div className="bg-[#4B4B82] rounded-2xl p-8 h-[300px] md:h-[380px]">
              {activeTab === 1 && (
                <img
                  className="h-full w-full dm-tab-img"
                  src={dataImg1}
                  alt=""
                />
              )}
              {activeTab === 2 && (
                <img
                  className="h-full w-full dm-tab-img"
                  src={dataImg2}
                  alt=""
                />
              )}
              {activeTab === 3 && (
                <img
                  className="h-full w-full dm-tab-img"
                  src={dataImg3}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DMDataType;
