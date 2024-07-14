import logo from "../assets/images/Frame 40.svg";
import footerLogo from "../assets/images/Frame 40-footer.svg";
import { Link } from "react-router-dom";

interface logoProps {
  variant: "header" | "footer";
}
const Logo = ({ variant }: logoProps) => {
  if (variant === "header") {
    return (
      <Link to="/">
        <img
          src={logo}
          alt="HNG Stores"
          className="w-[80px] lg:w-[13rem]"
        />
      </Link>
    );
  }
  return (
    <Link to="/">
      <img
        src={footerLogo}
        alt="HNG Stores"
        className="w-[80px] lg:w-[13rem]"
      />
    </Link>
  );
};

export default Logo;
