import { TiArrowRight } from "react-icons/ti";
import SectionIcon from "../../shared/SectionIcon";

function Promo({ Component, title, children, btnText }) {
  return (
    <>
      <div className="lg:block flex flex-col items-center">
        <SectionIcon bgColor="bg-blue-400">
          <Component size={30} color="#C5E2FF" />
        </SectionIcon>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="pb-4 border-b flex flex-col gap-4 font-light">
        {children}
      </div>
      {/* link to navigate */}
      <li className="mt-4 italic flex items-center group hover:cursor-pointer w-fit ">
        <p className="text-blue-700 ">{btnText}</p>
        <span className="group-hover:translate-x-0.5 transition-all">
          <TiArrowRight color="#1D4ED8" size={24} />
        </span>
      </li>
    </>
  );
}

export default Promo;
