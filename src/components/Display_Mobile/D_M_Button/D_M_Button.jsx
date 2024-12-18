function D_M_Button({ children, activeTab, handleTab }) {
  return (
    <button
      onClick={() => handleTab(children)}
      className={`lg:h-[92px] md:h-[85px] sm:h-[70px] h-[45px] w-full rounded-md shadow md:text-3xl sm:text-2xl text-xl transition-all duration-300 ${
        activeTab === children.toLowerCase()
          ? "bg-blue-400 text-white"
          : "bg-white text-primary"
      } `}
    >
      {children}
    </button>
  );
}

export default D_M_Button;
