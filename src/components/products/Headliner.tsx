import baloon from "../../assets/images/white-pastel-pink-balloons 1.png";
import phone from "../../assets/images/elegant-smartphone.png";
import smilingCustomer from "../../assets/images/positive-overjoyed.png";
import frame from "../../assets/images/Rectangle 12.png";
const Headliner = () => {
  return (
    <div className="relative bg-primary">
      {/*inner container */}
      <div className="">
        <img src={frame} alt="" className="absolute right-0 h-full w-[50%]" />
        <div className="grid grid-cols-[55%,1fr] justify-between">
          {/* left items */}
          <div className="relative grid grid-cols-[1fr,60%] items-center">
            <img
              src={baloon}
              alt=""
              className="w-[17vw] lg:absolute lg:left-[-3vw] lg:top-[45%] lg:w-[19vw] lg:-translate-y-1/2"
            />

            {/* text */}
            <div className="z-10 -translate-x-[13%] space-y-[3vw] font-nunito text-white lg:translate-x-[58%] lg:space-y-3">
              <h2 className="w-fit text-nowrap bg-orange px-1 text-[3vw]">
                <span className="italic">70%</span> DISCOUNT
              </h2>
              <div className="space-y-[0.1vw]">
                <h1 className="2xl:text-4 text-nowrap text-[2.6vw]">
                  IPHONE 15 PRO MAX
                </h1>
                <h3 className="2xl:text-[2.2em mb-[1vw] lg:ml-[15%] ml-[10%] text-[2.4vw] line-through decoration-yellow">
                  <span className="line-through decoration-double">N</span>{" "}
                  3,500,000
                </h3>
                <h3 className="flex items-center text-[2.4vw]">
                  <span className="mr-1 lg:mr-2 text-[1.9vw] italic">NOW</span>
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
              className="absolute -left-[15%] lg:-left-[27%] lg:bottom-1 -bottom-[3%] z-10 w-[60%] lg:w-[65%]"
            />
            <img
              src={smilingCustomer}
              alt=""
              className="min-w-[110%] aspect-[4/2.9] -translate-x-[1%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headliner;
