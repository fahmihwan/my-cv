/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                fancy: "#121028",
                elFancy: "#181538",
                textFancy: "#9a93cb",
                badgeFancy: "#39325d",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
