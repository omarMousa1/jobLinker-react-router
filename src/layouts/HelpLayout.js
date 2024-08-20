import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>How Can We Assist You?</h2>
      <p>
        We’re here to provide you with all the assistance you need to make the
        most of our platform. Whether you’re having trouble navigating the site,
        need help with your job applications, or have questions about your
        account, our comprehensive Help section has you covered. Our goal is to
        ensure that your experience on JobLinker is smooth, straightforward, and
        successful.
      </p>

      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
