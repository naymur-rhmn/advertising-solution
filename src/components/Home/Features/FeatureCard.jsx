function FeatureCard({ title, desc, img, noBorder }) {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-5">
        <div className="h-[46px] w-[46px] mr-5">
          <img className="h-full w-full" src={img} alt="" />
        </div>
        <h3 className="text-white">{title}</h3>
      </div>
      <p
        className={`leading-relaxed ${
          noBorder
            ? "text-neutral font-light ml-[23px] pl-[43px]"
            : "text-neutral font-light ml-[23px] pl-[42px] border-l-2 border-dashed border-purple-600"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}

export default FeatureCard;
