function SectionIcon({ children, bgColor = "bg-blue-400" }) {
  return (
    <div
      className={`md:h-14 md:w-14 h-12 w-12 rounded-full flex items-center justify-center ${bgColor}`}
    >
      {children}
    </div>
  );
}

export default SectionIcon;
