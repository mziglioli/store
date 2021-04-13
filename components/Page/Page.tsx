import React from "react";
import Styles from "./Page.style";
import { Header } from "../Header";

const Page = ({ meta, children, user, changeLanguage, selectedLanguage, translations }) => {
    return (
        <div className="page" data-testid="page">
            <Header
                meta={meta}
                changeLanguage={changeLanguage}
                selectedLanguage={selectedLanguage}
                user={user}
                translations={translations}
            />
            {children}
            <style jsx>{Styles}</style>
        </div>
    );
};
export default Page;