import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Login as LoginComponent } from "../components/Login";
import { authenticate } from "../components/utils/UserClient";


const Login = () => {
	const [showError, setShowError] = useState(false);
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<LoginComponent onSubmitLogin={(email, password) => {
				console.log("login", email, password);
				setShowError(false);
				authenticate({email, password})
					.then(data => {
						console.log("logged in", data);
						// redirect
						window.location.assign("/");
					}).catch(e => {
						console.error("error", e);
						setShowError(true);
				})
			}} showError={showError} />

		</Container>
	)
};

export default Login;
