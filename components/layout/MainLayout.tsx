import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import CookieConsentBanner from '../ui/CookieConsentBanner';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieConsentBanner />
        </div>
    );
};

export default MainLayout;