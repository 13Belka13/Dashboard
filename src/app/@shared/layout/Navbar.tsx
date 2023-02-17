import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    useDisclosure,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../../assets/ivent.svg";

export const Navbar = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
<Flex
      padding={4}
      as={"nav"}
      position="fixed"
      w="100px"
      bgColor={"#8A62D7"}
      borderLeftRadius={"25px"}
    >
        <MenuIcon/>
        <Link to={"/"}>
          <Heading size={"lg"}>Test</Heading>
        </Link>
    
    </Flex>
    );
};
