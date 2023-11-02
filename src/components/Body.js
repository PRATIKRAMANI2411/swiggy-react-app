import { useEffect, useState } from "react";
import ReasturantCard from "./RestaurantCard.js";
import useOnline from "../utils/useOnline.js";
import BannerSlider from "./BannerSlider.js";
import SecondBanner from "./SecondBanner.js";
import TopRestaurant from "./TopRestaurant.js";
import { Link } from "react-router-dom";
import BestPlaceCities from "./BestplaceCities.js";
import BestCuisines from "./BestCuisines.js";

const Body = () => {
    const [resatrolist, setResatrolist] = useState({});
    const [mainbanner, setMainbanner] = useState({});
    const [secondbanner, setSecondbanner] = useState({});
    const [toprestaurant, setToprestaurant] = useState({});
    const [bestplacecitise, setBestplacecitise] = useState({});
    const [bestcuisines, setBestcuisines] = useState({});
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

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.294404&lng=70.767583&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.21445607209604&lng=72.88447391241787&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            .then((res) => res.json())
            .then((data) => {
                setToprestaurant(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setMainbanner(data?.data?.cards[0]?.card?.card?.imageGridCards?.info)
                setSecondbanner(data?.data?.cards[1]?.card?.card?.imageGridCards?.info)
                setResatrolist(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                setBestplacecitise(data?.data?.cards[7]?.card?.card?.brands)
                setBestcuisines(data?.data?.cards[8]?.card?.card?.brands)
            })
            .catch((err) => { console.log(err); })
    }

    const offline = useOnline()
    if (!offline) {
        return <h1>You are a offline 🔴</h1>
    }
    console.log('resatrolist', resatrolist);

    return (
        <>
            <BannerSlider bannerdata={mainbanner} />
            <SecondBanner bannerdata={secondbanner} />
            <TopRestaurant toprestaurant={toprestaurant} />
            <ReasturantCard resatrolist={resatrolist} />
            <BestPlaceCities bestcitise={bestplacecitise}/>
            <BestCuisines cuisines={bestcuisines}/>
        </>
    )
}

export default Body;  