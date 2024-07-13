import { useState } from "react";
import Button from "../reusables/Button";

type PaymentFormProps = {
  setShowPaymentForm: (value: boolean) => void;
  setCheckoutEnabled: (value: boolean) => void;
};

const PaymentForm = ({
  setShowPaymentForm,
  setCheckoutEnabled,
}: PaymentFormProps) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formValues, setFormValues] = useState({
    cardNumber: "",
    expiryDate: "",
    password: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (!value) {
      error = `${name} is required`;
    } else {
      if (name === "cardNumber" && !/^\d{16}$/.test(value)) {
        error = "Card Number must be 16 digits";
      }
      if (name === "expiryDate" && !/^\d{2}\/\d{2}$/.test(value)) {
        error = "Expiry Date must be in MM/YY format";
      }
      if (name === "cvv" && !/^\d{3,4}$/.test(value)) {
        error = "CVV must be 3 or 4 digits";
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let allValid = true;
    const newErrors: { [key: string]: string } = {};

    // Validate all fields
    Object.keys(formValues).forEach((key) => {
      const value = formValues[key as keyof typeof formValues];
      validateField(key, value);

      if (!value) {
        newErrors[key] = `${key} is required`;
        allValid = false;
      }
    });

    // Check for any existing errors
    Object.keys(newErrors).forEach((key) => {
      if (newErrors[key]) {
        allValid = false;
      }
    });

    setErrors(newErrors);

    if (allValid) {
      setInterval(() => {
         setShowPaymentForm(false);
         setCheckoutEnabled(true);
      }, 2000 )
     
    }
  };

  const formInputClass =
    "bg-gray rounded-md py-2 text-xs placeholder:text-[10px] pl-4 lg:py-3 lg:text-sm lg:placeholder:text-sm";

  return (
    <div className="max-w-[17rem] space-y-2 px-4 lg:max-w-[25rem]">
      <div className="">
        <form action="" className="grid grid-cols-[60%,37%] gap-2">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formValues.cardNumber}
            onChange={handleInputChange}
            className={formInputClass}
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date"
            value={formValues.expiryDate}
            onChange={handleInputChange}
            className={formInputClass}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleInputChange}
            className={formInputClass}
          />
          <input
            type="text"
            name="cvv"
            placeholder="cvv"
            value={formValues.cvv}
            onChange={handleInputChange}
            className={formInputClass}
          />
        </form>
      </div>
      <div className="" onClick={handleSubmit}>
        <Button variant="primary" className="min-w-full lg:h-10 lg:min-w-full">
          Confirm
        </Button>
      </div>
      <div className="text-[10px] text-red-500">
        <p>{errors.cvv && errors.cvv}</p>
        <p>{errors.cardNumber && errors.cardNumber}</p>
        <p>{errors.password && errors.password}</p>
        <p>{errors.expiryDate && errors.expiryDate}</p>
      </div>
    </div>
  );
};

export default PaymentForm;
