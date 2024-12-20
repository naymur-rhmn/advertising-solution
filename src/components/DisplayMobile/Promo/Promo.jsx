import SectionIcon from "../../shared/SectionIcon";
import PromoLink from "./PromoLink";

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
      <PromoLink btnText={btnText} />
    </>
  );
}

export default Promo;
