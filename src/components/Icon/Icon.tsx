import React from "react";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import { IconProps } from "./Icon.types";
import { IconWrapper } from "./Icon.styles";

const Icon: React.FC<IconProps> = ({ name, size, color, className, onClick }) => {
    let IconComponent;

    if (name in SiIcons) {
        IconComponent = SiIcons[name as keyof typeof SiIcons];
    } else if (name in FaIcons) {
        IconComponent = FaIcons[name as keyof typeof FaIcons];
    } else if (name in AiIcons) {
        IconComponent = AiIcons[name as keyof typeof AiIcons];
    } else if (name in BiIcons) {
        IconComponent = BiIcons[name as keyof typeof BiIcons];
    }

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in any icon collection`);
        return null;
    }

    return (
        <IconWrapper
            size={size}
            color={color}
            className={className}
            onClick={onClick}
            style={onClick ? { cursor: "pointer" } : {}}
        >
            <IconComponent />
        </IconWrapper>
    );
};

export default Icon;
