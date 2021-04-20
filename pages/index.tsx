import React from "react";
import Link from "next/link";
import { Title, PageLayout } from "../components";
import { DefaultProps } from "../type";

/**
 * This function comment is parsed by doctrine
 * @route GET home
 * @group Content - home page
 * @type text/html
 * @returns {text/html} 200 - the home page
 */
const Home = ({ meta, user }: DefaultProps) => {
	meta.page = "home";
	return (
		<div>
			<PageLayout meta={meta} user={user}>
				<Title text={"Home Page"} dataTestId={"home-title"} />
				<Link href="/product" as="/product">
					Find out our products
				</Link>
				Page here todo
			</PageLayout>
		</div>
	)
};
Home.getInitialProps = async () => ({})

export default Home;

