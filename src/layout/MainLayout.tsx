import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/mainLayout/Header";
import Footer from "../components/mainLayout/Footer";

const MainLayout = () => {
  return (
    <div className="pt-6  mx-auto">
      <Header />
      <div className="">
        <Outlet />
        </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
