import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/providers/theme-provider";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="notion-theme"
      >
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
