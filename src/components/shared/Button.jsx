import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";

function Button({
  children,
  bgColor = "#3F3F67",
  textColor = "#fff",
  hoverBgColor = "#3A3AAD",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const styles = {
    default: {
      color: textColor,
      backgroundColor: bgColor,
    },
    hover: {
      backgroundColor: hoverBgColor,
    },
  };
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isHovered ? { ...styles.default, ...styles.hover } : styles.default
      }
      className={`uppercase pl-4 pr-2.5 py-2.5 mt-1 md:py-3   text-gray-700 rounded text-sm flex gap-1 items-center group transition`}
    >
      {children}
      <span className="transition group-hover:translate-x-0.5 group-hover:hidden ">
        <RiArrowRightSLine className="" color={`${textColor}`} size={20} />
      </span>
      <span className="transition hidden  group-hover:block ">
        <BiRightArrowAlt className="" color={`${textColor}`} size={20} />
      </span>
    </button>
  );
}

export default Button;
