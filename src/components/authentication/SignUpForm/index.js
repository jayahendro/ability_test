import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupForm = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [idCard, setidCard] = useState(null);
  const [email, setemail] = useState(null);
  const [phone, setphone] = useState(null);
  const [password, setpassword] = useState(null);
  const [cpassword, setcpassword] = useState(null);
  const [photo, setphoto] = useState(null);
  const [error, setError] = useState(mull);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", f);
  };

  // const handleSubmit = async (values, { setSubmitting }) => {
  //   setSubmitting(true);
  //   setError("");

  //   try {
  //     const formData = new FormData();
  //     console.log(`values: ${JSON.stringify(values)}`);
  //     formData.append("firstName", values.firstName);
  //     formData.append("lastName", values.lastName);
  //     formData.append("idCard", values.idCard);
  //     formData.append("email", values.email);
  //     formData.append("phone", values.phone);
  //     formData.append("password", values.password);
  //     formData.append("photo", photo);

  //     const response = await fetch("/api/register", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     //   const data = await response.json();
  //     //   if (response.status === 200) {
  //     //     Cookies.set("token", data.token);
  //     //     Cookies.set("role", data.data.role_id);
  //     //     window.location.href = "/";
  //     //   } else {
  //     //     setError(data.message);
  //     //   }
  //   } catch (error) {
  //     console.error(error);
  //     setError("Something has wrong, please try again later");
  //   }
  //   // setSubmitting(false);
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     idCard: "",
  //     email: "",
  //     phone: "",
  //     password: "",
  //     cpassword: "",
  //   },
  //   onSubmit: async (values) => {
  //     const formData = new FormData();
  //     formData.append("photo", photo);
  //     formData.append("firstName", values.firstName);
  //     formData.append("lastName", values.lastName);
  //     formData.append("idCard", values.idCard);
  //     formData.append("email", values.email);
  //     formData.append("phone", values.phone);
  //     formData.append("password", values.password);
  //     const response = await axios.post("/api/register", formData);
  //     console.log(response.data);
  //   },
  // });

  // const handlePhotoChange = (e) => {
  //   setPhoto(e.target.files[0]);
  // };

  // const schema = Yup.object({
  //   firstName: Yup.string().required("Required"),
  //   lastName: Yup.string().required("Required"),
  //   idCard: Yup.string().required("Required"),
  //   email: Yup.string().required("Required"),
  //   phone: Yup.string().required("Required"),
  //   password: Yup.string().required("Required"),
  //   cpassword: Yup.string()
  //     .oneOf([Yup.ref("password"), null], "Password must match")
  //     .required("Required"),
  // });

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
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
              <input
                type="text"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Jhon"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </label>
          </div>
          <div className="w-5/12">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
                Nama Belakang
              </span>
              <input
                type="text"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Doe"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
              No. KTP
            </span>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Masukkan No. KTP Anda"
              name="idCard"
              onChange={formik.handleChange}
              value={formik.values.idCard}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
              Email
            </span>
            <input
              type="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Masukkan Email Anda"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
              No. Telepon
            </span>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Masukkan No. Telp Anda"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
              Password
            </span>
            <input
              type="password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Masukkan Password Anda"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">
              Konfirmasi Password
            </span>
            <input
              type="password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Konfirmasi Password Anda"
              name="cpassword"
              onChange={formik.handleChange}
              value={formik.values.cpassword}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-grey
                  hover:file:bg-violet-100"
              name="photo"
              onChange={handlePhotoChange}
              value={formik.values.photo}
            />
          </label>
        </div>
      </div>
      <div className="text-center text-white pt-1 mb-4 pb-1">
        <button
          className="bg-dark-blue rounded-md px-4 py-2 hover:opacity-80 w-full"
          type="submit"
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
    </form>
  );
};

export default SignupForm;
