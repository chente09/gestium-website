import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string | React.ReactNode; // Permitir tanto string como ReactNode
    centered?: boolean;
    showDivider?: boolean;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    descriptionClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    description,
    centered = true,
    showDivider = true,
    className = '',
    titleClassName = '',
    subtitleClassName = '',
    descriptionClassName = '',
}) => {
    const containerClass = `${centered ? 'text-center' : ''} mb-16 ${className}`;

    return (
        <motion.div
            className={containerClass}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Subtitle */}
            {subtitle && (
                <motion.p
                    className={`text-sm font-medium uppercase tracking-wider mb-4 ${subtitleClassName}`}
                    style={{ color: 'var(--red-gestium)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    {subtitle}
                </motion.p>
            )}

            {/* Title */}
            <motion.h2
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight ${titleClassName}`}
                style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'inherit'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {title}
            </motion.h2>

            {/* Divider */}
            {showDivider && (
                <motion.div
                    className={`h-1 mb-6 ${centered ? 'mx-auto' : ''}`}
                    style={{
                        backgroundColor: 'var(--red-gestium)',
                        width: '64px'
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '64px' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                />
            )}

            {/* Description - Ahora acepta ReactNode */}
            {description && (
                <motion.div
                    className={`text-lg md:text-xl leading-relaxed ${centered ? 'max-w-3xl mx-auto' : 'max-w-4xl'} ${descriptionClassName}`}
                    style={{ color: 'var(--silver)' }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {description}
                </motion.div>
            )}
        </motion.div>
    );
};

export default SectionHeader;