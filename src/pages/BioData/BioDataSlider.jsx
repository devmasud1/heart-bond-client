const BioDataSlider = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div
        className="relative w-full h-[300px] bg-cover object-cover bg-center shadow-md"
        style={{
          backgroundImage: "url(https://i.ibb.co/dPctR4R/banner.jpg)",
          width: "100%",
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="w-full flex flex-col justify-center items-center text-center p-5 sm:p-10 text-white absolute top-1/3">
            <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl  xl:text-5xl mb-2">
              All Biodata available here
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BioDataSlider;
