import React from 'react';
import { motion } from 'framer-motion';

// Define the props interface for type-checking
interface HeroSectionProps {
    title: React.ReactNode;
    description: React.ReactNode;
    backgroundImage: string;
    children?: React.ReactNode; // Optional prop for additional content like badges
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
    title, 
    description, 
    backgroundImage, 
    children 
}) => {
    return (
        <div
            className="relative py-32 overflow-hidden text-white"
            style={{
                // 1. AHORA LA IMAGEN SE APLICA DIRECTAMENTE, SIN MEZCLAS
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* 2. ESTA ES AHORA LA ÚNICA CAPA QUE OSCURECE LA IMAGEN */}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} />
            
            {/* El resto del contenido no cambia */}
            <div className="container-fluid relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {title}
                    </motion.h1>

                    <motion.div
                        className="w-24 h-1 mx-auto mb-8"
                        style={{ backgroundColor: 'var(--red-gestium)' }}
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />

                    <motion.p
                        className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
                        style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        {description}
                    </motion.p>
                    
                    {children && (
                        <div className="mt-8">
                            {children}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
