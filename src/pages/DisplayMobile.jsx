import DisplayMobileBanner from "../components/DisplayMobile/DsiplayMobileBanner/DsiplayMobileBanner";
import Cases from "../components/DisplayMobile/Mobile/Cases/Cases";
import MobileApp from "../components/DisplayMobile/Mobile/MobileApp/MobileApp";
import MobileDescription from "../components/DisplayMobile/Mobile/MobileDescription/MobileDescription";
import MobileFeatures from "../components/DisplayMobile/Mobile/MobileFeatures/MobileFeatures";
import VideoFeatures from "../components/DisplayMobile/Mobile/VideoFeatures/VideoFeatures";
import Footer from "../components/shared/Footer";
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
          <Footer />
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
