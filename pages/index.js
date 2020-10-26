import React from "react";
import axios from "axios";
import Link from "next/link";
import {Header, Title} from "../components";

const Home = ({programs, user}) => {
	return (
		<div>
			<Header user={user} />
			<Title text={"Home Page"} dataTestId={"home-title"} />
			<Link href="/contact" as="/contact">
				Back
			</Link>
			Shows:
			{programs && programs.map((program, index) => (
				<li key={`show_${index}`}>{program.show.name}</li>
			))}
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
