import SectionIcon from "../shared/SectionIcon";
import SingleFeature from "./singleFeature";
import { ImKey } from "react-icons/im";
import personalizede from "../../assets/images/dmp/personalized.svg";
import partydata from "../../assets/images/dmp/party-data.svg";
import precise from "../../assets/images/dmp/precise.svg";
import traffic from "../../assets/images/dmp/traffic.svg";
import storage from "../../assets/images/dmp/storage.svg";
import schema from "../../assets/images/dmp/schema.svg";

const featuredData = [
  {
    id: 1,
    title: "PERSONALIZED ADS FOR DIFFERENT USER'S CATEGORIES",
    desc: "Load previously collected data from other DMPs and create new unique segments for successful advertising campaigns. Leverage insights to optimize targeting and drive higher engagement rates.",
    img: precise,
  },
  {
    id: 2,
    title: "HYBRID SEGMENTS FOR MORE PRECISE TARGETING",
    desc: "With Hybrid Private Cloud, only you have access to data. We respect the GDPR and guarantee the privacy and storage of data in an anonymized form. Our secure infrastructure ensures compliance while enabling seamless data management for your business needs.",
    img: traffic,
  },
  {
    id: 3,
    title: "RELEVANT TRAFFIC SOURCES",
    desc: "Work with premium traffic on various sites and use the most appropriate resources for placement, taking into account the cost and content. Maximize your reach by leveraging high-quality platforms tailored to your target audience. Ensure optimal ad performance with strategic placements and budget efficiency.",
    img: personalizede,
  },
  {
    id: 4,
    title: "CONVENIENT AND SECURE PRIVATE STORAGE",
    desc: "Show users a relevant message by turning ads into a recommendation and increase audience loyalty. Personalize the experience by tailoring content to their interests, making interactions more meaningful. Build trust by delivering value through thoughtful and engaging recommendations.",
    img: storage,
  },
  {
    id: 5,
    title: "WORKING WITH THIRD PARTY DATA",
    desc: "Gain valuable insights into user behavior and segment your target audience based on their unique characteristics. Deliver personalized ads to drive engagement and achieve exceptional performance in your campaigns.",
    img: partydata,
  },
];

const DMFeatures = () => {
  return (
    <section className="relative py-24 pb-[250px] lg:mt-28 md:mt-24 sm:mt-10 mt-4 z-40">
      {/* section bg */}
      <div className="absolute top-0 left-0 bg-[#f5f6fb] h-full w-full -skew-y-12 -z-10">
        {/* line */}
        <div className="absolute top-0 right-0 h-16 w-2/3 bg-gradient-to-r to-[#E4E8F9] from-[#F4F6FF]"></div>
        <div className="absolute -top-20 left-0 h-16 w-1/3 bg-gradient-to-r to-[#fff] from-[#E4E8F9]"></div>
        <div className="absolute bottom-4 left-0 h-16 w-1/3 bg-gradient-to-r to-[#fff] from-[#cdd6fc]"></div>
      </div>
      <div className="lg-container">
        <div className="relative">
          {/* section title */}
          <div className="flex flex-col items-center">
            <SectionIcon bgColor="#E4E8F9">
              <ImKey color="#C2CBEF" size={30} />
            </SectionIcon>
            <h2 className="alt-section-title">Key features of Hybrid DMP</h2>
            <p className="alt-section-subtitle  text-center">
              Leverage the power of data intelligence with a single/unified
              platform for collecting, storing and managing user data
            </p>
          </div>

          {/* section items */}
          <div className="mt-8 sm:mt-14 md:mt-20 flex flex-col gap-14">
            {featuredData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          {/* featured image */}
          <div className="bg-white shadow-lg rounded-3xl absolute sm:-bottom-30 z-50 mt-20 overflow-hidden  ">
            <img className="max-h-[500px]  mx-auto" src={schema} alt="schema" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DMFeatures;
