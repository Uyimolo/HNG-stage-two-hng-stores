import notFound from "../assets/images/page-not-found.png";
import check from "../assets/icons/check.png";
import Button from "../components/reusables/Button";
import { Link, ScrollRestoration } from "react-router-dom";
import Header from "../components/mainLayout/Header";
import Footer from "../components/mainLayout/Footer";
const NotFound = () => {
  return (
    <div className="relative">
      <Header />
      <div className="mx-auto grid min-h-[700px] place-content-center gap-4 px-4 py-20 lg:px-12 xl:px-16 2xl:max-w-[1800px]">
        <img
          src={notFound}
          alt="Rider on bike"
          className="mx-auto w-full max-w-[700px]"
        />

        <div className="flex items-center justify-center space-x-3">
          <p className="text-xs font-bold xs:text-sm md:text-base">
            Something went wrong!
          </p>
          <img src={check} alt="" className="w-5 lg:w-6" />
        </div>

        <Link to="/" className="mx-auto w-fit">
          <Button variant="primary" className="">
            Back to Home
          </Button>
        </Link>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default NotFound;
