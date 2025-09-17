import React from "react";
import { useCreateInquiryMutation } from "../features/services/inquiryApi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import Modal from "../commonFile/Modal";
import img from "../assets/img/inquiry.png";
import { X, PhoneCall, Gift, Lightbulb } from "lucide-react";

const schema = yup.object().shape({
  full_name: yup 
    .string()
    .required("Full Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email_id: yup.string().email("Invalid email address").optional(), 
  contact_number: yup 
    .string()
    .required("Contact Number is required")
    .matches(/^\d{10}$/, "Contact number must be 10 digits"),
  description: yup
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(), 
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
      let payload = {
        l_name: data.full_name,
        l_email: data.email_id,
        l_contact: data.contact_number,
        l_description: data.description,
        l_source: "web",
        l_project_id: "7",
        l_assigned_by: "Abhishek Sharma",
      };
      const res = await createInquiry(payload).unwrap();
      console.log(res);
      toast.success(res?.message || "Inquiry submitted successfully");
      reset();
      onClose();
    } catch (err) {
      console.log(err);
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
      <div className="bg-white rounded-xl shadow-2xl  w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden relative">
        {/* Close button for the modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black lg:text-white  transition-colors z-20 cursor-pointer"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Left Form Section */}
        <div className="p-7 md:p-8 flex flex-col justify-center">
          <h2 className="text-[20px] sm:text-3xl font-bold text-gray-900 mb-6">
            Get instant enquiry
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-15">
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("full_name")}
                className={`w-full border-b pb-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors ${
                  errors.full_name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.full_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.full_name.message}
                </p>
              )}
            </div>

            {/* Email Id */}
            <div>
              <input
                type="email"
                placeholder="Email Id"
                {...register("email_id")}
                className={`w-full border-b pb-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors ${
                  errors.email_id ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email_id && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email_id.message}
                </p>
              )}
            </div>

            {/* Contact Number */}
            <div>
              <input
                type="tel"
                placeholder="Contact Number"
                maxLength={10}
                {...register("contact_number")}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                className={`w-full border-b pb-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors ${
                  errors.contact_number ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.contact_number && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.contact_number.message}
                </p>
              )}
            </div>

            {/* Describe your requirement */}
            <div>
              <input
                type="text"
                placeholder="Describe your requirement"
                {...register("description")}
                className={`w-full border-b pb-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FC6C31] hover:bg-[#E05B26] text-white font-semibold py-3 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? "Submitting..." : "Get Free Consultation"}
            </button>
          </form>
        </div>

        {/* Right Info Section */}
        <div className="relative bg-[#407E96] p-3 md:p-3 text-white flex flex-col justify-between items-center text-center hidden md:flex">
          {/* Image */}
          <div className="relative w-60 h-60 flex items-center justify-center mb-6 mt-4">
            <div className="relative w-60 h-60 flex items-center justify-center mb-6 mt-4">
              {/* ==== Bottom Left Arcs ==== */}
              {/* Inner Arc */}
              <div className="absolute w-56 h-56 rounded-full border-[3px] border-transparent border-l-white bottom-2 left-2 -rotate-45"></div>

              {/* Outer Arc */}
              <div className="absolute w-56 h-56 rounded-full border-[3px] border-transparent border-l-white bottom-1 left-1 -rotate-45"></div>

              {/* ==== Top Right Arcs ==== */}
              {/* Inner Arc */}
              <div className="absolute w-56 h-56 rounded-full border-[3px] border-transparent border-r-white top-2 right-2 -rotate-46"></div>

              {/* Outer Arc */}
              <div className="absolute w-56 h-56 rounded-full border-[3px] border-transparent border-r-white top-1 right-1 -rotate-47"></div>

              {/* Inner Circle with Image */}
              <div className="w-50 h-50 rounded-full overflow-hidden flex items-center justify-center bg-[#2b5e72ff]">
                <img
                  src={img}
                  alt="Man with laptop"
                  className="w-[100%] h-[90%]  object-cover object-[75%_75%] hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Do You have any Idea on your mind?
          </h3>
          <p className="text-sm text-white/90 mb-8 max-w-xs">
            Your ideas matter for us, Let's turn them into reality, with{" "}
            <span className="font-bold text-[18px]">Visko E-serve.</span>
          </p>

          <ul className="space-y-3 text-left w-full max-w-[250px] mx-auto mb-6">
            <li className="flex items-center gap-3">
              <PhoneCall size={18} className="text-white/80" />
              <span className="text-white/90">Get an instant call</span>
            </li>
            <li className="flex items-center gap-3">
              <Gift size={18} className="text-white/80" />
              <span className="text-white/90">Free consultation</span>
            </li>
            <li className="flex items-center gap-3">
              <Lightbulb size={18} className="text-white/80" />
              <span className="text-white/90">Experts guidance</span>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
