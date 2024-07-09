import { NavLink, useLocation } from "react-router-dom";
import Button from "../reusables/Button";
import closeNav from "../../assets/icons/close.svg";
import { useMediaQuery } from "react-responsive";
import { useContext, useEffect } from "react";
import { cn } from "../../utilities/cn";
import CartContext from "../../context/CartContext";
import { motion } from "framer-motion";
interface NavigationProps {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navigation = ({ showNav, setShowNav }: NavigationProps) => {
  const location = useLocation();
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

  const isPathActive = (path: string, linkName: string) => {
    if (linkName === "Products" ) {
      return false;
    }
    return location.pathname === path;
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={!isDesktop ? { x: showNav ? 0 : "-100%" } : { x: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      className={cn(
        "absolute top-1/2 z-20 block w-[199px] border border-primary bg-white lg:relative lg:top-0 lg:w-auto lg:translate-x-0 lg:border-none",
        showNav ? "" : "",
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
                className={cn(
                  "px-4 hover:text-primary lg:px-2 lg:text-sm xl:text-base",
                  nav.label === "Cart" ? "hidden" : "",
                  isPathActive(nav.path, nav.label) ? "text-primary" : "",
                )}
              >
                {nav.label}
              </p>
            ) : (
              <Button
                variant="outline"
                className={isPathActive(nav.path, nav.label) ? "bg-primary text-white" : ""}
              >
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
    </motion.div>
  );
};

export default Navigation;
