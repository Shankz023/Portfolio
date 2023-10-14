import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateName = () => {
    if (!formData.name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const validateMobile = () => {
    const phoneNumberRegex = /^(\+91-|91-|0)?[6-9]\d{9}$/; // Assuming a 10-digit phone number
    if (!formData.phone) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone number is required",
      }));
    } else if (!phoneNumberRegex.test(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Invalid phone number format",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "",
      }));
    }
  };

  const handleBlur = (fieldName) => {
    if (fieldName === "name") {
      validateName();
    } else if (fieldName === "email") {
      validateEmail();
    } else if (fieldName === "phoneNumber") {
      validateMobile();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trigger validation for all fields
    validateName();
    validateEmail();
    validateMobile();

    // Check if there are any validation errors
    if (errors.name || errors.email || errors.phone) {
      // If there are errors, do not submit the form
      return;
    } else {
      try {
        const response = await axios.post(
          "https://getform.io/f/c4c98315-3c20-44b2-b8f7-2685c031a2e5",
          { ...formData }
        );

        // Optionally, reset the form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
        });

        // Reset the validation errors
        setErrors({
          name: "",
          email: "",
          phone: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div id="contact" className="max-width-[1040px] m-auto md:pl-40 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="">
              Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              onBlur={() => handleBlur("name")}
              onChange={handleChange}
            />
            <div className="error font-semibold text-red-500">
              {errors.name}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="">
              Phone Number
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
              value={formData.phone}
              onBlur={() => handleBlur("phoneNumber")}
              onChange={handleChange}
            />
            <div className="error font-semibold text-red-500">
              {errors.phone}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2" htmlFor="">
            Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
            value={formData.email}
            onBlur={() => handleBlur("email")}
            onChange={handleChange}
          />
          <div className="error font-semibold text-red-500">{errors.email}</div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="">
            Subject
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="">
            Message
          </label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            name="message"
            rows="10"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black/50 text-gray-100 mt-3 w-full p-4 rounded-lg hover:bg-black/80 ease-in "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
