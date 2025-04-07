import styled from "styled-components";
import { ProjectsGridProps } from "../../components/ExperienceCard/ExperienceCard.type";

export const SectionContainer = styled.section`
    padding: ${({ theme }) => theme.spacing.xxl} 0;
    width: 100%;
`;

export const ProjectsGrid = styled.div<ProjectsGridProps>`
    display: grid;
    gap: ${({ theme }) => theme.spacing.xl};

    grid-template-columns: ${(props) => (props.itemCount === 1 ? "1fr" : "repeat(1, 1fr)")};
    max-width: ${(props) => (props.itemCount === 1 ? "90%" : "100%")};
    margin: ${(props) => (props.itemCount === 1 ? "0 auto" : "0")};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: ${(props) => (props.itemCount === 1 ? "1fr" : "repeat(2, 1fr)")};
        max-width: ${(props) => (props.itemCount === 1 ? "80%" : "100%")};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        /* Cambiado de repeat(3, 1fr) a repeat(2, 1fr) para mostrar 2 elementos por fila */
        grid-template-columns: ${(props) => (props.itemCount === 1 ? "1fr" : "repeat(2, 1fr)")};
        max-width: ${(props) => (props.itemCount === 1 ? "70%" : "100%")};
    }
`;

export const TitleWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;
