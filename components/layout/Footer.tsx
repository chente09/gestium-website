import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    // ✅ SERVICIOS REALES de GESTIUM S.A.
    const servicios = [
        { name: 'Recuperación de Cartera', href: '/servicios/recuperacion-cartera' },
        { name: 'Derecho Inmobiliario', href: '/servicios/inmobiliario' },
        { name: 'Derecho Corporativo', href: '/servicios/corporativo' },
        { name: 'Mediación y Arbitraje', href: '/servicios/mediacion' },
        { name: 'Derecho de Familia', href: '/servicios/familia' },
        { name: 'Derecho Laboral', href: '/servicios/laboral' },
        { name: 'Gestiones y Trámites', href: '/servicios/tramites' }
    ];

    // ✅ ENLACES RÁPIDOS ALINEADOS CON HEADER
    const enlacesRapidos = [
        { name: 'Nuestra Historia', href: '/nosotros/historia' },
        { name: 'Nuestro Equipo', href: '/nosotros/equipo' },
        { name: 'Valores y Misión', href: '/nosotros/valores' },
        { name: 'Nuestros Clientes', href: '/clientes' },
        { name: 'Publicaciones', href: '/publicaciones' },
        { name: 'Contacto', href: '/contacto' }
    ];

    return (
        <footer
            className="relative"
            style={{ background: 'var(--gradient-primary)' }}
        >
            {/* Línea decorativa superior */}
            <div
                className="h-1 w-full"
                style={{ backgroundColor: 'var(--red-gestium)' }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* LAYOUT RESPONSIVO MEJORADO */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    
                    {/* ===== LOGO Y CONTACTO - CENTRADO EN MÓVIL ===== */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
                        <Link href="/" className="inline-block group">
                            {/* ✅ LOGO CORRECTO */}
                            <div className="relative h-[100px] sm:h-[120px] w-40 sm:w-48 mx-auto md:mx-0 transition-all duration-300 group-hover:scale-105">
                                <Image
                                    src="/images/image.png"
                                    alt="GESTIUM S.A."
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 160px, 192px"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* ✅ INFORMACIÓN DE CONTACTO CENTRADA EN MÓVIL */}
                        <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-2">
                            <div className="flex items-start space-x-3 group justify-center md:justify-start">
                                <MapPinIcon
                                    className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                                    style={{ color: 'var(--red-gestium)' }}
                                />
                                <span className="text-xs sm:text-sm text-center md:text-left" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                    Av. 12 de Octubre N24-660 y Francisco Salazar,<br />
                                    Edificio Concorde, piso 15, Oficina 15C
                                </span>
                            </div>
                            
                            <div className="flex items-center space-x-3 group justify-center md:justify-start">
                                <PhoneIcon
                                    className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                    style={{ color: 'var(--red-gestium)' }}
                                />
                                <div className="text-xs sm:text-sm text-center md:text-left" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                    <div>+593 2-543-653</div>
                                    <div>+593 98-933-5061</div>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3 group justify-center md:justify-start">
                                <EnvelopeIcon
                                    className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                    style={{ color: 'var(--red-gestium)' }}
                                />
                                <span className="text-xs sm:text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                    info.gestium@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ===== SERVICIOS - MÓVIL: COLUMNA 1 ===== */}
                    <div className="col-span-1">
                        <h3
                            className="text-base sm:text-lg font-bold mb-4 sm:mb-6 uppercase tracking-wider text-center md:text-left"
                            style={{ color: 'var(--white)' }}
                        >
                            Nuestros Servicios
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {servicios.map((servicio) => (
                                <li key={servicio.name}>
                                    <Link
                                        href={servicio.href}
                                        className="text-xs sm:text-sm transition-all duration-300 hover:translate-x-2 hover:scale-105 block text-center md:text-left"
                                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                    >
                                        <span className="border-l-2 border-transparent hover:border-red-500 pl-0 md:pl-3 py-1 block transition-all duration-300">
                                            {servicio.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ===== NAVEGACIÓN - MÓVIL: COLUMNA 2 ===== */}
                    <div className="col-span-1">
                        <h3
                            className="text-base sm:text-lg font-bold mb-4 sm:mb-6 uppercase tracking-wider text-center md:text-left"
                            style={{ color: 'var(--white)' }}
                        >
                            Navegación
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {enlacesRapidos.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-xs sm:text-sm transition-all duration-300 hover:translate-x-2 hover:scale-105 block text-center md:text-left"
                                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                    >
                                        <span className="border-l-2 border-transparent hover:border-red-500 pl-0 md:pl-3 py-1 block transition-all duration-300">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* ✅ PORTAL CLIENTES */}
                        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t text-center md:text-left" style={{ borderTopColor: 'rgba(255, 255, 255, 0.1)' }}>
                            <Link
                                href="https://gestium-app.netlify.app/consultas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-xs sm:text-sm transition-all duration-300 hover:translate-x-2 hover:scale-105"
                                style={{ color: 'var(--gold)' }}
                            >
                                <LockClosedIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span className="font-medium">Portal GESTIUM-APP</span>
                            </Link>
                        </div>
                    </div>

                    {/* ===== CTA Y HORARIOS - FULL WIDTH EN MÓVIL ===== */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h3
                            className="text-base sm:text-lg font-bold mb-4 sm:mb-6 uppercase tracking-wider text-center lg:text-left"
                            style={{ color: 'var(--white)' }}
                        >
                            Consulta Legal
                        </h3>
                        <p
                            className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed text-center lg:text-left"
                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                        >
                            Experiencia comprobada al servicio de nuestros clientes. 
                            Contáctenos para una consulta especializada.
                        </p>
                        
                        <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                            <Link
                                href="/contacto"
                                className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 rounded"
                                style={{
                                    backgroundColor: 'var(--red-gestium)',
                                    color: 'var(--white)'
                                }}
                            >
                                Contactar Ahora
                            </Link>
                        </div>

                        {/* ✅ HORARIOS DE ATENCIÓN CENTRADOS EN MÓVIL */}
                        <div>
                            <div className="flex items-center space-x-2 mb-3 sm:mb-4 justify-center lg:justify-start">
                                <ClockIcon
                                    className="h-4 w-4 sm:h-5 sm:w-5"
                                    style={{ color: 'var(--red-gestium)' }}
                                />
                                <h4
                                    className="font-bold text-xs sm:text-sm uppercase tracking-wider"
                                    style={{ color: 'var(--white)' }}
                                >
                                    Horarios de Atención
                                </h4>
                            </div>
                            <div
                                className="text-xs sm:text-sm space-y-1 sm:space-y-2 max-w-xs mx-auto lg:max-w-none lg:mx-0"
                                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                            >
                                <div className="flex justify-between">
                                    <span>Lunes - Viernes:</span>
                                    <span className="font-medium">8:30 AM - 5:30 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábados:</span>
                                    <span className="font-medium" style={{ color: 'var(--gold)' }}>
                                        Previa cita
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingos:</span>
                                    <span className="font-medium" style={{ color: 'var(--red-gestium)' }}>
                                        Cerrado
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== BOTTOM BAR RESPONSIVE ===== */}
                <div
                    className="border-t pt-6 sm:pt-8 mt-8 sm:mt-12 lg:mt-16"
                    style={{ borderTopColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-center lg:text-left">
                        <div>
                            <p
                                className="text-xs sm:text-sm font-medium"
                                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                            >
                                © {currentYear} GESTIUM S.A. - Servicios Jurídicos Integrales
                            </p>
                            <p
                                className="text-xs mt-1"
                                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            >
                                +20 años de experiencia | 95% efectividad | Cobertura nacional
                            </p>
                            <p
                                className="text-xs mt-1 sm:mt-2"
                                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                            >
                                Desarrollado por{' '}
                                <a
                                    href="https://vnenger.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors duration-300"
                                    style={{ color: 'var(--gold)' }}
                                >
                                    vnenger.com
                                </a>
                                {' '}(New Experience Softw) - Todos los derechos reservados
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                            <Link
                                href="/politica-privacidad"
                                className="text-xs sm:text-sm transition-all duration-300 hover:scale-105"
                                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            >
                                Política de Privacidad
                            </Link>
                            <Link
                                href="/terminos-condiciones"
                                className="text-xs sm:text-sm transition-all duration-300 hover:scale-105"
                                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            >
                                Términos y Condiciones
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;