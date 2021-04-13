import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {LoginComponent} from "../components/LoginComponent";
import { authenticate } from "../components/utils/UserClient";
import {i18n, withTranslation} from "../i18n";
import Page from "../components/Page/Page";

const Login = ({ t, meta }) => {
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
	console.log("test", t("menu_home"), t("login_title"))
	return (
		<Page
			meta={meta}
			changeLanguage={(language) => {
				console.log("changeLanguage", i18n.language, language);
				i18n.changeLanguage(language);
			}}
			translations={
			{
				"home": t("menu_home"),
				"about": t("menu_about"),
				"contact": t("menu_contact"),
				"welcome": t("header_welcome"),
				"login": t("menu_login")
			}}
			selectedLanguage={i18n.language}
		>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<LoginComponent
				translations={{
					"title": t("login_title"),
					"email": t("login_email"),
					"email-error": t("login_email-error"),
					"password": t("login_password"),
					"password-error": t("login_password-error"),
					"user-not-found": t("login_user-not-found"),
					"sign-in": t("login_sign-in"),
					"sign-up": t("login_sign-up"),
					"forgot-password": t("login_forgot-password"),
				}}
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
Login.getInitialProps = async () => ({
	namespacesRequired: ["common"],
	meta: {
		page: "login"
	}
})
export default withTranslation(["common"])(Login);