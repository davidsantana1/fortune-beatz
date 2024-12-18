import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link className={className} to="dashboard">
      <img className={`${className} max-h-20 max-w-20`} src="logo.webp" />
    </Link>
  );
}

export default Logo;
