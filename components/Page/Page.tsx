import React from "react";
import Styles from "./Page.style";
import { Header } from "../Header";

const Page = ({ meta, children, user }) => {
    return (
        <div className="page" data-testid="page">
            <Header
                meta={meta}
                user={user}
            />
            {children}
            <style jsx>{Styles}</style>
        </div>
    );
};
export default Page;