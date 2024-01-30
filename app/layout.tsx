import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { dark } from "@clerk/themes"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Twitch",
    description: "Free streaming app, watch a stramers playing funny games.",
    icons: {
      icon: "/favicon/favicon.ico",
      shortcut: "/favicon/favicon.ico"
      },
      authors: {
          name: "Bruno Carvalho Feitosa",
          url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
      }
  }

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark
          }}
        >
            <html lang="en">
                <body className={inter.className}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}