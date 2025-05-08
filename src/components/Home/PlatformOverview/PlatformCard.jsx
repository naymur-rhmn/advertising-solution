function PlatformCard({ children, title, desc, gradientBg }) {
  return (
    <div className="flex md:gap-10 gap-4">
      <div className="">
        <div
          className={`${gradientBg} h-10 w-10 flex items-center rounded-full justify-center`}
        >
          {children}
        </div>
      </div>
      <div className="pr-4">
        <h4 className="md:text-xl text-lg md:mb-3 mb-2 capitalize">{title}</h4>
        <p className="md:text-lg text-base font-light leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default PlatformCard;
