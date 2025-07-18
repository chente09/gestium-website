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
    education?: string;
    achievements: string[];
    isLeader?: boolean;
}

export default function EquipoPage() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const teamMembers: TeamMember[] = [
        {
            id: 'david-maldonado',
            name: 'Dr. David Maldonado Viteri',
            title: 'Gerente General',
            specialization: 'Derecho Procesal y Recuperación de Cartera',
            image: '/images/equipo/DAVID.v2.jpg',
            description: 'Líder con amplia trayectoria en el sector jurídico, especializado en derecho procesal y recuperación de cartera. Su experiencia como Notario Primero de Quito le otorga una perspectiva única en el manejo de procesos legales complejos.',
            experience: 'Ex-Notario Primero de Quito (2007-2014)',
            education: 'Maestría en Derecho Procesal',
            achievements: [
                'Fundador de GESTIUM Servicios Legales Integrales',
                'Ex-Notario Primero de Quito',
                'Especialista en cobranza coactiva',
                'Desarrollo de GESTIUM-APP'
            ],
            isLeader: true
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
            ]
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
                'Gestión de procesos inmobiliarios urbanos'
            ]
        },
        {
            id: 'sofia-teran',
            name: 'Ab. Madeline Sofía Terán',
            title: 'Abogada Junior',
            specialization: 'Derecho Civil, Laboral y Propiedad Intelectual',
            image: '/images/equipo/ST-v2.png',
            description: 'Abogada junior con formación en Derecho y Relaciones Internacionales, con habilidades destacadas en comunicación, análisis jurídico y coordinación de procesos legales.',
            experience: 'Formación multidisciplinaria y práctica jurídica',
            achievements: [
                'Apoyo en procesos civiles y laborales',
                'Investigación jurídica en propiedad intelectual',
                'Coordinación de procesos con enfoque comunicacional'
            ]
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
            ]
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
            ]
        },
        {
            id: 'tatiana-cordonez',
            name: 'Tatiana Cordonez',
            title: 'Especialista en Cobranzas',
            specialization: 'Derecho Inmobiliario y Familiar',
            image: '/images/equipo/tc-v1.jpg',
            description: 'Estudiante avanzada de Derecho con sólida formación en áreas inmobiliaria, propiedad intelectual, familia y societario. Brinda soluciones legales prácticas y confiables.',
            experience: 'Especialista en gestión legal estratégica',
            achievements: [
                'Asesoría legal en procesos inmobiliarios y familiares',
                'Apoyo en estructuración societaria',
                'Atención personalizada al cliente'
            ]
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
            ]
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
            ]
        },
        {
            id: 'maria-paula-peralta',
            name: 'María Paula Peralta',
            title: 'Coordinadora de Comunicaciones',
            specialization: 'Atención al Cliente Jurídico',
            image: '/images/equipo/MP-v2.jpg',
            description: 'Estudiante de Derecho con destacada trayectoria académica y capacidad investigativa. Aporta una mirada analítica y comunicacional al área de atención y cobranzas.',
            experience: 'Gestión de relaciones institucionales',
            achievements: [
                'Publicaciones en editoriales internacionales',
                'Beca académica por excelencia',
                'Gestión de comunicaciones legales'
            ]
        },
        {
            id: 'alexa-vasconez',
            name: 'Alexa Vásconez',
            title: 'Asistente Administrativa',
            specialization: 'Gestión Jurídica Interna',
            image: '/images/equipo/AV-v2.jpg',
            description: 'Estudiante de Derecho con méritos académicos y experiencia práctica en derecho penal, civil y cobranzas. Destaca por su compromiso y adaptabilidad.',
            experience: 'Apoyo administrativo legal',
            achievements: [
                'Becas por excelencia académica',
                'Colaboración en cobranzas y procesos judiciales',
                'Gestión de trámites internos'
            ]
        },
        {
            id: 'ingrid-perez',
            name: 'Ingrid Pérez',
            title: 'Especialista en Archivo',
            specialization: 'Gestión Documental Legal',
            image: '/images/equipo/ingrid.jpg',
            description: 'Estudiante universitaria con experiencia como pasante legal en el Banco Pichincha. Especializada en organización documental y archivo jurídico.',
            experience: 'Archivo legal en banca',
            achievements: [
                'Clasificación de expedientes físicos y digitales',
                'Apoyo en auditorías documentales',
                'Organización de archivo jurídico'
            ]
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
                                style={{ color: 'var(--red-gestium)' }}
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
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                                <div className="relative overflow-hidden bg-white shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                                    {/* Photo Container - Relación 3:2 */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />

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

            {/* Modal Premium */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className="relative bg-white max-w-6xl w-full h-[90vh] flex flex-col lg:flex-row overflow-hidden"
                            initial={{ scale: 0.7, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.7, opacity: 0, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
                                onClick={() => setSelectedMember(null)}
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>

                            {/* Photo Section - Imagen estática con relación de aspecto */}
                            <div className="lg:w-1/2 w-full h-64 lg:h-full flex-shrink-0">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>
                            </div>

                            {/* Content Section - Solo el contenido tiene scroll */}
                            <div className="lg:w-1/2 w-full flex-1 flex flex-col overflow-hidden">
                                <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="space-y-6"
                                    >
                                        

                                        <h2
                                            className="text-3xl lg:text-4xl font-bold mb-2"
                                            style={{
                                                color: 'var(--charcoal)',
                                                fontFamily: "'Playfair Display', serif"
                                            }}
                                        >
                                            {selectedMember.name}
                                        </h2>

                                        <p
                                            className="text-xl font-semibold mb-6"
                                            style={{ color: 'var(--red-gestium)' }}
                                        >
                                            {selectedMember.title}
                                        </p>

                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                                                    Especialización
                                                </h3>
                                                <p style={{ color: 'var(--silver)' }}>
                                                    {selectedMember.specialization}
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                                                    Descripción
                                                </h3>
                                                <p className="leading-relaxed" style={{ color: 'var(--silver)' }}>
                                                    {selectedMember.description}
                                                </p>
                                            </div>

                                            {selectedMember.education && (
                                                <div>
                                                    <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                                                        Formación
                                                    </h3>
                                                    <p style={{ color: 'var(--silver)' }}>
                                                        {selectedMember.education}
                                                    </p>
                                                </div>
                                            )}

                                            <div>
                                                <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                                                    Logros Destacados
                                                </h3>
                                                <ul className="space-y-2">
                                                    {selectedMember.achievements.map((achievement, index) => (
                                                        <li key={index} className="flex items-start gap-3">
                                                            <div
                                                                className="w-2 h-2 rounded-full mt-2"
                                                                style={{ backgroundColor: 'var(--red-gestium)' }}
                                                            />
                                                            <span style={{ color: 'var(--silver)' }}>
                                                                {achievement}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </MainLayout>
    );
}