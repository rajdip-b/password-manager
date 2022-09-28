/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.html", "./src/**/*.tsx"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                whitePrimary: "#DEDFE4",
                whiteSecondary: "#D7D9DD",
                blackPrimary: "#191A1D",
                blackSecondary: "#212328",
                lightThemeBlack: "#504D4D",
                darkThemeWhite: "#B8B8B8",
                red: "#D64848",
                orange: "#D68C48",
                green: "#76C562",
                blue: "#48A3D6",
                purple: "#7E48D6"
            },
            fontFamily: {
                k2d: ["K2D", "sans-serif"]
            }
        }
    },
    plugins: []
};
