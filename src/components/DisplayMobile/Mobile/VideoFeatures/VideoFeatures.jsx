import { SiGoogledisplayandvideo360 } from "react-icons/si";
import SectionIcon from "../../../shared/SectionIcon";
import FeatureGroup from "./FeatureGroup";
import tablet from "../../../../assets/images/mobile/svg/video-tablet.svg";
import { IoGameController } from "react-icons/io5";
import { RiFolder2Fill } from "react-icons/ri";
import { IoPlay } from "react-icons/io5";

const groupContent = {
  group1: {
    title: "rewarded video",
    desc: " Users are incentivized for watching a video ad. They opt in to view a video ad in exchange for something like virtual currency, in-app items, etc.",
  },
  group2: {
    title: "Interstitial Interactive Video",
    desc: "Attract and retain user attention by filling their entire screen with your story or message. Interstitial video ads are full-screen videos that appear during a natural break within the app.",
  },
};

const VideoFeatures = () => {
  return (
    <section className="relative  lg:pt-[200px] md:pt-[180px] pt-[140px]">
      {/* section bg */}
      <div className="absolute top-[80px] left-0 h-[70%] w-full bg-gradient-to-t to-[#f8f4f7] from-white -skew-y-12">
        {/* line */}
        <div className="h-8 md:h-16 lg:w-[35%] w-[45%] bg-gradient-to-l to-[#44f9ad] from-[#492EF9] absolute md:-top-16 -top-8 left-0 z-20"></div>
        {/* line */}
        <div className="h-8 md:h-16 lg:w-[45%] w-[55%] bg-[#ECEFFA] absolute md:-top-16 -top-8 left-0 z-10"></div>
      </div>

      {/* section container */}
      <div className="lg-container">
        <div className="flex">
          {/* image */}
          <div className="flex-1 hidden lg:block">
            <div className="absolute left-0 w-full">
              <div className="absolute right-[51%] w-[690px]">
                <img src={tablet} alt="video tablet" />
              </div>
            </div>
          </div>
          {/* content */}
          <div className="flex-1 pb-10 relative">
            <div className="lg:block  flex flex-col items-center ">
              <SectionIcon bgColor="#485EE8">
                <SiGoogledisplayandvideo360
                  className="pl-0.5"
                  size={30}
                  color="#C5E2FF"
                />
              </SectionIcon>
              <h2 className="section-title">Video</h2>
            </div>
            <p className="pb-4">
              Mobile video is one of the most effective ad formats to adapt and
              to rely on for your in-app campaigns. People expect to see
              relevant ads that don’t interrupt their app experience.
            </p>
            <p className="pb-4">
              Mobile video is one of the most effective ad formats to adapt and
              to rely on for your in-app campaigns. People expect to see
              relevant ads that don’t interrupt their app experience.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="relative flex md:flex-row md:justify-between flex-col lg:mt-10 md:mt-5 -mt-5 ">
          <div className="md:w-[46%] group">
            <FeatureGroup data={groupContent.group1}>
              <IoGameController color="#ECB25F" size={32} />
              <div className="absolute top-0 right-0 h-[18px] w-[18px] rounded-full flex items-center justify-center bg-[#FF8D81] group-hover:-translate-y-1 transition-all">
                <IoPlay
                  className="pl-[2px] pb-[1px] "
                  color="#ffffff"
                  size={12}
                />
              </div>
            </FeatureGroup>
          </div>

          <div className="md:w-[50%]  group">
            <FeatureGroup data={groupContent.group2}>
              <RiFolder2Fill color="#ECB25F" size={32} />
              <div className="absolute -top-[4px] -right-[2px] group-hover:-translate-y-1  transition-all">
                <IoPlay color="#FF8D81" size={24} />
              </div>
            </FeatureGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoFeatures;
