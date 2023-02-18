import {
    Input,
    InputGroup,
    InputLeftElement
  } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchInput () {
    return <>
    <InputGroup marginTop="30" marginRight="30" justifyContent="flex-end" width="350px">
        <InputLeftElement>
              <SearchIcon color="#8A62D7"/>
            </InputLeftElement>

            <Input
              color="#808080"
              placeholder="Поиск"
              _placeholder={{ opacity: 0.4, color: "#808080" }}
              bg="#FFFFFF"
              w="350px"
              h="40px"
              borderRadius="30px"
              borderColor="#8A62D7"
              _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
              focusBorderColor="pink.400"
              errorBorderColor="crimson"
            />
            </InputGroup>
    </>
}