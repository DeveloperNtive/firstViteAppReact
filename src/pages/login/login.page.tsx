import "./login.css";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);
  return (
    <div className="container">
      <form className="formSeccion" onSubmit={formik.handleSubmit}>
        <div id="email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="error">
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : ""}
          </span>
        </div>
        <div id="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="error">
            {formik.errors.password && formik.touched.password
              ? formik.errors.password
              : ""}
          </span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
