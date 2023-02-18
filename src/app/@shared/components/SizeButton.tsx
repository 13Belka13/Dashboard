import {
    ButtonGroup,
    IconButton,
  } from "@chakra-ui/react";
  import { AddIcon } from "@chakra-ui/icons";
import { MinusIcon } from "@chakra-ui/icons";

export function SizeButton () {
    return <>
             <ButtonGroup
                size="sm"
                isAttached
                variant="outline"
                position="absolute"
                top="50"
                left="50"
                transform="translate(-50%, -50%)"
                zIndex="1"
              >
                    <IconButton
                    aria-label="Add to friends"
                    icon={<AddIcon />}
                    borderColor="#D4EF00"
                    color="#D4EF00"
                    bg="#FFFFFF"
                    _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
                    />
                    <IconButton
                    aria-label="Add to friends"
                    icon={<MinusIcon />}
                    borderColor="#D4EF00"
                    color="#D4EF00"
                    bg="#FFFFFF"
                    _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
                    />
              </ButtonGroup>
    </>
}