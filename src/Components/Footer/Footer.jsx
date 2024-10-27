import "./Styles/Footer.css"
import {Box, Grid2, Typography, Link} from "@mui/material";

import logo from "../../assets/SVG/logoDark.svg"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Box width="100%" component="footer" className="Footer"
             padding={{
                 xs: "10px 25px",
                 md: "10px 125px"
             }}>
            <Grid2 container width="100%" className="Footer__credentials" alignContent="center" justifyContent="space-between"
                   columns={3}>
                <Grid2 size={1}>
                    <Typography component="h2" variant="h3">
                        Branding stuff
                    </Typography>
                    <Typography component="p" variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti error, est laboriosam magnam minus nisi.
                    </Typography>
                </Grid2>
                <Grid2 size={1} display="flex" alignContent="center" justifyContent="center">
                    <img src={logo} alt="logo" height="50" width="50" className="Footer__logo"/>
                </Grid2>
                <Grid2 size={1} display="flex" alignContent="flex-end" justifyContent="flex-end">
                    <Link href="#">
                        <InstagramIcon color="info" />
                    </Link>
                    <Link href="#">
                        <FacebookIcon color="info" />
                    </Link>
                    <Link href="#">
                        <TwitterIcon color="info" />
                    </Link>
                    <Link href="#">
                        <LinkedInIcon color="info" />
                    </Link>
                </Grid2>
            </Grid2>
            <Box display="flex" alignItems="center" justifyContent="center" className="Footer__copy">
                {new Date().getFullYear()} &copy; Copyright all rights reserved
            </Box>
        </Box>
    )
}

export default Footer