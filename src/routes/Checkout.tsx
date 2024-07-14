import { useState } from "react";
import CheckoutDetails from "../components/checkout/CheckoutDetails";
import CheckoutForm from "../components/checkout/CheckoutForm";
import Container from "../layout/Container";

const formInfo = [
  { label: "First Name", value: "" },
  { label: "Last Name", value: "" },
  { label: "Street", value: "" },
  { label: "State", value: "" },
  { label: "Postal Code", value: "" },
  { label: "Phone Number", value: "" },
];

type FormField = {
  label: string;
  value: string;
}[];
const Checkout = () => {
  const [showDetails, setShowDetails] = useState<boolean>(true);
  const [checkoutFormValid, setCheckoutFormValid] = useState<boolean>(false);

  const [formInfoDetails, setFormInfoDetails] = useState<FormField>(formInfo);

  return (
    <main className="pt-1">
      <Container>
        {showDetails ? (
          <CheckoutDetails
            street={formInfoDetails[2].value}
            phoneNumber={formInfoDetails[5].value}
            setShowDetails={setShowDetails}
            checkoutFormValid={checkoutFormValid}
          />
        ) : (
          <CheckoutForm
            formInfoDetails={formInfoDetails}
            setShowDetails={setShowDetails}
              setFormInfoDetails={setFormInfoDetails}
              setCheckoutFormValid={setCheckoutFormValid}
          />
        )}
      </Container>
    </main>
  );
};

export default Checkout;
