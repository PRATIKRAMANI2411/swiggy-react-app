import { useEffect, useState } from "react";
import { restaurantList } from "../utils/contants.js";
import ReasturantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";

const Body = () => {
    const [resatrolist, setResatrolist] = useState({});
    // const sample = resatrolist?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;


    // console.log('sample',sample);
    // useEffect(()=>{
    //     fetchData()
    // },[])

    // const fetchData = async () =>{
    //     const data =  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

    //     const json = await data.json();
    //     console.log(json);

    // }
    // console.log(useOnline);
    const offline = useOnline()
    if(!offline){
        return <h1>you are offline 🔴</h1>
    }

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.294404&lng=70.767583&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            .then((res) => res.json())
            .then((data) => {
                setResatrolist(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                console.log('resatrolist123', data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            })
            .catch((err) => { console.log(err); })
    }


    return (
        <div className="restaurant-list">
            {
                resatrolist.length ? (
                    resatrolist.map((restaurant) => (
                        <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                            <ReasturantCard resData={restaurant?.info}></ReasturantCard>
                        </Link>
                    ))
                ) : (
                    <Shimmer />
                )

            }
        </div>
    )
}

export default Body; 