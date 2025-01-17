import { useLoaderData, useParams } from "react-router-dom";

export const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <p>Details: {career.details}</p>
    </div>
  );
};

// data loader
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:9000/careers/" + id);

  if (!res.ok) {
    throw Error(
      "Failed to retrieve career details. The requested career might not exist or there may be an issue with the server."
    );
  }

  return res.json();
};
