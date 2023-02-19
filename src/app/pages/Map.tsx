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
                <HStack w="full">
                    <Box m={6}>
                        <MenuIcon />
                    </Box>
                    <Spacer />
                    <SearchInput />
                </HStack>
                <DoubleHeader text={"Местоположение / карта"} />
                <HStack alignSelf={"start"} w={"full"}>
                    <>
                        {activeRegion && (
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'white' }}>
                                Выбранный регион: {activeRegion.name}
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
                                                    fill: '#F53',
                                                    outline: 'none',
                                                },
                                                pressed: {
                                                    fill: '#E42',
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
                                <Text fontSize="md" color="black">
                                    Регион:
                                </Text>
                                <Select
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
                                    onChange={handleDropdownChange}
                                >
                                    {REGIONS.map((option) => (
                                        <option key={option.PID} value={option.PID}>
                                            {option.name}
                                        </option>
                                    ))}
                                </Select>
                            </Box>
                            <Checkbox size="md" colorScheme="red" color="#BCBCBE" isInvalid mt="1">
                                Смотреть все
                            </Checkbox>
                            <Box mt="10">
                                <Text fontSize="md" color="black">
                                    Город:
                                </Text>
                                <Select
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
                                <Text fontSize="md" color="black" mb="10">
                                    Выбранное:
                                </Text>
                                <Text fontSize="md" color="black" mb="10">
                                    Ещё ничего не выбрано.
                                </Text>
                                <Button bg="#8A62D7" color="#D4EF00" _hover={{ opacity: "80%" }} >
                                    Сравнить
                                </Button>
                            </Box>


                        </Box>
                    </Flex>
                </HStack>
                <Box w="full" h="full" mb={10}>
                    <Text fontSize="md" color="black" mb="10">
                        Сравнение:
                    </Text>
                    <BarChart indexes={selectedRegions} />
                </Box>
            </VStack>
        </Flex >
    );
};
