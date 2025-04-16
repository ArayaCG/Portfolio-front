import { useState } from "react";
import { sendContactForm } from "../services/contactMeService";
import { FormData } from "../components/ContactMe/ContactMe.type";

export const useContactForm = () => {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = "El nombre es requerido";
        }

        if (!formData.email.trim()) {
            newErrors.email = "El email es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }

        if (!formData.message.trim()) {
            newErrors.message = "El mensaje es requerido";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            setIsSubmitting(true);
            await sendContactForm(formData);
            setSuccessMessage("Mensaje enviado correctamente.");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setErrorMessage("Hubo un error al enviar el formulario. Intentá de nuevo.");
            console.error("Error al enviar:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        errors,
        isSubmitting,
        successMessage,
        errorMessage,
        handleChange,
        handleSubmit,
    };
};
