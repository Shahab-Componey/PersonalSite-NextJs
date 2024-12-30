"use client";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
import {createContext, useState} from "react";
export const ThemeContext = createContext("");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultCrusorColor = "rgb(255,255,255)";
  const [color, setColor] = useState(defaultCrusorColor);
  return (
    <html lang="en">
      <body>
        <AnimatedCursor
          innerSize={8}
          outerSize={36}
          innerScale={2}
          outerScale={1.5}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: color,
          }}
          outerStyle={{
            border: `3px solid ${color}`,
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: [".button", ".skill"],
              options: {
                innerSize: 2,
                outerSize: 12,
                color: "100,100,200",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
        <ThemeContext.Provider value={{setColor}}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
