export interface ButtonProps {
    text: string;
    onClick?: () => void;
    as?: "button" | "a";
    href?: string;
    download?: boolean;
}
