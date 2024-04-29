import React, { useState } from "react";
import { DoubleLeftOutlined } from "@ant-design/icons";
import logo from "../images/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        toast.error("email is required");
      } else if (!newPassword) {
        toast.error("password is required");
      } else if (!answer) {
        toast.error("answer is required");
      }
      const res = await axios.post(
        `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/auth/forget-password`,
        {
          email,
          newPassword,
          answer,
        }
      );

      if (res && res.data.success) {
        toast.success(res.data.message);

        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err.res);
      toast.error(err);
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(248 250 252)" }}>
      {" "}
      <button
        type="button"
        class="btn  btn-back  mx-4 mt-5 h6  h-100    "
        onClick={() => navigate("/")}
      >
        <DoubleLeftOutlined className="align-baseline" /> Back
      </button>
      <div className="d-flex flex-column gap-5 text-center">
        <div>
          {" "}
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className="fw-bold h4">Password assistance</div>
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
                        <div className="row gy-3 mx-1 mt-2  overflow-hidden">
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
                            <small className="fw-bold">New Password</small>
                          </label>
                          <div className="col-12">
                            <div className="form-floating ">
                              <input
                                type="password"
                                style={{ fontSize: "12px" }}
                                placeholder="......."
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                className="w-100 rounded
                         border border-grey font-weight-light p-2 text-secondary blackquote "
                              />
                            </div>
                          </div>
                          <label
                            htmlFor="password"
                            className="form-label text-start"
                          >
                            <small className="fw-bold">
                              write your favorite sport
                            </small>
                          </label>
                          <div className="col-12">
                            <div className="form-floating ">
                              <input
                                type="password"
                                style={{ fontSize: "12px" }}
                                placeholder="ex - cricket"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                                className="w-100 rounded
                          border border-grey font-weight-light p-2 text-secondary blackquote "
                              />
                            </div>
                          </div>
                          <div className="col-12   ">
                            <div className="d-grid  ">
                              <button
                                style={{
                                  backgroundColor: "#0891b2",
                                  borderRadius: "10px",
                                }}
                                className="btn bsb-btn-xl mt-2 btn-primary"
                                type="submit"
                              >
                                update password
                              </button>
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
};

export default ForgotPassword;
