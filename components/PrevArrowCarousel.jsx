import { IoIosArrowBack } from "react-icons/io";

const PrevArrowCarousel = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-r-lg bg-blue-900/70 hover:bg-blue-900 duration-700 drop-shadow-lg text-4xl text-white absolute -bottom-16 md:bottom-28 xl:bottom-32 z-10"
    >
      <IoIosArrowBack />
    </button>
  );
};

export default PrevArrowCarousel;
