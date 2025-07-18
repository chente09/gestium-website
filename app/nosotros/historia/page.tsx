'use client';

import React from 'react';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import {
    Building2,
    Scale,
    TrendingUp,
    Award,
    Users,
    Briefcase,
    ChevronRight,
    Star
} from 'lucide-react';

const stageData = [
    {
        id: 'fundacion',
        period: '2005 - 2010',
        title: 'Fundación',
        subtitle: 'Los Primeros Pasos',
        icon: Building2,
        description: 'Nace GESTIUM Servicios Legales Integrales con una visión clara: especialización en recuperación de cartera y servicios jurídicos integrales.',
        highlights: [
            'Constitución del estudio jurídico',
            'Especialización en cobranzas',
            'Primeros clientes institucionales',
            'Construcción de metodologías propias'
        ],
        imageAlt: 'Fundación de GESTIUM en 2005',
        bgGradient: 'from-slate-900 via-slate-800 to-slate-900'
    },
    {
        id: 'consolidacion',
        period: '2011 - 2020',
        title: 'Consolidación',
        subtitle: 'Crecimiento y Reconocimiento',
        icon: Scale,
        description: 'Etapa de crecimiento sostenido marcada por el nombramiento del Dr. Maldonado como Notario Primero de Quito y la expansión hacia grandes instituciones financieras.',
        highlights: [
            'Dr. Maldonado: Notario Primero de Quito (2007-2014)',
            'Alianzas con instituciones financieras líderes',
            'Expansión del equipo especializado',
            'Desarrollo de GESTIUM-APP'
        ],
        imageAlt: 'Consolidación y crecimiento del estudio',
        bgGradient: 'from-red-900 via-red-800 to-slate-900'
    },
    {
        id: 'evolucion',
        period: '2021 - 2024',
        title: 'Evolución Corporativa',
        subtitle: 'Transformación Estratégica',
        icon: TrendingUp,
        description: 'Culminación de la madurez empresarial con la incorporación como Sociedad Anónima, consolidando nuestro liderazgo en el sector jurídico ecuatoriano.',
        highlights: [
            'Incorporación como GESTIUM S.A.',
            'Liderazgo reconocido en recuperación de cartera',
            'Expansión tecnológica avanzada',
            'Presencia consolidada a nivel nacional'
        ],
        imageAlt: 'Evolución hacia GESTIUM S.A.',
        bgGradient: 'from-slate-900 via-red-900 to-black'
    }
];

const achievements = [
    {
        icon: Award,
        title: 'Reconocimiento Institucional',
        description: 'Confianza de las principales instituciones financieras del país'
    },
    {
        icon: Users,
        title: 'Equipo Especializado',
        description: 'Profesionales altamente capacitados en todas las áreas del derecho'
    },
    {
        icon: Briefcase,
        title: 'Experiencia Comprobada',
        description: 'Trayectoria sólida en recuperación de cartera y servicios corporativos'
    },
    {
        icon: Star,
        title: 'Innovación Tecnológica',
        description: 'Plataforma GESTIUM-APP para gestión operativa avanzada'
    }
];

export default function NuestroHistoriaPage() {
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
                            Nuestra{' '}
                            <motion.span
                                style={{ color: 'var(--red-gestium)' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Historia
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
                            Dos décadas forjando confianza y excelencia jurídica,
                            desde GESTIUM Servicios Legales Integrales hasta GESTIUM S.A.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Etapas de Desarrollo */}
            <Section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeader
                        title="Etapas de Desarrollo"
                        subtitle="Un recorrido de crecimiento sostenido"
                        description="Desde nuestros primeros pasos como GESTIUM Servicios Legales Integrales hasta nuestra consolidación como GESTIUM S.A., cada etapa ha sido un paso firme hacia la excelencia."
                        centered={true}
                    />

                    <div className="mt-16 space-y-16">
                        {stageData.map((stage, index) => {
                            const IconComponent = stage.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={stage.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                                >
                                    {/* Imagen Real */}
                                    <div className="lg:w-1/2">
                                        <motion.div
                                            className="relative h-96 rounded-none overflow-hidden group"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src={
                                                    stage.id === 'fundacion' ? '/images/ofi/Ofi3.jpg' :
                                                        stage.id === 'consolidacion' ? '/images/equipo/DAVID.v2.JPG' :
                                                            '/images/ofi/Ofi.JPG'
                                                }
                                                alt={stage.imageAlt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className={`absolute inset-0   opacity-60 group-hover:opacity-40 transition-all duration-300`}></div>

                                            {/* Overlay content para logo en fundación */}
                                            {stage.id === 'fundacion' && (
                                                <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <Image
                                                            src="/images/image.png"
                                                            alt="Logo GESTIUM Fundación"
                                                            width={200}
                                                            height={200}
                                                            className="mx-auto opacity-80"
                                                        />
                                                        <p className="mt-4 text-slate-600 font-medium">Fundación 2005</p>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="lg:w-1/2 space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-red-600 uppercase tracking-wider">
                                                    {stage.period}
                                                </p>
                                                <h3 className="text-3xl font-playfair font-bold text-slate-900">
                                                    {stage.title}
                                                </h3>
                                                <p className="text-lg text-slate-600 font-medium">
                                                    {stage.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-lg text-slate-700 leading-relaxed">
                                            {stage.description}
                                        </p>

                                        <div className="space-y-3">
                                            {stage.highlights.map((highlight, highlightIndex) => (
                                                <motion.div
                                                    key={highlightIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * highlightIndex }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0" />
                                                    <span className="text-slate-700">{highlight}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Logros y Reconocimientos */}
            <Section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeader
                        title="Logros que nos Definen"
                        subtitle="Reconocimiento y excelencia"
                        description="Nuestra trayectoria se refleja en la confianza depositada por nuestros clientes y en los logros alcanzados a lo largo de estas dos décadas."
                        centered={true}
                    />

                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => {
                            const IconComponent = achievement.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center group"
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-playfair font-bold text-slate-900 mb-3">
                                        {achievement.title}
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Presente y Futuro */}
            <div
                className="py-20 relative overflow-hidden"
                style={{
                    background: 'var(--gradient-primary)',
                    backgroundImage: "url('/images/ofi/justicia.jpg')",
                    backgroundBlendMode: 'overlay'
                }}
            >
                <div className="container-fluid text-center relative z-10">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: 'var(--white)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        GESTIUM S.A. Hoy
                    </motion.h2>

                    <motion.div
                        className="w-32 h-1 mx-auto mb-8"
                        style={{ backgroundColor: 'var(--red-gestium)' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    />

                    <motion.p
                        className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto"
                        style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Como GESTIUM S.A., continuamos construyendo sobre la sólida base de confianza
                            y excelencia establecida desde 2005, proyectándonos hacia el futuro con la
                            misma pasión y compromiso que nos ha caracterizado.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <motion.button
                            className="px-12 py-4 font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden shadow-xl"
                            style={{
                                background: 'var(--gradient-red)',
                                color: 'var(--white)',
                                border: 'none'
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">
                                Conocer Nuestro Equipo
                            </span>
                        </motion.button>

                        <motion.button
                            className="px-12 py-4 font-bold uppercase tracking-wider border-2 transition-all duration-300 bg-transparent"
                            style={{
                                borderColor: 'var(--white)',
                                color: 'var(--white)'
                            }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Nuestros Valores
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}