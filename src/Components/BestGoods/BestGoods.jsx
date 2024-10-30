import "./Styles/BestGoods.css"

import {Box, Button, Grid2, Typography} from "@mui/material";
import CardWithImage from "../UI/CardWithImage/CardWithImage.jsx";

import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";

import {useEffect, useState} from "react";
import gsap from "gsap";


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
    let [opened, setOpened] = useState(false);

    useEffect(() => {
        let tl = gsap.timeline();
        if (opened) {
            tl.fromTo(".BestGoods__text", {
                opacity: 0,
                y: 15
            }, {
                delay: 0.3,
                opacity: 1,
                y: 0,
                stagger: 0.2,
            })
        }

        return () => {
            tl.kill();
        }
    }, [opened]);

    let handleViewMoreBtnClick = (e) => {
        if (opened) {
            let tl = gsap.timeline();
            tl.fromTo(".BestGoods__text", {
                opacity: 1,
                y: 0
            }, {
                opacity: 0,
                y: -15,
                delay: 0.3,
                stagger: 0.2,
            })
            tl.then(() => setOpened(false))
        } else {
            setOpened(true)
        }
    }

    return (
        <Box component="section" className="BestGoods"
             padding={{xs: "25px", md: "25px 125px"}}
             display="flex"
             flexDirection="column"
             alignItems="center"
             justifyContent="center"
             gap="50px"
        >
            <Grid2 container className="BestGoods__cards" columns={{xs: 1, sm: 2, lg: 4}} alignContent="center"
                   spacing="35px">
                {
                    dataExample.map((item, index) =>
                        <Grid2 key={`insect-container-${index}`} size={1}
                               sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <CardWithImage imageURL={item.image_url}
                                           caption={item.description}
                                           name={item.name}
                                           backgroundColor={item.backgroundColor}
                            />
                        </Grid2>
                    )
                }
            </Grid2>

            {
                opened &&
                <Box component="div">
                    <Typography className="BestGoods__text BestGoods__text_h2" component="h2" variant="h2"
                                textAlign="center">More then 10k people trust us!</Typography>
                    <Typography className="BestGoods__text BestGoods__text_p" component="p" variant="body2"
                                textAlign="center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque fuga illum iste itaque
                        nisi
                        nobis non nostrum odio praesentium, provident quasi ratione repellendus saepe sapiente sint
                        vitae.
                        Ab accusantium architecto commodi consectetur dicta doloribus magni nostrum ratione repudiandae
                        vero? Ab architecto cum delectus deserunt dolor dolore doloremque, ea earum eligendi explicabo,
                        harum hic illum in ipsa iusto maxime nam non odio praesentium qui, quidem quis quod quos
                        recusandae
                        repellat sit tempore ut velit voluptatibus voluptatum? Blanditiis deserunt dicta eligendi, enim
                        esse, et ipsam, iure maxime mollitia quas quisquam ullam voluptatum. Alias amet, autem
                        consequuntur
                        deleniti dicta distinctio doloremque eligendi eos error esse eum ex facere ipsa molestiae
                        molestias
                        mollitia nemo nobis obcaecati odio perferendis praesentium quas quia quod, sed tempora tempore
                        temporibus unde veritatis voluptas voluptatibus! Eos illum ipsam magnam tempore. Accusantium,
                        aliquam animi assumenda aut dignissimos eveniet exercitationem expedita ipsam iste molestias
                        mollitia nemo nostrum obcaecati pariatur quae, reiciendis similique, soluta vitae. Accusamus
                        alias,
                        atque dicta enim labore perspiciatis porro provident, saepe sed tempora totam, ut. Asperiores
                        commodi deserunt ducimus expedita fuga magnam nesciunt provident sequi. Aliquid aperiam
                        architecto
                        asperiores corporis culpa cum dolores harum impedit modi obcaecati, officiis possimus provident
                        quae
                        quia sed! Consequuntur ipsam minima similique.
                    </Typography>
                </Box>
            }

            <Button onClick={handleViewMoreBtnClick}
                    variant="contained">
                {!opened ? "View more" : "Show less"}
            </Button>
        </Box>
    )
}

export default BestGoods