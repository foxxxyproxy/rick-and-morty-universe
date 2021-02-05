import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ margin: "30vh auto", width: "95%", textAlign: "center" }}>
      <h2>Page not found</h2>
      <p>
        The page could not be found. <Link to="/">Go back</Link> to the home
        page?
      </p>
    </div>
  );
}
