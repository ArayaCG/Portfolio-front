import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 ${({ theme }) => theme.spacing.xl};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    position: sticky;
    top: 0;
    z-index: 100;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0 ${({ theme }) => theme.spacing.md};
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 6s ease;

    &:hover {
        transform: rotate(360deg);
`;

export const SideItem = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: transform 0.8s ease;

    &:hover {
        transform: scale(1, 0.5);
    }
`;
