import React from 'react';

export default function Contact() {
  const formClassName = "w-[40rem] p-8 border-gray-400/10 border-[1.5px] backdrop-blur-md bg-gray-800/80 rounded-3xl";
  const labelClassName = "block mb-2 text-left font-semibold text-xl pt-4";
  const inputClassName = "border border-gray-300 rounded-md px-3 py-2 mb-2 w-full text-black";
  const buttonClassName = "bg-blue-500 text-white px-4 py-2 rounded-md font-semibold text-xl hover:bg-blue-600 transition-colors duration-300 ease-in-out";

  return (
    <div>
      <form className={formClassName} action="mailto:blartenixstudio@gmail.com" method="post">
        <label htmlFor="email" className={labelClassName}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClassName}
        />
        <br />
        <label htmlFor="email" className={labelClassName}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClassName}
        />
        <br />
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full h-40 text-black"
        ></textarea>
        <br />
        <button
          type="submit"
          className={buttonClassName}
        >
          Send
        </button>
      </form>
    </div>
  );
}
