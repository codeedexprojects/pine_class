import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 py-10"
      data-aos="fade-up"
    >
      <div
        className="w-full max-w-6xl bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 p-8 gap-8"
        data-aos="fade-up"
      >
        {/* Left Form Section */}
        <div className="md:col-span-2" data-aos="fade-right">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter your Subject"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Enter your Message here..."
                className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Send Your Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Contact Info Section */}
        <div className="flex flex-col gap-6" data-aos="fade-left">
          <div className="flex flex-col items-center text-center border border-gray-200 p-4 rounded">
            <FaEnvelope className="text-xl mb-2" />
            <p>support@pine.com</p>
          </div>

          <div className="flex flex-col items-center text-center border border-gray-200 p-4 rounded">
            <FaPhone className="text-xl mb-2" />
            <p>+91 00000 00000</p>
          </div>

          <div className="flex flex-col items-center text-center border border-gray-200 p-4 rounded">
            <FaMapMarkerAlt className="text-xl mb-2" />
            <p>Some Where in the World</p>
          </div>

          <div className="flex flex-col items-center text-center border border-gray-200 p-4 rounded">
            <div className="flex space-x-4 mb-2">
              <FaFacebook className="text-xl cursor-pointer hover:text-blue-600" />
              <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
              <FaLinkedin className="text-xl cursor-pointer hover:text-blue-700" />
            </div>
            <p>Social Profiles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
