import { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const BestPlaceCities = (props) => {
    const { bestcitise } = props;
    const [itemsToShow, setItemsToShow] = useState(11);

    const showmore = () => {
        setItemsToShow(bestcitise.length)
    }

    const showless = () => {
        setItemsToShow(11)
    }
    return (
        <>
            <div className="container w-10/12 mx-auto">
                <h1 className="text-2xl font-bold mb-4 pl-6 ">Best Places to Eat Across Cities</h1>
                {
                    bestcitise.length ? (
                        <div className=" flex flex-wrap">
                            {
                                bestcitise.slice(0, itemsToShow).map((citise, index) => (
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
        </>
    )
}

export default BestPlaceCities