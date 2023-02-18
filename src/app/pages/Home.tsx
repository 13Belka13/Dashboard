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
  Box,
  ButtonGroup,
  Button,
  IconButton,
  Text,
  Checkbox,
  MenuItem,
  MenuList,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { DoubleHeader } from "../@shared/components/DoubleHeader";
import { ReactComponent as Map } from "../../assets/Map.svg";
import { AddIcon } from "@chakra-ui/icons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MinusIcon } from "@chakra-ui/icons";
import { Footer } from "../@shared/components/Footer";
import { SearchInput } from "../@shared/components/SearchInput";
export const Home = () => (
  <>
    <Card
      bg="
     #F5F5F5"
      borderRadius="0"
      padding="0"
    >
      <CardBody
        bg="
      #FFFFFF"
        margin="60px"
        borderRadius="20px"
        padding="0"
      >
        <Flex>
          <MenuIcon />
          <InputGroup size="md" justifyContent="space-between">
            <DoubleHeader text={"Местоположение / карта"} />

            <SearchInput />
          </InputGroup>
        </Flex>
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

              <Box zIndex="-1" mt="100"></Box>
            </Box>
          </Box>
          <Spacer />
          <Box
            mt="100"
            paddingRight="60"
            boxShadow="dark-lg"
            p="6"
            rounded="md"
          >
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
            <Checkbox
              size="md"
              colorScheme="red"
              color="#BCBCBE"
              isInvalid
              mt="1"
            >
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
              <Text fontSize="md" color="black" mb="10">
                Ещё ничего не выбрано.
              </Text>
              <Button bg="#8A62D7" color="#D4EF00" _hover={{ opacity: "80%" }}>
                Сравнить
              </Button>
            </Box>
          </Box>
        </Flex>

        <Box mt="120">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              color="#2B2B2B"
              bg="#FFFFFF"
              boxShadow="inset 0px 0px 0px 2px #2B2B2B"
              _hover={{ bg: "#FFFFFF" }}
              _active={{ bg: "#FFFFFF" }}
              borderRadius="30"
            >
              Учебные заведения
            </MenuButton>
            <MenuList
              bg="#FFFFFF"
              color="#2B2B2B"
              br="30"
              borderColor="#2B2B2B"
            >
              <MenuItem bg="#FFFFFF" boxShadow="inset 0px -2px 0px #2B2B2B">
              <Checkbox isInvalid>Смотреть все</Checkbox>
              </MenuItem>
              <MenuItem bg="#FFFFFF" boxShadow="inset 0px -2px 0px #2B2B2B">
              <Checkbox isInvalid>Учебные заведения</Checkbox>
              </MenuItem>
              <MenuItem bg="#FFFFFF">
              <Checkbox isInvalid>Мероприятия</Checkbox>
              </MenuItem>
       
            </MenuList>
            {/*                 
              <MenuItem bg="#FFFFFF" boxShadow="inset 0px -2px 0px #2B2B2B">
                от А до Я
              </MenuItem>
              <MenuItem bg="#FFFFFF" boxShadow="inset 0px -2px 0px #2B2B2B">
                от Я до А
              </MenuItem>
              <MenuItem bg="#FFFFFF" boxShadow="inset 0px -2px 0px #2B2B2B">
                кол-во участников
              </MenuItem>
              <MenuItem bg="#FFFFFF" boxShadow="inset 0px -2px 0px #2B2B2B">
                объем гранта
              </MenuItem>
              <MenuItem bg="#FFFFFF" boxShadow="inset 0px -2px 0px #2B2B2B">
                по дате вверх
              </MenuItem>
              <MenuItem bg="#FFFFFF">по дате вниз</MenuItem>
            </MenuList> */}
          </Menu>
        </Box>
        <Footer/>
      </CardBody>
    </Card>
  </>
);
