import DisplayMobileBanner from "../components/DisplayMobile/DsiplayMobileBanner/DsiplayMobileBanner";
import useActiveTab from "../hooks/useActiveTab";

function DisplayMobile() {
  const { activeTab } = useActiveTab();

  return (
    <>
      <DisplayMobileBanner />
      {activeTab === "mobile" && (
        <>
          <div className="h-[100vh] ">ddd</div>
          <div className="h-[100vh] ">ddd</div>
        </>
      )}
      {activeTab === "display" && (
        <>
          <>
            <div className="h-[100vh] ">ddd</div>
            <div className="h-[100vh] ">ddd</div>
          </>
        </>
      )}
    </>
  );
}

export default DisplayMobile;
