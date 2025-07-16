'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                    ? 'bg-black/60 backdrop-blur-xl border-b border-red-900/20 shadow-lg h-[65px]' 
                    : 'bg-transparent h-[100px]'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo manteniendo TUS dimensiones originales */}
                    <Link href="/" className="flex items-center group">
                        <div className={`relative transition-all duration-300 ${
                            isScrolled 
                            ? 'h-[400px] w-[230px]'  // TUS dimensiones originales al hacer scroll
                            : 'h-[400px] w-[230px]'  // TUS dimensiones originales normal
                        }`}>
                            <Image 
                                src="/images/logo.png" 
                                alt="Gestium SLI" 
                                fill
                                className={`object-contain transition-all duration-300 ${
                                    isScrolled ? 'brightness-100' : 'brightness-110 drop-shadow-lg'
                                }`}
                                sizes="(max-width: 768px) 230px, 230px"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Navigation con colores del logo */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 group text-white/90 hover:text-white"
                            >
                                {item.name}
                                <div 
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-red-900"
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button con colores del logo */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            href="/contacto"
                            className={`text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 border-2 px-4 py-2 rounded ${
                                isScrolled 
                                    ? 'bg-white-900 text-white border-white hover:bg-white hover:border-red-900 shadow-lg hover:text-black ' 
                                    : 'bg-transparent text-white border-white hover:bg-white hover:text-black hover:border-red-900'
                            }`}
                        >
                            Consulta
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 transition-all duration-300 hover:scale-110 text-white hover:bg-white/10 rounded"
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-5 w-5" />
                        ) : (
                            <Bars3Icon className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div 
                        className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b border-red-900/20 shadow-xl bg-white/98"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 text-white-700 hover:text-red-100 hover:bg-red-50 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2 border-t border-white-200">
                                <Link
                                    href="/contacto"
                                    className="block w-full px-3 py-2 text-center text-xs font-bold uppercase tracking-wider bg-red-900 text-white rounded hover:bg-red-600 transition-colors"
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