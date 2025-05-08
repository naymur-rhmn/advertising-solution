import SectionIcon from "../../shared/SectionIcon";
import { MdOndemandVideo } from "react-icons/md";
import videoCard from "../../../assets/images/display/videoCard.svg";
import reel from "../../../assets/images/display/reel.svg";
import eye from "../../../assets/images/display/eye.svg";
import play from "../../../assets/images/display/play.svg";

const instreamMod = ["pre", "mid", "pause", "post", "multi"];
const outstreamMod = [
  {
    id: 1,
    title: "In-banner video",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita at ipsam voluptas reprehenderit inventore minima, esse repellendus tempora, quasi odio vero, veniam dolor officiis pariatur atque possimus maxime eos.",
    icon: reel,
  },
  {
    id: 2,
    title: "In-read(Native video)",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita at ipsam voluptas reprehenderit inventore minima, esse repellendus tempora..",
    icon: play,
  },
  {
    id: 3,
    title: "Fly-roll",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita at ipsam voluptas reprehenderit inventore minima quasi odio vero, veniam dolor officiis pariatur atque possimus maxime eos.",
    icon: eye,
  },
];
function DStream() {
  return (
    <section className="relative pt-20 pb-20">
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

        {/* content */}
        <div className="flex md:flex-row flex-col gap-20 mt-16">
          {/* flex item */}
          <div className="flex-1">
            <h3 className="uppercase text-lg md:text-xl mb-2">Instream</h3>
            <p>
              Use in-stream ads when you have video content you'd like to
              promote before, during, or after other videos across websites and
              apps.
            </p>
            <ul className="mt-6">
              {instreamMod.map((stream, i) => {
                return (
                  <li
                    key={i}
                    className="border-b text-blue-400 pb-1 mb-2 text-sm"
                  >
                    {stream}-roll
                  </li>
                );
              })}
            </ul>
            <div className="h-auto w-full relative">
              <img
                className="h-auto w-full relative md:top-10 -left-[30px] md:scale-125 scale-100"
                src={videoCard}
                alt="video play card graphics"
              />
            </div>
          </div>

          {/* flex item */}
          <div className="flex-1 -mt-24">
            <h3 className="uppercase text-lg md:text-xl mb-2">outstream</h3>
            <p>
              An outstream video ad plays in a large format player whenever a
              user navigates to it within text content (typically an article).
              Increase brand awareness by getting your videos in front of more
              people.
            </p>
            <div className="mt-10">
              {outstreamMod.map((stream) => {
                return (
                  <div key={stream.id} className="flex gap-6 md:gap-10 mb-8">
                    <div>
                      <img src={stream.icon} alt="" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-4 text-lg">{stream.title}</h4>
                      <p>{stream.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DStream;
