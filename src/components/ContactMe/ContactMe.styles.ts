import styled from "styled-components";
import type { InputProps } from "./ContactMe.type";

export const FormContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.l};
`;

export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};
    margin-top: ${({ theme }) => theme.spacing.xxl};
    width: 100%;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`;

export const StyledInput = styled.input<InputProps>`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme, hasError }) => (hasError ? "red" : theme.colors.lines)};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
    outline: none;
    width: 100%;

    &:focus {
        border-bottom: 2px solid ${({ theme }) => theme.colors.textSecondary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.7;
    }
`;

export const StyledTextarea = styled.textarea<InputProps>`
    background-color: #000000;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({ theme }) => theme.spacing.md};
    resize: vertical;
    outline: none;
    min-height: 150px;
    width: 100%;

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
    margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
