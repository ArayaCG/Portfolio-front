export const theme = {
    colors: {
        background: "#121810",
        primary: "#EBFFEE",
        text: "#EBFFEE",
        textSecondary: "#EDEA8C",
        accent: "#121810",
        title: "#EDEA8C",
        button: "#EDEA8C",
        icon: "#EBFFEE",
    },
    fonts: {
        main: "'Anonymous Pro', monospace",
        bold: "'Anonymous Pro', monospace",
        italic: "'Anonymous Pro', monospace",
    },
    fontWeights: {
        regular: 400,
        bold: 700,
    },
    fontStyles: {
        italic: "italic",
        normal: "normal",
    },
    fontSizes: {
        small: "14px",
        medium: "16px",
        large: "20px",
        xlarge: "24px",
        xxlarge: "32px",
    },
    spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
    },
    breakpoints: {
        mobile: "480px",
        tablet: "768px",
        desktop: "1024px",
    },
    borderRadius: {
        small: "4px",
        medium: "8px",
        large: "16px",
        button: "60px",
    },
};

export type Theme = typeof theme;

export default theme;
