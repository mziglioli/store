import React from "react";
import Link from "next/link";
import {Title} from "../components";
import {Page} from "../components/Page";
import {check, HEADER_TOKEN_NAME} from "../service/UserService/UserService";

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

Home.getInitialProps = async ({ req }) => {
	const token = req?.headers[HEADER_TOKEN_NAME];
	let user;
	if (token) {
		user = await check(token);
	}
	return {
		user: user
	}
};

export default Home;
