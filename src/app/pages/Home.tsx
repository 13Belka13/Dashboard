import {
  CardBody,
  Card,
  InputGroup,
  Flex,
  Spacer
} from "@chakra-ui/react";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { DoubleHeader } from "../@shared/components/DoubleHeader";
import { Footer } from "../@shared/components/Footer";
import { SearchInput } from "../@shared/components/SearchInput";
export const Home = () => (
  <>
    <Card
      bg="#E0E0E0"
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

            <SearchInput/>
            
          </InputGroup>
          
   
      
        </Flex>
        <Footer/>

      </CardBody>
    </Card>
  </>
);
