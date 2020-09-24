import React from "react";

import CourseCard from "../course-card/course-card";
import ButtonPrimary from '../button/primary'

const PopularCourseList = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <CourseCard key={index} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
          <ButtonPrimary>view courses</ButtonPrimary>
      </div>
    </>
  );
};

export default PopularCourseList;
