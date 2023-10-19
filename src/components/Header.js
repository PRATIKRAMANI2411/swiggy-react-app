import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Title = () => {
    return (
        <h1 className="py-10" key="h2-test">
            Food villa
        </h1>
    )
}

const ThemeContext = createContext(null)

const Header = () => {
    const user = useContext(userContext);
    const [theme, setTheme] = useState("bg-zinc-50")

    const cartItem = useSelector(store => store.cart.items);

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`flex justify-between rounded-lg shadow m-4 px-2 ${theme}`}>
                <Title />
                <div className="nav-items">
                    <ul className="flex py-10">
                        <li className="px-2"><Link to="/">Home</Link></li>
                        <li className="px-2"><Link to="/about">About</Link></li>
                        <li className="px-2">Contact</li>
                        <li className="font-sans block lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                            <Link to="/cart" role="button" className="relative flex">
                                Cart<svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24" >
                                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                </svg>
                                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartItem.length}
                                </span>
                            </Link>
                        </li>
                        {/* <li className="px-2 text-sky-400">
                        <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setTheme(e.target.checked ? "bg-gray-800" : "bg-zinc-50")} checked={theme === "bg-gray-800"} />
                        <label htmlFor="inline-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Use dark mode</label>
                    </li> */}
                    </ul>
                </div>
            </div>
        </ThemeContext.Provider >
    )
}

export default Header;