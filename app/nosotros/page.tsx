'use client';

import { useRouter } from 'next/navigation'; 
import React from 'react';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { 
    ScaleIcon, 
    BuildingOfficeIcon, 
    AcademicCapIcon,
    CheckBadgeIcon,
    LightBulbIcon,
    HeartIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function NosotrosPage() {
    const router = useRouter();

    const timeline = [
        {
            year: '2005',
            title: 'Fundación',
            description: 'Inicio como GESTIUM Servicios Legales Integrales',
            icon: BuildingOfficeIcon
        },
        {
            year: '2007-2014',
            title: 'Liderazgo Notarial',
            description: 'Dr. Maldonado se desempeña como Notario Primero de Quito',
            icon: ScaleIcon
        },
        {
            year: '2010-2020',
            title: 'Consolidación',
            description: 'Especialización en recuperación de cartera y confianza institucional',
            icon: CheckBadgeIcon
        },
        {
            year: '2024',
            title: 'GESTIUM S.A.',
            description: 'Evolución a Sociedad Anónima y lanzamiento de GESTIUM-APP',
            icon: LightBulbIcon
        }
    ];

    const team = [
        {
            name: 'Dr. David Maldonado Viteri',
            position: 'Gerente General',
            education: 'Maestría en Derecho Procesal',
            experience: 'Ex-Notario Primero de Quito',
            specialization: 'Derecho Procesal y Recuperación de Cartera'
        }
    ];

    const values = [
        {
            title: 'Especialización',
            description: 'Conocimiento profundo en recuperación de cartera y derecho procesal.',
            icon: AcademicCapIcon
        },
        {
            title: 'Confianza Institucional',
            description: 'Respaldo de las principales instituciones financieras del Ecuador.',
            icon: ShieldCheckIcon
        },
        {
            title: 'Innovación Tecnológica',
            description: 'GESTIUM-APP: nuestra plataforma propia para gestión operativa.',
            icon: LightBulbIcon
        },
        {
            title: 'Compromiso Personal',
            description: 'Atención directa y personalizada en cada caso.',
            icon: HeartIcon
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
                            Especialistas en{' '}
                            <motion.span
                                style={{ color: 'var(--red-gestium)', textShadow: '0 0 9px gray'  }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Derecho
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
                            Trayectoria consolidada al servicio de las principales instituciones del Ecuador, 
                            respaldada por experiencia notarial y especialización en recuperación de cartera.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Historia Section */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Nuestra Historia"
                    description="De GESTIUM Servicios Legales Integrales a GESTIUM S.A."
                    centered={true}
                    className="mb-16"
                />

                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div 
                            className="absolute left-8 top-0 bottom-0 w-0.5"
                            style={{ backgroundColor: 'var(--red-gestium)' }}
                        />

                        <div className="space-y-12">
                            {timeline.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="relative flex items-start gap-8"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2, duration: 0.6 }}
                                    >
                                        {/* Timeline dot */}
                                        <div 
                                            className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                                            style={{ backgroundColor: 'var(--red-gestium)' }}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pt-2">
                                            <div 
                                                className="text-sm font-bold uppercase tracking-wider mb-2"
                                                style={{ color: 'var(--red-gestium)' }}
                                            >
                                                {item.year}
                                            </div>
                                            <h3 
                                                className="text-2xl font-bold mb-3"
                                                style={{ 
                                                    color: 'var(--charcoal)',
                                                    fontFamily: "'Playfair Display', serif"
                                                }}
                                            >
                                                {item.title}
                                            </h3>
                                            <p 
                                                className="text-lg leading-relaxed"
                                                style={{ color: 'var(--silver)' }}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Liderazgo Section */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Liderazgo"
                    description="Experiencia notarial y especialización jurídica"
                    centered={true}
                    className="mb-16"
                />

                <div className="max-w-4xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-12 shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-center">
                                <motion.div
                                    className="relative w-[320px] h-[320px] rounded-full mx-auto mb-8 overflow-hidden shadow-lg"
                                    style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)' }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image 
                                        src="/images/equipo/DAVID.v2.JPG"
                                        alt="Dr. David Maldonado Viteri"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                <h3 
                                    className="text-3xl font-bold mb-2"
                                    style={{
                                        color: 'var(--charcoal)',
                                        fontFamily: "'Playfair Display', serif"
                                    }}
                                >
                                    {member.name}
                                </h3>

                                <div 
                                    className="text-lg font-semibold mb-6"
                                    style={{ color: 'var(--red-gestium)' }}
                                >
                                    {member.position}
                                </div>

                                <div className="space-y-4 text-left max-w-2xl mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                                                Formación Académica
                                            </h4>
                                            <p style={{ color: 'var(--silver)' }}>
                                                {member.education}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                                                Experiencia Destacada
                                            </h4>
                                            <p style={{ color: 'var(--silver)' }}>
                                                {member.experience}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                                            Área de Especialización
                                        </h4>
                                        <p style={{ color: 'var(--silver)' }}>
                                            {member.specialization}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Valores Section */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Lo que nos distingue"
                    description="Principios y fortalezas que nos posicionan como líderes"
                    centered={true}
                    className="mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <motion.div
                                key={index}
                                className="text-center p-6 bg-white transition-all duration-500 hover:scale-105 group"
                                style={{ 
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                    border: '1px solid #f1f5f9'
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -8 }}
                            >
                                <motion.div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300"
                                    style={{ backgroundColor: 'rgba(167, 26, 33, 0.1)' }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <IconComponent 
                                        className="w-8 h-8" 
                                        style={{ color: 'var(--red-gestium)' }} 
                                    />
                                </motion.div>

                                <h3 
                                    className="text-xl font-bold mb-4"
                                    style={{
                                        color: 'var(--charcoal)',
                                        fontFamily: "'Inter', sans-serif"
                                    }}
                                >
                                    {value.title}
                                </h3>
                                
                                <p 
                                    className="leading-relaxed"
                                    style={{ color: 'var(--silver)' }}
                                >
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Call to Action */}
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
                        ¿Quiere conocer más sobre nuestro equipo?
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
                        Conozca a nuestros profesionales especializados y nuestra filosofía de trabajo
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
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/nosotros/equipo')}
                        >
                            <span className="relative z-10">
                                Ver Nuestro Equipo
                            </span>
                        </motion.button>

                        <motion.button
                            className="px-12 py-4 font-bold uppercase tracking-wider border-2 transition-all duration-300 bg-transparent"
                            style={{
                                borderColor: 'var(--white)',
                                color: 'var(--white)',
                                cursor: 'pointer'
                            }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Contactar
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}