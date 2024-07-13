import logo from "../assets/images/Frame 40.svg";
import footerLogo from "../assets/images/Frame 40-footer.svg";

interface logoProps {
  variant: "header" | "footer";
}
const Logo = ({ variant }: logoProps) => {
  if (variant === "header") {
    return (
      <img
        src={logo}
        alt="HNG Stores"
        className="w-[53px] md:w-[80px] lg:w-[13rem]"
      />
    );
  }
  return (
    <img
      src={footerLogo}
      alt="HNG Stores"
      className="w-[53px] md:w-[80px] lg:w-[13rem]"
    />
  );
};

export default Logo;
