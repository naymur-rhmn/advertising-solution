import { TiArrowRight } from "react-icons/ti";

function PromoLink({ btnText }) {
  return (
    <li className="mt-4 italic flex items-center group hover:cursor-pointer w-fit font-medium md:text-base text-sm">
      <p className="text-blue-700 ">{btnText}</p>
      <span className="group-hover:translate-x-0.5 transition-all">
        <TiArrowRight color="#1D4ED8" size={24} />
      </span>
    </li>
  );
}

export default PromoLink;
