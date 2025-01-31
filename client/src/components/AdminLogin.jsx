import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseURL } from "../store/constant";

const AdminLogin = () => {
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${baseURL}/auth/admin`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      if (response.data.token)
        localStorage.setItem("token", response.data.token);
      alert("User Logged in Successfully");
      navigate("/dashboard");
    } catch (e) {
      setMessage(e.message);
    }
  };

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
      <div className="h-screen flex justify-center items-center  border">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20">
          <h2 className="text-xl font-semibold mb-4">Please Login as Admin</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                {...register("username", { required: true })}
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="passowrd"
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
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold px-8 py-2 rounded focus:outline-none">
                Login
              </button>
            </div>
          </form>

          <div className="mt-5">
            <p className="mt-5 text-sm text-gray-500 text-center">
              @2025 CopyRight
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
