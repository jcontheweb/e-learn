import React from "react";

import List from './data/list'
import SpecialtyCard from "../specialty-card/specialty-card"

const SpecialtyCardList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {List.map((item, index) => (<SpecialtyCard item={item} key={index} />))}
    </div>
  );
};

export default SpecialtyCardList;
