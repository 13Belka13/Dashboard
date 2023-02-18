import {
    Flex,
    Text,
    Center,
    VStack,
    HStack,
    Spacer,
    InputGroup,
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    IconButton,
    Input,
    Select,
} from "@chakra-ui/react";
import { DoubleHeader } from "../@shared/components/DoubleHeader";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { SearchInput } from "../@shared/components/SearchInput";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Annotation, ComposableMap, Geographies, Geography, GeographyProps, ZoomableGroup } from "react-simple-maps";
import { Key, useState } from "react";



import mapData from '../@shared/maps/russia.json';

type Region = {
    name: string;
    PID: number;
};

const REGIONS: Region[] = [
    { name: 'Карачаево-Черкесская республика', PID: 565764 },
    { name: 'Карарельская республика', PID: 679124 },
    { name: 'Кемеровская область', PID: 7520944 },
    { name: 'Хабаровский край', PID: 375924 },
    { name: 'Республика Хакассия', PID: 453276 },
    { name: 'Ханты-Мансийск', PID: 7625474 },
    { name: 'Кировская область', PID: 654234 },
    { name: 'Коми-Пермятский автономный округ', PID: 90375 },
    { name: 'Республика Коми', PID: 5363546 },
    { name: 'Корякский автономный округ', PID: 4326547 },
    { name: 'Костромская область', PID: 3437454 },
    { name: 'Краснодарский край', PID: 35436 },
    { name: 'Красноярский край', PID: 83467 },
    { name: 'Республика Адыгея', PID: 937365 },
    { name: 'Агинский-Бурятский автономный округ', PID: 546363 },
    { name: 'Алтайский край', PID: 3546325 },
    { name: 'Амурская область', PID: 735354 },
    { name: 'Архангельская область', PID: 837474 },
    { name: 'Астраханская область', PID: 93857 },
    { name: 'Республика Башкоркостан', PID: 63547 },
    { name: 'Белгородская область', PID: 24353 },
    { name: 'Брянская область', PID: 432532 },
    { name: 'Бурятская республика', PID: 455656 },
    { name: 'Чечено-Ингушетия', PID: 937465 },
    { name: 'Челябинская область', PID: 5637565 },
    { name: 'Читинская область', PID: 3926485 },
    { name: 'Чукотский автономный округ', PID: 6385937 },
    { name: 'Чувашская республика', PID: 123434 },
    { name: 'Санкт-Петербургская область', PID: 8375927 },
    { name: 'Республика Дагестан', PID: 174625 },
    { name: 'Евенский автономный округ', PID: 239473 },
    { name: 'Алтайская республика', PID: 403484 },
    { name: 'Республика Ингушетия', PID: 238929},
    { name: 'Иркутская область', PID: 937465254},
    { name: 'Ивановская область', PID: 183647},
    { name: 'Кабардино-Балкарская республика', PID: 1536472},
    { name: 'Калининградская область', PID: 82946},
    { name: 'Республика Калмыкия', PID: 52366454},
    { name: 'Калужская область', PID: 10936},
    { name: 'Курганская область', PID: 3940566},
    { name: 'Курская область', PID: 188263},
    { name: 'Санкт-Перербургская область', PID: 440845},
    { name: 'Липетская область', PID: 736475},
    { name: 'Магаданская область', PID: 776564},
    { name: 'Республика Мари Эл', PID: 8374644},
    { name: 'Республика Мордовия', PID: 645664},
    { name: '', PID: 883663},
    { name: 'Московская область', PID: 227336},
    { name: 'Мурманская область', PID: 232356},
    { name: 'Ненецкий автономный округ', PID: 373764},
    { name: 'Нижегородская область', PID: 5656847},
    { name: 'Республика Северная Осетия-Алания', PID: 112728},
    { name: 'Новгородская область', PID: 7364664},
    { name: 'Новосибирская область', PID: 239232},
    { name: 'Омская область', PID: 4545667},
    { name: 'Орловская область', PID: 848856},
    { name: 'Оренбургская область', PID: 569349},
    { name: 'Пензенская область', PID: 5563735},
    { name: 'Пермская область', PID: 5663546},
    { name: 'Псковская область', PID: 674554},
    { name: 'Ростовская область', PID: 998767},
    { name: 'Рязанская область', PID: 64734},
    { name: 'Республика Саха', PID: 1243524},
    { name: 'Самарская область', PID: 986534},
    { name: 'Куйбышевская область', PID: 2232444},
    { name: 'Саратовская область', PID: 38456},
    { name: 'Смоленская область', PID: 4343567},
    { name: 'Ставропольский край', PID: 4545673},
    { name: 'Свердловская область', PID: 1234653},
    { name: 'Тамбовская область', PID: 6576342},
    { name: 'Республика Татарстан', PID: 887452},
    { name: 'Таумурский автономный округ', PID: 54655322},
    { name: 'Томская область', PID: 445434},
    { name: 'Тульская область', PID: 887678},
    { name: 'Республика Тува', PID: 1223223},
    { name: 'Тверская область', PID: 998986},
    { name: 'Тюменьская область', PID: 67565756},
    { name: 'Удмуртская республика', PID: 324454},
    { name: 'Ульяновская республика', PID: 777876},
    { name: 'Усть-Ордынский Бурятский автономный округ', PID: 4445654},
    { name: 'Владимирская область', PID: 1112345},
    { name: 'Волгоградская область', PID: 6767675},
    { name: 'Вологодская область', PID: 999768},
    { name: 'Воронежская область', PID: 656555},
    { name: 'Ямало-Ненецкий автономный округ', PID: 2223456},
    { name: 'Еврейская автономная область', PID: 8887887},



    // и т.д.
];

export const Map = () => {

    function handleSelect(option: string) {
        console.log(`Selected option: ${option}`);
    }

    const [activeRegion, setActiveRegion] = useState<Region | null>(null);

    function handleGeographyClick(geography: any) {

          const region = REGIONS.find((r) => r.code === geography.properties?.adm1_code);
          console.log(geography.properties);
          if (region) {
            setActiveRegion(region);
            console.log(`Clicked on region: ${region.name}`);
          }
    }

    return (
        <Flex
            bg="#FFFFFF"
            borderRadius={0}
            borderTopRightRadius={"20px"}
            w="100%"
            h="100%"
        >
            <VStack w="full" alignItems={"center"} spacing={"60px"}>
                <HStack alignContent="end" w="full">
                    <Box m={6}>
                        <MenuIcon />
                    </Box>
                    <Spacer />
                    <SearchInput />
                </HStack>
                <DoubleHeader text={"Местоположение / карта"} />

                <>
                    {activeRegion && (
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'white' }}>
                            Выбранный регион: {activeRegion.name}
                        </div>
                    )}
                    <ComposableMap projection="geoMercator" projectionConfig={{
                        center: [150, 50],
                        scale: 150,
                    }}>
                        <Geographies geography={mapData}>
                            {({ geographies }) =>
                                geographies.map((geography) => (
                                    <Geography
                                        key={geography.rsmKey}
                                        geography={geography}
                                        onClick={() => handleGeographyClick(geography)}
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
                                onChange={(event) => handleSelect(event.target.value)}
                            >
                                {REGIONS.map((option) => (
                                    <option key={option.code} value={option.code}>
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
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
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
            </VStack>
        </Flex >
    );
};
