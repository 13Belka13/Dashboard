import {
  CardBody,
  Card,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Spacer,
  InputRightElement
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export const Home = () => (
  <>
    <Card    bg="
     #F5F5F5" borderRadius="0">
      <CardBody
        bg="
      #FFFFFF"
      margin="60px"
      borderRadius="20px"
      >
        <Flex>
       
          <InputGroup size="md">
          <Spacer/>
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
      </CardBody>
    </Card>
  </>
);
