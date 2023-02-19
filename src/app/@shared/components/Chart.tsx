import { Flex, Select, Spacer } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Bar, Chart } from "react-chartjs-2";
import { RegionCSV } from "../../data/region";
import { regions } from "../../data/regions-csv";

const options = {
    plugins: {
        legend: {
            display: false,
        },
    subtitle: {
      display: true,
      text: 'Custom Chart Subtitle'
    },
    tooltip: {
      backgroundColor: "#FFFFFF",
      titleColor: "#2B2B2B",
      bodyColor: "#2B2B2B",
      padding: 10,
      borderColor: "#8A62D7",
      cornerRadius: 13,
      borderWidth: 1,
    },
            font: {
                color: "#2B2B2B",
                size: 10,
                family: '"IBM Plex Sans Thai", sans-serif',
            }
  
  
            }
          };

const params: { code: string, text: string }[] = [
    { code: "xa", text: "Номер" },
    { code: "xb", text: "Регион" },
    { code: "xc", text: "Округ" },
    { code: "xd", text: "Кол-во реализуемых направлений государственной молодeжной политики" },
    { code: "xe", text: "Суммарное кол-во грантов" },
    { code: "xf", text: "Суммарный бюджет грантов, руб" },
    { code: "xg", text: "Cуммарное кол-во детских и молодeжных общественных объединений" },
    { code: "xh", text: "Средняя численность молодeжи, задействованной в программном мероприятии" },
    { code: "xi", text: "Cуммарное кол-во структур" },
    { code: "xj", text: "Всего кол-во сотрудников" },
    { code: "xk", text: "С профильным образованием всего" },
    { code: "xl", text: "Объeм финансирования" },
    { code: "xm", text: "Расходы на мероприятия" },
    { code: "xn", text: "Расходы на административные функции" },
    { code: "xo", text: "Расходы на ремонт" },
    { code: "xp", text: "Количество новостей, опубликованных от региона в сфере государственной молодeжной политики" },
    { code: "xq", text: "Количество упоминаний регионального органа исполнительной власти" },
    { code: "xr", text: "Количество просмотров оф. сайта" },
    { code: "xs", text: "Численность подписчиков и участников в соц. сетях" },
    { code: "xt", text: "Количество публикаций в соц. сетях" },
    { code: "xu", text: "Кол-во пользователей, посетивших оф. сайт" },
    { code: "xv", text: "Упоминания в печатных СМИ" },
    { code: "xw", text: "Количество статей, опубликованных региональным органом исполнительной власти" },
    { code: "xx", text: "Количество статей, опубликованных в печатном издании субъекта" },
    { code: "xy", text: "Финансирование информационного освещения" },
    { code: "xz", text: "Кол-во упоминаний в ТВ-сюжетах" },
    { code: "ya", text: "Кол-во упоминаний в интернет-СМИ" },
    { code: "yb", text: "Cуммарное кол-во региональных объединений, ед" },
    { code: "yc", text: "Cуммарное число членов региональных объединений" },
    { code: "yd", text: "Cуммарное число уч-в мер-й рег. объединений, чел" },
    { code: "ye", text: "Cуммарный объeм фин. поддержки региональных объединений" },
    { code: "yf", text: "Кол-во школ" },
    { code: "yg", text: "Кол-во СПО" },
    { code: "yh", text: "Кол-во вузов" },
    { code: "yi", text: "Число учащихся школ" },
    { code: "yj", text: "Число учащихся СПО" },
    { code: "yk", text: "Число учащихся вузов" },
    { code: "yl", text: "Cуммарное кол-во органов самоуправления" },
    { code: "ym", text: "Суммарный объем финанс-я ОМСУ" },
    { code: "yn", text: "Cуммарный объем финанс-я УССУ" },
    { code: "yo", text: "Кол-во форумов, прошедших на территории субъекта" },
    { code: "yp", text: "Численность участников форумов" },
    { code: "yq", text: "Объeм регионального финансирования" },
    { code: "yr", text: "Кол-во госуд. учр. на территории субъекта, работающих с добровольцами (волонтерами)" },
    { code: "ys", text: "Число граждан, вовлеченных в добровольческую деятельность на тер. субъекта" },
    { code: "yt", text: "Число граждан, вовлеченных центрами поддержки добровольчества на базе образовательных организаций" },
    { code: "yu", text: "Кол-во региональных ресурсных центров поддержки добровольчества на тер. субъекта" }
];


interface BarChartProps {
    indexes: number[];
}

const BarChart: React.FunctionComponent<BarChartProps> = ({ indexes }) => {

    const [selectedParam, setSelectedParam] = useState<string>(
        "Cуммарное Кол-во рег. объединений, ед"
    );

    const [selectedParam2, setSelectedParam2] = useState<string>(
        "Cуммарное Кол-во рег. объединений, ед"
    );

    function handleSelect(option: string) {
        console.log(`Selected option: ${option}`);
        setSelectedParam(option);
    }

    function handleSelect2(option: string) {
        console.log(`Selected option: ${option}`);
        setSelectedParam2(option);
    }

    const generateChartData = () => {

        const filteredRegions: RegionCSV[] = regions.filter(region => indexes.includes(region.xa))

        console.log("filtered", filteredRegions);

        console.log("param", selectedParam);

        // const data: number[] = filteredRegions.map((item: { [x: string]: any; }) => [item[selectedParam]])
        const data: number[] = filteredRegions.map(region => {
            const param = params.find(param => param.code === selectedParam);
            const key = param?.code || null;
            return !!key ? (region as any)[key] : null;
        })
        const data2: number[] = filteredRegions.map(region => {
            const param = params.find(param => param.code === selectedParam2);
            const key = param?.code || null;
            return !!key ? (region as any)[key] : null;
        })

        console.log("data", data)

        const labels: string[] = filteredRegions.map(region => region.xb);

        return {
            labels,
            datasets: [
                {
                    type:"bar",
                    label: "New Confirmed",
                    data,
                    backgroundColor: [
                        "#FFA07A",
                        "#A2D8D2",
                        "#A8A2F2",
                        "#FFFF52",
                        "#FFB6C1",
                        "#168CE9",
                    ],
                    borderColor: [
                        "#FFA07A",
                        "#A2D8D2",
                        "#A7A2D2",
                        "#FFFF52",
                        "#FFB6C1",
                        "#168CE9",
                    ],
                    borderWidth: 1,
                },
                {
                    type:"line",
                    label:"",
                    data: data2,
                    backgroundColor:"rgb(255,100,100)"
                }
            ],
        };
    };

    return (
        <><Flex width="70%">
            <Select
                color="#808080"
                placeholder={selectedParam}
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
                {params.map((item, index) => (
                    <option key={index} value={item.code}>
                        {item.text}
                    </option>
                ))}
            </Select>
            <Spacer />
            <Select
                color="#808080"
                placeholder={selectedParam2}
                _placeholder={{ opacity: 0.4, color: "#808080" }}
                bg="#FFFFFF"
                w="350px"
                h="40px"
                borderRadius="30px"
                borderColor="#D4EF00"
                _hover={{ bg: "#FFFFFF", color: "#8A62D7" }}
                focusBorderColor="#D4EF00"
                errorBorderColor="#D4EF00"
                onChange={(event) => handleSelect2(event.target.value)}
            >
                {params.map((item, index) => (
                    <option key={index} value={item.code}>
                        {item.text}
                    </option>
                ))}
            </Select>
        </Flex>
            <Chart type="bar" data={generateChartData()} options={options} />
        </>
    );
};

export default BarChart;