import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gestium SLI - Estudio Jurídico',
  description: 'Soluciones jurídicas integrales para instituciones financieras, empresas y personas naturales. Especialistas en cobranza judicial, extrajudicial, coactiva, derecho inmobiliario, civil y corporativo.',
  keywords: 'estudio jurídico, abogados, cobranza judicial, derecho corporativo, derecho civil, Quito, Ecuador',
  authors: [{ name: 'Gestium SLI' }],
  creator: 'Gestium SLI',
  publisher: 'Gestium SLI',
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
    title: 'Gestium SLI - Estudio Jurídico Especializado',
    description: 'Soluciones jurídicas integrales con experiencia comprobada en las principales ramas del derecho.',
    url: 'https://gestium-sli.netlify.app',
    siteName: 'Gestium SLI',
    images: [
      {
        url: '/images/logo.png',
        width: 400,
        height: 230,
        alt: 'Gestium SLI - Estudio Jurídico',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestium SLI - Estudio Jurídico',
    description: 'Soluciones jurídicas integrales con experiencia comprobada.',
    images: ['/images/logo.png'],
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
    google: 'your-google-verification-code', // Reemplazar con tu código real
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Additional meta tags */}
        <meta name="theme-color" content="#D81E27" />
        <meta name="color-scheme" content="light" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "@id": "https://gestium-sli.netlify.app/#organization",
              "name": "Gestium SLI",
              "alternateName": "Gestium Soluciones Legales Integrales",
              "description": "Estudio jurídico especializado en soluciones legales integrales",
              "url": "https://gestium-sli.netlify.app",
              "logo": "https://gestium-sli.netlify.app/images/logo.png",
              "image": "https://gestium-sli.netlify.app/images/logo.png",
              "telephone": "+593-2-XXX-XXXX", // Reemplazar con número real
              "email": "info@gestium-sli.com", // Reemplazar con email real
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Quito",
                "addressRegion": "Pichincha",
                "addressCountry": "EC"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Ecuador"
              },
              "serviceType": [
                "Cobranza Judicial",
                "Cobranza Extrajudicial", 
                "Cobranza Coactiva",
                "Derecho Inmobiliario",
                "Derecho Civil",
                "Derecho Corporativo"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 08:00-17:00",
              "sameAs": [
                // Agregar redes sociales cuando estén disponibles
              ]
            })
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
        
        {/* Prevent FOUC (Flash of Unstyled Content) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent hydration issues with browser extensions
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  document.body.style.visibility = 'visible';
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
}