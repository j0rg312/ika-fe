import { ENV } from "../../enviroments/enviroments"


 const API_PRODUCT = {
    getAll: `${ENV.API_URL}/products/getproducts`,
    getByName: (name: string) => `${ENV.API_URL}/products/getBy/${name}`,
    create: `${ENV.API_URL}/products/createproduct`,
    update: (id: Number) => `${ENV.API_URL}/products/update/${id}`,
    deleteByName: (name: string) =>  `${ENV.API_URL}/products/deleteBy/${name}`
}

export default API_PRODUCT;