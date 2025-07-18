import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Tamaños de dispositivos optimizados
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Formatos modernos para mejor compresión
    formats: ['image/webp', 'image/avif'],
    
    // Cache optimizado
    minimumCacheTTL: 60,
    
    // Permitir SVGs si es necesario
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
};

export default nextConfig;