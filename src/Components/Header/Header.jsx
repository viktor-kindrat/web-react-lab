import "./Styles/Header.css"
import {Box, Button, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom"

import whiteLogo from "../../assets/SVG/logoWhite.svg"
import cartIcon from "./SVG/cart.svg"

function Header() {
    let go = useNavigate()

    return (
        <Box component="header" className="Header" height="75px" width="100%" padding={{
            xs: "10px 25px",
            md: "10px 125px"
        }}
             display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"
             position="absolute" top="0" left="0">
            <img height={35} width={35} src={whiteLogo} alt="Logo" className="Header__logo"/>
            <Box component="nav" className="Header__nav" columnGap="25px" display="flex" alignItems="center">
                <Link to="#">
                    <Typography underline="none" color="#ffffff" fontFamily="Roboto" variant="body1">
                        Home
                    </Typography>
                </Link>
                <Link to="#">
                    <Typography underline="none" color="#ffffff" fontFamily="Roboto" variant="body1">
                        Catalog
                    </Typography>
                </Link>
            </Box>
            <Box component="div" className="Header__nav" columnGap="5px" display="flex" alignItems="center">
                <Button startIcon={<img height={25} width={25} className="Header__cart-img" src={cartIcon} alt="cart"/>}
                        className="Header__cart-btn"
                        variant="text"
                        onClick={()=>go("/")}
                >
                    My cart
                </Button>
            </Box>
        </Box>
    )
}

export default Header