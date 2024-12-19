import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link className={className} to="dashboard">
      <img
        alt="Fortune Beatz Logo"
        className={`${className} max-h-20 max-w-20`}
        src="logo.webp"
      />
    </Link>
  );
}

export default Logo;
