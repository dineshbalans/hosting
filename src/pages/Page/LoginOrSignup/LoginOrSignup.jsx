import React, { useEffect, useState } from "react";
import { TfiUser, TfiEmail } from "react-icons/tfi";
import { HiOutlineLockClosed } from "react-icons/hi";
import loginBg from "../../../assets/img/hero-14.jpg";
import signUpBg from "../../../assets/img/hero-bg-4.jpg";
import { Link } from "react-router-dom";

const LoginOrSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    // Scroll to the top when isLogin changes
    window.scrollTo(0, 30);
  }, [isLogin]);

  return (
    <section
      style={{ backgroundImage: `url(${isLogin ? loginBg : signUpBg})` }}
      className="bg-fixed bg-left-top bg-no-repeat bg-cover"
    >
      <div className="flex items-center justify-center bg-secondary/70 pddng text-quadra min-h-[80vh]">
        <div className="sml:w-[90%] lg:w-[62%] xl:w-[52%] xxl:w-[42%] bg-white rounded">
          <div className="p-7 sml:p-12 space-y-14">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-ternary">{`${
                isLogin ? "Login" : "Create account"
              }`}</h1>
              <h3 className="text-">{`${
                isLogin
                  ? "Sign in to your account to continue."
                  : "Made with love by developers for developers."
              }`}</h3>
            </div>
            <form className="space-y-7">
              {/* NAME */}
              {!isLogin && (
                <div className="space-y-[14px]">
                  <label htmlFor="name" className="font-medium text-[15px]">
                    Your Name
                  </label>
                  <div className="flex items-center gap-5 px-4 py-2 border rounded ">
                    <TfiUser className="scale-120" />
                    <input
                      type="text"
                      className="w-full text-[14.5px] outline-none"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
              )}
              {/* EMAIL */}
              <div className="space-y-[14px]">
                <label htmlFor="email" className="font-medium text-[15px]">
                  Email Address
                </label>
                <div className="flex items-center gap-5 px-4 py-2 border rounded ">
                  <TfiEmail className="scale-120" />
                  <input
                    type="text"
                    className="w-full text-[14.5px] outline-none"
                    id="email"
                    placeholder="name@address.com"
                  />
                </div>
              </div>
              {/* PASSWORD */}
              <div className="space-y-[14px]">
                <div className="font-medium text-[15px] flex flex-wrap justify-between">
                  <label htmlFor="password">Password</label>
                  {isLogin && (
                    <Link to="#">Forget Password?</Link>
                  )}
                </div>
                <div className="flex items-center gap-5 px-4 py-2 border rounded ">
                  <HiOutlineLockClosed className="scale-120" />
                  <input
                    type="text"
                    className="w-full text-[14.5px] outline-none"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              {/* TERMS AND CONDITION */}
              {!isLogin && (
                <div className="flex items-center gap-3 text-sm">
                  <input type="checkbox" id="term-check-box" />
                  <label htmlFor="term-check-box">
                    I agree to the{" "}
                    <span className="text-primeBlue">terms and conditions</span>
                  </label>
                </div>
              )}
              <button className="w-full primeBttn">{`${
                isLogin ? "Sign in" : "Sign Up"
              }`}</button>
            </form>
          </div>
          <hr />
          <div className="py-4 px-12 text-[15px] font-medium">
            <p>
              <span>
                {isLogin
                  ? `Not registered?     `
                  : `Already have an account?     `}
              </span>
              <span
                className="transition-none ease-linear cursor-pointer text-primeBlue hover:text-secondary"
                onClick={() => setIsLogin((prevState) => !prevState)}
              >
                {`${isLogin ? "Create account" : "Sign in"}`}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginOrSignup;
