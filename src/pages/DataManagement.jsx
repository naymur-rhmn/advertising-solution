import DMCycle from "../components/DataManagement/DMCycle";
import DMDataType from "../components/DataManagement/DMDataType";
import DMFeatures from "../components/DataManagement/DMFeatures";
import DMHero from "../components/DataManagement/DMHero";
import DMSegments from "../components/DataManagement/DMSegments";

function DataManagement() {
  return (
    <>
      <DMHero />
      <DMCycle />
      <DMFeatures />
      <DMDataType />
      <DMSegments />
    </>
  );
}

export default DataManagement;
