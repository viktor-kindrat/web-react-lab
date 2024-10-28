import "./Styles/Catalog.css"

import {Box, Button, Grid2, TextField, Typography} from "@mui/material";
import {FilterAlt} from "@mui/icons-material";
import CardWithImage from "../UI/CardWithImage/CardWithImage.jsx";
import {useState} from "react";

import image2 from "../BestGoods/Images/image2.png";
import image4 from "../BestGoods/Images/image4.png";


let exampleData = [
    {
        "_id": "66f4424f1c1453a807ffe3e4",
        "imageLink": image2,
        "name": "Red-Brown Beetle",
        "description": "Insect with a dark red-brown shell, commonly found in forests.",
        "weightInGram": 0.2091,
        "price": {
            "value": "200",
            "currency": "$"
        },
        "speedInMetersPerHour": 24,
        "cardColor": "#9DA3A1",
        "createdAt": "2024-09-25T17:03:11.906Z",
        "updatedAt": "2024-10-17T16:13:09.742Z",
        "__v": 0
    },
    {
        "_id": "66f442a41c1453a807ffe3ea",
        "imageLink": image4,
        "name": "Glossy Black Beetle",
        "description": "Glossy black beetle with a robust structure, known for its textured surface.",
        "weightInGram": 0.005,
        "price": {
            "value": "200",
            "currency": "$"
        },
        "speedInMetersPerHour": 12,
        "cardColor": "#7C5840",
        "createdAt": "2024-09-25T17:04:36.037Z",
        "updatedAt": "2024-09-25T17:04:36.037Z",
        "__v": 0
    },
]

function Catalog() {
    let [page, setPage] = useState(1);

    return (
        <Box component="section" className="Catalog" minHeight="100vh" padding={{
            xs: "100px 25px 25px 25px",
            md: "100px 150px 25px 150px"
        }}>
            <Grid2 width="100%" container columns={{xs: 1, md: 4}} spacing={2}>
                <Grid2 size={1}>
                    <TextField fullWidth label="Filter 1" variant="outlined"/>
                </Grid2>
                <Grid2 size={1}>
                    <TextField fullWidth label="Filter 2" variant="outlined"/>
                </Grid2>
                <Grid2 size={1}>
                    <TextField fullWidth label="Filter 3" variant="outlined"/>
                </Grid2>
                <Grid2 size={1}>
                    <Button fullWidth sx={{height: "100%"}} variant="contained"
                            startIcon={<FilterAlt/>}
                    >
                        Apply
                    </Button>
                </Grid2>
            </Grid2>
            <Grid2 container className="Catalog__cards" columns={{
                xs: 1, sm: 2, lg: 3, xl: 4
            }} spacing={4} sx={{width: "100%"}}>
                {/*<Grid2 size={3}>*/}
                {/*    <Typography variant="body1" component="p" textAlign="center">Anything found</Typography>*/}
                {/*</Grid2>*/}
                {
                    [...exampleData, ...exampleData, ...exampleData, ...exampleData].map((item, index) =>
                        <Grid2 key={`catalog-item-container-${page}=${index}`} size={1} className="Catalog__card-container">
                            <CardWithImage imageURL={item.imageLink}
                                           caption={item.description}
                                           backgroundColor={item.cardColor}
                                           name={item.name}
                            >
                                <Grid2 container columns={1} spacing={2}>
                                    <Grid2 size={1}>
                                        <Typography variant="body1" color="#FFFFFF">
                                            <Typography component="b" variant="body1" fontWeight="800">Price:</Typography> {item.price.value} {item.price.currency}
                                        </Typography>
                                    </Grid2>
                                    <Grid2 size={1}>
                                        <Button fullWidth sx={{height: "100%"}} variant="contained">
                                            Details
                                        </Button>
                                    </Grid2>
                                </Grid2>
                            </CardWithImage>
                        </Grid2>
                    )
                }
            </Grid2>
        </Box>
    )
}

export default Catalog;