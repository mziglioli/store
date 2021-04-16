import React from "react";
import Link from "next/link";
import {Title} from "../components";
import Page from "../components/Page/Page";

/**
 * This function comment is parsed by doctrine
 * @route GET home
 * @group Content - home page
 * @type text/html
 * @returns {text/html} 200 - the home page
 */
const Home = ({ meta, user }) => {
	meta.page = "home";
	return (
		<div>
			<Page meta={meta} user={user}>
				<Title text={"Home Page"} dataTestId={"home-title"} />
				<Link href="/product" as="/product">
					Find out our products
				</Link>
				Page here
			</Page>
		</div>
	)
};
Home.getInitialProps = async () => ({})

export default Home;

