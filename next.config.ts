import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // --- OPTIMIZACIÓN DE IMÁGENES (Tu configuración) ---
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // --- ALIAS DE WEBPACK (Tu configuración, útil para algunas librerías) ---
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },

  // --- SEGURIDAD: Deshabilitar Source Maps en producción ---
  productionBrowserSourceMaps: false,

  // --- SEGURIDAD: Añadir Encabezados de Seguridad ---
  async headers() {
    return [
      {
        // Aplicar estos encabezados a todas las rutas de la aplicación
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;