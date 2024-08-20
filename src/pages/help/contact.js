import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

export const Contact = () => {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>We’re Here to Help!</h3>
      <p>
        At JobLinker, your satisfaction is our top priority. Whether you have
        questions about using our platform, need assistance with your account,
        or have feedback you'd like to share, we’re here to listen and help. Our
        dedicated support team is committed to providing prompt and effective
        solutions to ensure you have the best experience possible.
      </p>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export const contantAction = async ({ request }) => {
  const data = await request.formData();

  const Submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  // send post request
  const emailVal =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  if (!Submission.email || !emailVal.test(Submission.email)) {
    return { error: "Please provide a valid email address." };
  }

  // Validate message
  if (!Submission.message.length || Submission.length < 10) {
    return { error: "Message must be at least 10 characters long." };
  }

  //redirect the user
  return redirect("/");
};
