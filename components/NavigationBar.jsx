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
import Link from "next/link";

const NavigationBar = ({ companyIcon }) => {
  //Drawer NavBar
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="py-8 px-12 flex justify-between bg-yellow-300">
      <div className="text-5xl hover:cursor-pointer" onClick={onOpen}>
        <HiBars3 />
      </div>
      <Link href="/">
        <div className="text-5xl">{companyIcon}</div>
      </Link>

      {/* Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody className="font-ubuntu">
            <Link href="/aboutus">
              <div onClick={onClose}>About Us</div>
            </Link>
            <div>What We Do</div>
            <div>Career</div>
            <Link href="/contactus">
              <div onClick={onClose}>Contact Us</div>
            </Link>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavigationBar;
