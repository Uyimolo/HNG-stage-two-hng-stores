const ErrorElement = () => {
  return (
    <div className="grid h-screen w-full place-content-center space-y-5">
      <p>An error occured, please check your internet and reload the page</p>

      <button
        onClick={() => window.location.reload()}
        className="mx-auto w-fit rounded-md border bg-green-800 p-2 px-6 text-white hover:shadow-lg"
      >
        Click to reload page
      </button>
    </div>
  );
};

export default ErrorElement;
