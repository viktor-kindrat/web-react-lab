import "./Styles/Header.css"
import {Badge, Box, Button, Typography} from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom"

import whiteLogo from "../../assets/SVG/logoWhite.svg"
import darkLogo from "../../assets/SVG/logoDark.svg"
import {Logout, ShoppingCart} from "@mui/icons-material";
import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";


function Header() {
    let auth = useSelector(state => state.auth);
    let dispatch = useDispatch();

    let go = useNavigate();
    let cart = useSelector(state => state.cart);

    let count = useMemo(() =>
        cart.reduce((acc, current) => acc + current.count, 0),
    [cart]);

    let location = useLocation();
    let textColor = useMemo(() => {
        return location.pathname === "/" ? "#FFFFFF" : "#171717"
    }, [location]);

    return (
        <Box component="header" className="Header" height="75px" width="100%" padding={{
            xs: "10px 25px",
            md: "10px 125px"
        }}
             display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"
             position="absolute" top="0" left="0">
            <img height={35} width={35} src={textColor === "#FFFFFF" ? whiteLogo : darkLogo} alt="Logo" className="Header__logo"/>
            <Box component="nav" className="Header__nav" columnGap="25px" display="flex" alignItems="center">
                <Link to="/">
                    <Typography underline="none" color={textColor} fontFamily="Roboto" variant="body1">
                        Home
                    </Typography>
                </Link>
                <Link to="/catalog">
                    <Typography underline="none" color={textColor} fontFamily="Roboto" variant="body1">
                        Catalog
                    </Typography>
                </Link>
            </Box>
            <Box component="div" className="Header__nav" columnGap="15px" display="flex" alignItems="center">
                {
                    auth.isAuthenticated && <>
                        <Badge color="primary" badgeContent={count} anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}>
                            <Button startIcon={<ShoppingCart color={textColor}/>}
                                    className="Header__cart-btn"
                                    variant="text"
                                    onClick={()=>go("/cart")}
                                    sx={{color: textColor}}
                                    badge={2}
                            >
                                My cart
                            </Button>
                        </Badge>
                        <Button startIcon={<Logout color={"#ffffff"}/>}
                                className="Header__cart-btn"
                                variant="contained"
                                color="error"
                                onClick={() => {
                                    dispatch({type: "cart/clean"})
                                    dispatch({type: "auth/logout"})
                                }}
                                sx={{color: "#ffffff"}}
                                badge={2}
                        >
                            Logout
                        </Button>
                    </>
                }
            </Box>
        </Box>
    )
}

export default Header