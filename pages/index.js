import React from "react";
import Link from "next/link";
import {Title} from "../components";
import {Page} from "../components/Page";

const Home = ({ user }) => {
	return (
		<div>
			<Page  user={user}>
				<Title text={"Home Page"} dataTestId={"home-title"} />
				<Link href="/product" as="/product">
					Find out our products
				</Link>
				Page here
			</Page>
		</div>
	)
};

export default Home;
