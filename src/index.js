import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './features/root/App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./app/Store";
import {extendedRegisterSlice} from "./features/redux/slices/RegisterSlice";


const Root = ReactDOM.createRoot(document.getElementById('root'));

const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
}
const customTheme = extendTheme({config})
store.dispatch(extendedRegisterSlice.endpoints.getRegister.initiate());
Root.render(
 <Provider store={store}>
     <ChakraProvider theme={customTheme}>
         <BrowserRouter>
             <App/>
         </BrowserRouter>
     </ChakraProvider>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
