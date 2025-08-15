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
    Building2,
    ShieldCheck,
    CheckCircle,
    FileSignature,
    TrendingUp,
    Briefcase
} from 'lucide-react';

// Definimos la "forma" de los datos para TypeScript
interface CorporateService {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function DerechoCorporativoPage() {
    const router = useRouter();

    const corporateServices: CorporateService[] = [
        {
            icon: Building2,
            title: 'Constitución de Compañías',
            description: 'Asesoría integral desde la elección del tipo societario hasta la inscripción y obtención del RUC, garantizando una estructura legal sólida desde el inicio.'
        },
        {
            icon: TrendingUp,
            title: 'Fusiones y Transformaciones',
            description: 'Gestionamos procesos complejos de reorganización societaria, incluyendo fusiones, escisiones y transformaciones para optimizar la estructura de su negocio.'
        },
        {
            icon: FileSignature,
            title: 'Reformas y Aumentos de Capital',
            description: 'Manejo experto de reformas estatutarias, aumentos de capital, y otros actos societarios clave para el crecimiento y la adaptación de su empresa.'
        },
        {
            icon: ShieldCheck,
            title: 'Liquidación y Disolución',
            description: 'Acompañamiento legal en los procesos de cierre de operaciones, asegurando el cumplimiento normativo y protegiendo los intereses de los accionistas.'
        }
    ];

    const clientTypes = [
        {
            name: 'Startups y Emprendedores',
            description: 'Estructuración legal inicial para un crecimiento seguro.'
        },
        {
            name: 'Pequeñas y Medianas Empresas (PYMES)',
            description: 'Asesoría continua para el cumplimiento y la expansión.'
        },
        {
            name: 'Grandes Corporaciones',
            description: 'Manejo de operaciones societarias complejas y gobierno corporativo.'
        }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/servicios/corporativo.avif"
                title={
                    <>
                        Derecho <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>Corporativo</span>
                    </>
                }
                description="Brindamos un respaldo legal integral para la vida de su empresa, desde su constitución hasta su expansión y consolidación en el mercado."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Constitución', 'Fusiones', 'Reformas', 'Liquidación'].map((item, index) => (
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

            {/* --- SERVICIOS CORPORATIVOS --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Nuestros Servicios Corporativos"
                    description="Ofrecemos un portafolio completo de servicios para cubrir todas las necesidades legales de su empresa."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {corporateServices.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 border border-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-red-50 group-hover:bg-red-100 transition-colors duration-300 mx-auto">
                                <service.icon size={28} className="text-gold-dark" />
                            </div>
                            <h3 className="text-xl font-bold font-playfair mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600 text-justify">{service.description}</p>
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
                            <Briefcase className="w-20 h-20 text-white" />
                        </motion.div>
                    </div>
                    <div className="md:col-span-2">
                        <SectionHeader
                            title="El Socio Estratégico para su Negocio"
                            description="En un entorno empresarial dinámico, contar con una asesoría corporativa sólida es fundamental. Nuestro equipo ofrece un servicio integral que acompaña a su empresa en todas sus etapas, garantizando el cumplimiento normativo, optimizando su estructura legal y brindando la seguridad jurídica necesaria para tomar decisiones estratégicas con confianza."
                            centered={false}
                            showDivider={true}
                            className="mb-0 text-justify"
                        />
                    </div>
                </div>
            </Section>

            {/* --- SECCIÓN DE CLIENTES TIPO --- */}
            <Section background="platinum" padding="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionHeader
                            title="Asesoría a la Medida de su Empresa"
                            description="Entendemos que cada negocio es único. Adaptamos nuestros servicios para satisfacer las necesidades específicas de empresas de todos los tamaños y sectores, desde emprendedores que dan sus primeros pasos hasta corporaciones consolidadas."
                            centered={false}
                            className="mb-8 text-justify"
                        />
                        <div className="space-y-4">
                            {clientTypes.map((client, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-platinum p-4 flex items-center gap-4"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                >
                                    <CheckCircle className="w-6 h-6 text-red-gestium flex-shrink-0"  style={{ color: 'var(--red-gestium)' }}/>
                                    <div>
                                        <h4 className="font-semibold text-slate-800">{client.name}</h4>
                                        <p className="text-sm text-slate-600">{client.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-80 lg:h-[450px] overflow-hidden">
                        <Image src="/images/areas/reunion.jpg" alt="Reunión de negocios" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
                    </div>
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <div className="py-20 text-center relative" style={{ backgroundImage: "url('/images/ofi/justicia.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }} />
                <div className="container-fluid relative z-10 text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Fortalezca la Estructura Legal de su Empresa</h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Permítanos ser su aliado estratégico para el crecimiento y la seguridad jurídica de su negocio. Contáctenos hoy.</p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white"
                            style={{ background: 'var(--gradient-red)', cursor: 'pointer' }}
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
