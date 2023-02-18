import { Heading } from "@chakra-ui/react";

interface Props {
  text: string;
}

export function DoubleHeader({ text }: Props) {
  return (
    <>
      <Heading as="h1" size="2xl" color="#8A62D7" mt="60" ml="30">
        {text}
      </Heading>

      {/* <Heading
        as="h1"
        size="4xl"
        color="#C2C9D4"
        mt="60"
        ml="30"
        opacity={0.5}
        sx={{
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "1px rgba(0, 0, 0, 1)",
          transform: "translateY(-5%) translateX(-65%)",
        }}
      >
        {text}
      </Heading> */}

    </>
  )
}