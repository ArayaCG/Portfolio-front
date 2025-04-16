import api from "./api";
import { FormData } from "../components/ContactMe/ContactMe.type";

export const sendContactForm = (data: FormData) => {
    return api.post("/api/contactMessage", data);
};
