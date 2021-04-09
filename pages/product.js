import React from "react";
import { Title } from "../components";
import { Product as Products } from "../components/Product";
import Page from "../components/Page/Page";
import {i18n, withTranslation} from "../i18n";

const Product = ({ t, user }) => {
	console.log("load");
	return (
		<div>
			<Page
				changeLanguage={(language) => {
					console.log("changeLanguage", i18n.language, language);
					i18n.changeLanguage(language);
				}}
				selectedLanguage={i18n.language}
				translations={t}
				user={user}
			>
				<Title text={t("product_title")} dataTestId={"product-title"} />
				<Products />
			</Page>
		</div>
	)
};

Product.getInitialProps = async () => ({
	namespacesRequired: ["common", "header"]
})
export default withTranslation("common")(Product);
