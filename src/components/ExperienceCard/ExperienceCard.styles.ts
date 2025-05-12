import styled from "styled-components";
import { BoldText, RegularText } from "../../styles/typography";
import type { CardContainerProps } from "./ExperienceCard.type";

export const CardContainer = styled.div<CardContainerProps>`
    position: relative;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;

    /* Estructura diferente para móvil vs desktop */
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        height: auto;
        padding-bottom: 0;
    }

    /* Solo en desktop */
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 0;
        padding-bottom: ${(props) => (props.$isSingleItem ? "56.25%" : "75%")};

        &:hover {
            transform: translateY(-5px);

            .overlay {
                opacity: 1;
            }

            .content {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
`;

export const ImageWrapper = styled.div`
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        padding-bottom: 75%; /* Mantiene la proporción */
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

export const ExperienceImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: auto;
    object-position: center;
    transition: transform 0.5s ease;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0) 100%);

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none; /* No necesitamos overlay en móvil */
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;

export const ContentContainer = styled.div`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
    z-index: 2;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: relative;
        opacity: 1;
        transform: none;
        background-color: ${({ theme }) => theme.colors.background};
        border: 1px solid ${({ theme }) => theme.colors.lines};
        border-top: none;
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius.medium};
        border-bottom-right-radius: ${({ theme }) => theme.borderRadius.medium};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.3s ease;
    }
`;

export const HeaderContainer = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        align-items: center;
        margin-bottom: ${({ theme }) => theme.spacing.sm};
    }
`;

export const ExperienceLogo = styled.img`
    height: 40px;
    width: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-right: ${({ theme }) => theme.spacing.sm};
        margin-bottom: 0;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-bottom: ${({ theme }) => theme.spacing.sm};
    }
`;

export const StackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xs};
    margin: ${({ theme }) => theme.spacing.sm} 0;
`;

export const StackTag = styled.span`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.text};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-size: ${({ theme }) => theme.fontSizes.small};
    border: 1px solid ${({ theme }) => theme.colors.lines};
`;

export const ExperienceLink = styled.a`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.button};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-top: ${({ theme }) => theme.spacing.sm};

    svg {
        margin-left: ${({ theme }) => theme.spacing.xs};
    }

    &:hover {
        text-decoration: underline;
    }
`;

export const Description = styled(RegularText)`
    margin: ${({ theme }) => theme.spacing.xs} 0;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.4;
`;

export const Title = styled(BoldText)`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
`;
