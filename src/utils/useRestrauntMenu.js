import { useEffect, useState } from "react";

const useRestrauntMenu = () => {
    const [restaurantmenu, setRestaurantmenu] = useState({});
    const fatchrestauMenu = (resId) => {
        fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.294404&lng=70.767583&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
            .then((res) => res.json())
            .then((data) => setRestaurantmenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards))
    }

    useEffect(() => {
        fatchrestauMenu();
    }, [])

    return restaurantmenu;
}

export default useRestrauntMenu;