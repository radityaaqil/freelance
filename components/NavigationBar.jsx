import { HiBars3 } from "react-icons/hi2";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const NavigationBar = ({ companyIcon }) => {
  //Drawer NavBar
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="py-6 px-8 flex justify-between bg-yellow-300">
      <div className="text-5xl hover:cursor-pointer" onClick={onOpen}>
        <HiBars3 />
      </div>
      <div className="text-5xl">{companyIcon}</div>

      {/* Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody>
            <div>About Us</div>
            <div>What We Do</div>
            <div>Career</div>
            <div>Contact Us</div>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavigationBar;
