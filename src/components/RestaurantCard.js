const ReasturantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, locality } = resData
    return (
        <>
            {/* <div className="w-52 p-2 m-2 shadow-lg">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}></img>
                <h4 className="font-bold text-xl">{name}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{locality}</p>
            </div> */}



            <div class="w-52 p-2 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{cuisines.join(", ")}</p>
                    <p>{locality}</p>
                </div>
            </div>

        </>
    )
}

export default ReasturantCard;