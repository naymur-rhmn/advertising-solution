import React from "react";
import TabContentTitle from "./TabContentTitle";
import TabImage from "./TabImage";
import banner2_1 from "../../../../assets/images/mobile/svg/banner2_1.svg";
import TabParagraph from "./TabParagraph";

function BannerScreenTabContent() {
  return (
    <div className="flex flex-col md:gap-4 md:flex-row">
      {/* banner content */}
      <div className="flex-1 md:order-1 order-2  pb-10 md:mt-0 -mt-14 z-30">
        <TabContentTitle title={"Interstitials (Full-screen banners)"} />
        <TabParagraph>
          Interstitials are full-page ad units served between screens during
          mobile app navigation. They engage a user with rich HTML5 experiences
          at real app transition points (launch, game level load, etc.).
        </TabParagraph>
        <TabParagraph>
          Interstitials are constantly cited as the most popular ad format. They
          provide a diverse ad experience to users and minimise "banner
          blindness".
        </TabParagraph>
        <TabParagraph>
          Interstitials are constantly cited as the most popular ad format. They
          provide a diverse ad experience to users and minimise "banner
          blindness".
        </TabParagraph>
      </div>
      {/* banner image */}
      <div className="flex-1 md:order-2 order-1  z-10">
        <TabImage image={banner2_1} />
      </div>
    </div>
  );
}

export default BannerScreenTabContent;
