import React from "react";
import { Link } from "react-router";
import Input from "./ui/Input";
import Button from "./ui/Button";

const Registration = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10">
        
        <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Create Account
        </h2>

        <form className="space-y-6">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
          />
 
 
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
          />

          <Button className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-[1.02] transition-transform">
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
    </section>
  );
};

export default Registration;
