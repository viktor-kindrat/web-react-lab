import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './Components/App/App.jsx'

import {BrowserRouter as Router} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        // primary: {
        //     main: "#eeeeee",
        // },
        info: {
            main: "#252525"
        }
    },
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <App/>
            </Router>
        </ThemeProvider>
    </StrictMode>,
)
