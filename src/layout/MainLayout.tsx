import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/mainLayout/Header";
import Footer from "../components/mainLayout/Footer";

const MainLayout = () => {
  return (
    <div className="mx-auto pt-6 lg:overflow-visible">
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
