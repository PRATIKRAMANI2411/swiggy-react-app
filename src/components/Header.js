import { Link } from "react-router-dom";

export const Title = () => {
    return (
        <h1 id="title" key="h2-test">
            Food villa
        </h1>
    )
}

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;