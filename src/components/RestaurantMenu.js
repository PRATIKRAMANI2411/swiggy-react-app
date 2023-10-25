import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCartitem from "./RestaurantCartitem";

const RestaurantMenu = () => {
    const { restId } = useParams();
    const restrauntInfo = useRestrauntMenu(restId);

    console.log('restrauntInfo',restrauntInfo);
    return (
        <>
            <div>
                {
                    restrauntInfo.length ? (
                        restrauntInfo.map((category) => (
                            <div className="container flex justify-center">
                                <RestaurantCartitem key={category.id} {...category?.card} />
                            </div>
                        ))
                    ) : (
                        <Shimmer />
                    )
                }
            </div>
        </>
    )
}

export default RestaurantMenu;