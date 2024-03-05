import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img className="w-60 h-15" src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
