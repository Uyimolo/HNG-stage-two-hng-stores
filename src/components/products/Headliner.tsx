import baloon from "../../assets/images/white-pastel-pink-balloons 1.png";
import phone from "../../assets/images/elegant-smartphone.png";
import smilingCustomer from "../../assets/images/positive-overjoyed.png";
import frame from "../../assets/images/Rectangle 12.png";
const Headliner = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
      <div className="mx-auto max-w-[1800px]">
        <img src={frame} alt="" className="absolute right-0 h-full w-[45%]" />
        <div className="grid max-w-[1800px] grid-cols-[55%,1fr] justify-between">
          {/* left items */}
          <div className="grid grid-cols-[1fr,60%] items-center">
            <img src={baloon} alt="" className="xl:w-[18vw]" />

            {/* text */}
            <div className="-translate-x- space-y-3 font-nunito text-white">
              <h2 className="w-fit text-nowrap bg-orange px-1 text-[3vw] 2xl:text-6x">
                <span className="italic">70%</span> DISCOUNT
              </h2>
              <div>
                <h1 className="text-[2.6vw] 2xl:text-4xl">IPHONE 15 PRO MAX</h1>
                <h3 className="text-[2.4vw] line-through decoration-yellow 2xl:text-[2.2em">
                  <span className="line-through decoration-double">N</span>{" "}
                  3,500,000
                </h3>
                <h3 className="text-[2.4vw] 2xl:text-[2.2em">
                  <span className="line-through decoration-double">N</span>{" "}
                  2,500,00
                </h3>
              </div>
              <h2 className="w-fit text-nowrap bg-orange px-1 text-center text-[2.2vw] 2xl:text-[2em]">
                T&C Applies
              </h2>
            </div>
          </div>

          <div className="relative">
            <img
              src={phone}
              alt=""
              className="absolute -bottom-1 -left-[8%] z-10 w-[60%]"
            />
            <img
              src={smilingCustomer}
              alt=""
              className="min-w-[110%] translate-x-[5%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headliner;
