import {section} from "motion/react-client";
import AnimatedCursor from "react-animated-cursor";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
