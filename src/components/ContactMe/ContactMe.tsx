import React from "react";
import { useContactForm } from "../../hooks/useContactMessage";
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

const ContactForm: React.FC = () => {
    const { formData, errors, isSubmitting, successMessage, errorMessage, handleChange, handleSubmit } =
        useContactForm();

    return (
        <FormContainer>
            <FormContent onSubmit={handleSubmit}>
                <FormGroup>
                    <StyledInput
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        $hasError={!!errors.name}
                    />
                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                    <StyledInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        $hasError={!!errors.email}
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
                        $hasError={!!errors.message}
                    />
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </FormGroup>

                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

                <ButtonContainer>
                    <Button text={isSubmitting ? "ENVIANDO..." : "ENVIAR"} />
                </ButtonContainer>
            </FormContent>
        </FormContainer>
    );
};

export default ContactForm;
