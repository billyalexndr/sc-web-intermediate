import React from 'react';
import { Inter } from 'next/font/google';
// import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className={inter.className}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/products">Products</a>
                            </li>
                            <li>
                                <a href="/profile">Profile</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>{children}</main>
                <footer>
                    <p>Footer content</p>
                </footer>
            </body>
        </html>
    );
}
