import {
    Box,
    Button,
    Text,
  } from "@chakra-ui/react";

export function DisplaySelected () {
    return <>
                 <Box mt="10">
              <Text fontSize="md" color="black" mb="10">
                Выбранное:
              </Text>
              <Text fontSize="md" color="black"  mb="10">
                Ещё ничего не выбрано.
              </Text>
            </Box>
    </>
}