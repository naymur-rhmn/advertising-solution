import PromoLink from "../../Promo/PromoLink";
import TabContentTitle from "./TabContentTitle";
import TabParagraph from "./TabParagraph";
import TabImage from "./TabImage";
import banner3_1 from "../../../../assets/images/mobile/svg/banner3_1.svg";

function BannerMediaTabContent() {
  return (
    <div className="flex flex-col md:gap-4 md:flex-row ">
      {/* banner content */}
      <div className="flex-1 md:order-1 order-2  pb-10 md:mt-0 -mt-14 z-30">
        <TabContentTitle title="Rich-media banners" />
        <TabParagraph>
          Rich-media banners are a great way to engage users with interactive
          elements. They can be used to showcase your product in a creative way,
          or to tell a story that will resonate with your audience.
        </TabParagraph>
        <TabParagraph>
          Rich-media banners are a great way to engage users with interactive
          elements. They can be used to showcase your product in a creative way,
          or to tell a story that will resonate with your audience.
        </TabParagraph>
        <TabParagraph>
          Rich-media banners are a great way to engage users with interactive
          elements. They can be used to showcase your product in a creative way,
          or to tell a story that will resonate with your audience.
        </TabParagraph>
        <PromoLink btnText={"Find examples in our gallery"} />
      </div>
      {/* banner image */}
      <div className="flex-1 md:order-2 order-1 z-10">
        <TabImage image={banner3_1} alt="Media Screen" />
      </div>
    </div>
  );
}

export default BannerMediaTabContent;
