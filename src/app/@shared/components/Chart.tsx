import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Regions from "../../data/regions.csv";

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
};

const params: string[] = [
    "Кол-во упоминаний в ТВ-сюжетах",
    "Регион",	
    "Округ",	
    "Кол-во реализуемых направлений государственной молодeжной политики",    	
    "Суммарное кол-во грантов",
    "Суммарный бюджет грантов, руб",
    "Cуммарное кол-во детских и молодeжных общественных объединений",	
    "Средняя численность молодeжи, задействованной в программном мероприятии",	
    "Cуммарное кол-во структур",	
    "Всего кол-во сотрудников",	
    "С профильным образованием всего",	
    "Объeм финансирования",
    "Расходы на мероприятия",	
    "Расходы на административные функции",	
    "Расходы на ремонт",
    "Количество новостей, опубликованных от региона в сфере государственной молодeжной политики",
    "Количество упоминаний регионального органа исполнительной власти",
    "Количество просмотров оф. сайта",
    "Численность подписчиков и участников в соц. сетях",	
    "Количество публикаций в соц. сетях",
    "Кол-во пользователей, посетивших оф. сайт",    
    "Упоминания в печатных СМИ",
    "Количество статей, опубликованных региональным органом исполнительной власти",
    "Количество статей, опубликованных в печатном издании субъекта",
    "Финансирование информационного освещения",    
    "Кол-во упоминаний в интернет-СМИ",	
    "Cуммарное кол-во региональных объединений, ед",	
    "Cуммарное число членов региональных объединений",	
    "Cуммарное число уч-в мер-й рег. объединений, чел",	
    "Cуммарный объeм фин. поддержки региональных объединений",
    "Кол-во школ",	
    "Кол-во СПО",	
    "Кол-во вузов",	
    "Число учащихся школ",
    "Число учащихся СПО",	
    "Число учащихся вузов",	
    "Cуммарное кол-во органов самоуправления",	
    "Суммарный объем финанс-я ОМСУ",	
    "Cуммарный объем финанс-я УССУ",	
    "Кол-во форумов, прошедших на территории субъекта",	
    "Численность участников форумов",
    "Объeм регионального финансирования",	
    "Кол-во госуд. учр. на территории субъекта, работающих с добровольцами (волонтерами)",
    "Число граждан, вовлеченных в добровольческую деятельность на тер. субъекта",	
    "Число граждан, вовлеченных центрами поддержки добровольчества на базе образовательных организаций",	
    "Кол-во региональных ресурсных центров поддержки добровольчества на тер. субъекта",
];


interface BarChartProps {
    indexes: number[];
  }

const BarChart: React.FunctionComponent<BarChartProps> = ({ indexes }) => {

    const [selectedParam, setSelectedParam] = useState<string>(
        "Cуммарное Кол-во рег. объединений, ед"
      );

    function handleSelect(option: string) {
        console.log(`Selected option: ${option}`);
        setSelectedParam(option);
    }

    const generateChartData = () => {

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