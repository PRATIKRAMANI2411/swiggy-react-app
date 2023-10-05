const ReasturantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, locality } = resData
    return(
        <>
            <div className="w-52 p-2 m-2 shadow-lg">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}></img>
                <h4 className="font-bold text-xl">{name}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{locality}</p>
            </div>
        </>
    )
}

export default ReasturantCard;