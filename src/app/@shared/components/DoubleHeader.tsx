import { Box, Heading } from "@chakra-ui/react";

interface Props {
  text: string;
}

export function DoubleHeader({ text }: Props) {
  return (
    <Box>
      <Heading
        as="h1"
        size="4xl"
        color="#C2C9D4"
        zIndex={-2}
        mb={0}

        opacity={0.5}
        sx={{
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "1px rgba(0, 0, 0, 1)",
        }}
      >
        {text}
      </Heading>
      <Heading as="h1" size="2xl" color="#8A62D7"        sx={{
          transform: "translateY(-90%) translateX(-4%)",
        }}>
        {text}
      </Heading>
    </Box>
  )
}