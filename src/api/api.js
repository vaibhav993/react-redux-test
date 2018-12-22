import axios from "axios"
import { BASE_API } from "../constants";

export default axios.create({
    baseURL: BASE_API,
    headers: {
        //"Content-Type": "application/json",
        "Authorization": `Bearer ggolvSv4UpUH_a9Qk5x5KAC2YudbptpltVYZ` //QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR`
    }
});