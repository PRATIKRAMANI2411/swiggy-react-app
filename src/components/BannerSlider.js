import React from "react";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";


const BannerSlider = (props) => {
  const { bannerdata } = props
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <HiArrowLongRight />,
    prevArrow: <HiArrowLongLeft />
  };
  return (
    <>
      <div className="container mx-auto banner-slider w-9/12">
        <h1 className="text-2xl font-bold mb-4">Best offers for you</h1>
        <Slider {...settings}>
          {
            bannerdata.length ? (
              bannerdata.map((imageitem) => (
                <div key={imageitem.id}>
                  <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageitem.imageId} alt="banner image" />
                </div>
              ))
            ) : (
              <h1> Loding </h1>
            )
          }
        </Slider>
      </div>
    </>
  )


}

export default BannerSlider;