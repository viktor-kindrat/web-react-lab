import axios from "axios";

export default async function getInsectById(id) {
    return axios.get(`${import.meta.env.VITE_SERVER_LINK}/api/insects/${id}`)
}