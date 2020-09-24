import React from "react";

import HeroBL from "../assets/images/hero-bl.svg";
import HeroT from "../assets/images/hero-t.svg";
import HeroMain from "../assets/images/hero-main.svg";

import Heading from "../components/heading/heading";
import SpecialtyCardList from "../components/specialty-card-list/specialty-card-list";
import PopularCourseList from "../components/popular-course-list/popular-course-list";
import FAQList from "../components/faq-list/faq-list";
import ButtonPrimary from "../components/button/primary";

import ComputerImage from "../assets/images/computer.svg";
import JumpingImage from "../assets/images/jumping.svg";
import VideoThumbnail from "../assets/images/2458.jpg";
import FAQBackground from "../assets/images/faq-background.svg";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-brand relative overflow-hidden flex items-center">
        <img
          className="pointer-events-none absolute bottom-0 left-0"
          src={HeroBL}
          alt=""
        />
        <img
          className="pointer-events-none absolute z-10"
          src={HeroMain}
          style={{ top: "50%", transform: "translateY(-50%)", right: "-60px" }}
          alt=""
        />
        <img
          src={HeroT}
          alt=""
          className="pointer-events-none absolute top-0 right-0"
        />
        <div className="container relative text-white z-10">
          <div className="max-w-xl relative">
            <p className="font-poppins font-semibold">Online Education</p>
            <h1 className="font-poppins text-5xl font-semibold mt-1 leading-tight">
              Gather Knowledge Without Leaving Home
            </h1>
            <p className="text-lg mt-4">
              With online education, you can take any program or course present
              in traditional four-year universities.
            </p>
            <div className="flex mt-10">
              <input
                placeholder="Search Your Favourite Courses"
                type="text"
                className="text-black font-poppins focus:outline-none flex-1 rounded px-5 py-4 leading-none text-sm"
              />
              <button className="bg-gold text-white px-4 rounded ml-3 focus:outline-none">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="my-32">
        <div className="container">
          <Heading
            className="text-center mx-auto max-w-2xl"
            subheading="our speciality"
            heading="Learn new skills & advance your career"
            description="You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend"
          />

          <div className="mt-12">
            <SpecialtyCardList />
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="container">
          <Heading
            className="text-center mx-auto max-w-2xl"
            heading="Popular online courses"
            description="You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend"
          />

          <div className="mt-12">
            <PopularCourseList />
          </div>
        </div>
      </section>

      <section className="my-32 relative">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <img src={JumpingImage} alt="" />
            </div>
            <div className="flex-1 pl-12">
              <Heading
                className="max-w-2xl"
                heading="Get the limitless learning with more possibilities"
                description="you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat."
              />
              <div className="mt-8">
                <ButtonPrimary>try it now</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32 relative">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex-1 pr-12">
              <Heading
                className="max-w-2xl"
                heading="Get the limitless learning with more possibilities"
                description="you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat."
              />
              <div className="mt-8">
                <ButtonPrimary>try it now</ButtonPrimary>
              </div>
            </div>
            <div className="flex-1">
              <img src={ComputerImage} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 relative bg-brand bg-opacity-04">
        <div className="flex items-center">
          <div className="relative">
            <img src={VideoThumbnail} alt="" />
            <div className="absolute inset-0 bg-brand bg-opacity-50 flex items-center justify-center">
              <button className="bg-brand h-16 w-16 rounded-full text-white flex items-center justify-center focus:outline-none relative">
                <span className="rounded-full absolute inset-0 bg-brand bg-opacity-50 transform scale-150"></span>
                <span className="rounded-full absolute inset-0 bg-brand bg-opacity-50 transform scale-125"></span>
                <svg
                  className="w-8 relative"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mx-40 max-w-xl w-full">
            <h2 className="font-semibold text-3xl text-black font-poppins">
              Get the limitless learning with more possibilities
            </h2>
            <div className="flex items-center justify-between font-poppins mt-10">
              <div>
                <p className="font-semibold text-3xl text-brand">45+</p>
                <p className="text-black font-medium">Running Courses</p>
              </div>
              <div>
                <p className="font-semibold text-3xl text-brand">72M+</p>
                <p className="text-black font-medium">Students Skilled</p>
              </div>
              <div>
                <p className="font-semibold text-3xl text-brand">120+</p>
                <p className="text-black font-medium">Skilled Instructors</p>
              </div>
            </div>
            <p className="text-body text-lg mt-10">
              you need to be sure there isn't anything embarrassing hidden in
              the middle of text. All the Lorem Ipsum generators on the Internet
              tend.
            </p>
            <div className="mt-10">
              <ButtonPrimary>read more</ButtonPrimary>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative pt-32 pb-64 bg-brand overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-02">
          <img className="pointer-events-none" src={FAQBackground} alt="" />
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-semibold text-3xl text-white font-poppins">
            Important Faq
          </h2>
          <p className="text-white text-lg mt-4">
            You need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
          </p>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <FAQList />
        </div>
      </section>
    </>
  );
};

export default HomePage;
