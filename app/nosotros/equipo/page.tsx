'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface TeamMember {
    id: string;
    name: string;
    title: string;
    specialization: string;
    image: string;
    description: string;
    experience: string;
    education?: string[];
    achievements?: string[];
    isLeader?: boolean;
    textPosition?: 'left' | 'right';
    linkedinUrl?: string;
}

export default function EquipoPage() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [hoveredMember, setHoveredMember] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Detectar si es móvil
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedMember(null);
            }
        };

        if (selectedMember) {
            document.addEventListener('keydown', handleKeyDown);
            // Prevenir scroll del body cuando el modal está abierto
            document.body.style.overflow = 'hidden';

            const scrollableElement = scrollContainerRef.current;
            if (scrollableElement) {
                const timer = setTimeout(() => {
                    if (scrollableElement.scrollHeight > scrollableElement.clientHeight) {
                        animate(
                            scrollableElement.scrollTop,
                            60,
                            {
                                duration: 1.5,
                                ease: "easeInOut",
                                repeat: 1,
                                repeatType: "mirror",
                                onUpdate: (latest) => {
                                    scrollableElement.scrollTop = latest;
                                }
                            }
                        );
                    }
                }, 800);

                return () => clearTimeout(timer);
            }
        } else {
            // Restaurar scroll del body
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedMember]);

    const teamMembers: TeamMember[] = [
        {
            id: 'david-maldonado',
            name: 'Dr. David Maldonado Viteri',
            title: 'Gerente General',
            specialization: 'Recuperación de Cartera, Derecho Civil, Derecho de Familia y Derecho Laboral',
            image: '/images/equipo/DAVID.v2.jpg',
            description: 'Fundador del Estudio Jurídico GESTIUM en el año 2.005. Abogado en libre ejercicio, con experiencia en recuperación de cartera, procurador de Instituciones Financieras como Produbanco, Banco Pichincha y anteriormente de Banco Cofiec. Ex Notario Primero Suplente del cantón Quito',
            experience: 'Ex-Notario Primero de Quito (2007-2014)',
            education: ['Doctor en Jurisprudencia', 'Abogado de los Tribunales de la República del Ecuador', 'Maestría en Derecho Procesal'],
            isLeader: true,
            textPosition: 'left'
        },
        {
            id: 'michelle-ochoa',
            name: 'Ab. Michelle Ochoa',
            title: 'Abogada Especialista',
            specialization: 'Derecho Corporativo y Societario',
            image: '/images/equipo/MO-v2.jpg',
            description: 'Abogada con trayectoria como procuradora en Banco Pichincha y Produbanco, con profundo conocimiento en áreas administrativas y judiciales, especializada en estructuración societaria.',
            experience: 'Procuradora externa en entidades financieras',
            achievements: [
                'Asesoría legal en fusiones y reorganizaciones societarias',
                'Gestión de cumplimiento corporativo (compliance)',
                'Estrategias legales para entidades bancarias'
            ],
            textPosition: 'right',
            linkedinUrl: 'https://www.linkedin.com/in/michelle-alejandra-ochoa-ch%C3%A1vez-692969225'
        },

        {
            id: 'tatiana-cordonez',
            name: 'Ab.Tatiana Cordonez',
            title: 'Especialista en Inmobiliario',
            specialization: 'Derecho Inmobiliario y Familiar',
            image: '/images/equipo/tc-v1.jpg',
            description: 'Estudiante avanzada de Derecho con sólida formación en áreas inmobiliaria, propiedad intelectual, familia y societario. Brinda soluciones legales prácticas y confiables.',
            experience: 'Especialista en gestión legal estratégica',
            achievements: [
                'Asesoría legal en procesos inmobiliarios y familiares',
                'Apoyo en estructuración societaria',
                'Atención personalizada al cliente'
            ],
            textPosition: 'right',
            linkedinUrl: 'https://www.linkedin.com/in/tatiana-cordonez-cueva-4895a0207'
        },
        {
            id: 'sofia-teran',
            name: 'Ab. Sofía Terán',
            title: 'Derecho civil y laboral',
            specialization: 'Derecho Civil, Laboral y Propiedad Intelectual',
            image: '/images/equipo/ST-v2.png',
            description: 'Abogada junior en materia civil, laboral y propiedad intelectual. Licenciada en Relaciones Internacionales con subespecialización en Ciencias Políticas por la Universidad San Francisco de Quito. Posee amplias habilidades en comunicación empresarial.',
            experience: 'Formación multidisciplinaria y práctica jurídica',
            achievements: [
                'Investigadora en el capítulo de Género del libro Memorias 30 años irreverentes de la Fundacion Regional de Asesoria en Derechos Humanos INREDH',
                'Investigadora en el informe Ruta de incidencia de manejo de datos sobre violencia y agresiones a personas LGBTIQ+ para DATALAT',
            ],
            textPosition: 'right',
            linkedinUrl: 'https://www.linkedin.com/in/sofia-teran-a4490515a'
        },
        {
            id: 'eduardo-melendez',
            name: 'Ab. Eduardo Meléndez',
            title: 'Especialista en Coactivas IESS y Gestión Notarial',
            specialization: 'Derecho Administrativo, Coactivas y Derecho Civil',
            image: '/images/equipo/edu0.jpg',
            description: 'Abogado de los Tribunales y Juzgados de la República por la Universidad Central del Ecuador. Cuenta con una sólida formación en Ciencias Sociales y Derecho, con amplia experiencia en la resolución de procesos coactivos ante el IESS y la gestión integral de escrituras públicas. Su enfoque combina el rigor técnico de la escuela jurídica de la Universidad Central con habilidades de comunicación empresarial, ofreciendo soluciones eficaces en transferencias de dominio y defensa administrativa.',
            experience: 'Experto en litigio administrativo y perfeccionamiento de instrumentos públicos.',
            achievements: [
                'Especialista en el levantamiento de medidas cautelares y defensa técnica en juicios coactivos del IESS.',
                'Vasta trayectoria en la elaboración y protocolos de escrituras públicas, garantizando seguridad jurídica en actos y contratos.',
            ],
            textPosition: 'left',
            linkedinUrl: 'https://www.linkedin.com/in/eduardo-melendez'
        },
        {
            id: 'silvia-arteaga',
            name: 'Silvia Arteaga',
            title: 'Coordinadora Legal',
            specialization: 'Cobranza Judicial',
            image: '/images/equipo/SA-v2.jpg',
            description: 'Líder de Cobranza Judicial del Banco Pichincha. Con amplia experiencia en recuperación de cartera y supervisión de procesos judiciales, lidera estrategias de gestión legal con altos estándares de eficiencia.',
            experience: 'Cobranza judicial en banca',
            achievements: [
                'Liderazgo de equipos legales especializados',
                'Estrategias de recuperación para cartera compleja',
                'Supervisión de procesos judiciales masivos'
            ],
            textPosition: 'left'
        },
        {
            id: 'vicente-nenger',
            name: 'Dev. Vicente Nénger',
            title: 'Desarrollador de Software',
            specialization: 'Automatización de Procesos Jurídicos',
            image: '/images/equipo/vn.jpg',
            description: 'Desarrollador de software especializado en el sector legal, con experiencia en cobranza coactiva y automatización. Lidera proyectos tecnológicos que mejoran la eficiencia y experiencia del cliente.',
            experience: 'Innovación legal-tecnológica',
            achievements: [
                'Desarrollo y mantenimiento de GESTIUM-APP',
                'Automatización de procesos coactivos',
                'Soluciones digitales orientadas al usuario'
            ],
            textPosition: 'right',
            linkedinUrl: 'https://www.linkedin.com/in/vicente-nénger-9b30b1378'
        },
        {
            id: 'ingrid-perez',
            name: 'Ingrid Pérez',
            title: 'Asistente Legal',
            specialization: 'Gestión Prejudicial',
            image: '/images/equipo/ip.jpg',
            description: 'Estudiante universitaria con experiencia como pasante legal en el Banco Pichincha. Destaca por su capacidad de organización y apoyo en la gestión de cartera.',
            experience: 'Cobranza y redacción de demandas',
            achievements: [
                'Colaboración en cobranzas y procesos judiciales',
                'Gestión de trámites internos'
            ],
            textPosition: 'right',
            linkedinUrl: 'https://www.linkedin.com/in/ingrid-p%C3%A9rez-13438a301'
        },
        {
            id: 'victoria-bohorquez',
            name: 'Victoria Bohorquez',
            title: 'Pasante Legal',
            specialization: 'Recuperación de Cartera',
            image: '/images/equipo/vb.jpeg', // Asegúrate de tener la imagen con este nombre o actualizar la ruta
            description: 'Pasante legal asignada al área de Banco Pichincha. Destaca por su apoyo estratégico en la gestión de cobranza y ejecución de procesos orientados a la efectiva recuperación de cartera.',
            experience: 'Gestión de cobranza y recuperación de cartera',
            achievements: [
                'Apoyo activo en procesos de cobranza para Banco Pichincha',
                'Colaboración en el seguimiento y recuperación de cartera'
            ],
            textPosition: 'left', // Puedes cambiarlo a 'right' dependiendo de cómo quieras que se vea en tu diseño
        },
        {
            id: 'valeria_marcillo',
            name: 'Valeria Marcillo',
            title: 'Gestor Legal',
            specialization: 'Gestión Institucional y Procesal',
            image: '/images/equipo/vm.jpg',
            description: 'Especialista en la gestión y agilitación de diligencias ante entidades públicas y judiciales. Su labor es clave para asegurar la fluidez de los procesos mediante la coordinación directa con complejos judiciales, municipios y notarías.',
            experience: 'Gestión externa y diligencias administrativas',
            achievements: [
                'Ejecución efectiva de trámites en el Complejo Judicial y Notarías',
                'Gestión de procesos administrativos y seguimiento en el Municipio',
                'Optimización en la presentación y retiro de documentos institucionales'
            ],
            textPosition: 'left'
        }

    ];

    return (
        <MainLayout>
            {/* Hero Section */}
            <div
                className="relative py-24 sm:py-32 overflow-hidden"
                style={{
                    background: 'var(--gradient-primary)',
                    backgroundImage: "url('/images/ofi/Ofi.JPG')",
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} />

                <div className="container-fluid relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                color: 'var(--white)'
                            }}
                        >
                            Nuestro{' '}
                            <motion.span
                                style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Equipo
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="w-24 h-1 mx-auto mb-8"
                            style={{ backgroundColor: 'var(--gold-dark)' }}
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        />

                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed px-4"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            12 profesionales especializados, un solo objetivo:
                            brindar excelencia jurídica con compromiso y dedicación.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Team Grid Section */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Profesionales Especializados"
                    description="Conoce a nuestro equipo de expertos en cada área del Derecho"
                    centered={true}
                    className="mb-12 sm:mb-16"
                />

                {/* Team Grid Premium */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                className="group cursor-pointer"
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                onClick={() => setSelectedMember(member)}
                                onMouseEnter={() => setHoveredMember(member.id)}
                                onMouseLeave={() => setHoveredMember(null)}
                            >
                                <div className="relative overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl rounded-lg">
                                    {/* Photo Container */}
                                    <div className="relative h-80 overflow-hidden bg-gray-100">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover:scale-110"
                                            quality={95}
                                            priority={index < 4}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                            placeholder="blur"
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                        />
                                        <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />

                                        {/* Overlay Premium - SIEMPRE VISIBLE EN MÓVIL */}
                                        <div className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${isMobile || hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                                            }`} />

                                        {/* Hover Content - MEJORADO PARA MÓVIL */}
                                        <div className={`absolute bottom-4 left-4 right-4 text-white transition-all duration-500 ${isMobile || hoveredMember === member.id
                                            ? 'opacity-100 transform translate-y-0'
                                            : 'opacity-0 transform translate-y-4'
                                            }`}>
                                            <p className="text-sm font-medium mb-3 line-clamp-2">{member.specialization}</p>

                                            {/* Contenedor flex responsivo */}
                                            <div className="flex flex-col sm:flex-row gap-2">
                                                <button className="text-xs font-bold uppercase tracking-wider px-4 py-2.5 border border-white/50 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex-1 min-h-10 flex items-center justify-center">
                                                    Ver Perfil
                                                </button>

                                                {/* LinkedIn Button - MEJORADO */}
                                                {member.linkedinUrl && (
                                                    <a
                                                        href={member.linkedinUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full sm:w-10 h-10 border border-white/50 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xs font-bold sm:text-base"
                                                        onClick={(e) => e.stopPropagation()}
                                                        aria-label="Ver perfil de LinkedIn"
                                                    >
                                                        <span className="sm:hidden">LinkedIn</span>
                                                        <svg className="w-4 h-4 hidden sm:block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info Section - Mejorada */}
                                    <div className="p-6">
                                        <h3
                                            className="text-lg font-bold mb-2 group-hover:text-red-gestium transition-colors duration-300 line-clamp-2"
                                            style={{
                                                color: 'var(--charcoal)',
                                                fontFamily: "'Inter', sans-serif"
                                            }}
                                        >
                                            {member.name}
                                        </h3>

                                        <p
                                            className="text-sm font-medium mb-3 line-clamp-2"
                                            style={{ color: 'var(--red-gestium)' }}
                                        >
                                            {member.title}
                                        </p>

                                        {/* Expertise Indicator */}
                                        <div className="mt-4 flex items-start gap-2">
                                            <div
                                                className="w-2 h-2 rounded-full mt-2 shrink-0"
                                                style={{ backgroundColor: 'var(--red-gestium)' }}
                                            />
                                            <span
                                                className="text-xs uppercase tracking-wider line-clamp-2"
                                                style={{ color: 'var(--silver)' }}
                                            >
                                                {member.specialization}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Modal Premium Full-Width - MEJORADO PARA MÓVIL */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className="relative bg-white w-full max-w-7xl h-[98vh] sm:h-[95vh] overflow-hidden rounded-none sm:rounded-lg"
                            initial={{ scale: 0.7, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.7, opacity: 0, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button - MEJORADO */}
                            <button
                                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center cursor-pointer"
                                onClick={() => setSelectedMember(null)}
                                aria-label="Cerrar perfil"
                            >
                                <XMarkIcon className="w-6 h-6 sm:w-6 sm:h-6" />
                            </button>

                            {/* Background Image - FULL WIDTH */}
                            <div className="absolute inset-0">
                                <Image
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    fill
                                    className="object-cover"
                                    quality={95}
                                    priority={true}
                                    sizes="100vw"
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                />
                            </div>

                            {/* Gradient Overlay - MEJORADO PARA MÓVIL */}
                            <div className={`absolute inset-0 ${isMobile
                                ? 'bg-linear-to-t from-black/90 via-black/60 to-black/30'
                                : selectedMember.textPosition === 'right'
                                    ? 'bg-linear-to-l from-black/70 via-black/30 to-black/5'
                                    : 'bg-linear-to-r from-black/70 via-black/30 to-black/5'
                                }`} />

                            {/* Content Section - RESPONSIVE */}
                            <div className={`absolute inset-0 flex ${isMobile
                                ? 'items-end justify-center'
                                : selectedMember.textPosition === 'right'
                                    ? 'items-end justify-end'
                                    : 'items-end justify-start'
                                }`}>
                                <div className={`w-full ${isMobile
                                    ? 'max-w-full'
                                    : selectedMember.textPosition === 'right'
                                        ? 'max-w-lg mr-4 sm:mr-8 lg:mr-12'
                                        : 'max-w-xl ml-4 sm:ml-8 lg:ml-12'
                                    } h-screen`}>
                                    {/* Contenedor scrolleable - RESPONSIVE */}
                                    <div
                                        ref={scrollContainerRef}
                                        className="h-full overflow-y-auto scrollbar-hide"
                                        style={{ cursor: isMobile ? 'default' : 'row-resize' }}
                                    >
                                        <div className="min-h-full p-4 sm:p-5 lg:p-6 text-white flex flex-col justify-end">
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: isMobile ? 0 : selectedMember.textPosition === 'right' ? 50 : -50,
                                                    y: isMobile ? 30 : 0
                                                }}
                                                animate={{ opacity: 1, x: 0, y: 0 }}
                                                transition={{ delay: 0.3, duration: 0.8 }}
                                                className={`space-y-4 sm:space-y-5 ${isMobile ? 'pt-[50vh]' : 'pt-[55vh]'
                                                    }`}
                                            >
                                                {/* Nombre - RESPONSIVE */}
                                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                                                    {selectedMember.name}
                                                </h2>

                                                {/* Título - RESPONSIVE */}
                                                <p
                                                    className="text-base sm:text-lg lg:text-xl font-semibold"
                                                    style={{
                                                        color: 'var(--red-gestium)',
                                                        fontFamily: "'Inter', sans-serif"
                                                    }}
                                                >
                                                    {selectedMember.title}
                                                </p>

                                                {/* Especialización - RESPONSIVE */}
                                                <div className="space-y-2">
                                                    <h3
                                                        className="text-sm sm:text-base font-semibold"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    >
                                                        Especialización
                                                    </h3>
                                                    <p
                                                        className="text-sm lg:text-base leading-relaxed opacity-90"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    >
                                                        {selectedMember.specialization}
                                                    </p>
                                                </div>

                                                {/* Descripción - RESPONSIVE */}
                                                <div className="space-y-2">
                                                    <h3
                                                        className="text-sm sm:text-base font-semibold"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    >
                                                        Descripción
                                                    </h3>
                                                    <p
                                                        className="text-sm lg:text-base leading-relaxed opacity-90"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    >
                                                        {selectedMember.description}
                                                    </p>
                                                </div>

                                                {/* Experiencia - RESPONSIVE */}
                                                {selectedMember.experience && (
                                                    <div className="space-y-2">
                                                        <h3
                                                            className="text-sm sm:text-base font-semibold"
                                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                                        >
                                                            Experiencia
                                                        </h3>
                                                        <p
                                                            className="text-sm lg:text-base leading-relaxed opacity-90"
                                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                                        >
                                                            {selectedMember.experience}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Formación - RESPONSIVE */}
                                                {selectedMember.education && selectedMember.education.length > 0 && (
                                                    <div className="space-y-2">
                                                        <h3
                                                            className="text-sm sm:text-base font-semibold"
                                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                                        >
                                                            Formación
                                                        </h3>
                                                        <ul className="space-y-1">
                                                            {selectedMember.education.map((edu, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="text-sm lg:text-base opacity-90"
                                                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                                                >
                                                                    • {edu}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Logros Destacados - RESPONSIVE */}
                                                {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                                                    <div className="space-y-3">
                                                        <h3
                                                            className="text-sm sm:text-base font-semibold"
                                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                                        >
                                                            Logros Destacados
                                                        </h3>
                                                        <ul className="space-y-2">
                                                            {selectedMember.achievements.map((achievement, index) => (
                                                                <li key={index} className="flex items-start gap-3">
                                                                    <div
                                                                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                                                                        style={{ backgroundColor: 'var(--red-gestium)' }}
                                                                    />
                                                                    <span
                                                                        className="text-sm lg:text-base leading-relaxed opacity-90"
                                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                                    >
                                                                        {achievement}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Padding extra para móvil */}
                                                <div className="pb-8 sm:pb-4" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CSS para ocultar scrollbar */}
                            <style jsx>{`
                                .scrollbar-hide {
                                    -ms-overflow-style: none;
                                    scrollbar-width: none;
                                }
                                .scrollbar-hide::-webkit-scrollbar {
                                    display: none;
                                }
                                
                                /* Clases de utilidad para truncar texto */
                                .line-clamp-2 {
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                                    overflow: hidden;
                                }
                            `}</style>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </MainLayout>
    );
}