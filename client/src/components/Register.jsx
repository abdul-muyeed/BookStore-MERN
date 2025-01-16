import  { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [message, setMessage] = useState("");
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data)
    const handleGoogleLogin = () => {
      console.log("Google Login")
    }
  
    console.log(watch("example")) // watch input value by passing the name of it
  return (
    <>
      <div className="h-[calc(100vh-120px)] border">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20">
          <h2 className="text-xl font-semibold mb-4">Please Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Passowrd
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>
            {message && <p>{message}</p>}
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded focus:outline-none">
                Register
              </button>
            </div>
          </form>
          <p className="align-baseline text-sm font-medium mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-800">
              Login
            </Link>
          </p>
          <div className="mt-5">
            <button
              onClick={() => handleGoogleLogin}
              className="w-full flex flex-wrap font-bold gap-1 items-center justify-center bg-secondary hover:bg-blue-500 text-white border border-gray-300 p-2 rounded-md mt-4"
            >
              <FaGoogle className="text-xl  " />
              <span className="">Sign in with Google</span>
            </button>
            <p className="mt-5 text-sm text-gray-500 text-center">
              @2025 CopyRight
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
