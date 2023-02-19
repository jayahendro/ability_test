import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      console.log(`values: ${JSON.stringify(values)}`);
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("idCard", values.idCard);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("password", values.password);
      formData.append("photo", photo);

      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      //   const data = await response.json();
      //   if (response.status === 200) {
      //     Cookies.set("token", data.token);
      //     Cookies.set("role", data.data.role_id);
      //     window.location.href = "/";
      //   } else {
      //     setError(data.message);
      //   }
    } catch (error) {
      console.error(error);
      setError("Something has wrong, please try again later");
    }
    // setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        idCard: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        phone: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
        cpassword: Yup.string()
          .required("Required")
          .oneOf([Yup.ref("password")], "Passwords not matched"),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <p className="text-center font-proximanova text-blue-grey">
            Silahkan daftar untuk melanjutkan
          </p>
          <div className="mt-4 font-bold text-dark-blue">
            <div className="mb-4 flex flex-row justify-between">
              <div className="w-5/12">
                <label htmlFor="firstName" className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
                    Nama Depan
                  </span>
                  <Field
                    type="text"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Jhon"
                    name="firstName"
                  />
                  <ErrorMessage name="firstName" />
                </label>
              </div>
              <div className="w-5/12">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
                    Nama Belakang
                  </span>
                  <Field
                    type="text"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Doe"
                    name="lastName"
                  />
                  <ErrorMessage name="lastName" />
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
                  No. KTP
                </span>
                <Field
                  type="text"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Masukkan No. KTP Anda"
                  name="idCard"
                />
                <ErrorMessage name="idCard" />
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
                  Email
                </span>
                <Field
                  type="email"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Masukkan Email Anda"
                  name="email"
                />
                <ErrorMessage name="email" />
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
                  No. Telepon
                </span>
                <Field
                  type="text"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Masukkan No. Telp Anda"
                  name="phone"
                />
                <ErrorMessage name="email" />
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
                  Password
                </span>
                <Field
                  type="password"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Masukkan Password Anda"
                  name="password"
                />
                <ErrorMessage name="password" />
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
                  Konfirmasi Password
                </span>
                <Field
                  type="password"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Konfirmasi Password Anda"
                  name="cpassword"
                />
                <ErrorMessage name="cpassword" />
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <Field
                  type="file"
                  className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-grey
                  hover:file:bg-violet-100"
                  name="photo"
                />
                <ErrorMessage name="photo" />
              </label>
            </div>
          </div>
          <div className="text-center text-white pt-1 mb-4 pb-1">
            <button
              className="bg-dark-blue rounded-md px-4 py-2 hover:opacity-80 w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </button>
          </div>
          <p className="flex flex-row">
            Sudah punya akun ?
            <a className="ml-2 font-proximanova font-semibold" href="/login">
              Login Sekarang
            </a>{" "}
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
