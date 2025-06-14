import axios from "axios";
import { API_MAILER } from "../api-routes/api-mailer.routes";

export default class MailerService{

    async sendEmail(payload) {
        try {
        const response = await axios.post(API_MAILER.SEND, payload);
        return response.data;
        } catch (error) {
        console.error("Error al enviar el correo:", error);
        throw error?.response?.data || { message: "Error inesperado al enviar el correo" };
        }
    }

    async sendCot(payload) {
    try {
        const response = await axios.post(API_MAILER.SEND_COT, payload);
        return response.data;
    } catch (error) {
        console.error("Error al enviar la cotización:", error);
        throw error?.response?.data || { message: "Error inesperado al enviar la cotización" };
    }
    }
};