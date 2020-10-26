import React from "react";
import {Title} from "../components";
import {Product} from "../components/Product";

const Contact = (props) => {
	console.log("load");
	return (
		<div>
			<Title text={"Contact Page"} dataTestId={"contact-title"} />
			<Product />
		</div>
	)
};

export default Contact;
