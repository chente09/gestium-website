'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import {
    Scale,
    ShieldCheck,
    Briefcase,
    CheckCircle,
    Award,
    TrendingUp,
    Users,
    FileText
} from 'lucide-react';

export default function RecuperacionCarteraPage() {
    const router = useRouter();

    const serviceFeatures = [
        {
            icon: Scale,
            title: 'Cobranza Judicial',
            description: 'Representación legal experta en todas las instancias judiciales para garantizar la recuperación de activos a través de procesos monitorios, ejecutivos y ordinarios.'
        },
        {
            icon: ShieldCheck,
            title: 'Gestión Extrajudicial',
            description: 'Estrategias de negociación y mediación personalizadas para lograr acuerdos de pago eficientes, preservando la relación con el deudor y evitando litigios costosos.'
        },
        {
            icon: Briefcase,
            title: 'Proceso Coactivo',
            description: 'Amplia experiencia de más de 14 años en la gestión de cobranza para instituciones del sector público, aplicando la normativa vigente con la máxima eficiencia.'
        }
    ];

    const differentiators = [
        {
            icon: TrendingUp,
            title: 'Tecnología Propia: GESTIUM-APP',
            description: 'Nuestra plataforma tecnológica nos permite una gestión masiva y automatizada de procesos, ofreciendo seguimiento en tiempo real y reportes detallados a nuestros clientes.'
        },
        {
            icon: Award,
            title: 'Experiencia Comprobada',
            description: 'Más de dos décadas de especialización y la confianza de las principales instituciones financieras y públicas del Ecuador respaldan nuestra trayectoria.'
        },
        {
            icon: Users,
            title: 'Equipo Multidisciplinario',
            description: 'Contamos con abogados, procuradores y personal administrativo enfocado exclusivamente en la recuperación de cartera para asegurar un manejo integral de cada caso.'
        }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/servicios/recuperacion.avif"
                title={
                    <>
                        Recuperación de <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>Cartera</span>
                    </>
                }
                description="Nuestra principal especialidad. Lideramos el mercado con estrategias de cobranza judicial, extrajudicial y coactiva, respaldadas por más de 20 años de experiencia y tecnología de punta."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['95% de Efectividad', 'Tecnología Propia', '20+ Años de Experiencia'].map((item, index) => (
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

            {/* --- TIPOS DE GESTIÓN --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Modalidades de Gestión"
                    description="Adaptamos nuestra estrategia a la naturaleza de la deuda y a las necesidades específicas de cada cliente."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {serviceFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 border border-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-red-50 group-hover:bg-red-100 transition-colors duration-300 mx-auto">
                                <feature.icon size={28} className="text-gold-dark" />
                            </div>
                            <h3 className="text-xl font-bold font-playfair mb-3 text-slate-900">{feature.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600 text-justify">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- INTRODUCCIÓN AL SERVICIO --- */}
            <Section background="white" padding="lg">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="w-40 h-40 rounded-full flex items-center justify-center"
                            style={{ background: 'var(--gradient-red)' }}
                        >
                            <FileText className="w-20 h-20 text-white" />
                        </motion.div>
                    </div>
                    <div className="md:col-span-2">
                        <SectionHeader
                            title="Líderes en Gestión de Cobranza"
                            description="Entendemos que la recuperación de cartera es un pilar fundamental para la salud financiera de cualquier institución. Nuestro enfoque combina un profundo conocimiento legal con estrategias de negociación efectivas y el uso de tecnología avanzada para maximizar los resultados, minimizar los tiempos de recuperación y mantener los más altos estándares de ética profesional."
                            centered={false}
                            showDivider={true}
                            className="mb-0 text-justify"
                        />
                    </div>
                </div>
            </Section>

            {/* --- NUESTROS DIFERENCIADORES --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Nuestra Ventaja Competitiva"
                    description="Factores clave que nos posicionan como el aliado estratégico ideal para la recuperación de su cartera."
                    centered={true}
                    className="mb-16"
                />
                <div className="max-w-5xl mx-auto space-y-8">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row items-center gap-8 bg-platinum p-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-md">
                                    <item.icon size={32} style={{ color: 'var(--red-gestium)' }}/>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <div className="py-20 text-center relative" style={{ backgroundImage: "url('/images/ofi/justicia.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }} />
                <div className="container-fluid relative z-10 text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Optimice la Recuperación de sus Activos</h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Permítanos diseñar una estrategia a la medida de sus necesidades. Contáctenos para una evaluación sin costo.</p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white"
                            style={{ background: 'var(--gradient-red)', cursor: 'pointer' }}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Solicitar Consulta
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
