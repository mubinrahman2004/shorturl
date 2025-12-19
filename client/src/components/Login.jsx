import React from "react";
import { Link } from "react-router";
import Button from "./ui/Button";
import Input from "./ui/Input";

const Login = () => {
  return (
   <section>
       <div className="h-screen flex items-center justify-center">
        <div className="h-96 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="relative">
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse" />
            <div
              id="form-container"
              className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
            >
              <h2
                id="form-title"
                className="text-center text-3xl font-bold mb-10 text-gray-800"
              >
                signin
              </h2>
              <form
  
                className="space-y-5">
  
                <Input label={"Email"} type="email" placeholder="Enter your Email" />
  
                <Input label={"Password"} type="password" placeholder="Enter your Password" />
                <Button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Login
                </Button>
                <p className="text-brand">creat an account <Link to={'/signup'} className="text-red-400">registration</Link> </p>
  
  
              </form>
            </div>
          </div>
        </div>
      </div>
     </section>
  );
};

export default Login;
