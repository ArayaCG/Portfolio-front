import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export type IconName = keyof typeof SiIcons | keyof typeof FaIcons | keyof typeof AiIcons | keyof typeof BiIcons;

export interface IconProps {
    name: IconName;

    size?: string;

    color?: string;

    className?: string;

    onClick?: () => void;
}

export interface IconStyleProps {
    size?: string;
    color?: string;
}
