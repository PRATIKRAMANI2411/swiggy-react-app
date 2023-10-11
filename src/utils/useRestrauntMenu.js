import { useEffect, useState } from "react";

const useRestrauntMenu = (resId) => {
    const [restaurantmenu, setRestaurantmenu] = useState({});
    const fatchrestauMenu = () => {
        
        fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.294404&lng=70.767583&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
            .then((res) => res.json())
            .then((data) => setRestaurantmenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards))
    }

    useEffect(() => {
        fatchrestauMenu();
    }, [])
    // console.log('userestaurantmenu',restaurantmenu);
    return restaurantmenu;
}

export default useRestrauntMenu;