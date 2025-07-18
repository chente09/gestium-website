import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    cursor?: 'pointer'; // ✨ NUEVO: Propiedad para cursor
    href?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    animate?: boolean;
    sharp?: boolean; // ✨ NUEVO: Bordes afilados (por defecto true)
    withArrow?: boolean; // ✨ NUEVO: Incluir flecha automáticamente
    fullWidth?: boolean; // ✨ NUEVO: Ancho completo
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    disabled = false,
    type = 'button',
    animate = true,
    sharp = true, // ✨ Por defecto afilado como prefieres
    withArrow = false,
    fullWidth = false,
}) => {
    // Base styles usando las variables CSS de Gestium
    const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden cursor-pointer';

    // ✨ Condicional para bordes afilados
    const borderRadius = sharp ? '' : 'rounded-md';
    
    // ✨ Ancho completo opcional
    const width = fullWidth ? 'w-full' : '';

    const cursorStyle = disabled ? 'cursor-not-allowed' : 'cursor-pointer';

    // Variant styles con paleta Gestium
    const variantStyles = {
        primary: `text-white focus:ring-red-500 shadow-md hover:shadow-lg ${borderRadius}`,
        secondary: `bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-md hover:shadow-lg ${borderRadius}`,
        outline: `border-2 text-current bg-transparent hover:text-white focus:ring-red-500 ${borderRadius}`,
        ghost: `text-current hover:bg-white hover:bg-opacity-10 focus:ring-red-500 ${borderRadius}`,
    };

    // Size styles
    const sizeStyles = {
        sm: 'px-6 py-2 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-12 py-4 text-lg',
    };

    // Disabled styles
    const disabledStyles = disabled
        ? 'opacity-50 cursor-not-allowed hover:transform-none'
        : '';

    // ✨ Estilos específicos por variante usando CSS variables
    const getVariantSpecificStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    background: 'var(--gradient-red)',
                };
            case 'outline':
                return {
                    borderColor: 'var(--red-gestium)',
                    color: 'var(--red-gestium)',
                };
            case 'ghost':
                return {
                    color: 'var(--red-gestium)',
                };
            default:
                return {};
        }
    };

    const finalClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${width} ${cursorStyle} ${className}`.trim();

    // ✨ Contenido del botón con flecha opcional
    const buttonContent = (
        <motion.button
            className={finalClassName}
            style={getVariantSpecificStyles()}
            whileHover={animate && !disabled ? { scale: 1.02 } : {}}
            whileTap={animate && !disabled ? { scale: 0.98 } : {}}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {/* ✨ Efecto de hover para botón primario */}
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                    style={{ opacity: 0.1 }}
                />
            )}
            
            {/* ✨ Efecto de hover para botón outline */}
            {variant === 'outline' && (
                <motion.div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'var(--red-gestium)' }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* ✨ Efecto de hover para botón ghost */}
            {variant === 'ghost' && (
                <motion.div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'var(--red-gestium)' }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                />
            )}
            
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {withArrow && (
                    <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ArrowRight 
                            size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} 
                            className="transition-transform group-hover:translate-x-1" 
                        />
                    </motion.div>
                )}
            </span>
        </motion.button>
    );

    // Si href está proporcionado, renderizar como Link
    if (href && !disabled) {
        return (
            <Link href={href} className="inline-block">
                {buttonContent}
            </Link>
        );
    }

    // De lo contrario, renderizar directamente
    return buttonContent;
};

// ✨ Componente especializado para CTAs principales
export const CTAButton: React.FC<Omit<ButtonProps, 'variant'> & { 
    variant?: 'primary' | 'outline' 
}> = ({
    variant = 'primary',
    withArrow = true, // CTAs siempre con flecha
    sharp = true,
    ...props
}) => {
    return (
        <Button 
            variant={variant}
            withArrow={withArrow}
            sharp={sharp}
            {...props}
        />
    );
};

// ✨ Componente para botones de sección (como el que te gusta)
export const SectionButton: React.FC<Omit<ButtonProps, 'variant' | 'size' | 'sharp'>> = ({
    withArrow = true,
    children,
    ...props
}) => {
    return (
        <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
        >
            <motion.button
                className="group px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden"
                style={{
                    borderColor: 'var(--red-gestium)',
                    color: 'var(--red-gestium)',
                    backgroundColor: 'transparent',
                    borderRadius: '0' // ✨ Afilado
                }}
                whileHover={{
                    backgroundColor: 'var(--red-gestium)',
                    color: 'var(--white)',
                    scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                <span className="flex items-center gap-2">
                    {children}
                    {withArrow && (
                        <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-0.5"
                        />
                    )}
                </span>
            </motion.button>
        </motion.div>
    );
};

export default Button;