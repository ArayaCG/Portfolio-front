import styled from "styled-components";
import { TitleProps } from "./Title.types";

export const StyledTitle = styled.h1<Omit<TitleProps, "text">>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px 48px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    text-decoration: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.title};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: ${({ theme }) => theme.fonts.main};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 8px 20px;
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 6px 16px;
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`;
