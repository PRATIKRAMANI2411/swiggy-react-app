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

            <div className="w-72 p-2 m-2 rounded-lg">
                <a href="#">
                    <img className="rounded-lg shadow" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
                </a>
                <div className="pt-1">
                    <a href="#">
                        <h5 className=" text-xl font-bold tracking-tight text-gray-700 ">{name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cuisines.join(", ")}</p>
                </div>
            </div>

        </>
    )
}

export default ReasturantCard;