import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { LoginComponent, PageLayout } from "../components";
import { authenticate } from "../components/utils/UserClient";
import { DefaultProps } from "../type";

/**
 * This function comment is parsed by doctrine
 * @route GET login
 * @group Content - login page
 * @type text/html
 * @returns {text/html} 200 - the login page
 */
const Login = ({ meta, user }: DefaultProps) => {
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
		<PageLayout meta={meta} user={user}>
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
		</PageLayout>
	)
};
Login.getInitialProps = async () => ({})
export default Login;