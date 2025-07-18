import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'sm' | 'md' | 'lg';
    shadow?: 'minimal' | 'medium' | 'strong';
    hover?: boolean;
    rounded?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'glass' | 'bordered';
    animate?: boolean;
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = 'md',
    shadow = 'minimal',
    hover = true,
    rounded = 'lg',
    variant = 'default',
    animate = true,
}) => {
    // Base styles usando el design system de Gestium
    const baseStyles = 'bg-white transition-all duration-300 relative overflow-hidden';

    // Padding styles
    const paddingStyles = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    // Aplicar sombras via CSS variables
    const getShadowStyle = () => {
        switch (shadow) {
            case 'minimal':
                return { boxShadow: 'var(--shadow-minimal)' };
            case 'medium':
                return { boxShadow: 'var(--shadow-medium)' };
            case 'strong':
                return { boxShadow: 'var(--shadow-strong)' };
            default:
                return {};
        }
    };

    // Variant styles
    const variantStyles = {
        default: 'border border-gray-200',
        glass: 'glass-effect border border-white border-opacity-20',
        bordered: 'border-2',
    };

    // Obtener estilos específicos por variante
    const getVariantStyle = () => {
        switch (variant) {
            case 'bordered':
                return { borderColor: 'var(--red-gestium)' };
            default:
                return {};
        }
    };

    // Rounded styles
    const roundedStyles = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
    };

    const finalClassName = `${baseStyles} ${paddingStyles[padding]} ${variantStyles[variant]} ${roundedStyles[rounded]} ${className}`.trim();

    const cardContent = (
        <div 
            className={finalClassName}
            style={{
                ...getShadowStyle(),
                ...getVariantStyle()
            }}
        >
            {/* Línea indicadora superior animada para hover */}
            {hover && (
                <motion.div
                    className="absolute top-0 left-0 h-1 bg-red-gestium"
                    style={{ backgroundColor: 'var(--red-gestium)' }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                />
            )}
            
            {/* Efecto de hover sutil en todo el card */}
            {hover && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, rgba(167, 26, 33, 0.02) 0%, transparent 50%)'
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
            )}
            
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );

    // Si animate está habilitado, envolver en motion.div
    if (animate) {
        return (
            <motion.div
                whileHover={hover ? { y: -4, scale: 1.02 } : {}}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {cardContent}
            </motion.div>
        );
    }

    return cardContent;
};

export default Card;