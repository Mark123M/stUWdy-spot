import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
//import { Logo } from './Logo';

function App() {
  //console.log(process.env.REACT_APP_SECRET_NAME)
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
    </ChakraProvider>
  );
}

export default App;
