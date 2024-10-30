import "./Styles/Insect.css"
import {Box} from "@mui/material";

function Insect() {
    console.log("IN INSECT")

    return (
        <Box minHeight="100vh" className="Insect" padding={{
            xs: "100px 25px 25px 25px",
            md: "100px 150px 25px 150px"
        }}>
            INSECT PAGE
        </Box>
    )
}

export default Insect;