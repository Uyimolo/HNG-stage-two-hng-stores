import Logo from "../Logo";
import hamburgerIcon from "../../assets/icons/ic_baseline-menu.svg";
import notificationIcon from "../../assets/icons/zondicons_notification.svg";
import Search from "./Search";
import Navigation from "./Navigation";
import { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { cn } from "../../utilities/cn";
import Button from "../reusables/Button";
import cartIcon from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const {cartItems} = useContext(CartContext)

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-20 grid w-full gap-6 bg-white px-4 py-4 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12 xl:px-16",
      )}
    >
      <div>
        <Logo variant="header" />
      </div>
      {/* nav component */}

      <Navigation showNav={showNav} setShowNav={setShowNav} />
      {showNav && (
        <div
          className="fixed bottom-0 left-0 top-0 h-screen w-full bg-neutral-700/10 lg:hidden"
          onClick={() => setShowNav(false)}
        ></div>
      )}
      {/* -----icons-------- */}

      <div className="order-2 flex w-fit space-x-2 justify-self-end lg:order-4">
        <Link to="/cart" className="relative hidden lg:block">
          <img
            src={cartIcon}
            alt=""
            className="hidden w-[22px] min-w-[22px] lg:block"
          />
          <p className="absolute -right-1 -top-2 grid aspect-square w-4 place-content-center rounded-full bg-primary text-[12px] text-white">
            {cartItems.length}
          </p>
        </Link>
        <img
          src={hamburgerIcon}
          className="w-[22px] lg:hidden"
          alt="navigation menu toggle button"
          onClick={() => setShowNav(true)}
        />

        <img
          src={notificationIcon}
          alt="notification icon"
          className="min-w-[22px]"
        />
      </div>
      {/* search component */}
      <Search
        className={cn("", isDesktop ? "order-3" : "order-4 col-span-2")}
      />

      <div className="order-5 hidden items-center space-x-2 lg:flex">
        <Button variant="outline">Log in</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
