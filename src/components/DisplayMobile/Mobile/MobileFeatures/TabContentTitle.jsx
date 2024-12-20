function TabContentTitle({ title }) {
  return (
    <div className="flex gap-4 items-center mb-6">
      <div className="h-7 w-8 relative">
        <div className="absolute top-0 left-0 h-[24px] w-[14px] bg-[#56E4A8] rounded-sm"></div>
        <div className="absolute top-[4px] left-[3px] h-[12px] w-[18px] bg-[#3676FA] bg-opacity-80 rounded-sm"></div>
      </div>
      {/*  */}
      <h4 className="uppercase text-xl">{title}</h4>
    </div>
  );
}

export default TabContentTitle;
