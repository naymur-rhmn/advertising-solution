function FeaturesTab({ children, id, handleTab, activeTab }) {
  return (
    <div
      onClick={() => handleTab(id)}
      className={`md:px-8 px-6 md:h-12 h-10 bg-pink-50 w-fit rounded-full sm:font-normal font-medium text-xs sm:text-sm md:text-base text-center  text-primary flex items-center justify-center uppercase  cursor-pointer transition-all ${
        activeTab === id ? "bg-[#F6AC61] text-white" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default FeaturesTab;
