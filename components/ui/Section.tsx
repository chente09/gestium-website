import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: 'white' | 'gray' | 'blue' | 'dark';
    padding?: 'sm' | 'md' | 'lg' | 'xl';
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';
}

const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    background = 'white',
    padding = 'lg',
    maxWidth = '7xl',
}) => {
    // Background styles
    const backgroundStyles = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        blue: 'bg-blue-600 text-white',
        dark: 'bg-gray-900 text-white',
    };

    // Padding styles
    const paddingStyles = {
        sm: 'py-8',
        md: 'py-12',
        lg: 'py-16',
        xl: 'py-20',
    };

    // Max width styles
    const maxWidthStyles = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '7xl': 'max-w-7xl',
        full: 'max-w-full',
    };

    const sectionClassName = `${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`.trim();
    const containerClassName = `${maxWidthStyles[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8`;

    return (
        <section className={sectionClassName}>
            <div className={containerClassName}>
                {children}
            </div>
        </section>
    );
};

export default Section;