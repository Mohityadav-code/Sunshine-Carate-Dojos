import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assets/img (1).jpeg";
import img2 from "../Assets/img (2).jpeg";
import img3 from "../Assets/img (3).jpeg";
import img4 from "../Assets/img (4).jpeg";
import img5 from "../Assets/img (5).jpeg";
import img6 from "../Assets/img (6).jpeg";
import img7 from "../Assets/img (7).jpeg";
import img8 from "../Assets/img (8).jpeg";
import img9 from "../Assets/img (9).jpeg";
import img10 from "../Assets/img (10).jpeg";
import img11 from "../Assets/img (11).jpeg";
import img12 from "../Assets/img (12).jpeg";
import img13 from "../Assets/img (13).jpeg";
import img14 from "../Assets/img (14).jpeg";
import img15 from "../Assets/img (15).jpeg";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true, // Allow infinite looping
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous sliding
    cssEase: "linear", // For smoother continuous sliding
    pausonhover: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];
  return (
    <div className="w-full h-full bg-white " >
        <div className="text-5xl   pt-10   bg-white underline underline-offset-4 text-center font-sans font-black text-[#222831] w-full">
GALLERY
    </div>
      <Slider {...settings}>
        {images.map((image) => (
          <>
            <div className=" h-[400px]  p-10  flex justify-center items-center gap-10  w-full">
              <div className="w-full h-full "></div>
              <img src={image} alt="Image 1" />
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
