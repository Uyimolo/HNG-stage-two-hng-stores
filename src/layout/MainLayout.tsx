import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/mainLayout/Header";
import Footer from "../components/mainLayout/Footer";

const MainLayout = () => {
  return (
    <div className="pt-6 max-w-[1800px] mx-auto">
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
