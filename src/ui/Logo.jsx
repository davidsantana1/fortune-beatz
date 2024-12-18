import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="dashboard">
      <img className="max-h-20 max-w-20" src="logo.webp" />
    </Link>
  );
}

export default Logo;
