function OverviewCard({ number, text, img }) {
  return (
    <div className="border-l border-neutral flex items-center gap-3 md:px-5 px-4">
      <div className="w-[50px] h-[50px]">
        <img className="h-full w-full" src={img} alt={`image of ${text}`} />
      </div>
      <div>
        <p className="md:text-[36px] sm:text-[30px] text-[26px] text-primary font-medium">
          {number}
        </p>
        <p className="text-secondary text-[15px] pl-2 -mt-1">{text}</p>
      </div>
    </div>
  );
}

export default OverviewCard;
