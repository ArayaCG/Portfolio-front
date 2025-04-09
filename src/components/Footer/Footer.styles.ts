import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    background: linear-gradient(to top, #36522d, #121810);
    color: ${({ theme }) => theme.colors.text};
    height: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.md};
        padding: ${({ theme }) => theme.spacing.md};
        height: auto;
    }
`;

export const Copyright = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    flex: 1;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        order: 3;
        justify-content: center;
    }
`;

export const Name = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        order: 1;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        order: 2;
        justify-content: center;
    }
`;

export const SocialLink = styled.a`
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-3px);
    }

    &:hover svg {
        color: ${({ theme }) => theme.colors.textSecondary};
    }
`;
