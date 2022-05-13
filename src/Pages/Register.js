import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import userSlice from "../Store/userSlice";

const Register = () => {
	const { register, handleSubmit, formState } = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [regStatus, setRegStatus] = useState({
		success: false,
		message: " ",
	});

  const formSubmithandler = (data) => {
    console.log(data);

    const postData = {
      email: data.user_email,
      password: data.user_password,
      isAdmin: false,
    };

    axios
      .post("http://localhost:4000/register", postData)
      .then((res) => {
        if (typeof res.data.accessToken !== "undefined") {
          localStorage.setItem("carShopAccessToken", res.data.accessToken);

          const user = jwtDecode(res.data.accessToken);
          axios.get(`http://localhost:4000/users/${user.sub}`).then((res) => {
            dispatch(
              userSlice.actions.addUser({
                userData: res.data,
              })
            );
            navigate("/");
          });
        }
      })

      .catch((err) => {
        setRegStatus({
          success: false,
          message: "Oops, your account has been register",
        });
      });
  };



  return (
    <section className="form h-100">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="img-left col-lg-8"></div>
          <div className="align-self-center col-lg-4">
            <form onSubmit={handleSubmit(formSubmithandler)} className="col-lg-11">
              <h3 className="mb-5">Welcome, Admin BCR</h3>
              <div className="form-row my-2">
                <label for="email">Email</label>
                <input type="email" className="form-control" name="email" id="email"
                  placeholder="Contoh: johndee@gmail.com" {...register("user_email")}/>
              </div>
              <div className="form-row my-2">
                <label for="password">Password</label>
                <input type="password" className="form-control" name="password" id="password"
                  placeholder="6+ karakter" {...register("user_password")}/>
              </div>
						{!regStatus.success && regStatus.message && <p className="text-danger  m-0 " data-testId="errElement">{regStatus.message}</p>}
              <div className="form-row my-3">
                <button type="submit" className="login-btn" data-testId="element">Register</button>
              </div>
              <p>Sudah punya akun? <Link to="/login">Log in</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register