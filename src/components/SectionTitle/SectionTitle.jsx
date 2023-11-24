const SectionTitle = ({ title }) => {
  return (
    <div className="text-center my-10">
      <h6 className="text-2xl lg:text-4xl text-secondary font-semibold mb-1">{title}</h6>
      <div className="w-40 h-[2px] bg-red-500 mx-auto mb-8"></div>
    </div>
  );
};

export default SectionTitle;
