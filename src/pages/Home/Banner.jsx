const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div
        className="relative w-full h-[450px] md:h-[500px] bg-cover object-cover bg-center shadow-md"
        style={{
          backgroundImage: "url(https://i.ibb.co/dPctR4R/banner.jpg)",
          width: "100%",
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="w-full flex flex-col justify-center items-center text-center p-5 sm:p-10 text-white absolute top-1/3">
            <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2">
              Connecting Hearts, Creating Bonds
            </h4>
            <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Find your perfect match with HeartBond Matrimony
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
