function FeatureGroup({ data, children }) {
  return (
    <>
      <div className="flex md:gap-4 gap-2 items-center group">
        <div className="h-[35px] w-[40px] relative  flex items-center justify-center">
          {children}
        </div>
        <h4 className="uppercase text-lg md:text-xl text-primary">
          {data.title}
        </h4>
      </div>
      <p className="md:py-4 md:pr-6 pb-4 pt-3">{data.desc}</p>
    </>
  );
}

export default FeatureGroup;
