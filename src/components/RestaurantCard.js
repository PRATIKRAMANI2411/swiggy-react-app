
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import { MdStars } from "react-icons/Md";

const ReasturantCard = (props) => {

    const { resatrolist } = props;
    return (
        <>
            <div className="container mx-auto flex flex-wrap justify-center w-10/12">
                {
                    resatrolist.length ? (
                        resatrolist.map((restaurant) => (
                            <div className="w-72 p-2 m-2 rounded-lg relative reastaurant-main-card">
                                <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                                    <img className="rounded-lg" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant?.info?.cloudinaryImageId} alt="" />
                                </Link>
                                <div className="offer-text absolute top-36 left-5"><span className="text-xl text-white font-bold">{restaurant?.info?.aggregatedDiscountInfoV3 ? restaurant?.info?.aggregatedDiscountInfoV3['header'].concat(restaurant?.info?.aggregatedDiscountInfoV3['subHeader']) : ''}</span></div>
                                <div className="pt-1">
                                    <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                                        <h5 className="text-xl font-bold tracking-tight text-gray-700 ">{restaurant?.info?.name}</h5>
                                    </Link>
                                    <div className="text-green-500"><span className="text-green-500"><MdStars /></span></div>
                                    <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">{restaurant?.info?.cuisines.join(", ")}</p>
                                </div>
                            </div>
                        ))
                    ) : (<Shimmer />)
                }
            </div>
            <hr className="container mx-auto w-9/12 h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        </>
    )
}

export default ReasturantCard;