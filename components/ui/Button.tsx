import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
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
}) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Variant styles
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-md hover:shadow-lg',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    };

    // Size styles
    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    // Disabled styles
    const disabledStyles = disabled
        ? 'opacity-50 cursor-not-allowed hover:bg-current hover:text-current hover:shadow-current'
        : '';

    const finalClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`.trim();

    // If href is provided, render as Link
    if (href && !disabled) {
        return (
            <Link href={href} className={finalClassName}>
                {children}
            </Link>
        );
    }

    // Otherwise render as button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={finalClassName}
        >
            {children}
        </button>
    );
};

export default Button;