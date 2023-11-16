import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "../../../../provider/AuthProvider";
// import { saveUser } from "../../../api/auth";

const SignUp = () => {
  const { createUser, updateUSerProfile, googleSignIn, gitHubSignIn } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setError("");

    const email = data.email;
    const pass = data.password;
    const name = data.name;
    const confirmPass = data.ConfirmPassword;

    // const logUSer ={
    //   email,
    //   name
    // }

    if (pass !== confirmPass) {
      return setError("Dose not mathc password");
    }

    if (!/(?=.*?[A-Z])/.test(pass)) {
      return setError("Don't have a capital letter");
    }

    if (!/(?=.*?[#?!@$%^&*-])/.test(pass)) {
      return setError("Don't have a special character");
    }

    // uploade image
    const image = data.image[0];

    console.log(image);

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;

        createUser(email, pass)
          .then((result) => {
            console.log(result.user);

            updateUSerProfile(name, imageUrl)
              .then(() => {
                navigate("/");
                toast.success("Done !");
              })
              .catch((err) => {
                console.log(err.message);
              });
          })
          .catch((err) => {
            console.log(err.message);
          });
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

        toast.success("LogIn successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // console

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold">Create An Account!</h1>
          <p className="-ms-4"></p>
        </div>

        <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name *</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="type your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email *</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="type your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password *</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="type your Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password *</span>
              </label>
              <input
                type="password"
                {...register("ConfirmPassword", { required: true })}
                placeholder="type your Confirm Password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="file"
                accept="image/*"
                placeholder="image"
                {...register("image", { required: true })}
                className="input input-bordered"
              />
            </div>

            <p className="text-center text-orange-600 font-semibold">{error}</p>

            <div className="form-control mt-6">
              <input
                className="btn btn-outline hover:bg-[#362478]"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>

          <div className="divider">OR</div>
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
          <label className="label">
            <p className="text-centers mx-auto">
              Already a User ?
              <Link
                className="label-text-alt link link-hover  text-[#251A59] underline font-bold text-base"
                to="/login"
              >
                LOGIN
              </Link>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
