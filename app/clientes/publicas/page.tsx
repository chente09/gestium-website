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
    ShieldCheck,
    FileText,
    CheckCircle,
    Landmark
} from 'lucide-react';


interface ServiceHighlight {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function EntidadesPublicasPage() {
    const router = useRouter();

    const serviceHighlights: ServiceHighlight[] = [
        {
            icon: FileText,
            title: 'Proceso Coactivo',
            description: 'Más de 14 años de experiencia gestionando procesos coactivos para entidades del Estado, asegurando la recuperación de valores adeudados con estricto apego a la normativa.'
        },
        {
            icon: ShieldCheck,
            title: 'Asesoría en Contratación Pública',
            description: 'Apoyo legal en todas las fases de los procesos de contratación pública, garantizando transparencia, legalidad y eficiencia para la entidad contratante.'
        },
        {
            icon: Landmark,
            title: 'Derecho Administrativo',
            description: 'Asesoramiento integral en procedimientos administrativos, recursos, reclamos y defensa en litigios contencioso-administrativos.'
        }
    ];

    const publicClients = [
        'Instituto Ecuatoriano de Seguridad Social (IESS)',
        'Corporación Nacional de Telecomunicaciones (CNT)',
        'Instituto de Seguridad Social de las Fuerzas Armadas (ISSFA)',
        'Municipio del Distrito Metropolitano de Quito',
        'Banco del Instituto Ecuatoriano de Seguridad Social (BIESS)',
        'Corporación Nacional de Finanzas Populares y Solidarias (CONAFIPS)',
    ];

    // Duplicamos la lista para un efecto de scroll infinito y suave
    const extendedPublicClients = [...publicClients, ...publicClients];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/clientes/publicos.avif"
                title={
                    <>
                        Entidades <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>Públicas</span>
                    </>
                }
                description="Asesores de confianza para las instituciones del Estado. Nuestra experiencia en procesos coactivos y derecho administrativo garantiza una gestión eficiente y transparente."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Proceso Coactivo', 'Contratación Pública', 'Derecho Administrativo'].map((item, index) => (
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
                    title="Al Servicio del Estado Ecuatoriano"
                    description="Nos enorgullece ser un socio estratégico para importantes entidades públicas, aportando nuestra experiencia para fortalecer la gestión y la recuperación de recursos."
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
                                duration: 35,
                                repeat: Infinity,
                            }
                        }}
                        style={{
                            width: 'fit-content'
                        }}
                    >
                        {extendedPublicClients.map((clientName, index) => (
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
                                    <Landmark className="w-4 h-4 mx-auto mb-2 opacity-60 group-hover:opacity-100 group-hover:scale-125" style={{ color: 'var(--red-gestium)' }} />
                                    

                                    {/* Nombre del cliente */}
                                    <motion.p
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
                                    </motion.p>

                                    {/* Badge sutil de confianza */}
                                    <motion.div
                                        className="text-xs text-slate-500 mt-1 opacity-0 group-hover:opacity-100"
                                        initial={{ y: 5, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.2, delay: 0.1 }}
                                    >
                                        Entidad del Estado
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
                        +{publicClients.length} entidades públicas
                    </motion.div>
                </div>
            </Section>



            {/* --- SERVICIOS ESPECIALIZADOS --- */}
            <Section background="white" padding="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-96 lg:h-[500px] overflow-hidden lg:order-last">
                        <Image src="/images/areas/administrativo.webp" alt="Asesoría a entidades públicas" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
                    </div>
                    <div>
                        <SectionHeader
                            title="Soluciones para la Gestión Pública"
                            description="Nuestro portafolio de servicios está diseñado para responder a los desafíos únicos del sector público, con un enfoque en la eficiencia y el cumplimiento normativo."
                            centered={false}
                            className="mb-8"
                        />
                        <div className="space-y-8">
                            {serviceHighlights.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-6"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                >
                                    <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-platinum">
                                        <service.icon className="w-6 h-6" style={{ color: 'var(--red-gestium)' }} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-800 mb-1">{service.title}</h4>
                                        <p className="text-sm text-slate-600">{service.description}</p>
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Fortalezca la Gestión de su Institución</h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Contáctenos para explorar cómo nuestra experiencia en el sector público puede beneficiar a su entidad.</p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white"
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
