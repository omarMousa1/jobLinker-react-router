import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Sorry, the page you are looking for does not exist or may have been
        moved or deleted.
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};
