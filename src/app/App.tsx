import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import theme from '../styles/theme';
import { Map } from './pages/Map';
import { Layout } from './@shared/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Map  />} />
    </Route>
  )
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
