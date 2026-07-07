import React, { useRef } from "react";
import Header from "./Header.jsx";
import { useState } from "react";
import { CheckValidData } from "../utils/Validate.js";
import { api } from "../utils/api.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [IsSignin, setIsSignin] = useState(true);
  const [errMessage, seterrMessage] = useState(null);

  const toggleSignIn = () => {
    setIsSignin(!IsSignin);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const HandleButtonClick = async () => {
    // the thing is that how i can get the email pass from here like how can i fetch that either i can use useState and do it or i can just simply use useRef
    const message = CheckValidData(
      email.current.value,
      password.current.value,
      IsSignin ? null : name.current.value,
    );

    seterrMessage(message);
    if (message) return;

    //sign in
    if (IsSignin) {
      const res = await api.post("/api/user/login", {
        email: email.current.value,
        password: password.current.value,
      });
      console.log(res.data);
      if (res.data.success) {
        dispatch(addUser(res.data.user_to_return));
        navigate("/browse");
      }
    } else {
      //sign up
      const res1 = await api.post("/api/user/register", {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      });
      console.log(res1.data);
      if (res1.data.success) {
        dispatch(
          addUser({
            name: name.current.value,
            email: email.current.value,
          }),
        );
        navigate("/browse");
      }
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="absolute w-full h-full bg-gradient-to-b from-black/90 via-black/130 to-black/70 animate-[zoomIn_8s_ease-in-out_infinite_alternate]">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg"
          alt="bg"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="flex flex-col items-center p-20">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black my-10 flex flex-col justify-center p-8 w-[280px] rounded-md bg-opacity-80 animate-[fadeIn_0.6s_ease-out_forwards] "
        >
          <h1 className="text-white text-xl font-semibold p-3 flex justify-center">
            {IsSignin ? "Sign In" : "Sign Up"}
          </h1>
          {!IsSignin && (
            <input
              ref={name}
              type="text"
              className="outline-none border-none text-white text-sm font-normal p-2 rounded-sm bg-gray-700 my-3"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            type="text"
            className="outline-none border-none text-white text-sm font-normal p-2 rounded-sm bg-gray-700 my-3"
            placeholder="Email Address"
          />
          <input
            ref={password}
            type="password"
            className="outline-none border-none text-white text-sm font-normal rounded-sm bg-gray-700 p-2 my-3"
            placeholder="Password"
          />
          <p className="text-red-500 text-sm font-medium"> {errMessage} </p>
          <button
            className="p-2 my-4 rounded-lg text-white text-sm font-semibold bg-red-700 flex justify-center"
            onClick={HandleButtonClick}
          >
            {IsSignin ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-400 text-sm font-normal">
            {IsSignin ? "New to Netflix? " : "Already have an account? "}
            <span
              onClick={toggleSignIn}
              className="text-white font-medium cursor-pointer hover:underline"
            >
              {IsSignin ? "Sign Up Now" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
