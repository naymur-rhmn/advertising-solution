import DisplayMobileBanner from "../components/DisplayMobile/DsiplayMobileBanner/DsiplayMobileBanner";
import MobileApp from "../components/DisplayMobile/Mobile/MobileApp/MobileApp";
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
        </>
      )}
      {activeTab === "display" && (
        <>
          <div className="h-[100vh] ">ddd</div>
          <div className="h-[100vh] ">ddd</div>
        </>
      )}
    </>
  );
}

export default DisplayMobile;
