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
    Users,
    Scale,
    ShieldCheck,
    Clock,
    CheckCircle,
    Award,
    Briefcase
} from 'lucide-react';

// Definimos la "forma" de los datos para TypeScript
interface MediationService {
    icon: React.ElementType;
    title: string;
    description: string;
}

interface Benefit {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function MediacionArbitrajePage() {
    const router = useRouter();

    const mediationServices: MediationService[] = [
        {
            icon: Users,
            title: 'Mediación Especializada',
            description: 'Facilitamos un diálogo constructivo entre las partes, guiándolas hacia un acuerdo mutuamente beneficioso, confidencial y con la misma validez que una sentencia judicial.'
        },
        {
            icon: Scale,
            title: 'Arbitraje Institucional y Ad Hoc',
            description: 'Ofrecemos un proceso de arbitraje ágil y especializado donde un tribunal arbitral imparcial resuelve la controversia de manera definitiva y vinculante.'
        },
        {
            icon: Briefcase,
            title: 'Negociación Estratégica',
            description: 'Diseñamos y ejecutamos estrategias de negociación para resolver disputas complejas antes de que escalen a litigios formales, protegiendo sus intereses comerciales.'
        }
    ];

    const benefits: Benefit[] = [
        {
            icon: Clock,
            title: 'Eficiencia y Rapidez',
            description: 'Resuelva sus conflictos en una fracción del tiempo que tomaría un proceso judicial tradicional.'
        },
        {
            icon: ShieldCheck,
            title: 'Confidencialidad Absoluta',
            description: 'Los procedimientos son privados, protegiendo la reputación y la información sensible de su empresa.'
        },
        {
            icon: Award,
            title: 'Soluciones a la Medida',
            description: 'Las partes tienen control sobre el resultado, permitiendo soluciones creativas y adaptadas a sus necesidades.'
        }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/areas/mediacion.jpg"
                title={
                    <>
                        Mediación y <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>Arbitraje</span>
                    </>
                }
                description="Soluciones eficientes y confidenciales para la resolución de conflictos. Evite litigios prolongados y costosos a través de métodos alternativos dirigidos por expertos."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Confidencial', 'Ágil', 'Vinculante', 'Económico'].map((item, index) => (
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
                            <Users className="w-20 h-20 text-white" />
                        </motion.div>
                    </div>
                    <div className="md:col-span-2">
                        <SectionHeader
                            title="La Vía Inteligente para Resolver Disputas"
                            description="Los litigios judiciales no siempre son la solución más eficiente. La mediación y el arbitraje ofrecen alternativas flexibles, rápidas y confidenciales para resolver controversias comerciales, civiles y corporativas. Nuestro equipo de mediadores y árbitros expertos facilita procesos que preservan las relaciones comerciales y alcanzan soluciones prácticas y duraderas."
                            centered={false}
                            showDivider={true}
                            className="mb-0"
                        />
                    </div>
                </div>
            </Section>

            {/* --- TIPOS DE SERVICIOS --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Nuestros Métodos de Resolución"
                    description="Aplicamos el método más adecuado para la naturaleza y complejidad de cada conflicto."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {mediationServices.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 border border-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
                                <service.icon size={28} className="text-gold-dark" />
                            </div>
                            <h3 className="text-xl font-bold font-playfair mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- BENEFICIOS --- */}
            <Section background="white" padding="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-80 lg:h-[450px] overflow-hidden">
                        <Image src="/images/areas/negociacion.jpg" alt="Mesa de negociación" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
                    </div>
                    <div>
                        <SectionHeader
                            title="Ventajas Clave de los Métodos Alternativos"
                            description="Descubra por qué cada vez más empresas eligen la mediación y el arbitraje sobre los litigios tradicionales."
                            centered={false}
                            className="mb-8"
                        />
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                >
                                    <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-platinum">
                                        <benefit.icon className="w-6 h-6" style={{ color: 'var(--red-gestium)' }} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800">{benefit.title}</h4>
                                        <p className="text-sm text-slate-600">{benefit.description}</p>
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
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Encuentre una Solución a su Conflicto</h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Nuestro equipo está listo para guiarlo hacia la resolución más favorable. Contáctenos para una evaluación confidencial de su caso.</p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white"
                            style={{ background: 'var(--gradient-red)', cursor: 'pointer' }}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Iniciar Proceso
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
