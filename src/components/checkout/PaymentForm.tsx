import Button from "../reusables/Button";

type PaymentFormProps = {
  setShowPaymentForm: (value: boolean) => void;
};

const PaymentForm = ({ setShowPaymentForm }: PaymentFormProps) => {
  const formInputClass = "bg-gray rounded-md placeholder:text-[10px] pl-4 lg:py-1 lg:placeholder:text-sm";

  return (
    <div className="max-w-[17rem] space-y-2 px-4 lg:max-w-[25rem]">
      <div className="">
        <form action="" className="grid grid-cols-[60%,37%] gap-2">
          <input
            type="text"
            placeholder="Card Number"
            className={formInputClass}
          />
          <input
            type="text"
            placeholder="Expiry Date"
            className={formInputClass}
          />
          <input
            type="text"
            placeholder="Password"
            className={formInputClass}
          />
          <input type="text" placeholder="cvv" className={formInputClass} />
        </form>
      </div>
      <div className="" onClick={() => setShowPaymentForm(false)}>
        <Button variant="primary" className="min-w-full lg:min-w-full">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
