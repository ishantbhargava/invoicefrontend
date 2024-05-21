import React, { useState } from "react";
import { DoubleLeftOutlined } from "@ant-design/icons";
import logo from "../../../images/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context/Auth";
import EmailValidator from "email-validator";
import { useForm } from "react-hook-form";
import { loginUser } from "../../../services/UserApis";

import "./signin.css";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Navigate = useNavigate();

  const [auth, setAuth] = useAuth();
  const onSubmit = async (data) => {
    const { email, password } = data;
    if (!email) {
      toast.error("email is required");
    } else if (!password) {
      toast.error("password is required");
    }

    if (!EmailValidator.validate(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const res = await loginUser(email, password);
      if (res && res?.success) {
        toast.success(res && res?.message);
        setAuth({
          ...auth,
          user: res.user,
          token: res.token,
        });
        console.log("from signin page", res.data);
        localStorage.setItem("auth", JSON.stringify(res));
        Navigate("/dashboard");
      } else {
        toast.error(res && res.message);
      }
    } catch (error) {
      toast.error(error);
      toast.error("somethingg went wrong");
    }
  };
  return (
    <div style={{ backgroundColor: "rgb(248 250 252)" }}>
      {" "}
      <button
        type="button"
        class="btn  btn-back  mx-4 mt-5 h6      "
        onClick={() => Navigate("/")}
      >
        <DoubleLeftOutlined className="align-baseline" /> Back
      </button>
      <div className="d-flex flex-column gap-5 text-center">
        <div>
          {" "}
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className="fw-bold h4">Sign To Your Account</div>
        </div>
        <>
          <section className="bg-light mx-1  ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4">
                  <div className="card border border-light-subtle rounded-4">
                    <div className="card-body  ">
                      <div className="row">
                        <div className="col-12"></div>
                      </div>
                      <form
                        action="#!"
                        className="h-100"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="row gy-3 mx-1 mt-2 overflow-hidden">
                          <label htmlFor="email" className=" text-start">
                            <small className="fw-bold">Email address</small>
                          </label>
                          <div className="col-12">
                            <div className="form-floating ">
                              <input
                                type="email"
                                style={{ fontSize: "12px" }}
                                placeholder="your@example.com"
                                className={`w-100 rounded border ${
                                  errors.email ? "border-danger" : "border-grey"
                                } font-weight-light p-2 text-secondary  blackquote    `}
                                {...register("email", { required: true })}
                              />
                              {errors.email && (
                                <p className="text-danger">
                                  This field is required
                                </p>
                              )}
                            </div>
                          </div>
                          <label
                            htmlFor="password"
                            className="form-label text-start"
                          >
                            <small className="fw-bold">Password</small>
                          </label>
                          <div className="col-12">
                            <div className="form-floating ">
                              <input
                                type="password"
                                style={{ fontSize: "12px" }}
                                placeholder="......."
                                required
                                className={`w-100 rounded border ${
                                  errors.password
                                    ? "border-danger"
                                    : "border-grey"
                                } font-weight-light p-2 text-secondary blackquote `}
                                {...register("password", { required: true })}
                              />
                              {errors.password && (
                                <p className="text-danger">
                                  This field is required
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                style={{
                                  backgroundColor: "#0891b2",
                                  borderRadius: "10px",
                                }}
                                className="btn bsb-btn-xl mt-3 btn-primary"
                                type="submit"
                              >
                                Sign In
                              </button>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check">
                              <label
                                className="form-check-label text-secondary"
                                htmlFor="iAgree"
                              >
                                <small>
                                  Don't have an account?{" "}
                                  <Link
                                    to="/signup"
                                    className="link-primary text-decoration-none"
                                  >
                                    Sign Up Here
                                  </Link>
                                </small>
                              </label>
                            </div>
                          </div>
                          <div className="col-12 mt-0">
                            <div className="form-check">
                              <label
                                className="form-check-label text-secondary"
                                htmlFor="iAgree"
                              >
                                <small>
                                  need help{" "}
                                  <Link
                                    to="/forget-password"
                                    className="link-primary text-decoration-none"
                                  >
                                    Forget Password
                                  </Link>
                                </small>
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignIn;
