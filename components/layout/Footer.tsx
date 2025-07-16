import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {  MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const practiceAreas = [
        'Derecho Corporativo',
        'Derecho Financiero',
        'Derecho Civil',
        'Derecho Laboral',
        'Derecho Tributario',
        'Contratos Comerciales'
    ];

    const quickLinks = [
        { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
        { name: 'Áreas de Práctica', href: '/areas-de-practica' },
        { name: 'Casos de Éxito', href: '/casos-de-exito' },
        { name: 'Recursos Legales', href: '/recursos' },
        { name: 'Blog Jurídico', href: '/blog' },
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
                style={{ backgroundColor: 'var(--red)' }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo and Description */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="inline-block group">
                            {/* Contenedor con tamaño definido y posición relativa */}
                            <div className="relative h-[180px] w-48 transition-all duration-300 group-hover:scale-105"> {/* <-- AJUSTA EL TAMAÑO DEL LOGO AQUÍ */}
                                <Image
                                    src="/images/image.png"
                                    alt="Gestium SLI"
                                    fill
                                    className="object-contain" // object-contain asegura que no se deforme
                                    sizes="192px" // Esto debe coincidir con el ancho (w-48 = 12rem = 192px)
                                    priority
                                />
                            </div>
                        </Link>

                        <p className="mt-4 ">
                        </p>

                        {/* Contact Info Minimalista */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 group">
                                <MapPinIcon
                                    className="h-5 w-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                    style={{ color: 'var(--red)' }}
                                />
                                <span
                                    className="text-sm"
                                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                                >
                                    Quito, Ecuador
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <PhoneIcon
                                    className="h-5 w-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                    style={{ color: 'var(--red)' }}
                                />
                                <span
                                    className="text-sm"
                                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                                >
                                    +593 2 XXX-XXXX
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <EnvelopeIcon
                                    className="h-5 w-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                    style={{ color: 'var(--red)' }}
                                />
                                <span
                                    className="text-sm"
                                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                                >
                                    info@gestium-sli.com
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h3
                            className="text-lg font-bold mb-6 uppercase tracking-wider"
                            style={{ color: 'var(--white)' }}
                        >
                            Áreas de Práctica
                        </h3>
                        <ul className="space-y-3">
                            {practiceAreas.map((area) => (
                                <li key={area}>
                                    <Link
                                        href={`/areas-de-practica/${area.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-sm transition-all duration-300 hover:translate-x-2 hover:scale-105 block"
                                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                    >
                                        <span className="border-l-2 border-transparent hover:border-red-500 pl-3 py-1 block transition-all duration-300">
                                            {area}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3
                            className="text-lg font-bold mb-6 uppercase tracking-wider"
                            style={{ color: 'var(--white)' }}
                        >
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-all duration-300 hover:translate-x-2 hover:scale-105 block"
                                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                    >
                                        <span className="border-l-2 border-transparent hover:border-red-500 pl-3 py-1 block transition-all duration-300">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Section */}
                    <div>
                        <h3
                            className="text-lg font-bold mb-6 uppercase tracking-wider"
                            style={{ color: 'var(--white)' }}
                        >
                            Asistencia Legal
                        </h3>
                        <p
                            className="text-sm mb-6"
                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                        >
                            Contáctenos para una consulta gratuita y personalizada.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-block px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 mb-8"
                            style={{
                                backgroundColor: 'var(--red)',
                                color: 'var(--white)'
                            }}
                        >
                            Consulta Gratuita
                        </Link>

                        {/* Business Hours */}
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <ClockIcon
                                    className="h-5 w-5"
                                    style={{ color: 'var(--red)' }}
                                />
                                <h4
                                    className="font-bold text-sm uppercase tracking-wider"
                                    style={{ color: 'var(--white)' }}
                                >
                                    Horarios
                                </h4>
                            </div>
                            <div
                                className="text-sm space-y-2"
                                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                            >
                                <div className="flex justify-between">
                                    <span>Lun - Vie:</span>
                                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábados:</span>
                                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingos:</span>
                                    <span
                                        className="font-medium"
                                        style={{ color: 'var(--red)' }}
                                    >
                                        Cerrado
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Minimalista */}
                <div
                    className="border-t pt-8 mt-16"
                    style={{ borderTopColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <p
                            className="text-sm"
                            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        >
                            © {currentYear} Gestium SLI. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-8 mt-4 lg:mt-0">
                            <Link
                                href="/politica-privacidad"
                                className="text-sm transition-all duration-300 hover:scale-105"
                                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            >
                                Política de Privacidad
                            </Link>
                            <Link
                                href="/terminos-condiciones"
                                className="text-sm transition-all duration-300 hover:scale-105"
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