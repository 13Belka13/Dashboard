import { Card, CardBody, CardHeader } from "@chakra-ui/card"
import { Select } from "@chakra-ui/select"
import { Box, Spacer } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/layout"
import { DoubleHeader } from "../@shared/components/DoubleHeader"
import { SearchInput } from "../@shared/components/SearchInput"
import { Heading } from "@chakra-ui/layout"

export function RegionDataPage () {
    return <>
    <Card bg="#FFFFFF"
    borderRadius="0"
    borderTopLeftRadius="20px"
    borderTopRightRadius="20px"
    padding="0"
    height="100%"
    shadow="0">

    <Flex justifyContent="flex-end">
        <SearchInput />
    </Flex> 

    <CardHeader padding="50px" margin="60px">
        {/*name of region */}
        <DoubleHeader text={"Краснодарский край"}/>
        </CardHeader>

{/*инфа внутри карточки */}
    <CardBody bg="#D4EF00" width="60vw" height="35vh" marginBottom="60px" marginLeft="30px">

<Flex marginBottom="10px" marginTop="20px">
    <Text fontSize='30px' as='b' color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif">
    Показатели по учреждениям
    </Text>

    <Spacer/>

    <Select
        color="#8A62D7"
        placeholder="2023"
        _placeholder={{ opacity: 0.4, color: "#808080" }}
        bg="#FFFFFF"
        w="110px"
        h="40px"
        borderRadius="30px"
        border="2px solid #8A62D7"
        _hover={{ bg: "#FFFFFF", color: "#8A62D7", borderColor: "#8A62D7" }}
        focusBorderColor="#D4EF00"
        errorBorderColor="#D4EF00"
        // onChange={(event) => handleSelect(event.target.value)}
        >{/* {REGIONS.map((option) => (
                                        <option key={option.PID} value={option.PID}>
                                            {option.name}
                                        </option>
                                    ))} */} </Select>
                                    
                            
</Flex>


        <Flex margin="40px" marginLeft="20px" marginBottom="60px">
            <Flex flexDirection="column">
                <Text fontSize='30px' as='b' color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif" width="150px">
                    {/*место для цифры */}
                    1500 человек
                </Text>  
                <br />
                <Text color="#2B2B2B" fontSize='18px' fontWeight="medium" fontFamily="IBM Plex Sans Thai, sans-serif">
                являются работниками молодёжной политики.
                </Text>
            </Flex>    
            <Flex flexDirection="column">
                <Text fontSize='30px' as='b' color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif" width="100px">
                    {/*место для цифры */}
                    15 ВУЗов
                </Text>  
                <br />
                <Text color="#2B2B2B" fontSize='18px' fontWeight="medium" fontFamily="IBM Plex Sans Thai, sans-serif">
                являются работниками молодёжной политики.
                </Text>
                </Flex>
                <Flex flexDirection="column">           
                <Text fontSize='30px' as='b' color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif" width="120px">
                    {/*место для цифры */}
                    18 ССУЗов
                </Text>  
                <br />
                <Text color="#2B2B2B" fontSize='18px' fontWeight="medium" fontFamily="IBM Plex Sans Thai, sans-serif">
                являются работниками молодёжной политики.
                </Text>
                </Flex>
        </Flex>

        <Text fontSize='30px' as='b' color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif">
            Показатели по молодёжи
    </Text>

    <Flex margin="40px" marginLeft="20px">
            <Flex flexDirection="column">
                <Text fontSize='30px' as='b' color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif" width="150px">
                    {/*место для цифры */}
                    2023 год
                </Text>  
            </Flex> 
            <Spacer/>   
            <Flex flexDirection="column">
                <Text fontSize='30px' as='b' color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif" width="250px">
                    {/*место для цифры */}
                    27% - 
                    <br/>
                    140 тыс. чел.
                </Text>  
                <br />
                <Text color="#2B2B2B" fontSize='18px' fontWeight="medium" fontFamily="IBM Plex Sans Thai, sans-serif" width="250px">
                общая доля молодёжи от 14 до 30 лет.
                </Text>
                </Flex>
                <Spacer/>
                <Flex flexDirection="column">           
                <Text fontSize='30px' as='b' color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif" width="250px">
                    {/*место для цифры */}
                    40% - 
                    <br/>
                    30 тыс. чел.
                </Text>  
                <br />
                <Text color="#2B2B2B" fontSize='18px' fontWeight="medium" fontFamily="IBM Plex Sans Thai, sans-serif">
                доля молодёжи, охваченная проектами.
                </Text>
                </Flex>
        </Flex>

        
    </CardBody>
    </Card>
    </>
}