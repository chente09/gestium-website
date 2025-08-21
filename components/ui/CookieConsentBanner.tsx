'use client';

import React from 'react';
import CookieConsent from "react-cookie-consent";
import Link from 'next/link';

// Opcional: Función para inicializar Google Analytics u otros scripts tras el consentimiento
const handleAcceptCookies = () => {
    // Ejemplo: Si usas Google Analytics, aquí inicializarías el script.
    // gtm.initialize({ gtmId: 'G-XXXXXXXXXX' });
    console.log("Cookies aceptadas. Scripts de analítica pueden inicializarse.");
};

const CookieConsentBanner: React.FC = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Aceptar"
            declineButtonText="Rechazar"
            enableDeclineButton
            cookieName="gestiumCookieConsent"
            style={{
                background: "var(--charcoal)", // Tu color carbón elegante
                color: "var(--white)",
                borderTop: "1px solid var(--steel)",
                padding: "1rem",
            }}
            buttonStyle={{
                background: "var(--red-gestium)", // Tu color rojo de marca
                color: "var(--white)",
                fontSize: "14px",
                fontWeight: "bold",
                borderRadius: "4px",
                padding: "10px 15px",
            }}
            declineButtonStyle={{
                background: "var(--steel)", // Tu color gris acero
                color: "var(--white)",
                fontSize: "14px",
                borderRadius: "4px",
                padding: "10px 15px",
            }}
            expires={150}
            onAccept={handleAcceptCookies}
        >
            <p className="text-sm leading-relaxed">
                Este sitio web utiliza cookies para mejorar su experiencia. Al hacer clic en &ldquo;Aceptar&rdquo;, consiente el uso de cookies no esenciales. Para más información, visite nuestra{' '}
                <Link href="/politica-privacidad" className="font-bold underline hover:text-gold transition-colors duration-200">
                    Política de Privacidad
                </Link>.
            </p>
        </CookieConsent>
    );
};

export default CookieConsentBanner;