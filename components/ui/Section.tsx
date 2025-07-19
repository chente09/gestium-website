import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: 'white' | 'platinum' | 'dark' | 'primary' | 'gradient-primary' | 'gray';
    padding?: 'sm' | 'md' | 'lg' | 'xl';
    containerClass?: string;
}

const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    background = 'white',
    padding = 'lg',
    containerClass = '',
}) => {
    // Background styles usando las variables CSS de Gestium
    const backgroundStyles = {
        white: 'bg-white',
        platinum: '',
        dark: '',
        primary: '',
        gray: '',
        'gradient-primary': '',
    };

    // Función para obtener estilos de fondo personalizados
    const getBackgroundStyle = () => {
        switch (background) {
            case 'platinum':
                return { backgroundColor: 'var(--platinum)' };
            case 'dark':
                return { backgroundColor: 'var(--charcoal)' };
            case 'primary':
                return { backgroundColor: 'var(--red-gestium)' };
            case 'gradient-primary':
                return { background: 'var(--gradient-primary)' };
            case 'gray':
                return { backgroundImage: 'url(/images/ofi/justicia.jpg)'};
            default:
                return {};
        }
    };

    // Padding styles con responsive design
    const paddingStyles = {
        sm: 'py-8 sm:py-12',
        md: 'py-12 sm:py-16',
        lg: 'py-16 sm:py-20',
        xl: 'py-20 sm:py-24 lg:py-32',
    };

    // Determinar color de texto basado en el fondo
    const getTextColor = () => {
        if (background === 'dark' || background === 'primary' || background === 'gradient-primary') {
            return 'text-white';
        }
        return 'text-charcoal';
    };

    const sectionClassName = `${backgroundStyles[background]} ${paddingStyles[padding]} ${getTextColor()} ${className}`.trim();
    
    // Usar container-fluid personalizado para mayor control
    const containerClassName = `container-fluid ${containerClass}`.trim();

    return (
        <section 
            className={sectionClassName}
            style={getBackgroundStyle()}
        >
            <div className={containerClassName}>
                {children}
            </div>
        </section>
    );
};

export default Section;