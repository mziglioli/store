import {check, HEADER_TOKEN_NAME} from "../service/UserService";
import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../style/theme';
import Cookies from 'cookies';
import { IntlProvider } from "react-intl";
import * as locales from "../content/locale";

const MyApp = ({ Component, pageProps }) => {
    console.log("getInitialProps", "MyApp");

    const localeCopy = locales[pageProps.meta.language];
    console.log("localeCopy", pageProps.meta.language);
    const messages = localeCopy;

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <IntlProvider
                    locale={pageProps.meta.language}
                    messages={messages}
                >
                    <Component {...pageProps} />
                </IntlProvider>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    console.log("MyApp.getInitialProps");

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    const { req, res } = ctx;
    let user;
    let language = "en";
    if (req && res) {
        const cookies = new Cookies(req, res);
        const cookieToken = cookies.get(HEADER_TOKEN_NAME);
        if (cookieToken) {
            user = await check(cookieToken);
        }
        const cookieLanguage = cookies.get("x-store-language");
        if (cookieLanguage) {
            console.log("setting language", cookieLanguage);
            language = cookieLanguage;
        }
    }
    return {
        pageProps: {
            ...pageProps,
            user,
            meta: {
                language
            },
        },
    };
}

export default MyApp;
