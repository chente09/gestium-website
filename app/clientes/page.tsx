'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import Image from 'next/image'; // ✅ 1. Importar el componente Image
import {
    Building2,
    Landmark,
    Briefcase,
    ArrowRight,
    CheckCircle,
    Users,
    Award,
    Star,
    TrendingUp
} from 'lucide-react';

export default function ClientesPage() {
    const router = useRouter();

    // Datos para las categorías de clientes
    const clientCategories = [
        {
            title: 'Instituciones Financieras',
            subtitle: 'Sector Bancario y Financiero',
            description: 'Trabajamos con las principales instituciones del Ecuador en recuperación de cartera y asesoría legal especializada.',
            icon: Landmark,
            clients: [
                'Banco Pichincha C.A.',
                'Banco Produbanco',
                'Banco Nacional de Fomento',
                'Banco del Instituto Ecuatoriano de Seguridad Social (BIESS)'
            ],
            stats: '4 Bancos Principales',
            href: '/clientes/financieras',
            image: '/images/clientes/financieras.avif',
            experience: '20+ años'
        },
        {
            title: 'Entidades Públicas',
            subtitle: 'Sector Público',
            description: 'Brindamos servicios a importantes entidades del Estado en procesos de cobranza coactiva.',
            icon: Building2,
            clients: [
                'Instituto Ecuatoriano de Seguridad Social (IESS)',
                'Corporación Nacional de Telecomunicaciones (CNT)',
                'Instituto de Seguridad Social de las Fuerzas Armadas (ISSFA)',
                'Municipio del Distrito Metropolitano de Quito'
            ],
            stats: '4 Entidades Estatales',
            href: '/clientes/publicas',
            image: '/images/clientes/publicos.avif',
            experience: '14+ años'
        },
        {
            title: 'Empresas Privadas',
            subtitle: 'Sector Corporativo',
            description: 'Asesoramos en derecho corporativo, inmobiliario y resolución de conflictos comerciales.',
            icon: Briefcase,
            clients: [
                'Corporación Nacional de Finanzas Populares (CONAFIPS)',
                'Externalización de Servicios S.A. (EXSERSA)',
                'Proyectos Inmobiliarios (50+ desarrollos)',
                'Empresas de diversos sectores'
            ],
            stats: '50+ Empresas',
            href: '/clientes/privadas',
            image: '/images/clientes/privada.webp',
            experience: '15+ años'
        }
    ];

    // Datos para las estadísticas
    const testimonialStats = [
        { number: '99%', label: 'Satisfacción del Cliente', description: 'Nivel de satisfacción promedio, siempre buscamor mejorar' },
        { number: '20+', label: 'Años de Experiencia', description: 'Trayectoria comprobada' },
        { number: '1000+', label: 'Casos Exitosos', description: 'Procesos resueltos satisfactoriamente' },
        { number: '24/7', label: 'Disponibilidad', description: 'Atención personalizada' }
    ];

    // Datos para la sección "Por qué elegirnos"
    const whyChooseUs = [
        { title: 'Experiencia Comprobada', description: 'Más de 20 años especializados en las principales ramas del derecho', icon: Award },
        { title: 'Tecnología Propia', description: 'Plataforma GESTIUM-APP para gestión operativa especializada', icon: TrendingUp },
        { title: 'Equipo Especializado', description: 'Profesionales expertos en cada área de práctica legal', icon: Users },
        { title: 'Resultados Efectivos', description: 'Alto índice de recuperación y resolución exitosa de casos', icon: Star }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/ofi/Ofi.JPG"
                title={
                    <>
                        Nuestros{' '}
                        <span style={{ color: 'var(--red-gestium)', textShadow: '0 0 9px gray' }}>Clientes</span>
                    </>
                }
                description={
                    <>
                        La confianza de las{' '}
                        <span className="font-semibold" style={{ color: 'var(--red-light)', textShadow: '0 0 9px black' }}>
                            principales instituciones del Ecuador
                        </span>{' '}
                        respalda nuestra experiencia y calidad profesional.
                    </>
                }
            >
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                    {['Instituciones Financieras', 'Entidades Públicas', 'Empresas Privadas'].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/10 rounded-full backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        >
                            <CheckCircle size={16} style={{ color: 'var(--red-gestium)' }} />
                            <span className="font-medium text-white">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </HeroSection>

            {/* --- SECCIÓN DE CLIENTES (REDiseñada) --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Sectores que Atendemos"
                    description="Especializados en brindar servicios legales a diferentes sectores de la economía ecuatoriana."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {clientCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group bg-white border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
                                style={{
                                    boxShadow: 'var(--shadow-medium)',
                                    borderColor: 'rgba(0,0,0,0.05)'
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                onClick={() => router.push(category.href)}
                            >
                                {/* Imagen de fondo con overlay */}
                                <div className="relative h-48">
                                    {/* ✅ 2. Reemplazar <img> con <Image /> */}
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-sm opacity-80">{category.subtitle}</p>
                                        <h3 className="text-2xl font-bold font-playfair">{category.title}</h3>
                                    </div>
                                </div>

                                {/* Contenido de la tarjeta */}
                                <div className="p-6">
                                    <p className="text-sm text-slate-600 mb-6 h-16">{category.description}</p>
                                    <h4 className="font-semibold text-sm mb-3 text-slate-800">Principales Clientes:</h4>
                                    <div className="space-y-2 mb-6">
                                        {category.clients.slice(0, 2).map((client, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                                                <CheckCircle size={14} className="text-red-gestium flex-shrink-0" />
                                                <span>{client}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                                        <span className="text-sm font-bold text-red-gestium">{category.experience} de experiencia</span>
                                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-red-gestium transition-colors duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* --- SECCIÓN DE ESTADÍSTICAS --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Resultados que Nos Respaldan"
                    description="Números que demuestran nuestro compromiso con la excelencia."
                    centered={true}
                    className="mb-12"
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {testimonialStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--red-gestium)' }}>
                                {stat.number}
                            </h3>
                            <h4 className="font-semibold mb-1 text-slate-800">{stat.label}</h4>
                            <p className="text-sm text-slate-500">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- SECCIÓN POR QUÉ ELEGIRNOS --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="¿Por Qué Confían en Nosotros?"
                    description="Los factores que nos distinguen como el estudio jurídico de preferencia."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUs.map((reason, index) => {
                        const IconComponent = reason.icon;
                        return (
                            <motion.div
                                key={index}
                                className="text-center p-6 bg-white rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                style={{ boxShadow: 'var(--shadow-minimal)' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-red-50">
                                    <IconComponent size={28} style={{ color: 'var(--red-gestium)' }} />
                                </div>
                                <h4 className="text-lg font-semibold mb-3 text-slate-900">{reason.title}</h4>
                                <p className="text-sm leading-relaxed text-slate-600">{reason.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* --- SECCIÓN CTA --- */}
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
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            ¿Su Institución Necesita Asesoría Legal?
                        </h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                            Únase a las principales instituciones que confían en nuestra experiencia.
                        </p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 text-white"
                            style={{ background: 'var(--gradient-red)' }}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Contactar Ahora
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
