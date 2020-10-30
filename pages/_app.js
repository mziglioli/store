import {check, HEADER_TOKEN_NAME} from "../service/UserService/UserService";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    console.log("MyApp.getInitialProps");

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    const { req } = ctx;
    const token = req?.headers[HEADER_TOKEN_NAME];
    let user;
    if (token) {
        user = await check(token);
    }
    return {
        pageProps: {
            ...pageProps,
            user
        },
    };
}

export default MyApp;