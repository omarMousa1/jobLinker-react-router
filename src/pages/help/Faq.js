import React from "react";

export const Faq = () => {
  return (
    <div className="faq">
      <h3>Frequently Asked Questions</h3>

      <div className="question">
        <p>
          <strong>Getting Started with JobLinker</strong> <br />
        </p>
        <p>
          <strong className="subFAQ">
            How do I create an account on JobLinker?
          </strong>
        </p>
        <p className="desFAQ">
          To create an account, simply click on the "Sign Up" button on the
          homepage, enter your details, and follow the prompts. You can also
          sign up using your LinkedIn or Google account for added convenience.
        </p>

        <p>
          <strong className="subFAQ">
            How do I search for jobs on JobLinker?
          </strong>
        </p>
        <p className="desFAQ">
          Use our advanced search filters to find jobs that match your criteria.
          You can search by job title, location, industry, and more. Once you
          find a job you’re interested in, click "Apply" to submit your
          application directly through our platform.
        </p>
        <p>
          <strong className="subFAQ">
            How do I save jobs or set up job alerts?
          </strong>
        </p>
        <p className="desFAQ">
          You can save jobs by clicking the "Save" button on any job listing. To
          set up job alerts, go to your account settings and configure alerts
          based on your preferred job criteria. We’ll notify you via email
          whenever a new job matches your preferences.
        </p>
      </div>

      <div className="question">
        <p>
          <strong>Account and Profile Management</strong> <br />
        </p>

        <p>
          <strong className="subFAQ">How do I update my profile?</strong>
        </p>
        <p className="desFAQ">
          To update your profile, log in to your account, click on your profile
          picture or name in the top-right corner, and select "Edit Profile."
          Here, you can update your resume, add new skills, and ensure your
          information is up to date.
        </p>

        <p>
          <strong className="subFAQ">
            What should I do if I forget my password?
          </strong>
        </p>
        <p className="desFAQ">
          If you forget your password, click on the "Forgot Password?" link on
          the login page. Enter your email address, and we’ll send you a link to
          reset your password.
        </p>

        <p>
          <strong className="subFAQ">
            How can I deactivate or delete my account?
          </strong>
        </p>
        <p className="desFAQ">
          If you wish to deactivate or delete your account, please contact our
          support team via the Help Center. We’ll assist you in processing your
          request.
        </p>
      </div>

      <div className="question">
        <p>
          <strong>Job Applications and Interviews</strong> <br />
        </p>
        <p>
          <strong className="subFAQ">
            How do I know if my application was received?
          </strong>
        </p>
        <p className="desFAQ">
          After you apply for a job, you will receive a confirmation email from
          JobLinker. You can also check the status of your application in the
          "My Applications" section of your account.
        </p>

        <p>
          <strong className="subFAQ">
            What should I do if I don’t hear back after applying for a job?
          </strong>
        </p>
        <p className="desFAQ">
          If you haven’t heard back within a few weeks, consider reaching out to
          the employer directly. We also recommend applying to multiple
          positions to increase your chances of finding a job.
        </p>
        <p>
          <strong className="subFAQ">
            How can I prepare for an interview?
          </strong>
        </p>
        <p className="desFAQ">
          JobLinker offers a variety of resources to help you prepare for
          interviews, including articles, tips, and sample questions. Visit our
          Help Center to access these resources and boost your confidence before
          the big day.
        </p>
      </div>
    </div>
  );
};
