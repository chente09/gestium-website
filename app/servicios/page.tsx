'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import {
    ScaleIcon,
    Building2,
    Users,
    House,
    ArrowRight,
    CheckCircle,
    Clock,
    Award,
    Target
} from 'lucide-react';

export default function ServiciosPage() {
    const router = useRouter();

    // DATA FOR THE COMPONENT
    const mainServices = [
        {
            title: 'Recuperación de Cartera',
            subtitle: 'Especialidad Principal',
            description: 'Gestión integral de cobranza judicial, extrajudicial y coactiva con más de 20 años de experiencia comprobada.',
            icon: ScaleIcon,
            features: [
                'Cobranza Judicial especializada',
                'Gestión Extrajudicial efectiva',
                'Proceso Coactivo (14+ años)',
                'Tecnología GESTIUM-APP'
            ],
            stats: '95% Efectividad',
            href: '/servicios/recuperacion-cartera',
            image: '/images/ofi/Ofi.JPG'
        },
        {
            title: 'Derecho Inmobiliario',
            subtitle: 'Proyectos Seguros',
            description: 'Asesoría especializada en proyectos inmobiliarios con experiencia en más de 50 desarrollos exitosos.',
            icon: House,
            features: [
                'Constitución de proyectos',
                'Declaratorias de propiedad horizontal',
                'Compraventas y promesas',
                'Hipotecas y garantías'
            ],
            stats: '50+ Proyectos',
            href: '/servicios/inmobiliario',
            image: '/images/ofi/Ofi.JPG'
        },
        {
            title: 'Derecho Corporativo',
            subtitle: 'Asesoría Empresarial',
            description: 'Constitución, transformación, fusión y liquidación de compañías con respaldo legal integral.',
            icon: Building2,
            features: [
                'Constitución de compañías',
                'Fusiones y transformaciones',
                'Aumentos de capital',
                'Liquidaciones societarias'
            ],
            stats: 'Respaldo Total',
            href: '/servicios/corporativo',
            image: '/images/ofi/ofi3.jpg'
        },
        {
            title: 'Mediación y Arbitraje',
            subtitle: 'Solución de Conflictos',
            description: 'Resolución alternativa de controversias con negociación sólida y resultados positivos.',
            icon: Users,
            features: [
                'Mediación especializada',
                'Arbitraje comercial',
                'Negociación efectiva',
                'Soluciones extrajudiciales'
            ],
            stats: 'Resultados Positivos',
            href: '/servicios/mediacion',
            image: '/images/ofi/Ofi.JPG'
        }
    ];

    const additionalServices = [
        {
            name: 'Derecho Civil',
            description: 'Resolución de conflictos entre personas naturales o jurídicas',
            icon: Target
        },
        {
            name: 'Derecho Laboral',
            description: 'Asesoría en relaciones laborales y contratos de trabajo',
            icon: Clock
        },
        {
            name: 'Consultoría Legal',
            description: 'Asesoramiento jurídico especializado y preventivo',
            icon: Award
        }
    ];

    const heroBadges = ['Especialización', 'Experiencia', 'Tecnología', 'Resultados'];

    // RENDER METHOD
    return (
        <MainLayout>
            {/* --- HERO SECTION (REFACTORED) --- */}
            <HeroSection
                backgroundImage="/images/ofi/Ofi.JPG"
                title={
                    <>
                        Nuestros{' '}
                        <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>
                            Servicios
                        </span>
                    </>
                }
                
                description={
                    <>
                        Soluciones jurídicas especializadas respaldadas por{' '}
                        <span className="font-semibold" style={{ textShadow: '0 0 9px black' }}>
                            más de 20 años de experiencia
                        </span>{' '}
                        y la confianza de las principales instituciones del Ecuador.
                    </>
                }
            >
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                    {heroBadges.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/10 rounded-full backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        >
                            <CheckCircle size={16} style={{ color: 'var(--gold-dark)' }} />
                            <span className="font-medium text-white">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </HeroSection>

            {/* --- SPECIALIZED SERVICES SECTION --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Servicios Especializados"
                    description="Áreas de práctica donde concentramos nuestra experiencia y conocimiento"
                    centered={true}
                    className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {mainServices.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group bg-white border transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                                style={{
                                    boxShadow: 'var(--shadow-minimal)',
                                    borderColor: '#e2e8f0'
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                onClick={() => router.push(service.href)}
                            >
                                <div
                                    className="relative p-8 text-white"
                                    style={{
                                        backgroundImage: `url(${service.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} />
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <IconComponent size={24} />
                                                    <span className="text-sm font-medium opacity-90">{service.subtitle}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    {service.title}
                                                </h3>
                                                <p className="text-sm leading-relaxed opacity-90">{service.description}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold" style={{ color: 'var(--red-gestium)' }}>
                                                    {service.stats}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 bg-white">
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm">
                                                <CheckCircle size={14} style={{ color: 'var(--red-gestium)' }} />
                                                <span style={{ color: 'var(--silver)' }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <motion.button
                                        className="group/btn w-full flex items-center justify-center gap-2 py-3 px-4 border-2 transition-all duration-300"
                                        style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}
                                        whileHover={{ backgroundColor: 'var(--charcoal)', color: 'white' }}
                                    >
                                        <span className="font-medium">Ver Detalles</span>
                                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* --- ADDITIONAL SERVICES SECTION --- */}
            <div style={{ backgroundColor: 'var(--platinum)' }} className="py-16">
                <div className="container-fluid">
                    <SectionHeader
                        title="Servicios Adicionales"
                        description="Otras áreas donde brindamos asesoría legal especializada"
                        centered={true}
                        className="mb-12"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {additionalServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="group bg-white p-6 border transition-all duration-300 hover:scale-105 cursor-pointer"
                                    style={{ boxShadow: 'var(--shadow-minimal)', borderColor: '#e2e8f0' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -3 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: 'rgba(167, 26, 33, 0.1)' }}>
                                            <IconComponent size={20} style={{ color: 'var(--red-gestium)' }} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold mb-2" style={{ color: 'var(--charcoal)', fontFamily: "'Inter', sans-serif" }}>
                                                {service.name}
                                            </h4>
                                            <p className="text-sm leading-relaxed" style={{ color: 'var(--silver)' }}>
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* --- CALL TO ACTION (CTA) SECTION --- */}
            <div
                className="py-20 text-center relative"
                style={{
                    backgroundImage: "url('/images/ofi/justicia.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }} />
                <div className="container-fluid relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                            ¿Necesita Asesoría Legal Especializada?
                        </h2>
                        <motion.div
                            className="w-32 h-1 mx-auto mb-8"
                            style={{ backgroundColor: 'var(--red-gestium)' }}
                            initial={{ width: 0 }}
                            whileInView={{ width: 128 }}
                            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        />
                        <p className="text-lg mb-8 max-w-2xl mx-auto">
                            Contáctenos para una consulta personalizada y descubra cómo podemos ayudarle
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300"
                                style={{ background: 'var(--gradient-red)', color: 'white', border: 'none' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => router.push('/contacto')}
                            >
                                Consulta Gratuita
                            </motion.button>
                            <motion.button
                                className="px-8 py-3 font-bold uppercase tracking-wider border-2 bg-transparent transition-all duration-300"
                                style={{ borderColor: 'white', color: 'white' }}
                                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                onClick={() => router.push('tel:+5932543653')}
                            >
                                (+593) 2-543-653
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
