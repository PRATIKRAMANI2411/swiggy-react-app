import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
    const { restId } = useParams();
    const restrauntInfo = useRestrauntMenu(restId);

    console.log('check');

    return (
        <>
            <div>
                <h2>{restId} </h2>
                {
                    restrauntInfo.length ? (
                        restrauntInfo.map((category) => (
                            <p key={category.id} >{category?.card?.info?.name}</p>
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