import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/profile">Go to Profile</Link> |{" "}
        <Link to="/blog/123">Go to Blog 123</Link> |{" "}
        <Link to="/blog/abc">Go to Blog ABC</Link>
      </nav>
    </div>
  );
}
