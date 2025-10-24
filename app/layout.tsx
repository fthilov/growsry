import type { Metadata } from "next";
import "./globals.css";
import Header from "./core/components/Header/page";
import Footer from "./core/components/Footer/page";

export const metadata: Metadata = {
    title: "Growsry",
    description:
        "A personal recipe and grocery list manager by Felix von dem Berge.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
