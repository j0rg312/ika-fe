import { ENV } from "../../enviroments/enviroments";

const API_AUTH = {
    register: `${ENV.API_URL}/auth/register`,
    login: `${ENV.API_URL}/auth/login`,
    verify: `${ENV.API_URL}/auth/verify`
};

export default API_AUTH;