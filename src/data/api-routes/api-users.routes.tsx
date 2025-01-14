import { ENV} from "../../enviroments/enviroments";

const API_USERS = {
        getUsers: `${ENV.API_URL}/users/getAll`,
        getUsersById: (id: number ) => `${ENV.API_URL}/users/getById/${id}`,
        createUser: `${ENV.API_URL}/create`,
        authenticateUser: `${ENV.API_URL}/users/authenticate`,
        updateUser: (id: number) => `${ENV.API_URL}/users/updateBy/${id}`,
        deleteUser: (id: number) => `${ENV.API_URL}/users/deleteBy/${id}`,
}

export default API_USERS;