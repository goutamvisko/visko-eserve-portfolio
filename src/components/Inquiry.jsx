import React from "react";
import { useCreateInquiryMutation } from "../features/services/inquiryApi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import Modal from "../commonFile/Modal";
import img from "../assets/img/1.webp";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: yup.string().email("Invalid email address").optional(),
  number: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
});

export default function Inquiry({ isOpen, onClose }) {
  const [createInquiry] = useCreateInquiryMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      let payload = { ...data };
      payload.source = "Website",
      payload.project_id = "";
      payload.l_assigned_by = "Abhishek Sharma";
      const res = await createInquiry(payload).unwrap();
      console.log(res);
      toast.success(res?.message || "Inquiry submitted successfully");
      reset();
      onClose();
    } catch (err) {
      const serverErrorMsg =
        err?.data?.errors?.[0]?.message ||
        err?.data?.message ||
        err?.message ||
        "Something went wrong";
      toast.error(serverErrorMsg);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Image with Gradient Shape */}
        <div className="flex items-center justify-center p-4 bg-blue-50">
          <div className="p-[4px] rounded-2xl bg-gradient-to-r from-blue-500 to-green-400 shadow-lg">
            <img
              src={img}
              alt="img"
              fetchpriority="high"
              loading="lazy"
              className="rounded-2xl object-cover w-full h-[400px]"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-bold text-gray-900">
            Get Instant Enquiry!
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Get your project started instantly from{" "}
            <span className="text-blue-500 font-semibold">E-Serve</span> Support
            Team
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
                className={`mt-1 block w-full rounded-lg border p-2 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/*  Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <div className="flex">
                <span className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-500">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  maxLength={10}
                  {...register("number")}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  className={`mt-0 block w-full rounded-r-lg border p-2 focus:outline-none focus:ring-2 ${
                    errors.number
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
              </div>
              {errors.number && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.number.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email")}
                className={`mt-1 block w-full rounded-lg border p-2 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Get a call"}
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}
