import React from "react";
import { useForm } from "react-hook-form";
import { DoubleLeftOutlined } from "@ant-design/icons";
import logo from "../../../images/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmailValidator from "email-validator";
import PasswordValidator from "password-validator";
import "./forget.css";
import { forgetUser } from "../../../services/UserApis";
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const schema = new PasswordValidator();
    schema
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(1)
      .has()
      .not()
      .spaces();

    return schema.validate(password);
  };

  const onSubmit = async (data) => {
    const { email, newPassword } = data;

    if (!EmailValidator.validate(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!validatePassword(newPassword)) {
      toast.error("Please enter a strong password");
      return;
    }

    try {
      const res = await forgetUser(email, newPassword);
      if (res && res?.success) {
        toast.success(res?.message);
        navigate("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(248 250 252)" }} className="h-100">
      <button
        type="button"
        className="btn  btn-back  mx-4 mt-5 h6  h-100    "
        onClick={() => navigate("/")}
      >
        <DoubleLeftOutlined className="align-baseline" /> Back
      </button>
      <div className="d-flex flex-column gap-5 text-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className="fw-bold h4">Password Assistance</div>
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
                        <div className="row gy-3 mx-1 mt-2  overflow-hidden">
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
                            <small className="fw-bold">New Password</small>
                          </label>
                          <div className="col-12">
                            <div className="form-floating ">
                              <input
                                type="password"
                                style={{ fontSize: "12px" }}
                                placeholder="......."
                                className={`w-100 rounded border ${
                                  errors.newPassword
                                    ? "border-danger"
                                    : "border-grey"
                                } font-weight-light p-2 text-secondary blackquote `}
                                {...register("newPassword", { required: true })}
                              />
                              {errors.newPassword && (
                                <p className="text-danger">
                                  This field is required
                                </p>
                              )}
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
                                Update Password
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
