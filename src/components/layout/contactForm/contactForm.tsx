"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modal, setModal] = useState({
    open: false,
    success: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setModal({
        open: true,
        success: false,
        message: "Please complete all fields.",
      });

      return;
    }

    try {
      await emailjs.send(
        "service_udzrgwp",
        "template_ikalt78",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "rjaNaHMNracT7dgNV",
      );

      setModal({
        open: true,
        success: true,
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setModal({
        open: true,
        success: false,
        message: "Failed to send message.",
      });
    }
  };

  return (
    <section className="w-full py-16">
      <div className="lg:w-3xl w-sm mx-auto px-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-primary">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-4 outline-none focus:border-secondary"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-primary">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-4 outline-none focus:border-secondary"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-primary">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-4 outline-none resize-none focus:border-secondary"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="lg:self-center bg-primary text-white rounded-full py-2 w-full lg:w-50 font-semibold hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-5">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold mb-3">
              {modal.success ? "Success" : "Oops!"}
            </h2>

            <p className="text-gray-600 mb-5">{modal.message}</p>

            <button
              onClick={() =>
                setModal({
                  ...modal,
                  open: false,
                })
              }
              className="bg-primary text-white px-6 py-3 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
