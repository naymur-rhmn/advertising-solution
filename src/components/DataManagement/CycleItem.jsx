const CycleItem = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 md:px-0 sm:px-16 px-10">
      <img className="h-[58px] w-[58px]" src={img} alt="collect" />
      <h4 className="capitalize text-xl md:font-medium">{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default CycleItem;
