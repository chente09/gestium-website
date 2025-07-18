'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up'); // ✨ NUEVO
    const [lastScrollY, setLastScrollY] = useState(0); // ✨ NUEVO

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // ✨ Detectar dirección del scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setScrollDirection('down'); // Scrolling hacia abajo
            } else {
                setScrollDirection('up'); // Scrolling hacia arriba
            }
            
            setIsScrolled(currentScrollY > 30);
            setLastScrollY(currentScrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]); // ✨ Dependencia agregada

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
                    ? `backdrop-blur-xl border-b shadow-lg h-[65px] ${
                        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
                    }` // ✨ Header se oculta al bajar, aparece al subir
                    : 'bg-transparent h-[100px] translate-y-0'
            }`}
            style={{
                backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
                borderBottomColor: isScrolled ? 'rgba(216, 30, 39, 0.2)' : 'transparent'
            }}
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

                    {/* Navigation con nueva paleta */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-[18px] font-medium tracking-wide transition-all duration-300 hover:scale-105 group text-white/90 hover:text-white"
                            >
                                {item.name}
                                <div 
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                                    style={{ backgroundColor: 'var(--red-gestium)' }}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button con nueva paleta */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            href="/contacto"
                            className={`text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 border-2 px-4 py-2 rounded ${
                                isScrolled 
                                    ? 'bg-transparent text-white shadow-lg' 
                                    : 'bg-transparent text-white'
                            }`}
                            style={{
                                borderColor: 'var(--white)',
                                backgroundColor: 'transparent'
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
                        className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b shadow-xl"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.98)',
                            borderBottomColor: 'rgba(216, 30, 39, 0.2)'
                        }}
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded"
                                    style={{ 
                                        color: 'var(--charcoal)',
                                        backgroundColor: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--red-gestium)';
                                        e.currentTarget.style.backgroundColor = 'rgba(216, 30, 39, 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--charcoal)';
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2 border-t" style={{ borderTopColor: 'rgba(216, 30, 39, 0.1)' }}>
                                <Link
                                    href="/contacto"
                                    className="block w-full px-3 py-2 text-center text-xs font-bold uppercase tracking-wider rounded transition-all duration-300"
                                    style={{
                                        backgroundColor: 'var(--red-gestium)',
                                        color: 'var(--white)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--red-dark)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--red-gestium)';
                                    }}
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