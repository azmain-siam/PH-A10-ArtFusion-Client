/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import toast from "react-hot-toast";

import "aos/dist/aos.css";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signinUser, setLoading } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const notifyError = () => toast.error(`Please Check & Try Again`);
  const notifySuccess = () => toast.success("Successfully Logged In");
  const [showPass, setShowPass] = useState(false);

  // Providers
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signinUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(location?.state || "/");
          notifySuccess();
        }
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setError("Email and Password Does Not Match");
        }
        notifyError();
      });
  };

  const googleSignin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        if (result.user) {
          navigate(location?.state || "/");
          notifySuccess();
        }
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setError("Email and Password Does Not Match");
        }
        notifyError();
      });
  };

  const gitHubSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        if (result.user) {
          navigate(location?.state || "/");
          notifySuccess();
        }
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setError("Email and Password Does Not Match");
        }
        notifyError();
      });
  };

  return (
    <div className="grid md:grid-cols-6 shadow-4xl min-h-[450px] my-10 rounded-3xl justify-between overflow-hidden w-[95%] lg:w-3/4 mx-auto">
      <Helmet>
        <title>Login | ArtFusion</title>
      </Helmet>
      <div className="col-span-3">
        <div data-aos="fade-right" data-aos-duration="1000">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="text-3xl font-bold text-center">
              <h3>Sign In</h3>
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
                  Password
                </span>
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
              <p className="text-sm text-red-600 font-medium">{error}</p>
            ) : (
              ""
            )}
            <div className="form-control mt-6">
              <button className="btn bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                sign in
              </button>
              <p className="text-sm mt-3 md:hidden">
                Don't Have An Account?{" "}
                <span className="text-[#E56997] font-semibold">
                  <Link to={"/register"}>Register</Link>
                </span>
              </p>
            </div>
            <div className="divider font-medium text-sm">Or</div>
          </form>
          <div className="flex flex-col gap-5 px-8 pb-8">
            <button
              onClick={googleSignin}
              className="btn bg-white border-[#28282B] text-[#28282B] hover:border-[#E56997] hover:bg-[#E56997] hover:text-white capitalize duration-300"
            >
              <FaGoogle size={16} /> sign in with google
            </button>
            <button
              onClick={gitHubSignIn}
              className="btn bg-white border-[#28282B] text-[#28282B] hover:border-[#E56997] hover:bg-[#E56997] hover:text-white capitalize duration-300"
            >
              <FaGithub size={18} /> sign in with gitHub
            </button>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="bg-gradient-to-r from-[#E56997] to-[#A06AB4] capitalize col-span-3 rounded-l-[150px] text-white hidden md:flex flex-col justify-center items-center min-h-full"
      >
        <h3 className="text-4xl font-bold mb-3">Welcome Back!</h3>
        <p className="mb-2 text-sm w-3/4 text-center">
          Enter your credentials to access your account.
        </p>
        <p className="mb-4 text-sm w-3/4 text-center">
          If you don't have an account, please{" "}
          <span className="font-semibold">Register.</span>
        </p>
        <div>
          <Link to={"/register"}>
            <button className="btn bg-transparent border-white hover:bg-white hover:text-black text-white w-full uppercase duration-300 px-10">
              sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
