import "./Styles/AuthForm.css";

import {redirect, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";

import {Box, Button, Grid2, Snackbar, Stack, TextField, Typography} from "@mui/material";
import {useFormik} from "formik";

import * as Yup from "yup";


import {login, signUp} from "../../lib/authenticate.js"
import {useDispatch, useSelector} from "react-redux";


const validationSchemaRegister = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Password must have at least 8 symbols").required("Password is required"),
    passwordAgain: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Please confirm your password"),
})

const validationSchemaLogin = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Password must have at least 8 symbols").required("Password is required"),
})


function AuthForm() {
    let [snackbar, setSnackbar] = useState({open: false, message: ""});

    let navigate = useNavigate();
    let dispatch = useDispatch();
    let auth = useSelector(state => state.auth);

    let path = useLocation();
    let isLoginPage = useMemo(() => path.pathname === "/login", [path]);
    let formikParams = useMemo(() => ({
        initialValues: {
            username: '',
            email: '',
            password: '',
            passwordAgain: '',
        },
        validationSchema: isLoginPage ? validationSchemaLogin : validationSchemaRegister,
        onSubmit: (values) => {
            let authStatus;
            if (isLoginPage) {
                authStatus = login(values);
            } else {
                authStatus = signUp(values);
            }

            if (authStatus === true) {
                dispatch({
                    type: "auth/record",
                    payload: values,
                })
                dispatch({
                    type: "auth/login",
                })
                navigate("/");
            } else {
                setSnackbar({
                    isOpen: true,
                    message: authStatus
                })
            }
        },
    }), [isLoginPage]);

    const formik = useFormik(formikParams);

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate("/");
        }
    }, [auth.isAuthenticated])

    return (
        <Box component="section" className="Catalog" minHeight="100vh" padding={{
            xs: "100px 25px 25px 25px",
            md: "100px 150px 25px 150px"
        }} width="100%">
            <Snackbar
                open={snackbar.isOpen}
                autoHideDuration={5000}
                message={snackbar.message}
                onClose={() => setSnackbar({open: false, message: ""})}
            />
            <Box width="100%" backgroundColor="#ffffff" padding="25px" borderRadius="15px"
                 boxShadow="0 5px 10px #17171720"
                 display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" maxWidth="600px"
                 gap="25px">
                <Typography textTransform="uppercase" component="h3" variant="h3">
                    {isLoginPage ? "Submit the form to sign in" : "Register new account"}
                </Typography>
                <Box component="form" display="flex" flexDirection="column" alignItems="center"
                     justifyContent="flex-start"
                     gap="25px" onSubmit={formik.handleSubmit} width="100%">
                    <Grid2 width="100%" container spacing={2} columns={1}>
                        {
                            !isLoginPage && <Grid2 size={1}>
                                <TextField
                                    fullWidth
                                    id="username"
                                    name="username"
                                    label="Username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                />
                            </Grid2>
                        }
                        <Grid2 size={1}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid2>
                        <Grid2 size={1}>
                            <TextField
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Grid2>
                        {
                            !isLoginPage && <Grid2 size={1}>
                                <TextField
                                    fullWidth
                                    id="passwordAgain"
                                    name="passwordAgain"
                                    label="Retype password"
                                    value={formik.values.passwordAgain}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.passwordAgain && Boolean(formik.errors.passwordAgain)}
                                    helperText={formik.touched.passwordAgain && formik.errors.passwordAgain}
                                />
                            </Grid2>
                        }
                    </Grid2>
                    <Stack width="100%" direction={{xs: "column", md: "row"}} justifyContent="space-between"
                           spacing={3}>
                        <Button type="button" onClick={() => navigate(isLoginPage ? "/signup" : "/login")}
                                color="primary" variant="outlined" fullWidth>
                            Go to {isLoginPage ? "sign up" : "login"}
                        </Button>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}


export default AuthForm;
