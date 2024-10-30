import axios from "axios";

export default async function getCatalogItems(filter, page) {
    return axios.get(`${import.meta.env.VITE_SERVER_LINK}/api/insects`, {
        params: {
            page: page
        }
    })
}