import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './Components/App/App.jsx'

import {BrowserRouter as Router} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {Provider} from 'react-redux'

import store from "./features/store.js"

const theme = createTheme({
    palette: {
        primary: {
            main: "#244150",
        },
        info: {
            main: "#252525",
        }
    },
    typography: {
        h1: {
            fontSize: "calc(24px + 3.2vw)"
        },
        h2: {
            fontSize: "calc(18px + 2.2vw)",
            fontWeight: "400"
        },
        h3: {
            fontSize: "calc(15px + 1.2vw)",
            fontWeight: "200"
        },
        h4: {
            fontSize: "calc(8px + 1vw)",
            fontWeight: "400"
        },
        subtitle1: {
            fontSize: "calc(10px + .6vw)",
            fontWeight: "300"
        },
        button: {
            fontSize: "calc(11px + .3vw)",
        },
        body1: {
            fontSize: "calc(12px + .3vw)",
        },
        body2: {
            fontSize: "calc(10px + .3vw)",
        }
    }
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <App/>
                </Router>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
)
