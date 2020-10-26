import React from "react";
import axios from "axios";
import Link from "next/link";
import {Title} from "../components";
import {Page} from "../components/Page";

const Home = ({programs, user}) => {
	return (
		<div>
			<Page  user={user}>
				<Title text={"Home Page"} dataTestId={"home-title"} />
				<Link href="/product" as="/product">
					Find out our products
				</Link>
				<p>Shows:</p>
				{programs && programs.map((program, index) => (
					<li key={`show_${index}`}>{program.show.name}</li>
				))}
			</Page>
		</div>
	)
};

Home.getInitialProps = async context => {
	const country = context.query.country || "us"
	const response = await axios.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);
	return {
		programs: response.data
	}
};

export default Home;
