import { Link as Scroll } from "react-scroll";
import notebook from "../../../assets/page/mobile/svg/notebook.svg";
import DMButton from "../DMButton/DMButton";
import useActiveTab from "../../../hooks/useActiveTab";

function DsiplayMobileBanner() {
  const { activeTab, handleTab } = useActiveTab();

  return (
    <section className="relative overflow-hidden">
      {/* section bg */}
      <div className="d-m-banner-bg absolute bg-gradient-to-l from-[#11B3F3] to-[#492EF9] h-full min-h-[450px] w-full -skew-y-12 md:-top-48 -top-32 z-0 before:absolute before:content-[''] before:-top-[calc(100%-2px)] before:left-0 before:h-full before:w-full before:bg-[#365CF7]">
        {/* line one */}
        <div className="hidden md:block h-[100px] w-[30%] bg-gradient-to-l to-[#0098FA] from-[#3759F7] absolute bottom-0 left-0"></div>
        {/* line two */}
        <div className="h-[100px] md:w-[60%] w-[100%] bg-gradient-to-r to-[#74EAE3] md:from-[#365CF7] from-[#3d30fd] absolute sm:bottom-0 -bottom-6 right-0"></div>
      </div>
      {/* section content */}
      <div className="lg-container z-10">
        <div className="flex">
          <div className="lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%] sm:pt-[180px] pt-[100px]  z-10 ">
            <h1 className="lg:text-[54px] md:text-[46px] text-[28px] sm:text-[32px] leading-normal text-white">
              Discover all our channels and formats. Find the most suitable for
              you
            </h1>
          </div>
          <div className="hidden sm:block flex-1 pt-[125px]">
            <div className="absolute w-full left-0">
              <div className="absolute lg:w-[800px] lg:h-auto lg:left-[48%] lg:right-0 left-[28%] right-4 z-0">
                <img className="h-full w-full" src={notebook} />
              </div>
            </div>
          </div>
        </div>
        {/* section buttons */}
        <div className="lg:pb-[calc(150px)] sm:pb-[calc(70px+12%)] pt-16">
          <div
            id="button-container"
            className="z-10 relative flex justify-center gap-4 px-10 sm:pb-4 pb-[150px]"
          >
            {/* Use react-scroll Link for smooth scroll */}
            <Scroll
              className="flex-1"
              to="button-container"
              smooth={true}
              duration={500}
            >
              {
                <DMButton handleTab={handleTab} activeTab={activeTab}>
                  Display
                </DMButton>
              }
            </Scroll>
            {/* Use react-scroll Link for smooth scroll */}
            <Scroll
              className="flex-1"
              to="button-container"
              smooth={true}
              duration={500}
            >
              {
                <DMButton handleTab={handleTab} activeTab={activeTab}>
                  Mobile
                </DMButton>
              }
            </Scroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DsiplayMobileBanner;
