import {
  CardBody,
  Card,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Spacer,
  InputRightElement,
  Heading,
  Box
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { DoubleHeader } from "../@shared/components/DoubleHeader";
export const Home = () => (
  <>
    <Card
      bg="
     #F5F5F5"
      borderRadius="0"
    >
      <CardBody
        bg="
      #FFFFFF"
        margin="60px"
        borderRadius="20px"
      >
        <Flex>
          <CardBody
            bg="#8A62D7"
            h="1100px"
            w="100px"
            marginLeft="-5"
            marginTop="-5"
          ></CardBody>

          <MenuIcon />
          <InputGroup size="md">
 
 <DoubleHeader/>
            <Heading
              as="h1"
              size="4xl"
              color="#C2C9D4"
              mt="60"
              ml="30"
              opacity={0.5}
              sx={{
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "1px rgba(0, 0, 0, 1)",
                position: "absolute",
                left: "2vw",
                top: "1vw",
                transform: "translateY(-50%)",
              }}
              zIndex="-1"
            >
              Местоположение / карта
            </Heading>

            <Spacer />
            <InputRightElement>
              <SearchIcon color="#8A62D7" />
            </InputRightElement>

            <Input
              color="#808080"
              placeholder="Поиск"
              _placeholder={{ opacity: 0.4, color: "#808080" }}
              bg="#FFFFFF"
              w="350px"
              h="40px"
              borderRadius="30px"
              borderColor="#8A62D7"
              _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
              focusBorderColor="pink.400"
              errorBorderColor="crimson"
            />
          </InputGroup>
          
   
      
        </Flex>
        <Flex bg="#F7F7F7">
            <Box p='4' color="black">
            Выполнено командой Frogs в рамках хакатона “Молодёжный бит”
            </Box>
            <Spacer />
            <Box p='4' color="black">
            @2023 год
            </Box>
          </Flex>
      </CardBody>
    </Card>
  </>
);
