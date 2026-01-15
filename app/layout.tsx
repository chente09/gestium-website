import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'; 
import './globals.css'

// 2. Configura las fuentes con sus pesos y subconjuntos
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Asegura que el texto sea visible mientras carga la fuente
  variable: '--font-primary', // Asigna a tu variable CSS
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display', // Asigna a tu variable CSS
});

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
  metadataBase: new URL('https://www.gestium-sli.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Gestium SLI - Estudio Jurídico Especializado',
    description: 'Soluciones jurídicas integrales con experiencia comprobada en las principales ramas del derecho.',
    url: 'https://www.gestium-sli.com',
    siteName: 'Gestium SLI',
    images: [
      {
        url: '/images/logo1.png',
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
    images: ['/images/logo1.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
              "@id": "https://www.gestium-sli.com/#organization",
              "name": "Gestium SLI",
              "alternateName": "Gestium Soluciones Legales Integrales",
              "description": "Estudio jurídico especializado en soluciones legales integrales",
              "url": "https://www.gestium-sli.com",
              "logo": "https://www.gestium-sli.com/images/logo1.png",
              "image": "https://www.gestium-sli.com/images/logo1.png",
              "telephone": "+593989335061", // Reemplazar con número real
              "email": "info@gestium-sli.com",
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

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3Q4VQS5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

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