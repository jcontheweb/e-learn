import React, { useState } from "react";

const FAQListItem = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-left py-10 px-8 flex justify-between bg-brandDarker bg-opacity-10 rounded-md focus:outline-none focus:shadow-outline text-white text-lg w-full"
      >
        <div>
          <p className="font-poppins font-semibold">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roo
          </p>
          {expanded && (
            <p className="mt-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          )}
        </div>

        <span className="ml-8">
          <svg
            className={`w-6 transform ${expanded ? 'rotate-90' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
    </>
  );
};

export default FAQListItem;
