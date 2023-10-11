const RestaurantCartitem = ( { name , price, defaultPrice, imageId, description} ) => {
    return (
        <>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="justify-between mb-2 rounded-lg bg-white p-2 shadow-md sm:flex sm:justify-start">
                                    <img className="w-full rounded-lg sm:w-40" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {/* {description} */}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    Rs.{price ? (price/100) : (defaultPrice/100)}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default RestaurantCartitem;