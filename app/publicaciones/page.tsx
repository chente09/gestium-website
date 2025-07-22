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
    BookOpen,
    Calendar,
    ArrowRight,
    FileText,
    Newspaper,
    Video,
    Users,
    Download,
    Clock,
    CheckCircle
} from 'lucide-react';

export default function PublicacionesPage() {
    const router = useRouter();

    const featuredArticles = [
        {
            title: 'Nuevas Regulaciones en Cobranza Coactiva 2024',
            category: 'Cobranza',
            excerpt: 'Análisis detallado de las últimas modificaciones normativas que afectan los procesos de cobranza coactiva en el Ecuador.',
            date: '15 Julio 2024',
            readTime: '8 min',
            image: '/images/publicaciones/ley.avif', // Imagen para la tarjeta
        },
        {
            title: 'Derecho Inmobiliario: Tendencias del Mercado',
            category: 'Inmobiliario',
            excerpt: 'Perspectivas del mercado inmobiliario ecuatoriano y su impacto en la práctica legal especializada.',
            date: '28 Junio 2024',
            readTime: '12 min',
            image: '/images/publicaciones/inmobiliario.avif', // Imagen para la tarjeta
        },
        {
            title: 'Código Orgánico Administrativo: Actualizaciones',
            category: 'Derecho Administrativo',
            excerpt: 'Principales cambios y su aplicación práctica en procedimientos administrativos y procesos coactivos.',
            date: '10 Junio 2024',
            readTime: '6 min',
            image: '/images/publicaciones/administrativo.avif', // Imagen para la tarjeta
        }
    ];

    const categories = [
        { name: 'Cobranza y Recuperación', count: 15, icon: FileText },
        { name: 'Derecho Corporativo', count: 12, icon: Users },
        { name: 'Derecho Inmobiliario', count: 8, icon: Newspaper },
        { name: 'Procedimientos Legales', count: 10, icon: BookOpen }
    ];

    const resources = [
        { title: 'Formularios Legales', description: 'Plantillas y formularios para diferentes procesos.', icon: Download, count: '25 documentos' },
        { title: 'Webinars Grabados', description: 'Conferencias y seminarios sobre temas especializados.', icon: Video, count: '12 videos' },
        { title: 'Normativa Actualizada', description: 'Compendio de leyes y reglamentos vigentes.', icon: BookOpen, count: '50+ documentos' }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/ofi/Ofi.JPG"
                title={
                    <>
                        Nuestros{' '}
                        <span style={{ color: 'var(--red-gestium)', textShadow: '0 0 9px gray' }}>Publicaciones</span>
                    </>
                }
                description={
                    <>
                        Análisis jurídico, actualidad normativa y{' '}
                        <span className="font-semibold" style={{ color: 'var(--red-light)', textShadow: '0 0 9px black' }}>
                            recursos especializados
                        </span>{' '}
                        para profesionales del derecho.
                    </>
                }
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Análisis Jurídico', 'Actualidad Normativa', 'Recursos Prácticos'].map((item, index) => (
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

            {/* --- ARTÍCULOS DESTACADOS (REDiseñado) --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Artículos Destacados"
                    description="Las publicaciones más recientes de nuestro equipo de especialistas"
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredArticles.map((article, index) => (
                        <motion.article
                            key={index}
                            className="group bg-white border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col"
                            style={{ boxShadow: 'var(--shadow-medium)' }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="relative h-56">
                                <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-red-gestium text-white font-semibold">{article.category}</span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold font-playfair mb-3 text-slate-900 group-hover:text-red-gestium transition-colors duration-300 flex-grow">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-slate-600 mb-4">{article.excerpt}</p>
                                <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} />
                                        <span>{article.readTime} de lectura</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Section>

            {/* --- CATEGORÍAS (REDiseñado) --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Categorías Temáticas"
                    description="Explore nuestro contenido organizado por áreas de especialización"
                    centered={true}
                    className="mb-12"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={index}
                                className="bg-white p-6 border border-slate-200/80 transition-all duration-300 hover:border-red-gestium/50 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <Icon size={24} className="text-red-gestium transition-transform duration-300 group-hover:scale-110" />
                                    <span className="text-xs font-bold text-slate-400">{category.count} Artículos</span>
                                </div>
                                <h4 className="font-semibold text-slate-800 mb-2">{category.name}</h4>
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-red-gestium transition-all duration-300 group-hover:translate-x-1 mt-4" />
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* --- RECURSOS ADICIONALES (REDiseñado) --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Centro de Recursos"
                    description="Herramientas y materiales complementarios para profesionales"
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((resource, index) => {
                        const IconComponent = resource.icon;
                        return (
                            <motion.div
                                key={index}
                                className="text-center p-8 bg-white border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
                                style={{ boxShadow: 'var(--shadow-medium)' }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-platinum group-hover:bg-red-50 transition-colors duration-300">
                                    <IconComponent size={32} className="text-red-gestium" />
                                </div>
                                <h4 className="text-xl font-bold font-playfair mb-3 text-slate-900">{resource.title}</h4>
                                <p className="text-sm leading-relaxed text-slate-600 mb-4">{resource.description}</p>
                                <span className="font-semibold text-sm text-red-gestium">{resource.count}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* --- NEWSLETTER CTA --- */}
            <div className="py-20 text-center relative" style={{ backgroundImage: "url('/images/ofi/justicia.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }} />
                <div className="container-fluid relative z-10 text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <Users size={40} className="mx-auto mb-4 text-red-gestium" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Manténgase Actualizado</h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Reciba las últimas publicaciones y análisis jurídicos directamente en su correo.</p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-lg mx-auto">
                            <input type="email" placeholder="Su correo electrónico" className="flex-1 px-5 py-3 text-white bg-900   focus:outline-none transition-all duration-300" />
                            <motion.button
                                className="px-8 py-3 font-bold uppercase tracking-wider text-white"
                                style={{ background: 'var(--gradient-red)' }}
                                whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Suscribirse
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
