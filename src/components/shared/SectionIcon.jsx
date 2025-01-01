function SectionIcon({ children, bgColor = "bg-blue-400" }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`md:h-14 md:w-14 h-12 w-12 rounded-full flex items-center justify-center `}
    >
      {children}
    </div>
  );
}

export default SectionIcon;
