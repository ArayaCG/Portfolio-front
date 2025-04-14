import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const IntroContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    background: linear-gradient(135deg, #18300e 0%, #050f08 100%);
    position: relative;
    overflow: hidden;
    padding: 0 15%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0 10%;
        align-items: center;
    }
`;

export const BackgroundPattern = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(140, 223, 152, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: 1;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    z-index: 2;
    animation: ${fadeIn} 1.5s ease-in-out;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        align-items: center;
    }
`;

export const Name = styled.h1`
    font-size: 5rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
    text-align: right;
    letter-spacing: 2px;
    font-family: "Anonymous Pro", monospace;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 4rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 3rem;
        text-align: center;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.5rem;
    }
`;

export const Role = styled.h2`
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.text};
    margin: 1rem 0 3rem;
    text-align: right;
    font-family: "Anonymous Pro", monospace;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center;
        font-size: 1.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.2rem;
    }
`;

export const EnterButton = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    border-radius: 30px;
    padding: 0.6rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: "Anonymous Pro", monospace;

    &:hover {
        background-color: rgba(237, 234, 140, 0.1);
        transform: translateY(-3px);
    }
`;
