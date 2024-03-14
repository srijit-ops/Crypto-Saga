// import axios from "axios"

// export const axiosGet = async ({ url, params }) => {

//     try {
//         return await axios.get(
//             url,
//             {
//                 params
//             }
//         )
//     }
//     catch (e) {
//         console.log("error at url: ", url)
//         console.log("error at axiosGet: ", e)

//         if (e.response) {
//             return ({
//                 status: e.response.status
//             })
//         }
//         else {
//             return ({
//                 status: 400
//             })
//         }
//     }
// }


import axios from "axios";

export const rootAxios= axios.create({
    baseURL:"https://api.coingecko.com/api/v3",
    // params:{...params}
})