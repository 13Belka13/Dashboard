import {
    Box,
    Text, Input
  } from "@chakra-ui/react";

export function CityInput () {
    return <>
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
    </>
}