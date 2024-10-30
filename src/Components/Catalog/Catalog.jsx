import "./Styles/Catalog.css"

import {useEffect, useState} from "react";
import getCatalogItems from "../../lib/getCatalogItems.js";

import CatalogData from "../CatalogData/CatalogData.jsx";
import {Box, Button, Grid2, TextField} from "@mui/material";
import {FilterAlt} from "@mui/icons-material";
import {Route, Routes} from "react-router-dom";
import Insect from "../Insect/Insect.jsx";


function Catalog() {
    let [page, setPage] = useState(1);
    let [filterValue, setFilterValue] = useState({});
    let [data, setData] = useState([]);
    let [error, setError] = useState(null);
    let [pending, setPending] = useState(true);
    let [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setPending(true);
        getCatalogItems({}, page)
            .then(data => {
                console.log(data)
                switch (data.status) {
                    case 200:
                        setTotalPages(data.data.totalPages)
                        setData(data.data.body)
                        break;
                    default:
                        setError({
                            header: "Server error",
                            message: data.data.message
                        })
                        break;
                }
            })
            .catch(e => {
                setError({
                    header: "Service error",
                    message: String(e)
                })
            })
            .finally(() => {
                setPending(false);
            })
    }, [page]);

    return (
        <Box component="section" className="Catalog" minHeight="100vh" padding={{
            xs: "100px 25px 25px 25px",
            md: "100px 150px 25px 150px"
        }}>
            <Grid2 width="100%" container columns={{xs: 1, md: 4}} spacing={1}>
                <Grid2 size={1}>
                    <TextField disabled={pending} fullWidth label="Filter 1" variant="outlined"/>
                </Grid2>
                <Grid2 size={1}>
                    <TextField disabled={pending} fullWidth label="Filter 2" variant="outlined"/>
                </Grid2>
                <Grid2 size={1}>
                    <TextField disabled={pending} fullWidth label="Filter 3" variant="outlined"/>
                </Grid2>
                <Grid2 size={1}>
                    <Button fullWidth sx={{height: "100%"}} variant="contained"
                            startIcon={<FilterAlt/>}
                            disabled={pending}
                    >
                        Apply
                    </Button>
                </Grid2>
            </Grid2>
            <CatalogData data={data} totalPages={totalPages}
                         error={error} pending={pending}
                         page={page} setPage={setPage} />
        </Box>
    )
}

export default function CatalogRouter() {
    return (
        <Routes>
            <Route path="/" element={<Catalog/>} />
            <Route path="/:id" element={<Insect/>} />
        </Routes>
    )
}
