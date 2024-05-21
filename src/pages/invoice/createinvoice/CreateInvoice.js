import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import axios from "axios";
import { createInvoice } from "../../../services/InvoiceApis";
import EmailValidator from "email-validator";

function CreateInvoice() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(moment().format("Do MMM YY"));
  }, [currentDate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      products: [{ productName: "", price: "", quantity: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    if (!EmailValidator.validate(formData.companyEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const SentFormData = { ...formData, currentDate: currentDate };
    try {
      const res = await createInvoice(SentFormData);

      if (res && res?.success) {
        toast.success(res && res?.message);
        navigate("/dashboard");
      } else {
        toast.error(res && res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="pt-5 ">
        <div className="generater-page mx-auto bg-white   ">
          <div className="mx-3 ">
            <h4 className="fw-bold pt-3 ">Create New Invoice Generator</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* product section */}
              {fields.map((field, index) => (
                <div key={field.id}>
                  <div className="me-2 mt-3">
                    <label className="gene-page-text">Product Name</label>
                    <input
                      {...register(`products.${index}.productName`, {
                        required: true,
                      })}
                      style={{ fontSize: "14px", fontWeight: "390" }}
                      placeholder="Enter product name"
                      className={`w-100 rounded border ${
                        errors?.products?.[index]?.productName
                          ? "border-danger"
                          : "border-grey"
                      } font-weight-light p-2 mt-2 text-secondary blackquote`}
                    />
                    {errors?.products?.[index]?.productName && (
                      <p className="text-danger">This field is required</p>
                    )}
                  </div>
                  <div className="mt-2 d-flex gap-3">
                    <div className="w-100">
                      <label className="gene-page-text">Price</label>
                      <input
                        {...register(`products.${index}.price`, {
                          required: true,
                          min: 0,
                        })}
                        style={{ fontSize: "14px", fontWeight: "390" }}
                        type="number"
                        placeholder="Product Price"
                        className={`w-100 rounded border ${
                          errors?.products?.[index]?.price
                            ? "border-danger"
                            : "border-grey"
                        } font-weight-light p-2 mt-2 text-secondary blackquote`}
                      />
                      {errors?.products?.[index]?.price && (
                        <p className="text-danger">
                          This field is required and should be a positive number
                        </p>
                      )}
                    </div>
                    <div className="w-100">
                      <label className="gene-page-text">Quantity</label>
                      <input
                        {...register(`products.${index}.quantity`, {
                          required: true,
                          min: 0,
                        })}
                        style={{ fontSize: "14px", fontWeight: "390" }}
                        type="number"
                        placeholder="Quantity"
                        className={`w-100 rounded border ${
                          errors?.products?.[index]?.quantity
                            ? "border-danger"
                            : "border-grey"
                        } font-weight-light p-2 mt-2 text-secondary blackquote`}
                      />
                      {errors?.products?.[index]?.quantity && (
                        <p className="text-danger">
                          This field is required and should be a positive number
                        </p>
                      )}
                    </div>
                  </div>
                  {index > 0 && (
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="btn btn-outline-danger mt-3"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              ))}
              {/* productSectionEnd */}
              <div className="d-flex justify-content-between mt-3">
                <button
                  onClick={() =>
                    append({ productName: "", price: "", quantity: "" })
                  }
                  className="btn mt-3 text-white"
                  style={{
                    backgroundColor: "#0891b2",
                    borderRadius: "8px",
                    marginTop: "4px",
                  }}
                  type="button"
                >
                  Add Product
                </button>
              </div>
              {/* Add Product Button End */}
              <div className="me-2 mt-3">
                <label className="gene-page-text">Company Name</label>
                <input
                  {...register("companyName", { required: true })}
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="Enter company name"
                  className={`w-100 rounded border ${
                    errors.companyName ? "border-danger" : "border-grey"
                  } font-weight-light p-2 mt-2 text-secondary blackquote`}
                />
                {errors.companyName && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div className="me-2 mt-3">
                <label className="gene-page-text">Company Address</label>
                <input
                  {...register("companyAddress", { required: true })}
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="Enter company address"
                  className={`w-100 rounded border ${
                    errors.companyAddress ? "border-danger" : "border-grey"
                  } font-weight-light p-2 mt-2 text-secondary blackquote`}
                />
                {errors.companyAddress && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div className="me-2 mt-3">
                <label className="gene-page-text">
                  Company Email (optional)
                </label>
                <input
                  {...register("companyEmail")}
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="Enter company email"
                  type="email"
                  className={`w-100 rounded border ${
                    errors.companyEmail ? "border-danger" : "border-grey"
                  } font-weight-light p-2 mt-2 text-secondary blackquote`}
                />
              </div>
              <div className="col-12 mb-3">
                <div className="d-grid ">
                  <button
                    style={{
                      backgroundColor: "#0891b2",
                      borderRadius: "8px",
                    }}
                    className="btn bsb-btn-xl mt-3 btn-primary"
                    type="submit"
                  >
                    Create Invoice{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CreateInvoice;
