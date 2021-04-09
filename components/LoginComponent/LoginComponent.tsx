import React, { useEffect, useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import appStyles from "../Styles";
import {validateEmail, validatePassword} from "../utils/ValidatorUtils";

interface LoginProps {
    translations: { [key: string]: string };
    onSubmitLogin: (email: string, password: string) => void;
    showError: boolean;
}

export const LoginComponent = ({ translations, onSubmitLogin, showError }: LoginProps) => {
    const classes = appStyles();
    const emailErrorMessage = translations["email-error"];
    const passwordErrorMessage = translations["password-error"];
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    };

    return (
        <div>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5"  >
                    {translations["title"]}
                </Typography>
                <form className={classes.form} onSubmit={onSubmit} noValidate>
                    {showError && (
                        <Typography data-testid="login-error-text" component="h1" variant="h5" color="error">
                            {translations["user-not-found"]}
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
                        label={translations["email"]}
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
                        label={translations["password"]}
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
                        {translations["sign-in"]}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {translations["sign-up"]} todo
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {translations["forgot-password"]} todo
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}