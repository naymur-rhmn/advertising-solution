import SectionIcon from "../../shared/SectionIcon";
import { MdOndemandVideo } from "react-icons/md";

function DStream() {
  return (
    <section className="relative pt-20">
      <div className="lg-container">
        {/* section title */}
        <div className="flex flex-col items-center md:text-left text-center">
          <SectionIcon bgColor="#A9F2B6">
            <MdOndemandVideo size={30} color="#52D092" />
          </SectionIcon>
          <h2 className="section-title">Instream & Outstream video</h2>
          <p className="text-xl md:text-2xl pb-4 md:pb-6 text-center sm:text-center md:px-10 sm:px-4 ">
            We create engaging video campaigns with diverse ad formats for video
            partner sites and Smart TVs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DStream;
