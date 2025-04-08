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
`;

export const LogoContainer = styled.div`
    width: 120px;
    height: 120px;
    padding: ${({ theme }) => theme.spacing.md};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const YearText = styled(RegularText)`
    margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const ContentContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.md};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LinkText = styled(RegularText)`
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: ${({ theme }) => theme.spacing.xs};
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;
