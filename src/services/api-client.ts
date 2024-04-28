import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'f0bbdffc26cb4debb9fc99296a250f0c'
    }
})