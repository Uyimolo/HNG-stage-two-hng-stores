import loader from "../assets/icons/loading-16-svgrepo-com.svg";
const Loading = () => {
  return (
    <div className="grid min-h-[400px] place-content-center md:min-h-[500px]">
      <img src={loader} alt="" className="loading-spinner w-12 lg:w-20" />
    </div>
  );
};

export default Loading;
