import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {ConvexProvider} from "@/components/providers/convex-provider";


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
      <ConvexProvider>
          <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="notion-theme"
          >
              {children}
          </ThemeProvider>
      </ConvexProvider>
      </body>
    </html>
  );
}
