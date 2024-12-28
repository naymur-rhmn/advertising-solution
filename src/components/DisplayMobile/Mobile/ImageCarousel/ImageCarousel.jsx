import Marquee from "react-fast-marquee";
import image1 from "../../../../assets/images/mobile/slider/slider1/image1.webp";
import image2 from "../../../../assets/images/mobile/slider/slider1/image2.webp";
import image3 from "../../../../assets/images/mobile/slider/slider1/image3.png";
import image4 from "../../../../assets/images/mobile/slider/slider1/image4.jpg";
import image5 from "../../../../assets/images/mobile/slider/slider1/image5.avif";
import image6 from "../../../../assets/images/mobile/slider/slider1//image6.avif";
import image7 from "../../../../assets/images/mobile/slider/slider1/image7.avif";
import image8 from "../../../../assets/images/mobile/slider/slider1/image8.jpeg";
import image9 from "../../../../assets/images/mobile/slider/slider2/image10.jpg";
import image10 from "../../../../assets/images/mobile/slider/slider2/image11.avif";
import image11 from "../../../../assets/images/mobile/slider/slider2/image12.avif";
import image12 from "../../../../assets/images/mobile/slider/slider2/image13.jpg";
import image13 from "../../../../assets/images/mobile/slider/slider2/image14.jpg";
import image14 from "../../../../assets/images/mobile/slider/slider2/image15.webp";
import image15 from "../../../../assets/images/mobile/slider/slider2/image16.webp";
import image16 from "../../../../assets/images/mobile/slider/slider2/image9.jpg";
import image17 from "../../../../assets/images/mobile/slider/slider3/image16.webp";
import image18 from "../../../../assets/images/mobile/slider/slider3/image17.jpg";
import image19 from "../../../../assets/images/mobile/slider/slider3/image18.png";
import image20 from "../../../../assets/images/mobile/slider/slider3/image19.jpg";
import image21 from "../../../../assets/images/mobile/slider/slider3/image20.jpeg";
import image22 from "../../../../assets/images/mobile/slider/slider3/image21.jpg";
import image23 from "../../../../assets/images/mobile/slider/slider3/image22.png";
import image24 from "../../../../assets/images/mobile/slider/slider3/image8.jpeg";

const firstSliderimages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];
const secondSliderimages = [
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
];
const thirdSliderimages = [
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
];
function ImageCarousel() {
  return (
    <>
      <Marquee gradient={false} speed={30} direction="left">
        {firstSliderimages.map((image) => {
          return (
            <div className="md:w-[400px] sm:w-[300px] w-[200px h-[100px] bg-red-200 mr-4">
              <img className="h-full w-full" src={image} alt="brand" />
            </div>
          );
        })}
      </Marquee>
      <Marquee className="py-2" gradient={false} speed={50} direction="right">
        {secondSliderimages.map((image) => {
          return (
            <div className="md:w-[400px] sm:w-[300px] w-[200px] h-[160px] bg-red-200 mr-4">
              <img className="h-full w-full" src={image} alt="brand" />
            </div>
          );
        })}
      </Marquee>
    </>
  );
}

export default ImageCarousel;
