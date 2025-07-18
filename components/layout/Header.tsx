'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
    Bars3Icon, 
    XMarkIcon, 
    ChevronDownIcon,
    LockClosedIcon
} from '@heroicons/react/24/outline';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdowns, setMobileDropdowns] = useState<{[key: string]: boolean}>({});

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            
            setIsScrolled(currentScrollY > 30);
            setLastScrollY(currentScrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMobileDropdown = (itemName: string) => {
        setMobileDropdowns(prev => ({
            ...prev,
            [itemName]: !prev[itemName]
        }));
    };

    const navigation = [
        { 
            name: 'Inicio', 
            href: '/'
        },
        { 
            name: 'Nosotros', 
            href: '/nosotros',
            dropdown: [
                { name: 'Nuestra Historia', href: '/nosotros/historia' },
                { name: 'Nuestro Equipo', href: '/nosotros/equipo' },
                { name: 'Valores y Misión', href: '/nosotros/valores' }
            ]
        },
        { 
            name: 'Servicios', 
            href: '/servicios',
            dropdown: [
                { name: 'Recuperación de Cartera', href: '/servicios/recuperacion-cartera' },
                { name: 'Derecho Inmobiliario', href: '/servicios/inmobiliario' },
                { name: 'Derecho Corporativo', href: '/servicios/corporativo' },
                { name: 'Mediación y Arbitraje', href: '/servicios/mediacion' }
            ]
        },
        { 
            name: 'Clientes', 
            href: '/clientes',
            dropdown: [
                { name: 'Instituciones Financieras', href: '/clientes/financieras' },
                { name: 'Entidades Públicas', href: '/clientes/publicas' },
                { name: 'Empresas Privadas', href: '/clientes/privadas' }
            ]
        },
        { 
            name: 'Publicaciones', 
            href: '/publicaciones'
        },
        { 
            name: 'Contacto', 
            href: '/contacto'
        }
    ];

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? `backdrop-blur-xl border-b shadow-lg h-[65px] ${
                        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
                    }` 
                    : 'bg-transparent h-[100px] translate-y-0'
            }`}
            style={{
                backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
                borderBottomColor: isScrolled ? 'rgba(167, 26, 33, 0.2)' : 'transparent'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full lg:justify-between">
                    
                    {/* Logo - CENTRADO EN MOBILE */}
                    <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
                        <Link href="/" className="flex items-center group">
                            <div className="relative w-[160px] h-[180px] lg:w-[200px] lg:h-[200px]">
                                <Image 
                                    src="/images/logo.png" 
                                    alt="Gestium S.A." 
                                    fill
                                    className={`object-contain transition-all duration-300 ${
                                        isScrolled ? 'brightness-100' : 'brightness-110 drop-shadow-lg'
                                    }`}
                                    sizes="(max-width: 1024px) 160px, 200px"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation - MINIMALISTA */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="relative text-[16px] font-medium tracking-wide transition-all duration-300 hover:scale-105 group text-white/90 hover:text-white flex items-center gap-1"
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <ChevronDownIcon 
                                            className={`w-3 h-3 transition-transform duration-200 ${
                                                activeDropdown === item.name ? 'rotate-180' : ''
                                            }`} 
                                        />
                                    )}
                                    <div 
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: 'var(--red-gestium)' }}
                                    />
                                </Link>

                                {/* Dropdown MINIMALISTA */}
                                {item.dropdown && activeDropdown === item.name && (
                                    <motion.div
                                        className="absolute top-full left-0 w-64 mt-2 backdrop-blur-xl border shadow-2xl overflow-hidden"
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                            borderColor: 'rgba(167, 26, 33, 0.2)'
                                        }}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="py-2">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-3 text-white/90 font-medium transition-all duration-200 hover:bg-white/5 hover:text-red-gestium"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTAs MINIMALISTAS */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Portal Clientes - DISCRETO */}
                        <Link
                            href="/portal-clientes"
                            className="text-[14px] font-medium tracking-wide transition-all duration-300 hover:scale-105 text-white/80 hover:text-red-600 flex items-center gap-1"
                        >
                            <LockClosedIcon className="w-3 h-3" />
                            Portal Clientes
                        </Link>

                        {/* Consulta Button - MINIMALISTA */}
                        <Link
                            href="/contacto"
                            className="px-6 py-2 text-[14px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 border-2 rounded"
                            style={{
                                borderColor: 'var(--white)',
                                backgroundColor: 'transparent',
                                color: 'var(--white)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--red-gestium)';
                                e.currentTarget.style.borderColor = 'var(--red-gestium)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.borderColor = 'var(--white)';
                            }}
                        >
                            Consulta
                        </Link>
                    </div>

                    {/* Mobile menu button - POSICIÓN ABSOLUTA */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden absolute right-4 p-2 transition-all duration-300 hover:scale-110 text-white hover:bg-white/10 rounded"
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation - DROPDOWNS COLAPSABLES */}
                {isMenuOpen && (
                    <motion.div 
                        className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b shadow-xl max-h-[80vh] overflow-y-auto"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            borderBottomColor: 'rgba(167, 26, 33, 0.2)'
                        }}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {/* Enlace principal con dropdown toggle */}
                                    {item.dropdown ? (
                                        <button
                                            onClick={() => toggleMobileDropdown(item.name)}
                                            className="w-full flex items-center justify-between px-3 py-3 text-white font-medium tracking-wide transition-all duration-300 hover:bg-white/5 text-left"
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDownIcon 
                                                className={`w-4 h-4 transition-transform duration-200 ${
                                                    mobileDropdowns[item.name] ? 'rotate-180' : ''
                                                }`} 
                                            />
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block px-3 py-3 text-white font-medium tracking-wide transition-all duration-300 hover:bg-white/5"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                    
                                    {/* Sub-menús colapsables */}
                                    {item.dropdown && mobileDropdowns[item.name] && (
                                        <motion.div 
                                            className="ml-6 space-y-1 pb-2"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {/* Enlace a la página principal de la sección */}
                                            <Link
                                                href={item.href}
                                                className="block px-3 py-2 text-white/90 text-sm font-medium transition-all duration-300 hover:bg-white/5 hover:text-white border-l-2"
                                                style={{ borderLeftColor: 'var(--red-gestium)' }}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Ver todos los {item.name.toLowerCase()}
                                            </Link>
                                            
                                            {/* Sub-enlaces */}
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-3 py-2 text-white/80 text-sm transition-all duration-300 hover:bg-white/5 hover:text-white"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                            
                            {/* Mobile CTAs */}
                            <div className="pt-3 border-t space-y-2" style={{ borderTopColor: 'rgba(167, 26, 33, 0.2)' }}>
                                <Link
                                    href="/portal-clientes"
                                    className="flex items-center justify-center gap-1 px-3 py-2 text-white/80 text-sm transition-all duration-300 hover:bg-white/5"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <LockClosedIcon className="w-3 h-3" />
                                    Portal Clientes
                                </Link>
                                
                                <Link
                                    href="/contacto"
                                    className="block w-full px-3 py-2 text-center text-sm font-bold uppercase tracking-wider transition-all duration-300"
                                    style={{
                                        backgroundColor: 'var(--red-gestium)',
                                        color: 'var(--white)'
                                    }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Consulta Gratuita
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;