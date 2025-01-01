const SingleFeature = ({ feature }) => {
  const { id, title, desc, img } = feature;
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center">
      <div className={`flex-1 ${id % 2 === 1 ? "sm:order-1" : "sm:order-2"}`}>
        <h4 className="text-lg md:text-xl mb-2 md:mb-6 uppercase">{title}</h4>
        <p className="">{desc}</p>
      </div>
      <div className={`flex-1  ${id % 2 === 1 ? "sm:order-2" : "sm:order-1"}`}>
        <img
          className={`${
            id % 2 === 1 && "ml-auto"
          } h-[150px] sm:h-[180px] md:h-auto`}
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
};

export default SingleFeature;
