import { NavLink } from "react-router-dom";
import Button from "../reusables/Button";
import closeNav from "../../assets/icons/close.svg";
import { useMediaQuery } from "react-responsive";
import { useContext, useEffect } from "react";
import { cn } from "../../utilities/cn";
import CartContext from "../../context/CartContext";
interface NavigationProps {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navigation = ({ showNav, setShowNav }: NavigationProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { cartItems } = useContext(CartContext);
  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Cart", path: "/cart" },
  ];

  useEffect(() => {
    isDesktop && setShowNav(false);
  }, [isDesktop, setShowNav]);

  return (
    <div
      className={cn(
        "absolute z-10 block w-[199px] border border-primary bg-white lg:relative lg:top-0 lg:w-auto lg:translate-x-0 lg:border-none",
        showNav ? "top-1/2 block" : "hidden lg:block",
      )}
    >
      <img
        src={closeNav}
        alt=""
        className="absolute right-4 top-4 w-full max-w-[16px] lg:hidden"
        onClick={() => setShowNav(false)}
      />
      <nav className="flex flex-col items-center space-y-2 pb-6 pt-16 lg:flex-row lg:space-y-0 lg:p-0">
        {navigationItems.map((nav) => (
          <NavLink
            key={nav.label}
            to={nav.path}
            className="w-fit"
            onClick={() => setShowNav(false)}
          >
            {isDesktop ? (
              <p
                className={
                  nav.label === "Cart"
                    ? "hidden"
                    : "px-4 lg:px-2 lg:text-sm xl:text-base"
                }
              >
                {nav.label}
              </p>
            ) : (
              <Button variant="outline">
                {nav.label}{" "}
                {`${nav.label === "Cart" ? `(${cartItems.length.toString()})` : ""}`}
              </Button>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-col items-center space-y-2 border-t-2 border-yellow py-6 lg:hidden">
        <Button variant="outline">Log in</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </div>
  );
};

export default Navigation;
