import styled from "styled-components";

export const LandingPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.none};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.lg};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.md};
    }
`;
export const LandingPageContainerPadding = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.lg};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.md};
    }
`;
