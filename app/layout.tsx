import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { dark } from "@clerk/themes"
import { Toaster } from "sonner"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/providers/theme-provider"
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
            <html lang="en" suppressHydrationWarning={true}>
                <body className={inter.className}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                    >
                        <Toaster theme="light" position="bottom-center" />
                        <div className="flex w-full h-full">
                            {children}
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}