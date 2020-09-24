import React from "react";

import Blob from "../../assets/images/card-blob.svg";

const SpecialtyCard = ({ item }) => {
  return (
    <div className="py-12 px-6 rounded-md border border-brand border-opacity-10 text-center text-brandDarker font-poppins bg-white group hover:bg-brand hover:text-white transition duration-200">
      <div className="relative">
        <img className="mx-auto pointer-events-none" src={Blob} alt="" />
        <span className="absolute-center" dangerouslySetInnerHTML={{ __html: item.icon }}></span>
      </div>
      <p className="font-medium text-black mt-4 group-hover:text-white">
        {item.heading}
      </p>
      <p className="text-sm mt-2 text-body group-hover:text-white">
        {item.description}
      </p>
    </div>
  );
};

export default SpecialtyCard;
