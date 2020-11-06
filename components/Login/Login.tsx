import React, { useEffect, useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {validateEmail, validatePassword} from "../utils/ValidatorUtils";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
interface LoginProps {
    onSubmitLogin: (email: string, password: string) => void;
    showError: boolean;
}

export const Login = ({ onSubmitLogin, showError }: LoginProps) => {
    const classes = useStyles();
    const emailErrorMessage = "Please enter a valid email";
    const passwordErrorMessage = "Please enter a valid password";
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
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={onSubmit} noValidate>
                    {showError && (
                        <Typography data-testid="login-error-text" component="h1" variant="h5" color="error">
                           user not found please try again
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
                        label="Email Address"
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
                        label="Password"
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
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password? todo
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"} todo
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}