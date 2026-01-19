import { ENV } from "../../enviroments/enviroments"


export const API_MAILER = {
    SEND: `${ENV.API_URL}/api/mailer/send`,
    SEND_COT: `${ENV.API_URL}/api/mailer/send-cot`
}
