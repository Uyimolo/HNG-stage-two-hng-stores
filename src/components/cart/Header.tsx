import smilingCustomer from "../../assets/images/positive-overjoyed.png";
import triangleFrame from "../../assets/images/yellow-triangle.png";

const Header = () => {
  return (
    <div className="relative hidden bg-primary md:order-2 md:block md:aspect-[2/2.5]">
      <img
        src={triangleFrame}
        alt=""
        className="absolute left-0 right-0 hidden h-full w-full md:block"
      />
      <div className="grid grid-cols-[55%,1fr] justify-between lg:grid-cols-1">
        {/* left items */}
        <div className="relative">
          {/* text */}
          <h1 className="absolute top-1/2 w-fit -translate-y-1/2 rotate-[-15deg] text-nowrap pl-4 text-center text-[19px] text-white xs:text-[35px] md:-left-0 md:top-10 md:translate-x-0 md:translate-y-0 md:rotate-[-29deg] md:text-[27px] xl:text-[37px]">
            Start Shopping <br /> now?
          </h1>
        </div>

        <div className="relative md:static">
          <img
            src={smilingCustomer}
            alt=""
            className="md:absolute md:-right-[5%] md:bottom-0 md:w-[110%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
