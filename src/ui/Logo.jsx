import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link className={className} to="dashboard">
      <img
        alt="Fortune Beatz Logo"
        className={`${className} max-h-14 max-w-14 lg:max-h-20 lg:max-w-20`}
        src="logo.webp"
      />
    </Link>
  );
}

export default Logo;
