import React from "react";

const SubscribeCta = () => {
  return (
    <div className="bg-brandDark rounded-md py-12 px-16">
      <div className="flex items-center">
        <div className="max-w-md">
          <p className="font-medim text-white text-3xl font-poppins">
            Subscribe to Us!
          </p>
          <p className="mt-4 text-lg text-white">
            There are many variations of passages of Lorem Ipsum but the
            majority have suffered alteration.
          </p>
        </div>
        <div className="p-2 bg-white rounded-full flex-1 ml-8 flex items-center">
            <input placeholder="Email here" type="text" className="flex-1 focus:outline-none px-5"/>
            <button className="rounded-full px-12 py-4 font-poppins text-sm text-white leading-none bg-brand">Send</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeCta;
