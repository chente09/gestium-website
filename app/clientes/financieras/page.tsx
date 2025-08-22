'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    HandCoins,
    Landmark,
    ShieldCheck,
    CheckCircle,
    FileText
} from 'lucide-react';

// Definimos la "forma" de los datos para TypeScript
interface ServiceHighlight {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function InstitucionesFinancierasPage() {
    const router = useRouter();

    const serviceHighlights: ServiceHighlight[] = [
        {
            icon: FileText,
            title: 'Recuperación de Cartera',
            description: 'Líderes en cobranza judicial y extrajudicial, con un índice de efectividad superior al 95% y respaldados por nuestra plataforma GESTIUM-APP.'
        },
        {
            icon: ShieldCheck,
            title: 'Asesoría Regulatoria y Cumplimiento',
            description: 'Apoyo estratégico para navegar el complejo marco regulatorio del sector financiero, asegurando el cumplimiento y minimizando riesgos.'
        },
        {
            icon: Landmark,
            title: 'Derecho Bancario y Financiero',
            description: 'Asesoramiento experto en operaciones de crédito, garantías, reestructuraciones de deuda y todos los aspectos del derecho bancario.'
        }
    ];

    // Lista de clientes financieros para el scroll
    const financialClients = [
        'Principales Instituciones Financieras del IESS',
        'Banco del Instituto Ecuatoriano de Seguridad Social (BIESS)',
        'Banco Nacional de Fomento',
    ];

    // Duplicamos la lista para un efecto de scroll infinito y suave
    const extendedClients = [...financialClients, ...financialClients];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/clientes/financieras.avif"
                title={
                    <>
                        Instituciones <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>Financieras</span>
                    </>
                }
                description="Somos el socio estratégico de las principales instituciones bancarias y financieras del Ecuador, brindando seguridad jurídica y resultados medibles."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Confianza', 'Experiencia', 'Resultados', 'Tecnología'].map((item, index) => (
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

            {/* --- SECCIÓN DE CONFIANZA CON SCROLL DE TEXTO --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="La Confianza del Sector Financiero"
                    description="Nuestra trayectoria de más de dos décadas nos ha consolidado como un referente de confianza y eficacia para las entidades más importantes del país."
                    centered={true}
                    className="mb-16"
                />

                {/* Contenedor principal con mejor altura y espaciado */}
                <div className="relative w-full overflow-hidden py-8">
                    {/* Gradiente de máscara para fondo platinum */}
                    <div className="absolute inset-0 pointer-events-none z-10"
                        style={{
                            background: 'linear-gradient(to right, rgba(248, 250, 252, 1) 0%, transparent 15%, transparent 85%, rgba(248, 250, 252, 1) 100%)'
                        }}
                    />

                    {/* Scroll infinito mejorado */}
                    <motion.div
                        className="flex gap-12 items-center"
                        animate={{
                            x: ['0%', '-50%'],
                        }}
                        transition={{
                            x: {
                                ease: 'linear',
                                duration: 40,
                                repeat: Infinity,
                            }
                        }}
                        style={{
                            width: 'fit-content'
                        }}
                    >
                        {extendedClients.map((clientName, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center flex-shrink-0 px-6 py-4 group cursor-default"
                                whileHover={{
                                    y: -3,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                            >
                                <div className="text-center">
                                    {/* Icono visual sutil */}
                                    <HandCoins className="w-4 h-4 mx-auto mb-2 opacity-60 group-hover:opacity-100 group-hover:scale-125" style={{ color: 'var(--red-gestium)' }} />

                                    {/* Nombre del cliente */}
                                    <motion.div
                                        className="text-lg font-semibold text-slate-700 whitespace-nowrap group-hover:text-[var(--red-gestium)] transition-colors duration-300 relative"
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {clientName}

                                        {/* Línea decorativa que aparece en hover */}
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-0.5"
                                            style={{ backgroundColor: 'var(--red-gestium)' }}
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    </motion.div>

                                    {/* Badge sutil de confianza */}
                                    <motion.div
                                        className="text-xs text-slate-500 mt-1 opacity-0 group-hover:opacity-100"
                                        initial={{ y: 5, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.2, delay: 0.1 }}
                                    >
                                        Cliente de confianza
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Estadística sutil en la esquina */}
                    <motion.div
                        className="absolute top-4 right-4 text-xs text-slate-500 font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        +{financialClients.length} instituciones activas
                    </motion.div>
                </div>

            </Section>

            {/* --- SERVICIOS ESPECIALIZADOS --- */}
            <Section background="white" padding="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg">
                        <Image
                            src="/images/areas/empresas.jpg"
                            alt="Asesoría a instituciones financieras"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            quality={95}
                        />
                    </div>
                    <div>
                        <SectionHeader
                            title="Soluciones Integrales para el Sector"
                            description="Ofrecemos un portafolio de servicios diseñado específicamente para responder a los desafíos del sector financiero."
                            centered={false}
                            className="mb-8"
                        />
                        <div className="space-y-8">
                            {serviceHighlights.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-6 group"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.div
                                        className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-platinum group-hover:bg-red-50 transition-colors duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <service.icon className="w-6 h-6" style={{ color: 'var(--red-gestium)' }} />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-800 mb-1 group-hover:text-[var(--red-gestium)] transition-colors duration-300">
                                            {service.title}
                                        </h4>
                                        <p className="text-sm text-slate-600">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <div className="py-20 text-center relative" style={{ backgroundImage: "url('/images/ofi/justicia.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }} />
                <div className="container-fluid relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Conviértanos en su Aliado Estratégico
                        </h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                            Descubra cómo nuestra experiencia y tecnología pueden potenciar la eficiencia y seguridad jurídica de su institución.
                        </p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white cursor-pointer"
                            style={{ background: 'var(--gradient-red)' }}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Contactar a un Especialista
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}