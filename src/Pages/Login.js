import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userSlice from "../Store/userSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from 'react-google-login';

const Login = () => {
    const { register, handleSubmit, formState } = useForm();

    const [loginStatus, setloginStatus] = useState({
        succes: false,
        message: " ",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formSubmithandler = (data) => {
        const postData = {
            email: data.user_email,
            password: data.user_password,
        };

        axios
            .post("http://localhost:4000/login", postData)
            .then((res) => {
                if (typeof res.data.accessToken !== "undefined") {
                    localStorage.setItem("carShopAccessToken", res.data.accessToken);

                    const user = jwtDecode(res.data.accessToken);
                    axios.get(`http://localhost:4000/users/${user.sub}`)
                        .then((res) => {
                            dispatch(
                                userSlice.actions.addUser({
                                    userData: res.data,
                                })
                            );
                            if (res.data.isAdmin) {
                                navigate("/admin");
                            } else {
                                navigate("/");
                            }
                        });
                }
            })
            .catch((err) => {
                setloginStatus({
                    success: false,
                    message: "Sorry incorrect Password,or maybe your account is not register yet.",
                });
            });
    };

    const googleSuccessLogin = (res) => {
        console.log(res);
    }
    const googleFailedLogin = (res) => {
        console.log(res);
    }
    return (
        <section class="form h-100">
            <div class="container-fluid h-100">
                <div class="row h-100">
                    <div class="img-left col-lg-8"></div>
                    <div class="align-self-center col-lg-4">
                        <form onSubmit={handleSubmit(formSubmithandler)} method="post" class="col-lg-11">
                            <h3 class="mb-5">Welcome, Admin BCR</h3>
                            <div class="form-row my-2">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" name="email" id="email"
                                    placeholder="Contoh: johndee@gmail.com" {...register("user_email")} />
                            </div>
                            <div class="form-row my-2">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" name="password" id="password"
                                    placeholder="6+ karakter" {...register("user_password")} />
                            </div>
                            <div class="form-row my-3">
                                <button type="submit" class="login-btn">Sign in</button>
                            </div>
                            <p>Belum punya akun? <Link to="/register">Daftar</Link></p>
                        </form>
                        <GoogleLogin
                            clientId="276669037975-an8fb7jijiu777puspanescdp08donna.apps.googleusercontent.com"
                            render = {(renderProps) => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    Login with Google
                                </button>
                            )}
                            onSuccess={googleSuccessLogin}
                            onFailure={googleFailedLogin}
                            cookiePolicy={'single_host_origin'}
                        />,
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login