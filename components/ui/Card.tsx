import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'sm' | 'md' | 'lg';
    shadow?: 'sm' | 'md' | 'lg' | 'xl';
    hover?: boolean;
    rounded?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = 'md',
    shadow = 'md',
    hover = true,
    rounded = 'lg',
}) => {
    // Base styles
    const baseStyles = 'bg-white border border-gray-200';

    // Padding styles
    const paddingStyles = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    // Shadow styles
    const shadowStyles = {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
    };

    // Hover styles
    const hoverStyles = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';

    // Rounded styles
    const roundedStyles = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
    };

    const finalClassName = `${baseStyles} ${paddingStyles[padding]} ${shadowStyles[shadow]} ${hoverStyles} ${roundedStyles[rounded]} ${className}`.trim();

    return (
        <div className={finalClassName}>
            {children}
        </div>
    );
};

export default Card;