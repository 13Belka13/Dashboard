import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Box, Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Flex } from '@chakra-ui/react';

export function NotFoundPage () {
    return (<>
         <Card bg="#FFFFFF"
    borderRadius="20px"
    padding="0"
    height="100%"
    shadow="0">
        <Box  bg="#8A62D7" width="1000px" height="455px" margin="80px 0">
            <Flex direction="column" marginLeft="50px">
                <Heading as="h2" size="4xl" color="#FFFFFF" fontFamily="IBM Plex Sans Thai, sans-serif" paddingTop="60px">
                Ошибка 404 
                </Heading>
            <Text fontSize='25' as='b' color="#FFFFFF" fontFamily="IBM Plex Sans Thai, sans-serif">
            Кажется, что-то пошло не так...
            </Text>

            <Text fontSize='35' as='b' color="#FFFFFF" fontFamily="IBM Plex Sans Thai, sans-serif" width="630px" paddingTop="80px">
            К сожалению, такой страницы не существует.
            </Text>
            </Flex>
        </Box>
    </Card>
    </>)
}