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
import { Footer } from "../@shared/components/Footer";
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
        padding="0"
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
 
    <DoubleHeader text={"Местоположение / карта"}/>

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
        <Footer/>

      </CardBody>
    </Card>
  </>
);
