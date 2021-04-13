import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {LoginComponent} from "../components/LoginComponent";
import { authenticate } from "../components/utils/UserClient";
import Page from "../components/Page/Page";

const Login = ({ meta }) => {
	meta.page = "login";
	const [showError, setShowError] = useState(false);
	const verifyAuthentication = (email, password) => {
		authenticate({email, password})
			.then(data => {
				console.log("logged in", data);
				// redirect
				window.location.assign("/");
			}).catch(e => {
			console.error("error", e);
			setShowError(true);
		})
	}
	return (
		<Page meta={meta}>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<LoginComponent
				onSubmitLogin={(email, password) => {
					console.log("login", email, password);
					setShowError(false);
					verifyAuthentication(email, password);
				}}
				showError={showError} />
		</Container>
		</Page>
	)
};
Login.getInitialProps = async () => ({})
export default Login;