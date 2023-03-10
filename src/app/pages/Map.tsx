import {
    Flex,
    Text,
    VStack,
    HStack,
    Spacer,
    Box,
    Button,
    Checkbox,
    Select,
} from "@chakra-ui/react";
import { DoubleHeader } from "../@shared/components/DoubleHeader";
import { MenuIcon } from "../@shared/icons/MenuIcon";
import { SearchInput } from "../@shared/components/SearchInput";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";
import mapData from "../data/russia.json";
import BarChart from "../@shared/components/Chart";
import { REGIONS, Region } from "../@shared/utils/regins.util";
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartsJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LineController,
    BarController
} from 'chart.js';


ChartsJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
)

export const Map = () => {


    const [selectedRegions, setSelectedRegions] = useState([] as number[]);

    function handleRegionClick(index: any) {
        setSelectedRegions([Number(index)]);
    }

    function handleDropdownChange(event: { target: { value: any; }; }) {
        const index = event.target.value;
        setSelectedRegions([...selectedRegions, Number(index)]);
    }

    function handleSelect(option: string) {
        console.log(`Selected option: ${option}`);
    }

    const [activeRegion, setActiveRegion] = useState<Region | null>(null);

    console.log(selectedRegions);

    return (
        <Flex
            bg="#FFFFFF"
            borderRadius={0}
            borderTopRightRadius={"20px"}
            w="100%"
            h="100%"
        >
            <VStack w="full" alignItems={"center"} spacing={"60px"}>
                <HStack w="full" display="flex" justifyContent="flex-end">
                    {/* <Box m={6}> */}
                        {/* <MenuIcon /> */}
                        {/* <Spacer /> */}
                
                    {/* </Box> */}
                    {/* <Spacer />
                    <SearchInput /> */}

                <SearchInput /> 
                </HStack>
                <DoubleHeader text={"???????????????????????????? / ??????????"} />
                <HStack alignSelf={"start"} w={"full"}>
                    <>
                        {activeRegion && (
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'white' }}>
                                ?????????????????? ????????????: {activeRegion.name}
                            </div>
                        )}
                        <ComposableMap projection="geoMercator" projectionConfig={{
                            center: [100, 70],
                            scale: 300,
                        }}>
                            <Geographies geography={mapData}>
                                {({ geographies }) =>
                                    geographies.map((geography) => (
                                        <Geography
                                            key={geography.rsmKey}
                                            geography={geography}
                                            onClick={() => handleRegionClick(geography.properties.PID)}
                                            style={{
                                                default: {
                                                    fill: '#D6D6DA',
                                                    outline: 'none',
                                                },
                                                hover: {
                                                    fill: '#D4EF00',
                                                    outline: 'none',
                                                },
                                                pressed: {
                                                    fill: '#BFEF00',
                                                    outline: 'none',
                                                },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>
                        </ComposableMap>
                    </>
                    <Flex alignSelf={"end"}>
                        <Box mt="100" paddingRight="60" boxShadow='dark-lg' p='6' rounded='md'>
                            <Box>
                                <Text fontSize='20px' fontWeight="medium" color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif" paddingBottom="10px">
                                    ????????????:
                                </Text>
                                <Select
                                    color="#808080"
                                    placeholder="???????????????? ????????????"
                                    fontSize="15px"
                                    _placeholder={{ opacity: 0.4, color: "#808080" }}
                                    bg="#FFFFFF"
                                    w="350px"
                                    h="50px"
                                    borderRadius="30px"
                                    borderColor="#D4EF00"
                                    _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
                                    focusBorderColor="#D4EF00"
                                    errorBorderColor="#D4EF00"
                                    onChange={handleDropdownChange}
                                >
                                    {REGIONS.map((option) => (
                                        <option key={option.PID} value={option.PID}>
                                            {option.name}
                                        </option>
                                    ))}
                                </Select>
                            </Box>
                            <Checkbox colorScheme="black" iconColor='#D4EF00' marginLeft="10px" paddingTop="10px"  mt="1" borderColor="gray" fontSize='20px' fontWeight="medium" color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif" paddingBottom="10px">
                                ???????????????? ??????
                            </Checkbox>

                            <Box mt="10">
                                <Text fontSize='20px' fontWeight="medium" color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif" paddingBottom="10px">
                                    ??????????:
                                </Text>
                                <Select
                                    color="#808080"
                                    placeholder="???????????????? ??????????"
                                    fontSize="15px"
                                    _placeholder={{ opacity: 0.4, color: "#808080" }}
                                    bg="#FFFFFF"
                                    w="350px"
                                    h="50px"
                                    borderRadius="30px"
                                    borderColor="#D4EF00"
                                    _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
                                    focusBorderColor="#D4EF00"
                                    errorBorderColor="#D4EF00"
                                    onChange={(event) => handleSelect(event.target.value)}
                                >
                                    {REGIONS.map((option) => (
                                        <option key={option.PID} value={option.PID}>
                                            {option.name}
                                        </option>
                                    ))}
                                </Select>
                            </Box>

                            <Box mt="10">
                                <Text fontSize='20px' fontWeight="medium" color="#2B2B2B" fontFamily="IBM Plex Sans Thai, sans-serif" paddingBottom="10px">
                                    ??????????????????:
                                </Text>
                                <Text fontSize="md" color="black" mb="10">
                                    ?????? ???????????? ???? ??????????????.
                                </Text>
                                <Button bg="#8A62D7" color="#D4EF00" _hover={{ opacity: "80%" }} >
                                    ????????????????
                                </Button>
                            </Box>


                        </Box>
                    </Flex>
                </HStack>
                <Box w="full" h="full" mb={10}>
                    <Text fontSize="md" color="black" mb="10">
                        ??????????????????:
                    </Text>
                    <BarChart indexes={selectedRegions} />
                </Box>
            </VStack>
        </Flex >
    );
};
