import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.status === 200) {
        Cookies.set("token", data.token);
        Cookies.set("role", data.data.role_id);
        window.location.href = "/";
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Something has wrong, please try again later");
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email().required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <p className="text-center font-proximanova text-blue-grey">
            Silahkan login untuk melanjutkan
          </p>
          <div className="mt-4">
            <div className="mb-4">
              <Field
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" />
            </div>
            <div className="mb-4">
              <Field
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" />
            </div>
            <div className="text-center text-white pt-1 mb-4 pb-1">
              <button
                className="bg-dark-blue rounded-md px-4 py-2 hover:opacity-80 w-full"
                type="submit"
                disabled={isSubmitting}
              >
                Log in
              </button>
            </div>
          </div>
          <p className="flex flex-row">
            Belum punya akun ?{" "}
            <a className="ml-2 font-proximanova font-semibold" href="/signup">
              Daftar Sekarang
            </a>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
