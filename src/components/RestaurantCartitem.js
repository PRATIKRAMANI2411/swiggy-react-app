import React from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';
const RestaurantCartitem = (info) => {
    const { name, price, defaultPrice, imageId, description } = info.info;

    const dispatch = useDispatch()

    const hendleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <>
            <div className="w-6/12  flex justify-between m-5">
                <div className="w-9/12">
                    <h3 className="text-gray-900 text-1xl font-medium">{name}</h3>
                    <p>{description}</p>
                </div>
                <div className="">
                    <img className="w-full rounded-lg sm:w-40" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="Neil image" />
                </div>
                <div className="">
                    <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800" onClick={() => hendleAddItem(info.info)}>Add +</button>
                </div>
            </div>

        </>
    )
}

export default RestaurantCartitem;