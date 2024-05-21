import React from "react";
import { useForm } from "react-hook-form";
import { LeftOutlined } from "@ant-design/icons";
import logo from "../../../images/logo.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailValidator from "email-validator";
import PasswordValidator from "password-validator";
import { createUser } from "../../../services/UserApis";
import "./signup.css";
function SignUp() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    const { email, password } = data;

    if (!validatePassword(password)) {
      toast.error("please enter a strong password ");
      return;
    }

    if (!EmailValidator.validate(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const res = await createUser(email, password);
      if (res && res?.success) {
        toast.success(res && res?.message);
        Navigate("/login");
      } else {
        toast.error(res && res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(248 250 252)", height: "100%" }}>
      {" "}
      <button
        type="button"
        className="btn  btn-back  mx-4 mt-5 h6    "
        onClick={() => Navigate("/")}
      >
        <small>
          <LeftOutlined className="align-baseline" /> Back
        </small>
      </button>
      <div className="d-flex flex-column gap-5 text-center">
        <div>
          {" "}
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className="fw-bold h4">Create Your Account</div>
        </div>
        <>
          <section className="bg-light mx-1 ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4">
                  <div className="card border border-light-subtle rounded-4">
                    <div className="card-body  ">
                      <div className="row">
                        <div className="col-12"></div>
                      </div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        action="#!"
                        className="h-100"
                      >
                        <div className="row gy-3 mx-1 mt-2 overflow-hidden">
                          <label htmlFor="email" className=" text-start">
                            <small className="fw-bold">Email address</small>
                          </label>
                          <div className="col-12">
                            <div className="form-floating ">
                              <input
                                style={{ fontSize: "12px" }}
                                type="email"
                                placeholder="your@example.com"
                                className={`w-100 rounded text-secondary border ${
                                  errors.email ? "border-danger" : "border-grey"
                                } font-weight-light p-2  blackquote    `}
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
                                placeholder="......."
                                style={{ fontSize: "12px" }}
                                className={`w-100 rounded border ${
                                  errors.password
                                    ? "border-danger"
                                    : "border-grey"
                                } font-weight-light text-secondary p-2 blackquote `}
                                type="password"
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
                                className="btn bsb-btn-xl mt-3  btn-primary"
                                type="submit"
                              >
                                Sign up
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
                                  By signing up, you agree to our{" "}
                                  <Link
                                    to="/term-policy"
                                    className="link-primary text-decoration-none"
                                  >
                                    Terms And Condition{" "}
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

export default SignUp;
