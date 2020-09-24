import React from "react";
import CourseThumbnail from "../../assets/images/sean-kong-491810-unsplash.jpg";

const course = {
  author: "Martin Luthar",
  rating: 4,
  title: "European Paintings: From Leonar do to Rembrandt",
  description:
    "You need to be sure there isn't any the embarrassing hidden in middle.",
  students_enrolled: 145,
  review_count: 5,
  price: 42,
  thumbnail: CourseThumbnail,
};

const CourseCard = () => {
  return (
    <div className="bg-brand bg-opacity-02 rounded-md overflow-hidden transition duration-200 hover:bg-white shadow-none hover:shadow-lg group">
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${course.thumbnail})`,
          paddingBottom: "54.333%",
        }}
      >
        <div className="absolute p-5 bottom-0 right-0">
          <span className="group-hover:text-white group-hover:bg-gold rounded-full h-16 w-16 flex items-center justify-center font-bold font-poppins text-gold bg-white transition duration-200">
            ${course.price}
          </span>
        </div>
      </div>
      <div className="py-8 px-6">
        <div className="flex items-center justify-between">
          <span className="text-body text-xs">By {course.author}</span>
          <div className="flex">
            {[...Array(course.rating)].map((n, index) => (
              <svg
                key={index}
                className="text-gold w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="mt-3 text-lg font-medium font-poppins">{course.title}</p>
        <p className="mt-2 text-body font-poppins">{course.description}</p>
        <div className="flex mt-6 justify-between">
          <div className="flex items-center">
            <span className="text-xs text-body font-poppins pr-3 mr-3 border-r border-body border-opacity-10">
              {course.students_enrolled} students
            </span>
            <span className="text-xs text-body font-poppins">
              {course.review_count} Reviews
            </span>
          </div>
          <span className="font-poppins font-medium text-body group-hover:text-gold transition duration-200">
            Apply Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
