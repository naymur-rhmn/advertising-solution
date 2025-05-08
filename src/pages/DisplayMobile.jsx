import DIntro from "../components/DisplayMobile/Display/DIntro";
import DStream from "../components/DisplayMobile/Display/DStream";
import DisplayMobileBanner from "../components/DisplayMobile/DsiplayMobileBanner/DsiplayMobileBanner";
import Cases from "../components/DisplayMobile/Mobile/Cases/Cases";
import MobileApp from "../components/DisplayMobile/Mobile/MobileApp/MobileApp";
import MobileDescription from "../components/DisplayMobile/Mobile/MobileDescription/MobileDescription";
import MobileFeatures from "../components/DisplayMobile/Mobile/MobileFeatures/MobileFeatures";
import VideoFeatures from "../components/DisplayMobile/Mobile/VideoFeatures/VideoFeatures";
import useActiveTab from "../hooks/useActiveTab";

function DisplayMobile() {
  const { activeTab } = useActiveTab();

  return (
    <>
      <DisplayMobileBanner />
      {activeTab === "mobile" && (
        <>
          <MobileApp />
          <MobileFeatures />
          <VideoFeatures />
          <Cases />
          <MobileDescription />
        </>
      )}
      {activeTab === "display" && (
        <>
          <DIntro />
          <DStream />
        </>
      )}
    </>
  );
}

export default DisplayMobile;
