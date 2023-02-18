import {
  Flex,
  Spacer,
  Card,
  Text,
  CardBody
} from "@chakra-ui/react";

export function Footer() {
  return(
    <Card bg="#F7F7F7" borderRadius={0}  borderBottomRightRadius="20" >
      <CardBody>
        <Flex m="0" >

          <Text>
            Выполнено командой Frogs в рамках хакатона “Молодёжный бит”
          </Text>
          <Spacer />
          <Text>
            @2023 год
          </Text>

        </Flex>
      </CardBody>
    </Card>
  );
}