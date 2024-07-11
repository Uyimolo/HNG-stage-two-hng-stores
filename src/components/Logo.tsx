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
        className="w-[53px] md:w-[70px] lg:min-w-[114px] lg:max-w-[114px]"
      />
    );
  }
  return (
    <img
      src={footerLogo}
      alt="HNG Stores"
      className="translx-4 min-w-[53px] max-w-[53px] md:w-[70px] lg:min-w-[114px]"
    />
  );
};

export default Logo;
