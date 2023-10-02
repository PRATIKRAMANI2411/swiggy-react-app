import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handelonline = () => {
            setIsOnline(true)
        }
        const handleoffline = () => {
            setIsOnline(false)
        }

        window.addEventListener("online", handelonline)
        window.addEventListener("offline", handleoffline)

        return () => {
            window.addEventListener("online", handelonline)
            window.addEventListener("offline", handleoffline)
        }
    }, [])

    return isOnline;
}

export default useOnline;