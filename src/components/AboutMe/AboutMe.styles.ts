import styled from "styled-components";

export const ProfileContainer = styled.section`
    display: flex;
    width: 100%;
    min-height: 400px;
    background-color: transparent;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    flex: 0 0 40%;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex: 0 0 auto;
        height: 300px;
        margin-bottom: ${({ theme }) => theme.spacing.md};
    }
`;

export const ProfileImage = styled.img`
    width: 70%;
    height: auto;
    object-fit: cover;
    display: block;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        border-radius: 50%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 60%;
        border-radius: 50%;
    }
`;

export const ContentContainer = styled.div`
    flex: 1;
    padding: ${({ theme }) => theme.spacing.xl};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    min-height: 90vh;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center;
        padding: ${({ theme }) => theme.spacing.md};
        min-height: auto;
    }
`;

export const NameContainer = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const FirstName = styled.h2`
    font-size: 5rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    font-family: "Anonymous Pro", monospace;
    letter-spacing: 1px;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 4rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 3rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2rem;
    }
`;

export const LastName = styled.h1`
    font-size: 6rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    font-family: "Anonymous Pro", monospace;
    letter-spacing: 1px;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 3.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.5rem;
    }
`;

export const Role = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`;

export const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    margin-top: ${({ theme }) => theme.spacing.xl};
    text-align: right;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    justify-content: flex-end;
    margin-bottom: ${({ theme }) => theme.spacing.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        justify-content: center;
    }
`;

export const HighlightedText = styled.span`
    color: ${({ theme }) => theme.colors.textSecondary};
`;
