const animate = require("tailwindcss-animate");
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.{js,jsx,vue}",
        "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Be Vietnam Pro",
                    "Figtree",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                "custom-gray": "#666666",
                "brightRed": "hsl(12, 88%, 59%)",
                "brightRedLight": "hsl(12, 88%, 69%)",
                "brightRedSupLight": "hsl(12, 88%, 95%)",
                "darkBlue": "hsl(228, 39%, 23%)",
                "darkGrayishBlue": "hsl(227, 12%, 61%)",
                "veryDarkBlue": "hsl(233, 12%, 13%)",
                "veryPaleRed": "hsl(13, 100%, 96%)",
                "veryLightGray": "hsl(0, 0%, 98%)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [animate, forms],
};
