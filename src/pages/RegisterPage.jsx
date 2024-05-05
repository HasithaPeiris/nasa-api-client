import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./motion.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row mt-12 mx-5">
      <div className="flex justify-center items-center sm:w-1/2">
        <div className="p-8 max-w-md w-full space-y-5 bg-primary-dark bg-opacity-50 rounded-lg border-2 border-secondary">
          <h2 className="text-3xl font-bold text-center">Register</h2>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="name" className="block mb-1 text-left">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:border-secondary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:border-secondary"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 mt-2 text-left">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:border-secondary"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-1 mt-2 text-left"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:border-secondary"
              />
            </div>
            {isLoading && <h1>Loading...</h1>}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 mt-4 rounded-md hover:bg-primary-dark  transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      <div className="hidden sm:block sm:w-1/2">
        <div className="max-w-md mx-auto">
          <img
            src="c1.svg"
            alt="Login Image"
            className="object-cover w-full h-auto bounce"
            style={{ maxWidth: "380px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
