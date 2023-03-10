import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "Enter your Name",
    email: "abcd@efgh.com",
    message: "Write your message here!",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    console.log(formData);
  };
  return (
    <div className="flex justify-center">
      <div className="bg-primary w-full sm:flex-col">
        <div className="">
          <div className="flex flex-auto">
            <div className="px-40 py-20 w-3/4 sm:px-8 sm:py-10 ">
              <h2 className="text-4xl font-bold text-secondary py-6 text-center sm:text-3xl ">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 sm:mb-2">
                  <label
                    className="block text-secondary text-base font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg text-white border-gray-400 p-2 bg-black"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4 sm:mb-2">
                  <label
                    className="block text-secondary text-base font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg text-white border-gray-400 p-2 bg-black"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4 sm:mb-2">
                  <label
                    className="block text-secondary text-base font-medium mb-2 rounded-full"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg text-white border-gray-400 p-2  bg-black sm:h-40"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button
                  className="border-2 border-secondary text-white px-4 py-3 rounded-lg hover:bg-white hover:text-black"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
