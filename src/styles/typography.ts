import styled from "styled-components";

export const RegularText = styled.p`
    font-family: ${({ theme }) => theme.fonts.main};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-style: ${({ theme }) => theme.fontStyles.normal};
    color: ${({ theme }) => theme.colors.text};
`;

export const BoldText = styled.p`
    font-family: ${({ theme }) => theme.fonts.main};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-style: ${({ theme }) => theme.fontStyles.normal};
    color: ${({ theme }) => theme.colors.text};
`;

export const ItalicText = styled.p`
    font-family: ${({ theme }) => theme.fonts.main};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-style: ${({ theme }) => theme.fontStyles.italic};
    color: ${({ theme }) => theme.colors.text};
`;

export const BoldItalicText = styled.p`
    font-family: ${({ theme }) => theme.fonts.main};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-style: ${({ theme }) => theme.fontStyles.italic};
    color: ${({ theme }) => theme.colors.text};
`;
