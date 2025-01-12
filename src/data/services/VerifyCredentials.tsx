import axios from "axios";
import API_USERS from "../api-routes/api-users";

const VerifyCredentials = async (username, password) => {
try{
    const response = await axios.post(API_USERS.authenticateUser, {
        username:username,
        password:password
    });

    if(response.data.success ) {
        return true;
    }
    return false;
    } catch (error) {
    console.error("Error al verificar credenciales", error);
    return false;
    }
};
export default  VerifyCredentials;