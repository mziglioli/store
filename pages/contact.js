import React from "react";
import {Title} from "../components";

const Contact = (props) => {
	return (
		<div>
			<Title text={"Contact Page"} dataTestId={"contact-title"} />
		</div>
	)
};

Contact.getInitialProps = () => {
	return {

	}
};

export default Contact;
