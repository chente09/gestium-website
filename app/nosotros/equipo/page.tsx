'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
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
}

export default function EquipoPage() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
            textPosition: 'right'
        },
        {
            id: 'karla-padilla',
            name: 'Ab. Karla Padilla',
            title: 'Abogada Especialista',
            specialization: 'Derecho Civil y Coactivo',
            image: '/images/equipo/nahomi-v2.jpg',
            description: 'Abogada en libre ejercicio con amplia experiencia en procedimientos civiles, coactivos, penales y de familia, aportando soluciones jurídicas integrales con enfoque práctico.',
            experience: 'Ejercicio profesional independiente',
            achievements: [
                'Litigios exitosos en procesos civiles y coactivos',
                'Asesoría en casos de derecho penal y familiar',
            ],
            textPosition: 'left'
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
            textPosition: 'right'
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
            id: 'sofia-guana',
            name: 'Sofía Guaña',
            title: 'Asistente Legal',
            specialization: 'Derecho Inmobiliario, Laboral y Coactivo',
            image: '/images/equipo/SG-v2.jpg',
            description: 'Estudiante de Derecho con experiencia en derecho inmobiliario, coactivo y laboral. Destaca por su dedicación, análisis detallado y acompañamiento personalizado al cliente.',
            experience: 'Estudiante activa en práctica jurídica',
            achievements: [
                'Colaboración en casos coactivos e inmobiliarios',
                'Apoyo integral en audiencias y trámites',
                'Gestión personalizada de clientes'
            ],
            textPosition: 'left'
        },
        {
            id: 'tatiana-cordonez',
            name: 'Tatiana Cordonez',
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
            textPosition: 'right'
        },
        {
            id: 'vicente-nenger',
            name: 'Tec. Vicente Nénger',
            title: 'Desarrollador de Software',
            specialization: 'Automatización de Procesos Jurídicos',
            image: '/images/equipo/DMV06865.jpg',
            description: 'Desarrollador de software especializado en el sector legal, con experiencia en cobranza coactiva y automatización. Lidera proyectos tecnológicos que mejoran la eficiencia y experiencia del cliente.',
            experience: 'Innovación legal-tecnológica',
            achievements: [
                'Desarrollo y mantenimiento de GESTIUM-APP',
                'Automatización de procesos coactivos',
                'Soluciones digitales orientadas al usuario'
            ],
            textPosition: 'right'
        },
        {
            id: 'marco-sanguano',
            name: 'Marco Sanguano',
            title: 'Impulsor de Procesos',
            specialization: 'Gestión Procesal',
            image: '/images/equipo/MS-v2.jpg',
            description: 'Encargado del impulso y seguimiento de procesos legales. Asegura el cumplimiento de plazos y correcta tramitación de expedientes con alto nivel de organización.',
            experience: 'Seguimiento y control judicial',
            achievements: [
                'Gestión de expedientes judiciales',
                'Control de tiempos procesales',
                'Trámite de escritos y notificaciones'
            ],
            textPosition: 'left'
        },
        {
            id: 'maria-paula-peralta',
            name: 'María Paula Peralta',
            title: 'Pasante Legal',
            specialization: 'Atención al Cliente Jurídico',
            image: '/images/equipo/MP-v2.jpg',
            description: 'Estudiante de Derecho con destacada trayectoria académica y capacidad investigativa. Aporta una mirada analítica y comunicacional al área de atención y cobranzas.',
            experience: 'Área judicial y de cobranzas',
            achievements: [
                'Publicaciones en editoriales internacionales',
                'Beca académica por excelencia'
            ],
            textPosition: 'left'
        },
        {
            id: 'alexa-vasconez',
            name: 'Alexa Vásconez',
            title: 'Pasante Legal',
            specialization: 'Gestión Jurídica Interna',
            image: '/images/equipo/AV-v2.jpg',
            description: 'Estudiante de Derecho con méritos académicos y experiencia práctica en derecho penal, civil y cobranzas. Destaca por su compromiso y adaptabilidad.',
            experience: 'Gestión de trámites internos y cobranzas',
            achievements: [
                'Becas por excelencia académica',
                'Colaboración en cobranzas y procesos judiciales',
                'Gestión de trámites internos'
            ],
            textPosition: 'left'
        },
        {
            id: 'ingrid-perez',
            name: 'Ingrid Pérez',
            title: 'Pasante Legal',
            specialization: 'Gestión Documental Legal',
            image: '/images/equipo/ingrid.jpg',
            description: 'Estudiante universitaria con experiencia como pasante legal en el Banco Pichincha. Destaca por su capacidad de organización y apoyo en la gestión de cartera.',
            experience: 'Cobranza y redacción de demandas',
            achievements: [
                'Colaboración en cobranzas y procesos judiciales',
                'Gestión de trámites internos'
            ],
            textPosition: 'left'
        }

    ];

    return (
        <MainLayout>
            {/* Hero Section */}
            <div
                className="relative py-32 overflow-hidden"
                style={{
                    background: 'var(--gradient-primary)',
                    backgroundImage: "url('/images/ofi/Ofi.JPG')",
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} />

                <div className="container-fluid relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                color: 'var(--white)'
                            }}
                        >
                            Nuestro{' '}
                            <motion.span
                                style={{ color: 'var(--red-gestium)', textShadow: '0 0 9px gray' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Equipo
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="w-24 h-1 mx-auto mb-8"
                            style={{ backgroundColor: 'var(--red-gestium)' }}
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        />

                        <motion.p
                            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
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
                    description="Conoce a nuestro equipo de expertos en cada área del derecho"
                    centered={true}
                    className="mb-16"
                />

                {/* Team Grid Premium */}
                <div className="max-w-7xl mx-auto">
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
                            >
                                <div className="relative overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl ">
                                    {/* Photo Container - OPTIMIZADO PARA ALTA CALIDAD */}
                                    <div className="relative h-80 overflow-hidden bg-gray-100"> {/* Aumentado de h-64 a h-80 */}
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover:scale-110 "
                                            // ✨ CONFIGURACIONES CLAVE PARA CALIDAD MÁXIMA
                                            quality={95} // Calidad máxima para fotos profesionales
                                            priority={true} // Prioridad para las primeras 4 imágenes
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                            placeholder="blur" // Blur mientras carga
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                        />
                                        <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" /> 
                                        {/* Overlay Premium */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                        {/* Hover Content */}
                                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            <p className="text-sm font-medium mb-2">{member.specialization}</p>
                                            <button className="text-xs font-bold uppercase tracking-wider px-4 py-2 border border-white/50 hover:bg-white hover:text-black transition-all duration-300">
                                                Ver Perfil
                                            </button>
                                        </div>
                                    </div>

                                    {/* Info Section - Tamaño uniforme */}
                                    <div className="p-6">
                                        <h3
                                            className="text-lg font-bold mb-2 group-hover:text-red-gestium transition-colors duration-300"
                                            style={{
                                                color: 'var(--charcoal)',
                                                fontFamily: "'Inter', sans-serif"
                                            }}
                                        >
                                            {member.name}
                                        </h3>

                                        <p
                                            className="text-sm font-medium mb-3"
                                            style={{ color: 'var(--red-gestium)' }}
                                        >
                                            {member.title}
                                        </p>

                                        {/* Expertise Indicator */}
                                        <div className="mt-4 flex items-center gap-2">
                                            <div
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: 'var(--red-gestium)' }}
                                            />
                                            <span
                                                className="text-xs uppercase tracking-wider"
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

            {/* Modal Premium Full-Width - CON POSICIONAMIENTO DINÁMICO */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className="relative bg-white max-w-7xl w-full h-[95vh] overflow-hidden"
                            initial={{ scale: 0.7, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.7, opacity: 0, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
                                onClick={() => setSelectedMember(null)}
                            >
                                <XMarkIcon className="w-6 h-6" />
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

                            {/* Gradient Overlay - DINÁMICO SEGÚN POSICIÓN */}
                            <div className={`absolute inset-0 ${selectedMember.textPosition === 'right'
                                ? 'bg-gradient-to-l from-black/70 via-black/30 to-black/5'
                                : 'bg-gradient-to-r from-black/70 via-black/30 to-black/5'
                                }`} />

                            {/* Content Section - POSICIÓN DINÁMICA Y TAMAÑO REDUCIDO */}
                            <div className={`absolute inset-0 flex items-end ${selectedMember.textPosition === 'right'
                                ? 'justify-end'
                                : 'justify-start'
                                }`}>
                                <div className={`w-full ${selectedMember.textPosition === 'right'
                                    ? 'max-w-lg'  // ← Más delgado para la derecha
                                    : 'max-w-xl'  // ← Tamaño normal para la izquierda
                                    } h-[100vh] ${selectedMember.textPosition === 'right'
                                        ? 'mr-8 lg:mr-12'
                                        : 'ml-8 lg:ml-12'
                                    }`}>
                                    {/* Contenedor scrolleable SIN fondo visible - REDUCIDO */}
                                    <div className="h-full overflow-y-auto scrollbar-hide">
                                        <div className="min-h-full p-5 lg:p-6 text-white flex flex-col justify-end">
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: selectedMember.textPosition === 'right' ? 50 : -50
                                                }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3, duration: 0.8 }}
                                                className="space-y-5 pt-[55vh]"
                                            >
                                                {/* Nombre */}
                                                <h2
                                                    className="text-3xl lg:text-4xl font-bold leading-tight"
                                                >
                                                    {selectedMember.name}
                                                </h2>

                                                {/* Título */}
                                                <p
                                                    className="text-lg lg:text-xl font-semibold"
                                                    style={{
                                                        color: 'var(--red-gestium)',
                                                        fontFamily: "'Inter', sans-serif"
                                                    }}
                                                >
                                                    {selectedMember.title}
                                                </p>

                                                {/* Especialización */}
                                                <div className="space-y-2">
                                                    <h3
                                                        className="text-base font-semibold"
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

                                                {/* Descripción */}
                                                <div className="space-y-2">
                                                    <h3
                                                        className="text-base font-semibold"
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

                                                {/* Experiencia */}
                                                {selectedMember.experience && (
                                                    <div className="space-y-2">
                                                        <h3
                                                            className="text-base font-semibold"
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

                                                {/* Formación */}
                                                {selectedMember.education && selectedMember.education.length > 0 && (
                                                    <div className="space-y-2">
                                                        <h3
                                                            className="text-base font-semibold"
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

                                                {/* Logros Destacados */}
                                                {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                                                    <div className="space-y-3">
                                                        <h3
                                                            className="text-base font-semibold"
                                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                                        >
                                                            Logros Destacados
                                                        </h3>
                                                        <ul className="space-y-2">
                                                            {selectedMember.achievements.map((achievement, index) => (
                                                                <li key={index} className="flex items-start gap-3">
                                                                    <div
                                                                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
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
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CSS para ocultar scrollbar completamente */}
                            <style jsx>{`
                    .scrollbar-hide {
                        -ms-overflow-style: none;  /* Internet Explorer 10+ */
                        scrollbar-width: none;     /* Firefox */
                    }
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;             /* Safari and Chrome */
                    }
                `}</style>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </MainLayout>
    );
}