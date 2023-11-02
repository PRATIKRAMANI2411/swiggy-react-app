import { useState } from "react";

const BestCuisines = (props) => {
    const { cuisines } = props;
    const [itemsToShow, setItemsToShow] = useState(11);

    const showmore = () => {
        setItemsToShow(cuisines.length)
    }

    const showless = () => {
        setItemsToShow(11)
    }
    return (
        <div className="container w-10/12 mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4 pl-6 ">Best Cuisines Near Me</h1>
            {
                cuisines.length ? (
                    <div className=" flex flex-wrap">
                        {
                            cuisines.slice(0, itemsToShow).map((citise, index) => (
                                <div className="border border-gray-300 rounded-xl p-3 mb-5 max-w-sm w-72 mx-auto" key={index}>
                                    <p className="truncate text-center">{citise.text}</p>
                                </div>
                            ))
                        }
                        <div className="border border-gray-300 rounded-xl p-3 mb-5 max-w-sm w-72 mx-auto text-center font-bold">
                            {(itemsToShow === 11) ? <button className="text-center" onClick={showmore}>Show More...</button> : <button className="texttext-center-center" onClick={showless}>Show Less</button>}
                        </div>
                    </div>
                ) : (
                    <h1>Lodding</h1>
                )
            }
        </div>
    )
}
export default BestCuisines;