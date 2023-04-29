import axios from "axios";


export default axios.create({
    baseURL: "https://wexer-example-backend.vercel.app/api",
    headers: {'x-api-key': "1e7977ea-d97e-11ed-afa1-0242ac120002"}
});