import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gestium SLI - Estudio Jurídico Profesional",
    template: "%s | Gestium SLI"
  },
  description: "Estudio jurídico especializado en derecho corporativo, financiero, civil y laboral. Soluciones legales integrales para instituciones financieras, empresas y personas naturales en Quito, Ecuador.",
  keywords: [
    "abogados Quito",
    "estudio jurídico Ecuador", 
    "derecho corporativo",
    "derecho financiero",
    "asesoría legal",
    "bufete de abogados",
    "Gestium SLI",
    "consulta legal gratuita"
  ],
  authors: [{ name: "Gestium SLI" }],
  creator: "Gestium SLI",
  publisher: "Gestium SLI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gestium-sli.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Gestium SLI - Estudio Jurídico Profesional",
    description: "Soluciones jurídicas integrales para instituciones financieras, empresas y personas naturales. Más de 15 años de experiencia en Quito, Ecuador.",
    url: "https://gestium-sli.netlify.app",
    siteName: "Gestium SLI",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gestium SLI - Estudio Jurídico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestium SLI - Estudio Jurídico",
    description: "Soluciones jurídicas integrales en Quito, Ecuador",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "tu-google-verification-code", // Añadir cuando tengas Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Schema.org para SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Gestium SLI",
              "description": "Estudio jurídico especializado en derecho corporativo, financiero, civil y laboral",
              "url": "https://gestium-sli.netlify.app",
              "telephone": "+593-2-XXX-XXXX",
              "email": "info@gestium-sli.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Quito",
                "addressCountry": "EC"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-0.1807",
                "longitude": "-78.4678"
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-13:00",
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "Ecuador"
              },
              "serviceType": [
                "Derecho Corporativo",
                "Derecho Financiero", 
                "Derecho Civil",
                "Derecho Laboral"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}