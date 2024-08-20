import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const About = () => {
  const [user, setUser] = useState("omar");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>Our Mission:</h2>
      <br />
      <spna className="title">Connecting Talent with Opportunity</spna>
      <p>
        JobLinker was founded on the belief that everyone deserves access to
        meaningful work. We understand that the job search process can be
        overwhelming, which is why we’ve created a platform that makes it easier
        for both job seekers and employers. Our mission is to bridge the gap
        between talent and opportunity, helping individuals find jobs they love
        while assisting companies in building strong teams.
      </p>
      <br />
      <spna className="title">
        A Platform Built by Professionals, for Professionals
      </spna>
      <p>
        Our team at JobLinker consists of industry experts who have been in your
        shoes. We've experienced the challenges of job searching and recruiting
        firsthand, which is why we’ve developed a platform that addresses these
        issues head-on. We’ve combined our knowledge and experience to create a
        user-friendly site that offers a seamless and efficient job search
        experience, making it easier for you to find the right match.
      </p>
      <br />
      <spna className="title">Committed to Your Success</spna>
      <p>
        At JobLinker, your success is our top priority. We are dedicated to
        continuously improving our platform to better serve your needs. Whether
        you are searching for a job or looking to hire, we offer a variety of
        tools and resources to support you throughout the process. Our goal is
        to empower you to achieve your career objectives, and we are here to
        assist you every step of the way.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};
