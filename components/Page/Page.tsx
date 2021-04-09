import React from "react";
import Styles from "./Page.style";
import { Header } from "../Header";
import { withTranslation } from "../../i18n";

const Page = ({ meta, children, user, changeLanguage, selectedLanguage, t }) => {
    return (
        <div className="page" data-testid="page">
            <Header
                meta={meta}
                changeLanguage={changeLanguage}
                selectedLanguage={selectedLanguage}
                user={user}
                translations={{
                    "home": t("menu_home"),
                    "about": t("menu_about"),
                    "contact": t("menu_contact"),
                    "welcome": t("header_welcome"),
                    "login": t("menu_login")
                }}
            />
            {children}
            <style jsx>{Styles}</style>
        </div>
    );
};
export default withTranslation("header")(Page);