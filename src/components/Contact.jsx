import React, { useState } from "react";
import img from "../assets/img/contact.jpg";
import Button from "../layouts/Button";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.userName.trim()) {
      tempErrors.userName = "Name is required";
    } else if (formData.userName.length < 3) {
      tempErrors.userName = "Name must be at least 3 characters";
    }

    if (!formData.userEmail) {
      tempErrors.userEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
      tempErrors.userEmail = "Email is invalid";
    }

    if (!formData.userMessage.trim()) {
      tempErrors.userMessage = "Message is required";
    } else if (formData.userMessage.length < 10) {
      tempErrors.userMessage = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#ff6b6b",
          color: "#fff",
        },
      });
      // Clear form
      setFormData({
        userName: "",
        userEmail: "",
        userMessage: "",
      });
    } else {
      toast.error("Please check the form for errors", {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="w-full lg:w-2/5 space-y-5 bg-[#F2F2F2] p-5 rounded-xl"
        >
          <h1 className="text-4xl font-semibold text-center">Contact Form</h1>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <input
                className={`py-3 px-2 rounded-lg transition-all ${
                  errors.userName ? "border-red-500 border-2" : ""
                }`}
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.userName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.userName}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className={`py-3 px-2 rounded-lg transition-all ${
                  errors.userEmail ? "border-red-500 border-2" : ""
                }`}
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.userEmail && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.userEmail}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <textarea
                className={`py-3 px-2 rounded-lg transition-all ${
                  errors.userMessage ? "border-red-500 border-2" : ""
                }`}
                name="userMessage"
                value={formData.userMessage}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="3"
              />
              {errors.userMessage && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.userMessage}
                </span>
              )}
            </div>
            <div className="flex justify-center">
              <Button title="Submit" />
            </div>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full lg:w-2/4 my-5"
        >
          <img className="rounded-lg" src={img} alt="" />
          <p className="text-center text-sm pt-4 text-[#898888]">
            We'd love to hear from you! Whether you have questions, feedback, or
            need assistance with your travel plans, please don't hesitate to
            reach out. Our team is here to assist you every step of the way.
            Simply fill out the form below, and we'll be in touch shortly.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
