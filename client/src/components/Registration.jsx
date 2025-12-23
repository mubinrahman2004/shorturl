import React from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { authServises } from "../api";
import { toast, ToastContainer } from "react-toastify";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await authServises.registration(data);

      console.log(res);

      toast.success("Registration  is successfully ");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create short URL");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Create Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full name is required",
              })}
              error={errors?.fullName?.message}
            />

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
              error={errors?.email?.message}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              {...register("password", {
                required: "Password is required",
              })}
              error={errors?.password?.message}
            />

            <Button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-[1.02] transition-transform"
            >
              Sign Up
            </Button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-purple-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </section>
    </>
  );
};

export default Registration;
