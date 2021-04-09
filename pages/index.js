import React from "react";
import Link from "next/link";
import {Title} from "../components";
import Page from "../components/Page/Page";
import {withTranslation} from "../i18n";

const Home = ({ t, user }) => {
	return (
		<div>
			<Page changeLanguage={() => {}} selectedLanguage={"en"} translations={t} user={user}>
				<Title text={"Home Page"} dataTestId={"home-title"} />
				<Link href="/product" as="/product">
					Find out our products
				</Link>
				Page here
			</Page>
		</div>
	)
};
Home.getInitialProps = async () => ({
	namespacesRequired: ["common", "header"]
})
export default withTranslation("common")(Home);

