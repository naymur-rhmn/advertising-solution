function FeaturesTab({ children, id, handleTab, activeTab }) {
  return (
    <div
      onClick={() => handleTab(id)}
      className={`md:px-8 px-6 md:h-12 h-10 w-fit rounded-full sm:font-normal font-medium text-xs sm:text-sm md:text-[15px] text-center  flex items-center justify-center uppercase  cursor-pointer transition-all ${
        activeTab === id ? "bg-[#F6AC61] text-white" : "bg-pink-50 text-primary"
      }`}
    >
      {children}
    </div>
  );
}

export default FeaturesTab;
