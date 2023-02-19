import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Box, Heading, Spacer } from "@chakra-ui/layout";
import * as React from "react";
import { useState } from "react";
import { Flex } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/layout"
import { DoubleHeader } from "../@shared/components/DoubleHeader"
import { SearchInput } from "../@shared/components/SearchInput";
// import BarChart1 from '../@shared/components/NewChart';
import BarChart from '../@shared/components/Chart';

import { LineCharts } from "../@shared/components/LineCharts";
import { PieCharts } from "../@shared/components/PieCharts";



export function MainDataPage () {
    const Data = [
        {
          id: 2,
          yearOld: 16,
          yearName: "18-24",
          edu: 47,
          eduName: "Магистр",
          napr: 90,
          naprName: "Название направления",
          year: 2023
        },
        {
          id: 1,
          yearOld: 6,
          yearName: "< 18 лет",
          edu: 67,
          eduName: "Кандидат наук",
          napr: 13,
          naprName: "Это еще более длинное Название направления",
          year: 2023
        },
        {
          id: 3,
          yearOld: 25,
          yearName: "25-34",
          edu: 56,
          eduName: "Бакалавр",
          napr: 76,
          naprName: "Длинное Название направления",
          year: 2023
        },
        {
          id: 4,
          yearOld: 18,
          yearName: "35-44",
          edu: 87,
          eduName: "Специалист",
          napr: 23,
          naprName: "Название направления",
          year: 2023
        }
      ];

      const [chartData2, setChartData2] = useState({
        labels: Data.map((data) => data.naprName),
    
        datasets: [
          {
            label: [{ text: " slgldpgfdg", color: "white" }],
            data: Data.map((data) => data.napr),
            backgroundColor: ["yellow", "orange", "green", "pink"],
            borderColor: "black",
            borderWidth: 1
          }
        ]
      });

      /************************* */
      const [chartData1, setChartData1] = useState({
        labels: Data.map((data) => data.eduName),
    
        datasets: [
          {
            label: " Цвет и рядом показатель ",
            data: Data.map((data) => data.edu),
            backgroundColor: ["white", "red", "pink", "green"],
            borderColor: "red",
            borderWidth: 1
          }
        ]
      });



    return (<>
    <Card bg="#FFFFFF"
    borderRadius="20px"
    padding="0"
    height="100%"
    shadow="0">

    <Flex justifyContent="flex-end">
        <SearchInput />
    </Flex> 

    <CardHeader padding="50px" margin="60px">
        <DoubleHeader text={"Основные показатели"}/>
        </CardHeader>


    <CardBody>
        {/*отображение нескольких графиков */}
        <Box marginTop="30px" marginBottom="30px">
            <BarChart />
            <Box height="45px"></Box>
            <LineCharts />
            {/* <PieCharts /> */}
        </Box>

        <Text fontSize='lg' as='b' color="#2B2B2B" paddingLeft="50px" fontFamily="IBM Plex Sans Thai, sans-serif" >
            А вот тут собраны основные показатели. Основываясь на статистике, мы можем сделать вывод, что....
        </Text>
    </CardBody>
    </Card>
    </>)
}