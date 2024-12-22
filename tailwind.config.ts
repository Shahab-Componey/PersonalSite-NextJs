import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./app/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": {max: "1500px"},
        xl: {max: "1200px"},
        lg: {max: "979px"},
        md: {max: "767px"},
        sm: {max: "610px"},
        xs: {max: "550px"},
      },
      colors: {
        Background: "var(--background-color)",
        Font: "var(--font-color)",
        "light-bg": "var(--light-bg)",
        "dark-bg": "var(--dark-bg)",
        "mark-text": "var(--mark-text)",
        regular: "var(--text)",
        button: "var(--button-color)",
      },
      height: {
        header: "8rem",
        profile: "50rem",
        skill: "30rem",
        row: "0.1rem",
      },

      borderRadius: {
        Header: "30px",
        Fotter: "30px",
        Skill: "1rem",
        Button: "0.4rem",
      },

      spacing: {
        container: "12rem",
        profile: "51rem",
        // about
        AboutMe: "3.2rem",
        "AboutMe-image": "10.2rem",
        // skill
        "Skill-gap": "1.9rem",
        "Skills-gap": "3rem",
        "skill-weigth": "20rem",
        // portofilio
        portofilio: "30rem",
        "portofilio-gap": "1.6rem",
        social: "1.6rem",
        "share-contact": "20.13rem",
        footer: "6.4rem",
        "footer-gap": "6.4rem",
        "Contact-gap": "1.6rem",
        "Contact-gap-y": "3.6rem",
        "Icon-size":"3rem",
        "Icon-size-button":"2rem"
      },
      padding: {
        "section-space": "5.5rem",
        "button-y": "1.2rem",
        "button-x": "2rem",
      },
      gap: {
        "NavBar-gap": "6.4rem",
      },
      fontSize: {
        Title: "3.2rem",
        "NavBar-text": "1.8rem",
        "Name-text": "3.2rem",
        "Landing-name": "6.4rem",
        "Landing-job": "4rem",
        AboutMe: "2.4rem",
        "Skill-text": "3.2rem",
        "Card-title-text": "3.2rem",
        "Card-tolls-text": "1.6rem",
        "Card-tolls-descrption": "1.6rem",
        Social: "2.4rem",
        "Contact-discrption": "2rem",
        "Contact-title": "2.4rem",
      },
    },
  },
  plugins: [],
};
export default config;
