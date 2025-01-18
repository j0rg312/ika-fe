import { useEffect, useState } from "react";
import API_USERS from "../../data/api-routes/api-users";

const TestConnection = () => {
    const [status, setStatus] = useState("");

    useEffect(() => {
        console.log('La URL de la API es:', API_USERS.getUsers);
        fetch(API_USERS.getUsers)
            .then((res) => {
                console.log('Respuesta de la API:', res);
                if (!res.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
                return res.json();
            })
            .then((data) => {
                console.log('Conexión exitosa', data);
                setStatus("Conexión exitosa");
            })
            .catch((err) => {
                console.error('Error en la conexión', err);
                setStatus("Error en la conexión");
            });
    }, []);

    console.log('Estado de la conexión:', status);
    return (
        <div>
            <h1>Probando conexión con backend...</h1>
            <p>{status}</p>
        </div>
    );
};

export default TestConnection;
