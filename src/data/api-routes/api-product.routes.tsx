import { ENV } from "../../enviroments/enviroments"


 const API_PRODUCT = {
    getAll: `${ENV.API_URL}/product/getProducts`,
    getByName: (name: string) => `${ENV.API_URL}/product/getBy/${name}`,
    create: `${ENV.API_URL}/product/createProduct`,
    updateByName: (name: string) => `${ENV.API_URL}/product/updateBy/${name}`,
    deleteByName: (name: string) =>  `${ENV.API_URL}/product/deleteBy/${name}`
}

export default API_PRODUCT;