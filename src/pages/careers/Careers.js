import { useLoaderData, Link } from "react-router-dom";

export const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

// loader function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:9000/careers");

  if (!res.ok) {
    throw new Error(
      "Failed to retrieve career data. Please check the request or try again later."
    );
  }

  return res.json();
};
