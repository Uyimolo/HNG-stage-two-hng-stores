import React, { useState } from "react";
import Button from "../reusables/Button";
import { cn } from "../../utilities/cn";

type FormField = {
  label: string;
  value: string;
};

type FormInfo = {
  setShowDetails: (details: boolean) => void;

  setFormInfoDetails: (details: FormField[]) => void;

  formInfoDetails: FormField[];
  setCheckoutFormValid: (isValid: boolean) => void;
};

const CheckoutForm = ({
  setShowDetails,
  setFormInfoDetails,
  formInfoDetails,
  setCheckoutFormValid,
}: FormInfo) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleFormData = (label: string, value: string) => {
    setFormInfoDetails(
      formInfoDetails.map((field) =>
        field.label === label ? { ...field, value: value } : field,
      ),
    );
    validateField(label, value);
  };

  const validateField = (label: string, value: string) => {
    let error = "";
    if (!value.trim()) {
      error = `${label} is required`;
    } else {
      switch (label) {
        case "First Name":
          if (!/^[a-zA-Z\s]+$/.test(value)) {
            error = "Name should contain only letters and spaces";
          }
          break;
        case "Last Name":
          if (!/^[a-zA-Z\s]+$/.test(value)) {
            error = "Name should contain only letters and spaces";
          }
          break;
        case "Phone Number":
          if (!/^\+?\d{10,15}$/.test(value)) {
            error =
              "Phone Number should be a valid phone number with 10 to 15 digits";
          }
          break;
        case "Postal Code":
          if (!/^\d{5,10}$/.test(value)) {
            error =
              "Postal Code should contain only digits and be between 5 to 10 characters long";
          }
          break;
        default:
          break;
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [label]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let allValid = true;
    const newErrors: { [key: string]: string } = {};

    formInfoDetails.forEach((field) => {
      if (!field.value) {
        newErrors[field.label] = `${field.label} is required`;
        allValid = false;
      } else {
        let error = "";
        switch (field.label) {
          case "Name":
            if (!/^[a-zA-Z\s]+$/.test(field.value)) {
              error = "Name should contain only letters and spaces";
            }
            break;
          case "Phone Number":
            if (!/^\+?\d{10,15}$/.test(field.value)) {
              error =
                "Phone Number should be a valid phone number with 10 to 15 digits";
            }
            break;
          case "Postal Code":
            if (!/^\d{5,10}$/.test(field.value)) {
              error =
                "Postal Code should contain only digits and be between 5 to 10 characters long";
            }
            break;
          default:
            break;
        }
        if (error) {
          newErrors[field.label] = error;
          allValid = false;
        }
      }
    });

    if (allValid) {
      setShowDetails(true);
      setCheckoutFormValid(true);
    } else {
      setShowDetails(true);

      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl lg:max-w-2xl">
      <h2 className="text-base lg:text-lg font-bold">Shipping Details</h2>
      <div className="grid gap-4  pb-20 pt-10 md:px-0">
        {formInfoDetails.map((field) => (
          <div key={field.label} className="flex flex-col">
            <input
              type="text"
              id={field.label}
              placeholder={field.label}
              value={field.value}
              className={cn(
                "h-12 w-full rounded-md bg-gray pl-4 text-xs placeholder:text-neutral-500 lg:text-sm",
                errors[field.label]
                  ? "border border-red-500"
                  : !field.value.length
                    ? ""
                    : "border-2 border-primary",
              )}
              onChange={(e) => handleFormData(field.label, e.target.value)}
            />
            {errors[field.label] && (
              <p className="mt-1 text-xs text-red-500">{errors[field.label]}</p>
            )}
          </div>
        ))}

        <Button
          type="submit"
          variant="primary"
          className="h-12 min-w-full lg:min-w-full"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
