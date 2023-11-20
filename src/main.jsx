import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider} from '@chakra-ui/provider';
import { ColorModeScript } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/theme-utils';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#101010')(props),
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const customColors = {
  gray: {
    light: '#616161',
    dark: '#1e1e1e',
  },
};

const customTheme = extendTheme({ config, styles, colors: customColors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
