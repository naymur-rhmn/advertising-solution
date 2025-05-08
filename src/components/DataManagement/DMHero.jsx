import Button from "../shared/Button";
import intro from "../../assets/images/dmp/intro.svg";

function DMHero() {
  return (
    <section className="relative">
      {/* section bg */}
      <div className="absolute bg-gradient-to-l from-[#4AA7D9] to-[#492EF9] h-full min-h-[450px] w-full -skew-y-12 md:-top-48 -top-32 z-0 "></div>
      {/* section container */}
      <div className="lg-container md:pt-[220px] sm:pt-[150px] pt-[100px] md:pb-[250px] pb-[150px]">
        <div className="flex">
          {/* content */}
          <div className="flex-1 z-20">
            <h1 className="alt-hero-title text-white">Adloom DMP</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Collect, enrich and use the data to target audience in a single
              platform with Hybrid DMP
            </p>
            <p className="py-5 text-gray-100">
              Get deep insights by combining audience personas, building
              look-alike audiences and developing interaction strategies to
              boost your campaign efficiency.
            </p>
            <Button bgColor="#fff" textColor="black" hoverBgColor="#E5F3F9">
              Get Started
            </Button>
          </div>
          <div className="flex-1 hidden sm:block">
            <div className="absolute left-0 w-full">
              <div className="absolute lg:w-[800px]  lg:left-[48%]  left-[28%] -right-10 z-0">
                <img
                  className="relative w-full md:-mt-[30%] -mt-[5%] md:translate-y-[20%]"
                  src={intro}
                  alt="intro"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DMHero;
