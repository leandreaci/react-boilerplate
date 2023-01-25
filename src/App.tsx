import './App.css'
import {Router} from './routes'
import { ChakraProvider } from '@chakra-ui/react';

const App = () => (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
)

export default App
