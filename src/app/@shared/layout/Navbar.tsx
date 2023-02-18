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
import { MenuIcon } from "../icons/MenuIcon";
import { NewsIcon } from "../icons/NewsIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { MapIcon } from "../icons/MapIcon";
import { IventIcon } from "../icons/IventIcon";

export const Navbar = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            padding={4}
            as={"nav"}
            w="100px"
            bgColor={"#8A62D7"}
            borderLeftRadius={"20px"}
            zIndex={1}
            justifyContent={"center"}
        >

            <VStack spacing={"50px"}>
                <Box my={"30px"}>
                    <MenuIcon />
                </Box>

                <Link to={"/main-data"}>
                    <NewsIcon />
                </Link>
{/* 
                <Link to={"/"}>
                    <ProfileIcon />
                </Link> */}

                <Link to={"/"}>
                    <MapIcon />
                </Link>

                <Link to={"/region-data"}>
                    <IventIcon />
                </Link>

            </VStack>

        </Flex>
    );
};
