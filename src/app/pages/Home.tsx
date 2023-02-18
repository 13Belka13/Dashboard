import {
  CardBody,
  Card,
  InputGroup,
  Flex,
  Spacer,
  InputRightElement,
  Heading,
  Box,
  ButtonGroup,
  Button,
  IconButton,
  Text,
  Checkbox, Input
} from "@chakra-ui/react";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { DoubleHeader } from "../@shared/components/DoubleHeader";
import { ReactComponent as Map } from "../../assets/Map.svg";
import { Footer } from "../@shared/components/Footer";
import { SearchInput } from "../@shared/components/SearchInput";
import { SizeButton } from "../@shared/components/SizeButton";
import { RegionInput } from "../@shared/components/RegionInput";
import { CityInput } from "../@shared/components/CityInput";
import { DisplaySelected } from "../@shared/components/DisplaySelecter";
import { CompareBtn } from "../@shared/components/CompareBtn";
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
          <InputGroup size="md">

        {/*иконка меню*/}
          <MenuIcon />

          <InputGroup size="md" justifyContent="space-between">

        {/*компонент названия */}
            <DoubleHeader text={"Местоположение / карта"}/>

        {/*компонент инпута поиска */}

            <SearchInput/>
            
          </InputGroup>
          </InputGroup>
        </Flex>
        <Flex>
          <Box>
            <Box position="relative">

                {/*кнопка увеличения/уменьшения карты */}
                <SizeButton/>
                
    {/*вот это я хз зачем */}
              <Box zIndex="-1" mt="100">
      
              </Box>
            </Box>
          </Box>
          <Spacer />
          <Box mt="100" paddingRight="60" boxShadow='dark-lg' p='6' rounded='md'>
            {/*инпут с отображением региона и кнопки "смотреть все" */}
                <RegionInput/>

            {/*инпут с отображением города */}
                <CityInput/>

            {/*отображение выбранных городов*/}
                <DisplaySelected/>

            {/*кнопка "сравнить"*/}
                <CompareBtn />

          
          </Box>
        </Flex> 

        {/*подвал (футер) */}
        <Footer/>

      </CardBody>
    </Card>
  </>
);
