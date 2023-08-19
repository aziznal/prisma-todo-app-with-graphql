import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <main
      className={`h-full ${inter.className}`}
    >
      {children}
    </main>
  );
}
