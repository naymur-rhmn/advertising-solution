function TabImage({ image }) {
  return (
    <div className="w-fit mx-auto relative ">
      {/* circle shapes */}
      <div className="h-[340px] w-[340px] bg-[#fbf4f4] absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] rounded-full -z-10"></div>
      <div className="h-[320px] w-[320px] bg-[#8a9ffaf3] absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] rounded-full z-0"></div>
      {/* image */}
      <img
        className="relative z-10 md:max-w-[440px] w-full h-auto"
        src={image}
        alt="Banner"
      />
    </div>
  );
}

export default TabImage;
