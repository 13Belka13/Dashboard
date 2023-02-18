import {
  CardBody,
  Card,
  InputGroup,
  Flex,
<<<<<<< HEAD
  Spacer,
  InputRightElement,
  Heading,
  Box,
  ButtonGroup,
  Button,
  IconButton,
  Text,
  Checkbox,
=======
  Spacer
>>>>>>> 098a80e2b1d19e6ecb8e11a3d7a6a5a0c72935b0
} from "@chakra-ui/react";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { DoubleHeader } from "../@shared/components/DoubleHeader";
<<<<<<< HEAD
import { ReactComponent as Map } from "../../assets/Map.svg";
import { AddIcon } from "@chakra-ui/icons";
import { MinusIcon } from "@chakra-ui/icons";
=======
import { Footer } from "../@shared/components/Footer";
import { SearchInput } from "../@shared/components/SearchInput";
>>>>>>> 098a80e2b1d19e6ecb8e11a3d7a6a5a0c72935b0
export const Home = () => (
  <>
    <Card
      bg="#E0E0E0"
      borderRadius="0"
    >
      <CardBody
        bg="#FFFFFF"
        margin="60px"
        borderRadius="20px"
        padding="0"
      >
        <Flex>
<<<<<<< HEAD
          <MenuIcon />
          <InputGroup size="md">
            <DoubleHeader text={"Местоположение / карта"} />
=======
          <CardBody
            bg="#8A62D7"
            h="1100px"
            w="100px"
            marginLeft="-5"
            marginTop="-5"
          ></CardBody>

        {/*иконка меню*/}
          <MenuIcon />
>>>>>>> 098a80e2b1d19e6ecb8e11a3d7a6a5a0c72935b0

          <InputGroup size="md" justifyContent="space-between">

        {/*компонент названия */}
            <DoubleHeader text={"Местоположение / карта"}/>

        {/*компонент инпута поиска */}
            {/* <Spacer /> */}

            <SearchInput/>
            
          </InputGroup>
        </Flex>
<<<<<<< HEAD
        <Flex>
          <Box>
            <Box position="relative">
              <ButtonGroup
                size="sm"
                isAttached
                variant="outline"
                position="absolute"
                top="50"
                left="50"
                transform="translate(-50%, -50%)"
                zIndex="1"
              >
                <IconButton
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  borderColor="#D4EF00"
                  color="#D4EF00"
                  bg="#FFFFFF"
                  _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
                />
                <IconButton
                  aria-label="Add to friends"
                  icon={<MinusIcon />}
                  borderColor="#D4EF00"
                  color="#D4EF00"
                  bg="#FFFFFF"
                  _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
                />
              </ButtonGroup>

              <Box zIndex="-1" mt="100">
      
              </Box>
            </Box>
          </Box>
          <Spacer />
          <Box mt="100" paddingRight="60" boxShadow='dark-lg' p='6' rounded='md'>
            <Box>
              <Text fontSize="md" color="black">
                Регион:
              </Text>
              <Input
                color="#808080"
                placeholder="Выберите регион"
                _placeholder={{ opacity: 0.4, color: "#808080" }}
                bg="#FFFFFF"
                w="350px"
                h="40px"
                borderRadius="30px"
                borderColor="#D4EF00"
                _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
                focusBorderColor="#D4EF00"
                errorBorderColor="#D4EF00"
              />
            </Box>
            <Checkbox size="md" colorScheme="red" color="#BCBCBE" isInvalid mt="1">
                Смотреть все
              </Checkbox>
            <Box mt="10">
              <Text fontSize="md" color="black">
                Город:
              </Text>
              <Input
                color="#808080"
                placeholder="Выберите город"
                _placeholder={{ opacity: 0.4, color: "#808080" }}
                bg="#FFFFFF"
                w="350px"
                h="40px"
                borderRadius="30px"
                borderColor="#D4EF00"
                _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
                focusBorderColor="#D4EF00"
                errorBorderColor="#D4EF00"
              />
            </Box>

            <Box mt="10">
              <Text fontSize="md" color="black" mb="10">
                Выбранное:
              </Text>
              <Text fontSize="md" color="black"  mb="10">
                Ещё ничего не выбрано.
              </Text>
                <Button bg="#8A62D7" color="#D4EF00"  _hover={{ opacity:"80%"}} >
              Сравнить
            </Button>
            </Box>

          
          </Box>
        </Flex>

        <Flex bg="#F7F7F7" mt="100">
          <Box p="4" color="black">
            Выполнено командой Frogs в рамках хакатона “Молодёжный бит”
          </Box>
          <Spacer />
          <Box p="4" color="black">
            @2023 год
          </Box>
        </Flex>
=======
        <Footer/>

>>>>>>> 098a80e2b1d19e6ecb8e11a3d7a6a5a0c72935b0
      </CardBody>
    </Card>
  </>
);
