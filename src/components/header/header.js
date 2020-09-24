import React from "react";
import { Link } from "react-router-dom";

import ButtonSecondary from "../button/secondary";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between absolute inset-x-0 top-0 z-50 text-white py-8">
        <span className="font-bold text-2xl">E-learn</span>
        <ul className="flex items-center font-medium font-poppins">
          <li className="mr-8">
            <Link to="/">Features</Link>
          </li>
          <li className="mr-8">
            <Link to="/">Pricing</Link>
          </li>
          <li className="mr-8">
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/">News</Link>
          </li>
        </ul>
        <ul className="flex items-center font-poppins">
          <li className="mr-8">
            <Link to="/">Log In</Link>
          </li>
          <li>
            <ButtonSecondary>Sign Up</ButtonSecondary>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
