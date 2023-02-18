import {
    Box,
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
    Spacer,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../../assets/react.svg";
import { ReactComponent as NewsIcon } from "../../../assets/News.svg";
import { ReactComponent as IventIcon } from "../../../assets/Ivent.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/Profile.svg";
import { ReactComponent as MapIcon } from "../../../assets/Map-button.svg";

export const Navbar = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            padding={4}
            as={"nav"}
            w="100px"
            h="100vh"
            bgColor={"#8A62D7"}
            borderLeftRadius={"20px"}
            zIndex={1}
            justifyContent={"center"}
        >

            <VStack spacing={"50px"}>
                <Box my={"30px"}>
                    <MenuIcon />
                </Box>

                <Link to={"/"}>
                    <NewsIcon />
                </Link>

                <Link to={"/"}>
                    <ProfileIcon />
                </Link>

                <Link to={"/"}>
                    <MapIcon />
                </Link>

                <Link to={"/"}>
                    <IventIcon />
                </Link>

            </VStack>

        </Flex>
    );
};
