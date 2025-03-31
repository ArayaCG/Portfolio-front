import React from "react";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ text, onClick, as: initialAs = "button", href, download, ...rest }) => {
    const elementType = href ? "a" : initialAs;

    return (
        <StyledButton as={elementType} onClick={onClick} href={href} download={download} {...rest}>
            {text}
        </StyledButton>
    );
};

export default Button;
