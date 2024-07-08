import smilingCustomer from "../../assets/images/positive-overjoyed.png";
import frame from "../../assets/images/Rectangle 12.png";
import triangleFrame from "../../assets/images/yellow-triangle.png";

const Header = () => {
  return (
    <div className="relative overflow-hidden bg-primary lg:order-2">
      <img
        src={frame}
        alt=""
        className="absolute right-0 h-full w-[50%] lg:hidden"
      />
      <img
        src={triangleFrame}
        alt=""
        className="absolute left-0 right-0 hidden h-full w-full lg:block"
      />
      <div className="grid grid-cols-[55%,1fr] justify-between lg:grid-cols-1">
        {/* left items */}
        <div className="relative">
          {/* text */}
          <h1 className="absolute top-1/2 w-fit -translate-y-1/2 rotate-[-15deg] pl-4 text-center text-[19px] text-white lg:-left-0 lg:top-10 lg:translate-x-0 lg:translate-y-0 lg:rotate-[-29deg] lg:text-[27px] xl:text-[37px]">
            Start Shopping <br /> now?
          </h1>
        </div>

        <div className="relative lg:static">
          <img
            src={smilingCustomer}
            alt=""
            className="min-w-[110%] lg:absolute lg:-right-[5%] lg:bottom-0 lg:w-[90%] lg:min-w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
