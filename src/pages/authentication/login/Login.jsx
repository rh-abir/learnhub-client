import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [isHiden, setIshiden] = useState(true);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;

    console.log(email, pass);

    signIn(email, pass)
      .then((result) => {
        console.log(result.user);

        navigate("/");
        toast.success("LogIn successfully");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "Firebase: Error (auth/wrong-password).") {
          setError("Worng Password Tray Agen");
        } else {
          setError("Email Doesn't Match Tray Agen");
        }
      });
  };

  const hangleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUsaer = result.user;

        console.log(loggedUsaer);
        navigate("/");
        toast.success("LogIn successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // githubsingin

  const hangleGitHubSingIn = () => {
    gitHubSignIn()
      .then((result) => {
        const loggedUsaer = result.user;
        console.log(loggedUsaer);

        navigate("/");
        toast.success("LogIn successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // console.log(user);

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-6/12">
          <h1 className="text-5xl font-bold">Login to Your Account !</h1>
          <p className="-ms-4"></p>
        </div>
        <div className="card flex-shrink-0 lg:w-6/12 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={isHiden ? "password" : "text"}
                placeholder="password"
                {...register("password", { required: true })}
                className="input input-bordered"
              />

              <div
                onClick={() => setIshiden(!isHiden)}
                className="absolute cursor-pointer  right-4 mt-12 pt-1 text-[#555]"
              >
                {isHiden ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </div>
            </div>

            <p className="text-center text-orange-600 font-semibold">{error}</p>

            <div className="form-control mt-6">
              <button className="btn btn-outline hover:bg-[#362478]">
                Login
              </button>
            </div>
          </form>
          <div className="divider">OR</div>
          {/* sosical login */}
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={hangleGoogleSingIn}
              className="btn btn-circle hover:border-[#251A59] hover:bg-[#251A59] btn-outline text-[#251A59]"
            >
              <FaGoogle size="20"></FaGoogle>
            </button>
            {/* TODO */}
            <button className="btn btn-circle hover:border-[#251A59] hover:bg-[#251A59] btn-outline text-[#251A59]">
              <FaFacebookF size="20"></FaFacebookF>
            </button>

            <button
              onClick={hangleGitHubSingIn}
              className="btn btn-circle hover:border-[#251A59] hover:bg-[#251A59] btn-outline text-[#251A59]"
            >
              <FiGithub size="20"></FiGithub>
            </button>
          </div>
          <label className="label text-center">
            <p className="text-centers mx-auto ">
              New Here ?
              <Link
                className="label-text-alt link link-hover text-[#251A59] underline font-bold text-base"
                to="/signup"
              >
                Sign up
              </Link>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
