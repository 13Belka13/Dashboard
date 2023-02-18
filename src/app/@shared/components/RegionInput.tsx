import {
    Box,
    Text,
    Checkbox, Input
  } from "@chakra-ui/react";

export function RegionInput () {
    return <>
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
    </>
}