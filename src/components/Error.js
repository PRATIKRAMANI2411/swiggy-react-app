import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <>
            <div className="error-404-url">
                <h1>{ err.status }</h1>

                <h3>Looks like the page you're looking for doesn't exist.</h3>

                <a href="#">Take me back home</a>
            </div>
        </>
    )
}

export default Error;