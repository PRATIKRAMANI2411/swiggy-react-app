import React from "react";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const SecondBanner = (props) => {
    const { bannerdata } = props
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <HiArrowLongRight />,
        prevArrow: <HiArrowLongLeft />
    };
    return (
        <>
            <div className="container mx-auto banner-second-slider w-9/12">
                <h1 className="text-2xl font-bold my-6">what's on your mind?</h1>
                <Slider {...settings}>
                    {
                        bannerdata.length ? (
                            bannerdata.map((imageitem) => (
                                <div key={imageitem.id}>
                                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageitem.imageId} alt="banner image" />
                                </div>
                            ))
                        ) : (
                            <h1> Loding </h1>
                        )
                    }
                </Slider>
            </div>
            <hr className="container mx-auto w-9/12 h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        </>
    )

}

export default SecondBanner;