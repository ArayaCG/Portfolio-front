import styled from "styled-components";
import type { InputProps } from "./ContactMe.type";

export const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.xl};
`;

export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const StyledInput = styled.input<InputProps>`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme, hasError }) => (hasError ? "red" : theme.colors.lines)};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({ theme }) => theme.spacing.sm} 0;
    outline: none;

    &:focus {
        border-bottom: 2px solid ${({ theme }) => theme.colors.textSecondary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.7;
    }
`;

export const StyledTextarea = styled.textarea<InputProps>`
    background-color: transparent;
    border: 1px solid ${({ theme, hasError }) => (hasError ? "red" : theme.colors.lines)};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({ theme }) => theme.spacing.sm};
    resize: vertical;
    outline: none;
    min-height: 120px;

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.7;
    }
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacing.lg};
`;
