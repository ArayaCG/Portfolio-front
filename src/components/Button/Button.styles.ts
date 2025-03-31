import styled from "styled-components";
import { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<Omit<ButtonProps, "text">>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 24px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    border-radius: ${({ theme }) => theme.borderRadius.button};
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.background};
        border: 2px solid ${({ theme }) => theme.colors.accent};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 8px 20px;
        font-size: ${({ theme }) => theme.fontSizes.small};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 6px 16px;
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`;
