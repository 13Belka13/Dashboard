import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Regions from "../../data/regions.csv";

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
};

const params: string[] = [
    " ТВ-сюжетов",
    "Регион",
    "Округ",
    "Кол-во реализуемых направлений государственной молодeжной политики",
    "Суммарное Кол-во грантов",
    "Суммарный Бюджет грантов, руб",
    "Cуммарное количество детских и молодeжных общественных объединений",
    "Средняя численность молодeжи, задействованной в программном мероприятие",
    "Cуммарное кол-во структур",
    "Всего кол-во сотрудников",
    "Всего с профильным образованием",
    "Всего объeм финансирования",
    "Расходы на мероприятия",
    "Расходы на адм функции",
    "Расходы на ремонт",
    "Количество новостей, опубликованных от региона на официальном сайте федерального органа исполнительной власти, осуществляющего функции по оказанию государственных услуг и управлению государственным имуществом в сфере государственной молодeжной политики",
    "Количество упоминаний реагионального органа исполнительной власти, реализующего государственную молодeжную политику, в том числе:",
    "Количество просмотров официального сайта органа исполнительной власти, реализующего государственную молодeжную политику",
    "Численность подписчиков / участников сообществ регионального органа исполнительной власти, реализующего государственную молодeжную политику в социальных сетях",
    "Количество публикаций в сообществах регионального органа исполнительной власти, реализующего государственную молодeжную политику в социальных сетях",
    "Численость уникальных пользователей, посетивших официальный сайт регионального органа исполнительной власти, реализующего государственную молодeжную политику",
    " в печатных средствах массовой информации",
    "Количество статей, опубликованных региональным органом исполнительной власти, реализующим государственную молодeжную политику, направленных пресс-службой федерального органа исполнительной власти, осуществляющего функции по оказанию государственных услуг и управлению государственным имуществом в сфере государственной молодeжной политики	Количество статей, опубликованных в главном правительственном печатном издании субъекта",
    "Российской Федерации о реализации государственной молодeжной политики в регионе",
    "Финансирование информационного освещения реализации государственной молодeжной политики",
    " ТВ-сюжетов",
    " в интернет-СМИ",
    "Cуммарное Кол-во рег. объединений, ед",
    "Cуммарное Число членов рег. объединений, чел",
    "Cуммарное Число уч-в мер-й рег. объединений, чел",
    "Cуммарный Объeм фин.поддержки рег. объединений, руб",
    "Кол-во общ.объед.школ",
    "Кол-во общ.объед.СПО",
    "Кол-во общ.объед.вузов",
    "Число уч-в общ.объед.школ",
    "Число уч-в общ.объед.СПО",
    "Число уч-в общ.объед.вузов",
    "Cуммарное количество органов самоуправления",
    "Суммарный Объем финанс-я ОМСУ",
    "Cуммарный Объем финансирования УССУ",
    "Количество форумов, прошедших на территории субъекта",
    "Численность участников форумов	Объeм рег. финансирования",
    "Количество государственных учреждений на территории субъекта Российской Федерации, работающих с добровольцами (волонтерами) и реализующих совместные программы в следущих сферах:",
    "Общая численность граждан, вовлеченных в добровольческую деятельность на территории субъекта Российской Федерации, включая вовлеченных центрами (сообществами, объединениями) поддержки добровольчества (волонтерства), по направлениям сферы деятельности: добровольческая (волонтерская) деятельность в области образования",
    "Общая численность граждан, вовлеченных центрами (сообществами, объединениями) поддержки добровольчества (волонтерства) на базе образовательных организаций, некоммерческих организаций, государственных и муниципальных учреждений в добровольческую (волонтерскую) деятельность на территории субъекта Российской Федерации, в том числе:",
    "Общее количество региональных ресурсных центров поддержки добровольчества на территории субъекта Российской Федерации:",
];


const BarChart: React.FunctionComponent = () => {

    const [selectedParam, setSelectedParam] = useState<string>(
        "Cуммарное Кол-во рег. объединений, ед"
    );

    function handleSelect(option: string) {
        console.log(`Selected option: ${option}`);
        setSelectedParam(option);
    }

    const generateChartData = () => {

        const indexes = [2, 5, 8];
        const filteredRegions = Regions.filter((_region: any, index: number) => indexes.includes(index));

        console.log("filtered", filteredRegions);

        const data: number[] = filteredRegions.map((item: { [x: string]: any; }) => [item[selectedParam]])
        const labels: string[] = filteredRegions.map((item: { [x: string]: any; }) => [item["Регион"]]);;

        return {
            labels,
            datasets: [
                {
                    label: "New Confirmed",
                    data,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        };
    };

    return (
        <>
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
                    <option key={index}>
                        {item}
                    </option>
                ))}
            </Select>
            <Bar data={generateChartData()} options={options} />
        </>
    );
};

export default BarChart;