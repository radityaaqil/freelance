import { HiBars3 } from "react-icons/hi2";
import { FaApple } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div className="py-6 px-8 flex justify-between bg-yellow-300">
      <div className="text-5xl">
        <HiBars3 />
      </div>
      <div className="text-5xl">
        <FaApple />
      </div>
    </div>
  );
};

export default NavigationBar;
