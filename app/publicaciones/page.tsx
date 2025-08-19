'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import HeroSection from '@/components/ui/HeroSection';
import dynamic from 'next/dynamic';

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
    const [selectedPDF, setSelectedPDF] = useState<{
        url: string;
        title: string;
        author?: string;
        institution?: string;
    } | null>(null);

    // Importación dinámica para el visor de PDF
    const PDFViewer = dynamic(() => import('@/components/ui/PDFViewer'), {
        ssr: false,
        loading: () => <p>Cargando visor...</p>
    });

    const featuredArticles = [
        {
            "title": "La Prescripción Adquisitiva del Dominio",
            "category": "Derecho Civil",
            "author": "Nahomí Padilla, Sofía Osorio, Luis Peñaherrera, et al.",
            "excerpt": "Análisis sobre la prescripción como modo de adquirir el dominio, sus requisitos y clases, y su aplicación en la legislación ecuatoriana.",
            "date": "09 Septiembre 2020",
            "readTime": "25 min",
            "image": "/documents/prescripcion.jpg",
            "type": "Ensayo Académico",
            "institution": "Universidad Central del Ecuador",
            "pdfUrl": "/documents/prescripcion.pdf"
        },
        {
            title: 'La Rebelión de la Granja ¿Distopía o una profecía al Estado ecuatoriano?',
            category: 'Análisis Político',
            author: 'María Paula Peralta',
            excerpt: 'Análisis comparativo entre la obra distópica de George Orwell y la realidad política contemporánea del Ecuador, explorando los paralelismos en términos de manipulación política y falta de educación cívica.',
            date: '2025',
            readTime: '12 min',
            image: '/documents/rebelion-granja.jpg', // Usa la imagen de portada que me mostraste
            type: 'Ensayo Académico',
            institution: 'Análisis Literario-Político',
            pdfUrl: '/documents/rebelion-granja-ecuador.pdf'
        },
        {
            title: 'Desarrollo de una Plataforma Web Administrable para la Gestión Integral de Procesos Jurídicos',
            category: 'Legal Tech',
            author: 'Nenger Coral Vicente',
            excerpt: 'Proyecto de titulación sobre el desarrollo de tecnología innovadora para optimizar la gestión de procesos jurídicos mediante plataformas web administrables.',
            date: '31 Marzo 2025',
            readTime: 'Documento extenso',
            image: '/documents/tesis-legal-tech.png',
            type: 'Tesis',
            institution: 'ITSQMET - Instituto Superior Tecnológico Quito Metropolitano',
            pdfUrl: '/documents/tesis-legal-tech.pdf'
        },
        {
            title: 'Nuevas Regulaciones en Cobranza Coactiva 2024',
            category: 'Cobranza',
            author: 'Equipo GESTIUM',
            excerpt: 'Análisis detallado de las últimas modificaciones normativas que afectan los procesos de cobranza coactiva en el Ecuador.',
            date: '15 Julio 2024',
            readTime: '8 min',
            image: '/images/ofi/Ofi.JPG',
            type: 'Artículo'
        },
        {
            title: 'Derecho Inmobiliario: Tendencias del Mercado',
            category: 'Inmobiliario',
            author: 'Equipo GESTIUM',
            excerpt: 'Perspectivas del mercado inmobiliario ecuatoriano y su impacto en la práctica legal especializada.',
            date: '28 Junio 2024',
            readTime: '12 min',
            image: '/images/ofi/Ofi.JPG',
            type: 'Artículo'
        }
    ];

    // Función para abrir el visor PDF
    const openPDFViewer = (article: typeof featuredArticles[0]) => {
        if (article.pdfUrl) {
            console.log('Abriendo PDF con estos datos:', article);
            setSelectedPDF({
                url: article.pdfUrl,
                title: article.title,
                author: article.author,
                institution: article.institution
            });
        }
    };

    const closePDFViewer = () => {
        setSelectedPDF(null);
    };

    const categories = [
        { name: 'Legal Tech', count: 1, icon: FileText },
        { name: 'Cobranza y Recuperación', count: 15, icon: Users },
        { name: 'Derecho Corporativo', count: 12, icon: Newspaper },
        { name: 'Derecho Inmobiliario', count: 8, icon: BookOpen }
    ];

    const resources = [
        { title: 'Tesis y Investigaciones', description: 'Proyectos académicos sobre innovación legal y tecnología.', icon: BookOpen, count: '5 documentos' },
        { title: 'Formularios Legales', description: 'Plantillas y formularios para diferentes procesos.', icon: Download, count: '25 documentos' },
        { title: 'Webinars Grabados', description: 'Conferencias y seminarios sobre temas especializados.', icon: Video, count: '12 videos' }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/ofi/Ofi.JPG"
                title={
                    <>
                        Nuestras{' '}
                        <span style={{ color: 'var(--gold-dark)' }}>Publicaciones</span>
                    </>
                }
                description="Análisis jurídico, actualidad normativa y recursos especializados para profesionales del derecho."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Análisis Jurídico', 'Legal Tech', 'Recursos Prácticos'].map((item, index) => (
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

            {/* --- ARTÍCULOS DESTACADOS --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Publicaciones Destacadas"
                    description="Las publicaciones más recientes de nuestro equipo de especialistas y colaboradores académicos"
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredArticles.map((article, index) => (
                        <motion.article
                            key={index}
                            className="group bg-white border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col rounded-lg"
                            style={{ boxShadow: 'var(--shadow-minimal)' }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            onClick={() => article.pdfUrl ? openPDFViewer(article) : null}
                        >
                            {/* Contenedor de imagen mejorado */}
                            <div className="relative h-68 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Overlay que crece con la imagen */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:to-black/20"></div>

                                {/* Categoría en la esquina superior derecha */}
                                <div className="absolute top-3 right-3">
                                    <span className="text-xs px-3 py-1 rounded-full text-white font-semibold backdrop-blur-sm"
                                        style={{ backgroundColor: 'var(--red-gestium)' }}>
                                        {article.category}
                                    </span>
                                </div>

                                {/* Tipo en la esquina inferior derecha */}
                                {article.type && (
                                    <div className="absolute bottom-3 right-3">
                                        <span className="text-xs px-3 py-1 rounded-full bg-white/20 text-white font-semibold backdrop-blur-sm">
                                            {article.type}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[var(--red-gestium)] transition-colors duration-300 flex-grow"
                                    style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {article.title}
                                </h3>
                                {article.author && (
                                    <p className="text-sm font-medium text-slate-700 mb-2">
                                        Por: {article.author}
                                    </p>
                                )}
                                {article.institution && (
                                    <p className="text-xs text-slate-500 mb-3">
                                        {article.institution}
                                    </p>
                                )}
                                <p className="text-sm text-slate-600 mb-4">{article.excerpt}</p>
                                <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} />
                                        <span>{article.readTime}</span>
                                    </div>
                                    {article.pdfUrl && (
                                        <div className="flex items-center gap-1 text-green-600 font-medium">
                                            <span>Ver PDF</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Section>

            {/* --- CATEGORÍAS --- */}
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
                                className="bg-white p-6 border border-slate-200/80 transition-all duration-300 hover:border-red-gestium/50 hover:shadow-xl hover:-translate-y-1 cursor-pointer group rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <Icon size={24} style={{ color: 'var(--red-gestium)' }} className="transition-transform duration-300 group-hover:scale-110" />
                                    <span className="text-xs font-bold text-slate-400">{category.count} {category.count === 1 ? 'Publicación' : 'Publicaciones'}</span>
                                </div>
                                <h4 className="font-semibold text-slate-800 mb-2">{category.name}</h4>
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[var(--red-gestium)] transition-all duration-300 group-hover:translate-x-1 mt-4" />
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* --- RECURSOS ADICIONALES --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Centro de Recursos"
                    description="Herramientas y materiales complementarios para profesionales del derecho"
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((resource, index) => {
                        const IconComponent = resource.icon;
                        return (
                            <motion.div
                                key={index}
                                className="text-center p-8 bg-white border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group rounded-lg"
                                style={{ boxShadow: 'var(--shadow-minimal)' }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-platinum group-hover:bg-red-50 transition-colors duration-300">
                                    <IconComponent size={32} style={{ color: 'var(--red-gestium)' }} />
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-slate-900"
                                    style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {resource.title}
                                </h4>
                                <p className="text-sm leading-relaxed text-slate-600 mb-4">{resource.description}</p>
                                <span className="font-semibold text-sm" style={{ color: 'var(--red-gestium)' }}>
                                    {resource.count}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* --- NEWSLETTER CTA --- */}
            <div className="py-20 text-center relative" style={{ backgroundImage: "url('/images/ofi/Ofi.JPG')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }} />
                <div className="container-fluid relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Users size={40} className="mx-auto mb-4" style={{ color: 'var(--red-gestium)' }} />
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Manténgase Actualizado
                        </h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                            Reciba las últimas publicaciones y análisis jurídicos directamente en su correo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Su correo electrónico"
                                className="flex-1 px-5 py-3 text-slate-900 bg-white rounded focus:outline-none transition-all duration-300"
                            />
                            <motion.button
                                className="px-8 py-3 font-bold uppercase tracking-wider text-white rounded"
                                style={{ background: 'var(--gradient-red)' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => router.push('/contacto')}
                            >
                                Suscribirse
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* PDF Viewer Modal */}
            {selectedPDF && (
                <PDFViewer
                    isOpen={!!selectedPDF}
                    onClose={closePDFViewer}
                    pdfUrl={selectedPDF.url}
                    title={selectedPDF.title}
                    author={selectedPDF.author}
                    institution={selectedPDF.institution}
                />
            )}
        </MainLayout>
    );
}