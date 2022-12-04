import { IoIosArrowForward } from "react-icons/io";

const NextArrowCarousel = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-l-lg bg-[#3c0c3e]/70 hover:bg-[#3c0c3e] duration-700 drop-shadow-lg text-4xl text-white absolute -bottom-16 md:bottom-28 xl:bottom-32 right-0 z-10"
    >
      <IoIosArrowForward />
    </button>
  );
};

export default NextArrowCarousel;
