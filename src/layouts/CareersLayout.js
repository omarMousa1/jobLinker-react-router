import React from "react";
import { Outlet } from "react-router-dom";

export const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Discover Your Dream Career with JobLinker &#128640;</h2>
      <p>
        Welcome to the JobLinker Career Center, where your professional
        aspirations take center stage. Our platform is meticulously designed to
        provide you with comprehensive insights into a wide array of career
        paths across diverse industries.
        <br />
        Whether you're embarking on your career journey or considering a
        strategic transition, we offer the resources and guidance to help you
        make informed decisions that align with your skills, passions, and
        long-term goals. Explore our curated content and discover the
        opportunities that will shape your future success.
      </p>

      <Outlet />
    </div>
  );
};
