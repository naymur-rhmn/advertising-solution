import SectionIcon from "../shared/SectionIcon";
import { FaDatabase } from "react-icons/fa";
import collect from "../../assets/images/dmp/collect.png";
import segment from "../../assets/images/dmp/segment.png";
import apply from "../../assets/images/dmp/apply.png";
import CycleItem from "./CycleItem";

const DMCycle = () => {
  return (
    <section className="pb-20">
      <div className="lg-container">
        {/* section title */}
        <div className="flex flex-col items-center">
          <SectionIcon bgColor="#E4E8F9">
            <FaDatabase color="#C2CBEF" size={28} />
          </SectionIcon>
          <h2 className="alt-section-title text-center">
            ADLOOM DMP: FULL CYCLE OF WORKING <br /> WITH DATA
          </h2>
        </div>
        {/* section content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 md:mt-12">
          <CycleItem
            img={collect}
            title={"collect"}
            desc={
              "Collect data from websites and mobile apps based on the users’ interests and behavior."
            }
          />
          <CycleItem
            img={segment}
            title={"segment"}
            desc={
              "Group custom audiences, according to users’ activity on different sources. "
            }
          />
          <CycleItem
            img={apply}
            title={"apply"}
            desc={
              "Develop unique data strategies and achieve high performances in your advertising campaigns."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default DMCycle;
