import React from "react";
import axios from "axios";
import { Title } from "../components/Title";

const Home = (props) => {
	return (
		<div>
			<Title text={"Home Page"} dataTestId={"home-title"} />
			Shows:
			{props.programs && props.programs.map((program, index) => (
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
