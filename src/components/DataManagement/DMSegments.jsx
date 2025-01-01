import segmetns from "../../assets/images/dmp/segments.svg";
import segmetn1 from "../../assets/images/dmp/segment1.png";
import segmetn2 from "../../assets/images/dmp/segment2.png";
import segmetn3 from "../../assets/images/dmp/segment3.png";
import Button from "../shared/Button";
import SectionIcon from "../shared/SectionIcon";
import { RiApps2AiLine } from "react-icons/ri";

const segmentData = [
  {
    id: 1,
    img: segmetn1,
    title: "Hybrid Semantica",
    desc: "The technology for collecting the segment of users, who were reading the content with relevant keywords or even thematic channels.",
  },
  {
    id: 2,
    img: segmetn2,
    title: "Geotargeting & Hybrid Places",
    desc: "The access to the user's location or frequent visits to display ads on devices.",
  },
  {
    id: 3,
    img: segmetn3,
    title: "Thematic segments of placement",
    desc: "The segment is based on visitors of the website from the relevant categories such as sport & trainings, pregnancy & babies, etc.",
  },
];
function DMSegments() {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-20">
      <div className="lg-container">
        {/* section title */}
        <div className="flex items-center flex-col">
          <SectionIcon bgColor="#E4E8F9">
            <RiApps2AiLine size={30} color="#C2CBEF" />
          </SectionIcon>
          <h2 className="alt-section-title">AdLoom segments</h2>
        </div>

        {/*  */}
        <div className="flex gap-4 items-center mt-6 sm:mt-8  md:mt-10 lg:mt-12">
          <div className="md:block flex-1 hidden">
            <img className="" src={segmetns} alt="segment" />
          </div>
          <div className="flex-1">
            {segmentData.map((data) => {
              return (
                <div key={data.id} className="flex gap-4 pb-8">
                  <div className="w-[45px] md:w-[55px] h-[40px] md:h-[50px] bg-red-200 ">
                    <img className="w-full h-full" src={data.img} alt="" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl ">{data.title}</h4>
                    <p className="mt-2">{data.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*  */}
        <div className="bg-gradient-to-r to-[#72E096] from-[#01B7B9] md:px-20 px-8 py-8 md:py-16 flex items-center justify-between rounded-2xl mt-10 sm:mt-14 md:mt-20">
          <div className="flex-1">
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium">
              LEARN MORE ABOUT WHAT WE CAN DO FOR YOU
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <Button>more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DMSegments;
