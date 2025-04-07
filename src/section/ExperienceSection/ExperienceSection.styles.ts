import styled from "styled-components";

export const SectionContainer = styled.section`
    padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

export const SectionTitle = styled.h2`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const ProjectsGrid = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing.xl};

    grid-template-columns: minmax(280px, 1fr);
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 350px));
        justify-content: center;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 350px));
        justify-content: center;
    }
`;

export const TitleWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;
