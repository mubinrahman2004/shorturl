import React from "react";
import { Link, useNavigate } from "react-router";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { useForm } from "react-hook-form";
import { authServises } from "../api";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const handelLogin = async (data) => {
    try {
      console.log(data);
      const res = await authServises.login(data);

      toast.success("login successfull")
       setTimeout(() => {
        navigate("/");
      }, 1500);
      console.log(res);
    } catch (error) {
      console.log(error.response.data.message);
      setError("apiError", {
        message: error.response.data.message,
      });
    }
  };

  return (
<>
      <ToastContainer position="top-right" autoClose={3000} />
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Sign 
        </h2>

        <form onSubmit={handleSubmit(handelLogin)} className="space-y-6">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "email is required",
            })}
            error={errors?.email?.message}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "password is required",
            })}
            error={errors?.password?.message}
          />
          {errors?.apiError?.message && (
            <p className="text-sm text-red-400">{errors.apiError.message}</p>
          )}
          <Button type="submit" className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-[1.02] transition-transform">
            Login
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
    </>
  );
};

export default Login;
