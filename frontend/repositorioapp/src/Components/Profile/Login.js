import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userLogin } from "./userSlice";

function Login() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post("/auth/login/", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        dispatch(userLogin(response.data)); // Updated line
        navigate("/profile"); // Navigates to the profile page if the login is successful
      } else {
        setMessage("Invalid credentials. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error logging in (inside handleLogin & response):", error);
      setMessage("An error occurred during login. Please try again later.");
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      handleLogin(values.email, values.password);
    },
    validationSchema: Yup.object({
      email: Yup.string().trim().required("The username is required"),
      password: Yup.string().trim().required("The password is required"),
    }),
  });

  return (
    <div className="h-100 d-flex bg-light">
      <div className="w-100 mx-auto bg-white rounded border border-primary shadow-lg py-5 px-4">
        <h1 className="h3 font-weight-medium text-primary text-center mb-4">
          Log in to your account 🔐
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control border-gray-300"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              className="form-control border-gray-300"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>
          <div className="text-danger text-center my-2">{message}</div>

          <div className="d-flex justify-content-center mt-3">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-50"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
