import React from "react";
import Styles from "./Page.style";
import {Header} from "../Header";

export const Page = ({ children, user }) => {
    return (
        <div className="page" data-testid="page">
            <Header user={user} />
            {children}
            <style jsx>{Styles}</style>
        </div>
    );
};
