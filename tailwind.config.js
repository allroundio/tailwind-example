const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#FFF538",
                    DEFAULT: "#FFC233",
                    dark: "#C19A32",
                },
            },
            screens: {
                ...defaultTheme.screens,
                laaarge: "1600px",
            },
            spacing: {
                "small-bear": "2rem",
                "mama-bear": "15rem",
                "papa-bear": "30rem",
            },
        },
    },
    variants: {},
    plugins: [],
};
