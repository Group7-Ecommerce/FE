import React from "react";

import Button from "../../components/Button";
import Layout from "../../components/Layout";

function Register() {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="card w-2/5 gap-3 p-7 shadow-sm shadow-black lg:h-5/5 bg-white">
          <form className="flex flex-col gap-4 min-w-[40%]">
            <h1 className="text-center text-black text-2xl">Welcome</h1>
            <h1 className="text-start text-black text-xl">Sign up to</h1>
            <label className="label">
              <span className="label-text text-lg text-black ">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name..."
              className="input input-bordered w-full  border-black -mt-5 ring-1 ring-black"
            />
            <label className="label">
              <span className="label-text text-lg text-black ">
                Number Phone
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your Number Phone..."
              className="input input-bordered w-full  border-black -mt-5 ring-1 ring-black"
            />
            <label className="label">
              <span className="label-text text-lg text-black ">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your email..."
              className="input input-bordered w-full  border-black -mt-5 ring-1 ring-black"
            />
            <label className="label">
              <span className="label-text text-lg text-black ">Address</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Address..."
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
            <div className="justify-center text-center mt-9">
              <Button className="btn w-[28vh] bg-[#03AC0E] " label="LOGIN" />
              <label className="label-one">
                <p className="font-normal font-weight-300 text-center mt-3">
                  Already have an Account?{" "}
                  <span className="font-bold">Register</span>
                </p>
              </label>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
