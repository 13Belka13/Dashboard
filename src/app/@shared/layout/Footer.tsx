import {
  Flex,
  Spacer,
  Card,
  Text,
  CardBody
} from "@chakra-ui/react";

export function Footer() {
  return(
    <Card bg="#F7F7F7" borderRadius={0}  borderBottomRightRadius="20" padding="10px">
      <CardBody>
        <Flex m="0" >

          <Text fontSize='12px' fontWeight="medium" color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif">
            Выполнено командой Frogs в рамках хакатона “Молодёжный бит”
          </Text>
          <Spacer />
          <Text fontSize='12px' fontWeight="medium" color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif">
            @2023 год
          </Text>

        </Flex>
      </CardBody>
    </Card>
  );
}