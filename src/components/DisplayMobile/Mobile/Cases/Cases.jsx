import ImageCarousel from "../ImageCarousel/ImageCarousel";

function Cases() {
  return (
    <section className="mt-8 md:pt-[90px] pt-[40px] pb-[50px]">
      {/* carousel */}
      <ImageCarousel />
      {/* cases link */}
      <div className="lg-container mt-10">
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
