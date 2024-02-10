import React from "react";
import { RealmProvider } from "@realm/react";
import User from "./models/User";
import App from "../App";

const AppWrapper = () => {
    return(
        <RealmProvider schema={[User]}>
            <App />
        </RealmProvider>
    )
}

export default AppWrapper;