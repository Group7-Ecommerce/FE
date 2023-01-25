import withReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "../../utils/Swal";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

import "../../styles/index.css"

function Register() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [numberPhone, setNumberPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (name && numberPhone && email && address && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, numberPhone, email, address, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      name,
      email,
      password,
      address,
      number_phone: numberPhone,
    };
    axios.post("register", body)
    .then((res) => {
      const { message, data } = res.data;
      MySwal.fire({
        title: "Success",
        text: message,
        showCancelButton: false,
      });
      if (data) {
        navigate("/login");
      }
    })
    .catch((err) => {
      const { message } = err.response.data;
      MySwal.fire({
        title: "Failed",
        text: message,
        showCancelButton: false,
      });
    })
    .finally(() => setLoading(false));
  }


  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="card w-2/5 gap-3 p-7 shadow-sm shadow-black lg:h-5/5 bg-white">
          <form className="flex flex-col gap-4 min-w-[40%]"
          onSubmit={(e) => handleSubmit(e)}
          >
            <h1 className="text-center text-black text-2xl">Welcome</h1>
            <h1 className="text-start text-black text-xl">Sign up to</h1>
            <label className="label">
              <span className="label-text text-lg text-black ">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name..."
              className="input input-bordered w-full  border-black -mt-5 ring-1 ring-black"
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setNumberPhone(e.target.value)}
            />
            <label className="label">
              <span className="label-text text-lg text-black ">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your email..."
              className="input input-bordered w-full  border-black -mt-5 ring-1 ring-black"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">
              <span className="label-text text-lg text-black ">Address</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Address..."
              className="input input-bordered w-full  border-black -mt-5 ring-1 ring-black"
              onChange={(e) => setAddress(e.target.value)}
            />
            <label className="label">
              <span className="label-text text-lg text-black ">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Password..."
              className="input input-bordered w-full border-black -mt-5 ring-1 ring-black"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="justify-center text-center mt-9">
              <Button className="btn w-[28vh] bg-[#03AC0E]" label="register" 
              loading={loading || disabled}
              />
              <label className="label-one">
                <p className="font-normal font-weight-300 text-center mt-3">
                  Already have an Account?
                  <Link className="font-bold" to="/login">Login</Link>
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
