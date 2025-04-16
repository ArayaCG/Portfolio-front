import api from "./api";

export const logVisit = async (): Promise<void> => {
    try {
        await api.post("/api/visits/log");
    } catch (error) {
        console.error("Error al registrar la visita:", error);
    }
};
