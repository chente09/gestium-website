'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importación de Next.js Image
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Inicio', href: '/' },
        { name: 'Nosotros', href: '/sobre-nosotros' },
        { name: 'Servicios', href: '/areas-de-practica' },
        { name: 'Casos', href: '/casos-de-exito' },
        { name: 'Contacto', href: '/contacto' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-black/50 backdrop-blur-xl border-b border-gray-100 shadow-sm h-[65px]' 
                    : 'bg-transparent h-[100px]'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo optimizado con Next.js Image - dimensiones corregidas */}
                    <Link href="/" className="flex items-center group">
                        <div className={`relative transition-all duration-300 ${
                            isScrolled 
                            ? 'h-[400px] w-[230px]'  // <-- Tamaño en píxeles al hacer scroll
                            : 'h-[400px] w-[230px]'
                        }`}>
                            <Image 
                                src="/images/logo.png" 
                                alt="Gestium SLI" 
                                fill
                                className={`object-contain transition-all duration-300 ${
                                    isScrolled ? 'brightness-100' : 'brightness-110 drop-shadow-lg'
                                }`}
                                sizes="(max-width: 768px) 128px, 160px"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Navigation Desktop - Más compacta */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 group ${
                                    isScrolled 
                                        ? 'text-white/90 hover:text-white'
                                        : 'text-white/90 hover:text-white'
                                }`}
                            >
                                {item.name}
                                <div 
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                        isScrolled ? 'bg-red-500' : 'bg-red-400'
                                    }`}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button Minimalista */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            href="/contacto"
                            className={`text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 border px-4 py-2 ${
                                isScrolled 
                                    ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-gray-900 border-gray-500 hover:shadow-md' 
                                    : 'bg-transparent text-gray-400 border-gray-400 hover:bg-gray-400 hover:text-gray-900'
                            }`}
                            style={{ borderRadius: '4px' }}
                        >
                            Consulta
                        </Link>
                    </div>

                    {/* Mobile menu button - Más pequeño */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`lg:hidden p-2 transition-all duration-300 hover:scale-110 ${
                            isScrolled 
                                ? 'text-gray-700 hover:bg-gray-100' 
                                : 'text-white hover:bg-white/10'
                        }`}
                        style={{ borderRadius: '4px' }}
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-5 w-5" />
                        ) : (
                            <Bars3Icon className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation - Minimalista */}
                {isMenuOpen && (
                    <div 
                        className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b shadow-lg"
                        style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        }}
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2 border-t border-gray-100">
                                <Link
                                    href="/contacto"
                                    className="block w-full px-3 py-2 text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gray-400 to-gray-500 text-gray-900 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Consulta Gratuita
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;