import { createContext } from "react";


const userContext = createContext({
    name: "Dummy Name",
    email: "dummy@email.com"
})

export default userContext;