import { Box, Card, CardBody, CardFooter, CardHeader, HStack, Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = () => (
  <Card direction={"column"} bg={"#FFFFFF"} borderRadius="20px" minH="100vh" flexDirection={"column"} display="flex" marginX="auto" marginY={5} width={{ lg: "7xl", base: "100%" }}>
    <Stack direction={"row"} spacing={0}>
      <Navbar />
      <Stack w={"full"}>
        <Outlet />
        <Footer />
      </Stack>
    </Stack>
  </Card>
);
