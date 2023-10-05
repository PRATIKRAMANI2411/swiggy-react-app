import { Link } from "react-router-dom";

export const Title = () => {
    return (
        <h1 className="py-10" key="h2-test">
            Food villa
        </h1>
    )
}

const Header = () => {
    return (
        <div className="flex justify-between rounded-lg shadow m-4 px-2">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2">Contact</li>
                    <li className="px-2">Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;