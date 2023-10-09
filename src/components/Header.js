import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

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

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`flex justify-between rounded-lg shadow m-4 px-2 ${theme}`}>
                <Title />
                <div className="nav-items">
                    <ul className="flex py-10">
                        <li className="px-2"><Link to="/">Home</Link></li>
                        <li className="px-2"><Link to="/about">About</Link></li>
                        <li className="px-2">Contact</li>
                        <li className="px-2">Cart</li>
                        <li className="px-2">Cart</li>
                        <li className="px-2 text-sky-400">{user.name}</li>
                        <li className="px-2 text-sky-400">
                            <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setTheme(e.target.checked ? "bg-gray-800" : "bg-zinc-50")} checked={theme === "bg-gray-800"} />
                            <label htmlFor="inline-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Use dark mode</label>
                        </li>
                    </ul>
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default Header;