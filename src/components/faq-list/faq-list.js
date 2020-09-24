import React from "react";

import FAQListItem from "../faq-list-item/faq-list-item";

const FAQList = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((n, index) => (
        <div className="mt-8" key={index}>
          <FAQListItem />
        </div>
      ))}
    </div>
  );
};

export default FAQList;
