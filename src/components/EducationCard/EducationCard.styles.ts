import styled from "styled-components";
import { RegularText } from "../../styles/typography";

export const CardContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.colors.lines};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(140, 223, 152, 0.2);
    }

    /* En dispositivos móviles pequeños, cambiar a layout vertical */
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        max-width: 100%;
    }
`;

export const LogoContainer = styled.div`
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    padding: ${({ theme }) => theme.spacing.md};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};

    /* Asegurar que el contenedor mantiene su forma en todos los dispositivos */
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100px;
        height: 100px;
        padding: ${({ theme }) => theme.spacing.sm};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 90px;
        height: 90px;
        margin: ${({ theme }) => theme.spacing.sm} 0;
    }
`;

export const Logo = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    aspect-ratio: 1/1; /* Mantener proporción cuadrada */

    /* Asegurar que la imagen no se distorsiona */
    width: auto;
    height: auto;
`;

export const YearText = styled(RegularText)`
    margin-top: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ContentContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.md};
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.sm};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        text-align: center;
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md}
            ${({ theme }) => theme.spacing.md};
    }
`;
