/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createUser, updateUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const notifyError = () => toast.error(`Try Again`);
  const notifySuccess = () => toast.success("Successfully Registered");
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])/;

  // Registration
  const onSubmit = (data) => {
    const { email, password, photoURL, fullName } = data;
    if (password.length < 6) {
      setError("Password must have at least 6 charecters");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase and lowercase letter"
      );
      return;
    }
    createUser(email, password)
      .then(() => {
        updateUser(fullName, photoURL).then(() => {
          navigate(location?.state || "/");
          notifySuccess();
        });
      })
      .catch((error) => {
        setError(error);
        notifyError();
      });
  };

  return (
    <div className="grid md:grid-cols-6 shadow-4xl min-h-[450px] my-10 rounded-3xl overflow-hidden w-[95%] lg:w-3/4 mx-auto">
      <Helmet>
        <title>Register | ArtFusion</title>
      </Helmet>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="bg-gradient-to-r from-[#A06AB4] to-[#E56997] capitalize md:col-span-3 rounded-r-[150px] text-white hidden md:flex flex-col justify-center items-center min-h-full"
      >
        <h3 className="text-4xl font-bold mb-3">Hello there!</h3>
        <p className="mb-2 text-sm w-3/4 text-center">
          Begin your journey by creating an account.
        </p>
        <p className="mb-4 text-sm w-3/4 text-center">
          If you Already have an account, please{" "}
          <span className="font-semibold">Login.</span>
        </p>
        <div>
          <Link to={"/login"}>
            <button className="btn bg-transparent border-white hover:bg-white hover:text-black text-white w-full uppercase duration-300 px-10">
              sign in
            </button>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="md:col-span-3 flex items-center justify-center w-full"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body p-5 md:p-8 w-full"
        >
          <div className="text-3xl font-bold text-center">
            <h3>Sign Up</h3>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-medium text-base">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              required
              {...register("fullName")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              required
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Your Photo URL"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              {...register("photoURL")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">Password</span>
            </label>
            <div className="relative flex w-full items-center">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Your Password"
                className="input focus:outline-none w-full focus:border bg-[#EEEDEE]"
                required
                {...register("password")}
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer absolute right-5"
              >
                {showPass ? (
                  <FaRegEyeSlash size={22} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </span>
            </div>
          </div>
          {error ? (
            <p className="text-xs text-red-600 font-medium">{error}</p>
          ) : (
            ""
          )}
          <div className="form-control mt-6">
            <button className="btn bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              sign up
            </button>
            <p className="text-sm mt-3 md:hidden">
              Already Have An Account?{" "}
              <span className="text-[#E56997] font-semibold">
                <Link to={"/login"}>Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
