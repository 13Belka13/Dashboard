import { Heading } from "@chakra-ui/react";

export function DoubleHeader () {
   return <> <Heading as="h1" size="2xl" color="#8A62D7" mt="60" ml="30">
    Местоположение / карта
  </Heading>
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
  </>
}