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
            <div className="w-6/12  flex justify-between relative m-5">
                <div className="w-9/12">
                    <h3 className="text-gray-900 text-1xl font-medium">{name}</h3>
                    <p className='text-gray-400'>{description}</p>
                </div>
                <div className="">
                    <img className="w-full rounded-lg sm:w-40" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="Neil image" />
                </div>
                <div className="absolute bottom-0 right-8 top-20">
                    <button class="bg-white hover:bg-white-700 text-green-700 font-bold py-2 px-4 border border-white-700 rounded" onClick={() => hendleAddItem(info.info)}>ADD +</button>
                </div>
            </div>

        </>
    )
}

export default RestaurantCartitem;