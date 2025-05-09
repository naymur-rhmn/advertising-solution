import jumia from "../../../assets/images/home/brand-logo/Jumia-Logo.png";
import vogue from "../../../assets/images/home/brand-logo/vogue-logo.png";
import nike from "../../../assets/images/home/brand-logo/nike-logo.png";
import mastercard from "../../../assets/images/home/brand-logo/mastercard-logo.png";
import Mango from "../../../assets/images/home/brand-logo/Mango-logo.png";
import levis from "../../../assets/images/home/brand-logo/Levis-Logo.png";
import SingleBrand from "./SingleBrand";

function BrandCollaborations() {
  return (
    <section className="md:mt-[250px] mt-[150px] bg-white relative z-40 pb-16">
      <div className="brand-bg"></div>
      <div className="lg-container px-4">
        {/* section title */}
        <div className="text-center md:px-20">
          <h2 className="md:text-[40px] lg:text-[44px] text-[26px] text-primary">
            Creative Studio
          </h2>
          <p className="text-[18px] md:text-[22px] lg:text-[24px] text-primary px-6">
            Your ideas. Our experience. Impressive results.
          </p>
          <p className="text-secondary md:mt-6 mt-4 font-light">
            Fulfil your any idea in one of our effective Rich-media formats to
            drive better results. Have a look at our gallery, because examples
            speak louder than words.
          </p>
        </div>
        {/*  */}
        <div className="grid md:grid-cols-5 grid-cols-2 pt-10 md:pt-20 md:pb-14 pb-4">
          <SingleBrand brandImg={jumia} />
          <SingleBrand brandImg={vogue} />
          <SingleBrand brandImg={nike} />
          <SingleBrand brandImg={levis} />
          <SingleBrand brandImg={Mango} />
          <SingleBrand brandImg={mastercard} />
          <SingleBrand brandImg={nike} />
          <SingleBrand brandImg={levis} />
          <SingleBrand brandImg={Mango} />
          <SingleBrand brandImg={jumia} />
        </div>
      </div>
    </section>
  );
}

export default BrandCollaborations;
{
  /* <div className="p-8 border-r-2 border-b-2 h-[150px]">
            <img className="h-full w-full" src={jumia} alt="" />
          </div>
          <div className="p-8 border-r-2 border-b-2 h-[150px]">
            <img className="h-full w-full" src={jumia} alt="" />
          </div>
          <div className="p-8 border-r-2 border-b-2 h-[150px]">
            <img className="h-full  w-full" src={vogue} alt="" />
          </div>
          <div className="p-8 border-b-2  border-r-2 h-[150px]">
            <img className="h-full  w-full" src={nike} alt="" />
          </div>
          <div className="p-8  border-b-2 h-[150px]">
            <img className="h-full  w-full" src={levis} alt="" />
          </div>
          <div className="p-8 border-r-2 h-[150px]">
            <img className="h-full  w-full" src={Mango} alt="" />
          </div>
          <div className="p-8 border-r-2 h-[150px]">
            <img className="h-full  w-full" src={Mango} alt="" />
          </div>
          <div className="p-8 border-r-2 h-[150px]">
            <img className="h-full  w-full" src={mastercard} alt="" />
          </div>
          <div className="p-8 border-r-2 h-[150px]">
            <img className="h-full w-full" src={Mango} alt="" />
          </div>
          <div className="p-8 h-[150px]">
            <img className="h-full  w-full" src={mastercard} alt="" />
          </div> */
}
