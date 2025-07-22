'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import {
    House,
    FileSignature,
    Building,
    Landmark,
    CheckCircle,
} from 'lucide-react';

// ✅ 1. Definimos la "forma" de los datos para TypeScript
interface ProjectLifecycleStep {
    step: string;
    title: string;
    description: string;
}

export default function DerechoInmobiliarioPage() {
    const router = useRouter();

    const servicePillars = [
        {
            icon: Building,
            title: 'Constitución de Proyectos',
            description: 'Estructuración legal completa para desarrollos inmobiliarios, desde la adquisición del terreno hasta la entrega final de las unidades.'
        },
        {
            icon: FileSignature,
            title: 'Propiedad Horizontal',
            description: 'Elaboración de declaratorias de propiedad horizontal, reglamentos internos y toda la documentación necesaria para la correcta administración de condominios.'
        },
        {
            icon: Landmark,
            title: 'Transacciones y Contratos',
            description: 'Asesoría y elaboración de promesas de compraventa, compraventas definitivas, hipotecas y garantías reales para asegurar transacciones transparentes y seguras.'
        }
    ];

    // Aplicamos el tipo que definimos al array
    const projectLifecycle: ProjectLifecycleStep[] = [
        {
            step: '01',
            title: 'Análisis y Estructuración',
            description: 'Evaluamos la viabilidad legal del proyecto y diseñamos la estructura societaria y fiduciaria más eficiente.'
        },
        {
            step: '02',
            title: 'Permisología y Normativa',
            description: 'Gestionamos todos los permisos municipales y regulatorios necesarios para el inicio y desarrollo de la construcción.'
        },
        {
            step: '03',
            title: 'Comercialización',
            description: 'Elaboramos los contratos y la documentación para la fase de venta, protegiendo los intereses del desarrollador y del comprador.'
        },
        {
            step: '04',
            title: 'Entrega y Post-Venta',
            description: 'Coordinamos el cierre legal de las transacciones, la inscripción de propiedades y la constitución del régimen de propiedad horizontal.'
        }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/areas/inmobiliaria.jpg"
                title={
                    <>
                        Derecho <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>Inmobiliario</span>
                    </>
                }
                description="Asesoría legal integral para el desarrollo de proyectos inmobiliarios. Protegemos su inversión en cada etapa, desde la planificación hasta la entrega."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Proyectos Exitosos', 'Seguridad Jurídica', 'Estructuración Eficiente'].map((item, index) => (
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
                            <House className="w-20 h-20 text-white" />
                        </motion.div>
                    </div>
                    <div className="md:col-span-2">
                        <SectionHeader
                            title="Asegurando el Valor de su Inversión"
                            description="El sector inmobiliario es uno de los motores de la economía, pero también uno de los más complejos a nivel legal. Nuestro equipo especializado le brinda la tranquilidad de saber que cada aspecto de su proyecto, desde la compra del terreno hasta la venta de la última unidad, está jurídicamente blindado, optimizando la rentabilidad y minimizando los riesgos."
                            centered={false}
                            showDivider={true}
                            className="mb-0"
                        />
                    </div>
                </div>
            </Section>

            {/* --- PILARES DEL SERVICIO --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Pilares de Nuestro Servicio"
                    description="Cubrimos todas las facetas del derecho inmobiliario para ofrecer una solución integral y cohesiva."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicePillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 border border-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
                                <pillar.icon size={28} className="text-gold-dark" />
                            </div>
                            <h3 className="text-xl font-bold font-playfair mb-3 text-slate-900">{pillar.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- CICLO DE VIDA DEL PROYECTO --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Acompañamiento en Todo el Ciclo de Vida"
                    description="Nuestra metodología nos permite acompañarlo de principio a fin, asegurando coherencia y seguridad en cada fase."
                    centered={true}
                    className="mb-16"
                />
                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8">
                    <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-slate-200" />
                    {/* ✅ 2. Corregimos el nombre de la variable aquí */}
                    {projectLifecycle.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative text-center px-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg border-4 border-white shadow-lg"
                                style={{ background: 'var(--gradient-red)' }}>
                                {step.step}
                            </div>
                            <h4 className="text-lg font-bold mb-3 text-slate-900">{step.title}</h4>
                            <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <div className="py-20 text-center relative" style={{ backgroundImage: "url('/images/ofi/justicia.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }} />
                <div className="container-fluid relative z-10 text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Asegure el Éxito de su Proyecto Inmobiliario</h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Permita que nuestra experiencia legal sea el cimiento de su inversión. Contáctenos para una consulta estratégica.</p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white"
                            style={{ background: 'var(--gradient-red)', cursor: 'pointer' }}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Agendar Consulta
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
