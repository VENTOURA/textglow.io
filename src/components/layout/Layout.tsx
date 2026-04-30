import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SEO } from './SEO';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO />
            <Navbar />
            <main className="flex-grow pt-32">
                {children}
            </main>
            <Footer />
        </div>
    );
};
