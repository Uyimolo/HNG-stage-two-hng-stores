import React, { useState } from "react";
import Button from "../reusables/Button";

type FormField = {
  label: string;
  value: string;
};

type FormInfo = {
  setShowDetails: (details: boolean) => void;
  setFormInfoDetails: (details: FormField[]) => void;
  formInfoDetails: FormField[];
};

const CheckoutForm = ({
  setShowDetails,
  setFormInfoDetails,
  formInfoDetails,
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
    if (!value) {
      error = `${label} is required`;
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
      }
    });

    if (allValid) {
      setShowDetails(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto grid max-w-2xl gap-4 px-4 pb-20 pt-28 lg:px-12 xl:px-16"
    >
      {formInfoDetails.map((field) => (
        <div key={field.label} className="flex flex-col">
          <input
            type="text"
            id={field.label}
            placeholder={field.label}
            value={field.value}
            className="h-12 w-full rounded-md bg-gray pl-4 text-xs placeholder:text-neutral-500 lg:text-sm"
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
    </form>
  );
};

export default CheckoutForm;
