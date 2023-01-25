import withReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import Swal from "../../utils/Swal";
import { handleAuth } from "../../utils/redux/reducers/reducer";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

import "../../styles/index.css";

function Login() {
  const [, setCookie] = useCookies(["token"]);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post("login", body)
      .then((res) => {
        const { data, message } = res.data;
        setCookie("token", data.token, { path: "/" });
        dispatch(handleAuth(true));
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
        navigate("/");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="card w-1/5 gap-3 p-7 shadow-sm shadow-black lg:h-3/5 bg-white">
          <form
            className="flex flex-col gap-4 min-w-[40%]"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h1 className="text-center text-black">Welcome</h1>
            <h1 className="text-start text-black">Login</h1>
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
              <span className="label-text text-lg text-black ">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Password..."
              className="input input-bordered w-full border-black -mt-5 ring-1 ring-black"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="btn max-w-xs bg-[#03AC0E] mt-12"
              label="LOGIN"
              loading={loading || disabled}
            />
            <label className="label-one">
              <p className="font-normal font-weight-300 text-center">
                Don't have an Account?{" "}
                <Link className="font-bold" to="/register">
                  Register
                </Link>
              </p>
            </label>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
