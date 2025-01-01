import ImageCarousel from "../ImageCarousel/ImageCarousel";

function Cases() {
  return (
    <section className="mt-10 md:pt-[90px] pt-[40px] pb-[50px] relative">
      {/* section bg */}
      <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t to-red-50 from-white z-0"></div>
      {/* carousel */}
      <ImageCarousel />
      {/* cases link */}
      <div className="lg-container mt-10 relative">
        <div className="flex flex-col items-center">
          <p className="text-2xl text-primary mb-4">Check our cases</p>
          <button className="uppercase rounded-md text-white  px-5 h-10 bg-blue-950">
            Get Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cases;
