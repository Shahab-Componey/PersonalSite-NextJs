import "./globals.css";
import AnimatedCursor from "react-animated-cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultCrusorColor = "rgb(255,255,255)";
  return (
    <html lang="en">
      <body>
        <AnimatedCursor
          innerSize={8}
          outerSize={36}
          innerScale={2}
          outerScale={1.5}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "white",
          }}
          outerStyle={{
            border: `3px solid white`,
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
            ".button",
            ".skill",
          ]}
        />
        <>{children}</>
      </body>
    </html>
  );
}
