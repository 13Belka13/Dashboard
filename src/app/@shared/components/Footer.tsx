import {
    Flex,
    Spacer,
    Card,
    Text,
    CardBody
  } from "@chakra-ui/react";

export function Footer () {
   return <>
   <Card bg="#F7F7F7" borderBottomRightRadius="25" borderBottomLeftRadius="25">
    <CardBody  paddingBlockEnd="3" paddingBlockStart="0" bg="#F7F7F7" borderBottomRightRadius="25" borderBottomLeftRadius="25">
   <Flex bg="#F7F7F7" m="0" >
    
            <Text p='4' color="black">
            Выполнено командой Frogs в рамках хакатона “Молодёжный бит”
            </Text>
            <Spacer />
            <Text p='4' color="black">
            @2023 год
            </Text>

          </Flex>
          </CardBody>
          </Card>
</>
}