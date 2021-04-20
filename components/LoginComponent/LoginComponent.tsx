import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Avatar, Button, TextField, Link, Grid, Typography } from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import appStyles from "../Styles";
import { validateEmail, validatePassword } from "../../utils";

import { LoginProps } from "../../type";

export const LoginComponent = ({ onSubmitLogin, showError }: LoginProps) => {
    const classes = appStyles();
    const { formatMessage } = useIntl();

    const emailErrorMessage = formatMessage({id: "login_email-error"});
    const passwordErrorMessage = formatMessage({id:"login_password-error"});
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(()=> {
        console.log("useeffect");
        setEmailError(showError ? emailErrorMessage : "");
        setPasswordError(showError ? passwordErrorMessage : "");
    }, [showError]);

    const checkEmail = () => {
        if(!validateEmail(email)) {
            setEmailError(emailErrorMessage);
            return false;
        } else {
            setEmailError("");
            return true;
        }
    };
    const checkPassword = () => {
        if(!validatePassword(password)) {
            setPasswordError(passwordErrorMessage);
            return false;
        } else {
            setPasswordError("");
            return true;
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        let isValid = false;
        if (checkEmail() && checkPassword()) {
            // submit
            onSubmitLogin(email, password);
            isValid = true;
        }
        return isValid;
    };

    return (
        <div>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5"  >
                    <FormattedMessage id={"title"}/>
                </Typography>
                <form className={classes.form} onSubmit={onSubmit} noValidate>
                    {showError && (
                        <Typography data-testid="login-error-text" component="h1" variant="h5" color="error">
                            <FormattedMessage id="login_user-not-found" />
                        </Typography>
                    )}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="login-email"
                        data-testid="login-email__div"
                        inputProps={{"data-testid": "login-email"}}
                        label={formatMessage({id:"login_email"})}
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        onBlur={() => {
                            checkEmail();
                        }}
                        helperText={emailError}
                        error={!!emailError}

                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={formatMessage({id:"login_password"})}
                        type="password"
                        id="login-password"
                        data-testid="login-password__div"
                        inputProps={{"data-testid": "login-password"}}
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        onBlur={() => {
                            checkPassword();
                        }}
                        helperText={passwordError}
                        error={!!passwordError}
                    />
                    <Button
                        data-testid="login-submit"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        <FormattedMessage id="login_sign-in" />
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                <FormattedMessage id="login_sign-up" />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                <FormattedMessage id="login_forgot-password" />
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}