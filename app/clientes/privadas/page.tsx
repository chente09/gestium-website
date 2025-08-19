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
    Briefcase,
    ShieldCheck,
    TrendingUp,
    CheckCircle,
    Building,
    Rocket,
    Users,
    Landmark
} from 'lucide-react';

// Definimos la "forma" de los datos para TypeScript
interface ClientSegment {
    icon: React.ElementType;
    title: string;
    description: string;
}

interface ServiceHighlight {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function EmpresasPrivadasPage() {
    const router = useRouter();

    const clientSegments: ClientSegment[] = [
        {
            icon: Rocket,
            title: 'Startups y Emprendedores',
            description: 'Brindamos la estructura legal inicial para que las nuevas empresas nazcan y crezcan sobre una base sólida y segura.'
        },
        {
            icon: Building,
            title: 'Pequeñas y Medianas Empresas (PYMES)',
            description: 'Actuamos como un departamento legal externo, ofreciendo asesoría continua para el cumplimiento normativo y la expansión del negocio.'
        },
        {
            icon: Users,
            title: 'Grandes Corporaciones',
            description: 'Gestionamos operaciones societarias complejas, gobierno corporativo y estrategias legales de alto nivel para empresas consolidadas.'
        }
    ];

    const serviceHighlights: ServiceHighlight[] = [
        {
            icon: Briefcase,
            title: 'Derecho Corporativo y Societario',
            description: 'Desde la constitución hasta fusiones y adquisiciones, ofrecemos un respaldo legal completo para cada etapa de la vida de su empresa.'
        },
        {
            icon: ShieldCheck,
            title: 'Cumplimiento y Prevención de Riesgos',
            description: 'Diseñamos e implementamos programas de compliance para asegurar que su empresa opere dentro del marco legal, minimizando riesgos.'
        },
        {
            icon: TrendingUp,
            title: 'Asesoría para el Crecimiento',
            description: 'Apoyamos sus planes de expansión con la estructuración de aumentos de capital, contratos estratégicos y negociaciones clave.'
        }
    ];

    const privateClients = [
        'Corporación Nacional de Finanzas Populares y Solidarias (CONAFIPS)',
        'Externalización de Servicios S.A. (EXSERSA)',
        'Proyectos Inmobiliarios y Constructoras (+50)',
        'Empresas del Sector Comercial',
        'Compañías del Sector Industrial',
        'Firmas de Consultoría y Servicios'
    ];

    // Duplicamos la lista para un efecto de scroll infinito y suave
    const extendedClients = [...privateClients, ...privateClients];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/clientes/privada.webp"
                title={
                    <>
                        Empresas <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 20px gray' }}>Privadas</span>
                    </>
                }
                description="El socio estratégico para el crecimiento y la seguridad jurídica de su negocio. Ofrecemos soluciones a la medida para empresas de todos los tamaños y sectores."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Asesoría Estratégica', 'Seguridad Jurídica', 'Crecimiento Sostenible'].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/10 rounded-full backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        >
                            <CheckCircle size={14} style={{ color: 'var(--gold-dark)' }} />
                            <span className="font-medium">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </HeroSection>

            {/* --- SECCIÓN DE CLIENTES DESTACADOS MEJORADA --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="La Confianza del Sector Privado"
                    description="Una diversa cartera de clientes respalda la calidad y el alcance de nuestros servicios corporativos."
                    centered={true}
                    className="mb-16"
                />

                {/* Contenedor principal con mejor altura y espaciado */}
                <div className="relative w-full overflow-hidden py-8">
                    {/* Gradiente de máscara para fondo blanco */}
                    <div className="absolute inset-0 pointer-events-none z-10"
                        style={{
                            background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, transparent 15%, transparent 85%, rgba(255, 255, 255, 1) 100%)'
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
                                    <Landmark className="w-4 h-4 mx-auto mb-2 opacity-60 group-hover:opacity-100 group-hover:scale-125" style={{ color: 'var(--red-gestium)' }} />
                                    
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
                        +{privateClients.length} clientes activos
                    </motion.div>
                </div>
            </Section>

            {/* --- SECCIÓN DE ENFOQUE --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Impulsando el Sector Productivo"
                    description="Entendemos el motor que representan las empresas privadas para el país. Nuestro enfoque es brindar un servicio legal que no solo resuelva problemas, sino que también genere valor, facilite el negocio y proteja el patrimonio de nuestros clientes."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clientSegments.map((segment, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 text-center border border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group rounded-lg"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-red-50 group-hover:bg-red-100 transition-colors duration-300 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0"
                                    style={{ background: 'var(--gradient-red)' }}
                                    initial={{ scaleY: 0 }}
                                    whileHover={{ scaleY: 1 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                                <motion.div
                                    className="relative z-10"
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                >
                                    <segment.icon size={32} className="text-[var(--red-gestium)] group-hover:text-white transition-colors duration-400" />
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-bold font-playfair mb-3 text-slate-900">{segment.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600">{segment.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- SERVICIOS CLAVE --- */}
            <Section background="white" padding="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg">
                        <Image 
                            src="/images/areas/privadas.jpg" 
                            alt="Asesoría a empresas privadas" 
                            fill 
                            className="object-cover hover:scale-105 transition-transform duration-700" 
                            sizes="(max-width: 1024px) 100vw, 50vw" 
                            quality={95} 
                        />
                    </div>
                    <div>
                        <SectionHeader
                            title="Un Portafolio de Servicios para su Empresa"
                            description="Nuestra práctica corporativa está diseñada para cubrir todas las necesidades legales que su negocio pueda enfrentar."
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
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
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
                            Convierta los Retos Legales en Oportunidades
                        </h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                            Permita que nuestro equipo legal impulse el potencial de su empresa. Contáctenos para una consulta y descubra cómo podemos ayudarle.
                        </p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white cursor-pointer"
                            style={{ background: 'var(--gradient-red)' }}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Agendar una Consulta
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}