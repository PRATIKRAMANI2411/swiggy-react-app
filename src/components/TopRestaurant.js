import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Slider from "react-slick";

const TopRestaurant = (props) => {
    const { toprestaurant } = props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <HiArrowLongRight />,
        prevArrow: <HiArrowLongLeft />
    };
    return(
        <>
            <div className="container mx-auto banner-second-slider w-9/12">
                <h1 className="text-2xl font-bold my-6">Top restaurant chains in Surat</h1>
                <Slider {...settings}>
                    {
                        toprestaurant.length ? (
                            toprestaurant.map((imageitem) => (
                                
                                <div className="w-72 p-2 m-2 rounded-lg relative reastaurant-main-card" key={imageitem?.info?.id}>
                                    <a href="#">
                                        <img className="rounded-lg" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageitem?.info?.cloudinaryImageId} alt="" />
                                    </a>
                                    <div className="offer-text absolute top-36 left-5"><span className="text-xl text-white font-bold">{ imageitem?.info?.aggregatedDiscountInfoV3 ? imageitem?.info?.aggregatedDiscountInfoV3['header'].concat(imageitem?.info?.aggregatedDiscountInfoV3['subHeader']) : '' }</span></div>
                                    <div className="pt-1">
                                        <a href="#">
                                            <h5 className="text-xl font-bold tracking-tight text-gray-700 ">{imageitem?.info?.name}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{imageitem?.info?.cuisines.join(", ")}</p>
                                    </div>
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
export default TopRestaurant