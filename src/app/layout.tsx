import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/globals.css";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "G mon stage - Trouve ton stage sans galérer",
    description: "G mon stage est la plateforme qui t'aide à trouver ton stage de rêve sans prise de tête. Trouve des entreprises qui correspondent à ta filière et à ton département en un rien de temps.",
    keywords: "stage, bac pro, entreprise, filière, département, gratuit, premium",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body className={inter.className}>
        <div className={`bg-dark pt-8 ${inter.className}`}>
            <Navbar/>
            <main className="container mx-auto flex min-h-screen flex-col gap-32 px-4 pt-24 md:gap-64">
                {children}
            </main>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
