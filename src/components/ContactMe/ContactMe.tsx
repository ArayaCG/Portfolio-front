import type React from "react";
import { useState } from "react";
import type { ContactFormProps, FormData } from "./ContactMe.type";
import {
    ButtonContainer,
    ErrorMessage,
    FormContainer,
    FormContent,
    FormGroup,
    StyledInput,
    StyledTextarea,
} from "./ContactMe.styles";
import Button from "../Button/Button";

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            if (onSubmit) {
                onSubmit(formData);
            }
        }
    };

    return (
        <FormContainer>
            <FormContent onSubmit={handleSubmit}>
                <FormGroup>
                    <StyledInput
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contacto"
                        hasError={!!errors.name}
                    />
                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                    <StyledInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Asunto"
                        hasError={!!errors.email}
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                    <StyledTextarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mensaje"
                        rows={6}
                        hasError={!!errors.message}
                    />
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </FormGroup>

                <ButtonContainer>
                    <Button text="ENVIAR" />
                </ButtonContainer>
            </FormContent>
        </FormContainer>
    );
};

export default ContactForm;
