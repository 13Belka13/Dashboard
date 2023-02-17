import { Box, Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => (
  <Box minH="100vh" flexDirection={"column"} display="flex">
    <Navbar />
    <Box flexGrow={1} marginX="auto" width={{ lg: "7xl", base: "100%" }}>
      <Outlet />
    </Box>
    <Stack align={"center"} p={4} fontSize={20}>
      <Text>© 2023 Discopus, Inc.</Text>
    </Stack>
  </Box>
);
