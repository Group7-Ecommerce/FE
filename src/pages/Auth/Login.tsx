import React from "react";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

function Login() {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="card w-1/5 gap-3 p-7 shadow-sm shadow-black lg:h-3/5 bg-white">
          <form className="flex flex-col gap-4 min-w-[40%]">
            <h1 className="text-center text-black">Welcome</h1>
            <h1 className="text-start text-black">Login</h1>
            <label className="label">
              <span className="label-text text-lg text-black ">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your email..."
              className="input input-bordered w-full  border-black -mt-5 ring-1 ring-black"
            />
            <label className="label">
              <span className="label-text text-lg text-black ">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Password..."
              className="input input-bordered w-full border-black -mt-5 ring-1 ring-black"
            />
            <Button className="btn max-w-xs bg-[#03AC0E] mt-12" label="LOGIN" />
            <label className="label-one">
              <p className="font-normal font-weight-300 text-center">
                Already have an Account? <span className="font-bold">Register</span>
              </p>
            </label>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
