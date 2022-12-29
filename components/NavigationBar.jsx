import { HiBars3 } from "react-icons/hi2";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

const NavigationBar = ({ companyIcon }) => {
  //Drawer NavBar
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="py-4 px-12 flex items-center justify-between">
      <div className="text-4xl hover:cursor-pointer" onClick={onOpen}>
        <HiBars3 />
      </div>
      <Link href="/">
        <div>{companyIcon}</div>
      </Link>

      {/* Drawer */}
      <Drawer
        closeOnEsc={true}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bgGradient="linear(to-br, #ffffff 10%, #3c0c3e 90%)">
          <DrawerHeader>
            <DrawerCloseButton
              size={"lg"}
              mr={3}
              mt={3}
              _focusVisible={false}
              // backgroundColor={"transparent"}
              borderRadius="full"
              transitionDuration="500ms"
            />
          </DrawerHeader>

          <DrawerBody className="font-ubuntu">
            <Link href="/aboutus">
              <Box
                fontSize="xl"
                mt={10}
                p={4}
                h={14}
                onClick={onClose}
                _hover={{ fontSize: "2xl" }}
                transitionDuration="500ms"
              >
                About Us
              </Box>
            </Link>
            <Box
              fontSize="xl"
              p={4}
              h={14}
              onClick={onClose}
              _hover={{ fontSize: "2xl" }}
              transitionDuration="500ms"
            >
              What We Do
            </Box>
            <Box
              fontSize="xl"
              p={4}
              h={14}
              onClick={onClose}
              _hover={{ fontSize: "2xl" }}
              transitionDuration="500ms"
            >
              Career
            </Box>
            <Link href="/contactus">
              <Box
                fontSize="xl"
                p={4}
                h={14}
                onClick={onClose}
                _hover={{ fontSize: "2xl" }}
                transitionDuration="500ms"
              >
                Contact Us
              </Box>
            </Link>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavigationBar;
