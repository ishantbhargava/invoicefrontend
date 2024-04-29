import React, { useState } from "react";
import { DoubleLeftOutlined } from "@ant-design/icons";
import logo from "../images/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/Auth";
function SignIn() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const handleSubmit = async (e) => {
    if (!email) {
      toast.error("email is required");
    } else if (!password) {
      toast.error("password is required");
    }

    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/auth/login`,
        {
          email,
          password,
        }
      );

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        Navigate("/dashboard");
      } else {
        toast.error(res.data && res.data.message);
      }
    } catch (error) {
      toast.error(error);
      toast.error("something went wrong");
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
                        onSubmit={handleSubmit}
                      >
                        <div className="row gy-3 mx-1 mt-2 overflow-hidden">
                          <label htmlFor="email" className=" text-start">
                            <small className="fw-bold">Email address</small>
                          </label>
                          <div className="col-12">
                            <div className="form-floating ">
                              <input
                                value={email}
                                type="email"
                                style={{ fontSize: "12px" }}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@example.com"
                                className="w-100 rounded 
                            border border-grey font-weight-light p-2 text-secondary  blackquote    "
                              />
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-100 rounded
                            border border-grey font-weight-light p-2 text-secondary blackquote "
                              />
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
