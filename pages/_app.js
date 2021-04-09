import {check, HEADER_TOKEN_NAME} from "../service/UserService";
import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../style/theme';
import Cookies from 'cookies';
import {appWithTranslation} from "../i18n";

const MyApp = ({ Component, pageProps }) => {

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
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    console.log("MyApp.getInitialProps");

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    const { req, res } = ctx;
    let user;
    if (req && res) {
        const cookies = new Cookies(req, res);
        const token = cookies.get(HEADER_TOKEN_NAME);
        if (token) {
            user = await check(token);
        }
    }
    return {
        pageProps: {
            ...pageProps,
            user,
        },
    };
}

export default appWithTranslation(MyApp);