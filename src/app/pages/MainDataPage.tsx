import { Card, CardBody, CardHeader } from "@chakra-ui/card"
import { Flex } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/layout"
import { DoubleHeader } from "../@shared/components/DoubleHeader"
import { SearchInput } from "../@shared/components/SearchInput"

export function MainDataPage () {
    return (<>
    <Card bg="#FFFFFF"
    borderRadius="20px"
    padding="0"
    height="100vh">

    <Flex justifyContent="flex-end">
        <SearchInput />
    </Flex> 

    <CardHeader padding="50px" margin="60px">
        <DoubleHeader text={"Основные показатели"}/>
        </CardHeader>


    <CardBody>

        <Text fontSize='lg' as='b' color="#2B2B2B">
            А вот тут собраны основные показатели. Основываясь на статистике, мы можем сделать вывод, что....
        </Text>
    </CardBody>
    </Card>
    </>)
}