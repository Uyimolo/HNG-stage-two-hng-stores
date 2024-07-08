import { useState } from "react";
import CheckoutDetails from "../components/checkout/CheckoutDetails";
import CheckoutForm from "../components/checkout/CheckoutForm";

const formInfo = [
  { label: "First Name", value: "" },
  { label: "Last Name", value: "" },
  { label: "Street", value: "4 Banana Street, Magodo Brooks, Lagos State." },
  { label: "State", value: "" },
  { label: "Postal Code", value: "" },
  { label: "Phone Number", value: "09134225053" },
];

type FormField = {
  label: string;
  value: string;
}[];
const Checkout = () => {
  const [showDetails, setShowDetails] = useState<boolean>(true);

  const [formInfoDetails, setFormInfoDetails] = useState<FormField>(formInfo);

  return (
    <div className="">
      {showDetails ? (
        <CheckoutDetails
          street={formInfoDetails[2].value}
          phoneNumber={formInfoDetails[5].value}
          setShowDetails={setShowDetails}
        />
      ) : (
        <CheckoutForm
          formInfoDetails={formInfoDetails}
          setShowDetails={setShowDetails}
          setFormInfoDetails={setFormInfoDetails}
        />
      )}
    </div>
  );
};

export default Checkout;
