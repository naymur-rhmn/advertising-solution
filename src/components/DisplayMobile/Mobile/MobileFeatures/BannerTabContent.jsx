import bannerImage from "../../../../assets/images/mobile/banner1.png";
import TabImage from "./TabImage";
import TabContentTitle from "./TabContentTitle";
import TabParagraph from "./TabParagraph";

const mobileSizes = [
  { id: 1, name: "Portrait", size: "300x1050" },
  { id: 2, name: "Billboard", size: "970x250" },
  { id: 3, name: "Skyscraper", size: "160x600" },
  { id: 4, name: "Leaderboard", size: "728x90" },
  { id: 5, name: "Medium Rectangle", size: "300x250 20x60 120x60" },
  { id: 6, name: "Smartphone Banner", size: "300x50 or 320x50" },
  {
    id: 7,
    name: "Mobile Phone Interstitial",
    size: "640x1136/750x1334/1080x1920",
  },
  { id: 8, name: "Feature Phone Small Banner", size: "120x20" },
  { id: 9, name: "Feature Phone Large Banner", size: "216x36" },
  { id: 10, name: "Feature Phone Medium Banner", size: "168x28" },
  { id: 11, name: "Super Leaderboard/Pushdown", size: "970x90" },
];

function BannerTabContent() {
  return (
    <div className="flex flex-col md:gap-4 md:flex-row">
      {/* banner content */}
      <div className="flex-1 md:order-1 order-2 pb-10 md:mt-0 -mt-14 z-30">
        {/* title */}
        <TabContentTitle title="Banners" />
        <TabParagraph>
          Typically displayed in the content stream or as adhesive units, these
          ads have a vast reach, making them a practical option for increasing
          brand awareness.
        </TabParagraph>
        <p className="text-lg text-primary pb-2">
          Standard sizes (IAB standard mobile sizes)
        </p>
        {/* diffrent screen sizes */}
        <ul className="lg:pr-10">
          {mobileSizes.map((size) => {
            return (
              <li
                key={size.id}
                className="flex justify-between items-center pb-[2px] pt-3 border-b group text-xs transition-all"
              >
                <p className="group-hover:text-primary text-gray-400 capitalize">
                  {size.name}
                </p>
                <p className="group-hover:text-primary text-gray-400">
                  {size.size}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      {/* banner image */}
      <div className="flex-1 md:order-2 order-1 z-10">
        <TabImage image={bannerImage} />
      </div>
    </div>
  );
}

export default BannerTabContent;
