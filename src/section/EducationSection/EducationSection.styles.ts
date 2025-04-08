import styled from "styled-components";

export const SectionTitle = styled.h2`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    text-align: center;
`;

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
