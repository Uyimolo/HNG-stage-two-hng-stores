import deliveryGirl from "../assets/images/delivery-coming.png";
import check from "../assets/icons/check.png";
import Button from "../components/reusables/Button";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="grid h-screen max-h-[700px] place-content-center gap-4 px-4 py-20 lg:max-h-[700px] lg:px-12 xl:px-16">
      <img src={deliveryGirl} alt="Rider on bike" />

      <div className="flex items-center justify-center space-x-3">
        <p className="text-xs font-bold xs:text-sm md:text-base">
          Your Delivery is on the Way
        </p>
        <img src={check} alt="" className="w-5 lg:w-6" />
      </div>

      <Link to="/" className="w-fit mx-auto">
        <Button variant="primary" className="">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Success;
