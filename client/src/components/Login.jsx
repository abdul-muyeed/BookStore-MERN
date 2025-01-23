import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";



const Login = () => {
  const [message, setMessage] = useState("");
  const {loginUser, signinWithGoogle} = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      await loginUser(data.email, data.password)
      alert("User Logged in Successfully")
      navigate("/")
    } catch (e) {

      setMessage(e.message)
    }
  }
  const handleGoogleLogin = async () => {
    console.log("Google Login")
    try {
      await signinWithGoogle()
    } catch (e) {
      setMessage(e.message)
      
    }
  }

  console.log(watch("example")) // watch input value by passing the name of it
  return (
    <>
      <div className="h-[calc(100vh-120px)] border">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20">
          <h2 className="text-xl font-semibold mb-4">Please Login</h2>
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded focus:outline-none">Login</button>
            </div>
          </form>
          <p className="align-baseline text-sm font-medium mt-4">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-800">
              Register
            </Link>
          </p>
          <div className="mt-5">
            <button onClick={handleGoogleLogin} className="w-full flex flex-wrap font-bold gap-1 items-center justify-center bg-secondary hover:bg-blue-500 text-white border border-gray-300 p-2 rounded-md mt-4">
              <FaGoogle className="text-xl  " />
              <span className="">Login with Google</span>
              
            </button>
            <p className="mt-5 text-sm text-gray-500 text-center">@2025 CopyRight</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
