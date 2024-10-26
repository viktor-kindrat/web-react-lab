import "./Styles/BestGoods.css"

import {Box, Grid2, Typography} from "@mui/material";

import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
import BestGoodsCard from "../BestGoodsCard/BestGoodsCard.jsx";

let dataExample = [
    {
        image_url: image1,
        name: "Spotted Beetle",
        description: "Beetle with distinct black and white patterns on its back.",
        backgroundColor: '#798C92',
    },
    {
        image_url: image2,
        name: "Red-Brown Beetle",
        description: "Insect with a dark red-brown shell, commonly found in forests.",
        backgroundColor: '#9DA3A1',
    },
    {
        image_url: image3,
        name: "Furry Beetle",
        description: "Beetle with a furry texture and camouflage patterns.",
        backgroundColor: '#50636A',
    },
    {
        image_url: image4,
        name: "Glossy Black Beetle",
        description: "Glossy black beetle with a robust structure, known for its textured surface.",
        backgroundColor: '#7C5840',
    },
]


function BestGoods() {
    return (
        <Box component="section" className="BestGoods"
             padding={{xs: "25px", md: "25px 125px"}}
             display="flex"
             flexDirection="column"
             alignItems="center"
             justifyContent="center"
             gap="50px"
        >
            <Grid2 container className="BestGoods__cards" columns={{xs: 1, sm: 2, lg: 4}} alignContent="center" spacing="35px">
                {
                    dataExample.map((item, index) =>
                        <Grid2 key={`insect-container-${index}`} size={1} sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <BestGoodsCard imageURL={item.image_url}
                                           description={item.description}
                                           name={item.name}
                                           backgroundColor={item.backgroundColor}
                            />
                        </Grid2>
                    )
                }
            </Grid2>
        </Box>
    )
}

export default BestGoods