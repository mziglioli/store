import React from "react";
import { Title } from "../components";
import { Product as Products } from "../components/Product";
import Page from "../components/Page/Page";
import {i18n, withTranslation} from "../i18n";

const Product = ({ t, user, meta }) => {
	console.log("load");
	return (
		<div>
			<Page
				meta={meta}
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
	namespacesRequired: ["common"],
	meta: {
		page: "product"
	}
})
export default withTranslation("common")(Product);
