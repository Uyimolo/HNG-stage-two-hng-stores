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
  const handleFormData = (label: string, value: string) => {
    setFormInfoDetails(
      formInfoDetails.map((field) =>
        field.label === label ? { ...field, value: value } : field,
      ),
    );
  };
  return (
    <form
      action=""
      className="mx-auto grid max-w-2xl gap-4 px-4 pb-20 pt-28 lg:px-12 xl:px-16"
    >
      {formInfoDetails.map((field) => (
        <input
          key={field.label}
          type="text"
          id={field.label}
          placeholder={field.label}
          value={field.value}
          className="h-12 w-full rounded-md bg-gray pl-4 placeholder:text-neutral-500"
          onChange={(e) => handleFormData(field.label, e.target.value)}
        />
      ))}

      <div className="" onClick={() => setShowDetails(true)}>
        <Button variant="primary" className="h-12 min-w-full lg:min-w-full">
          Save
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
