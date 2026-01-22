'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import HeroSection from '@/components/ui/HeroSection';
import { useArticleClicks } from '@/hooks/useArticleClicks';
import { articles } from '@/src/data/articles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Calendar,
    Clock,
    CheckCircle,
    Eye,
    ArrowRight
} from 'lucide-react';

export default function PublicacionesPage() {
    const router = useRouter();
    const { clickCounts, loading, incrementClick } = useArticleClicks();

    // Manejador de click en artículo
    const handleArticleClick = async (article: typeof articles[0]) => {
        const articleId = article.slug;
        await incrementClick(articleId, article.title);

        if (article.hasFullArticle) {
            // Navegar a la página del artículo completo
            router.push(`/publicaciones/${article.slug}`);
        } else {
            // Descargar PDF directamente
            window.open(article.pdfUrl, '_blank');
        }
    };

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

                {loading ? (
                    <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                        <p className="text-slate-600">Cargando estadísticas...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => {
                            const clicks = clickCounts[article.slug] || 0;
                            return (
                                <motion.article
                                    key={index}
                                    className="group bg-white border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col rounded-lg"
                                    style={{ boxShadow: 'var(--shadow-minimal)' }}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    onClick={() => handleArticleClick(article)}
                                >
                                    {/* Contenedor de imagen */}
                                    <div className="relative h-58 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:to-black/20"></div>

                                        {/* Categoría */}
                                        <div className="absolute top-3 right-3">
                                            <span className="text-xs px-3 py-1 rounded-full text-white font-semibold backdrop-blur-sm"
                                                style={{ backgroundColor: 'var(--red-gestium)' }}>
                                                {article.category}
                                            </span>
                                        </div>

                                        {/* Contador de clicks */}
                                        {clicks > 0 && (
                                            <div className="absolute top-3 left-3">
                                                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 text-white text-xs backdrop-blur-sm">
                                                    <Eye size={12} />
                                                    <span>{clicks}</span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Tipo */}
                                        {article.type && (
                                            <div className="absolute bottom-3 right-3">
                                                <span className="text-xs px-3 py-1 rounded-full bg-white/20 text-white font-semibold backdrop-blur-sm">
                                                    {article.type}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex flex-col grow">
                                        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-red-600 transition-colors duration-300 line-clamp-2"
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
                                        <p className="text-sm text-slate-600 mb-4 line-clamp-3">{article.excerpt}</p>
                                        <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-slate-100">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={14} />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>

                                        {/* Indicador de acción */}
                                        <div className="flex items-center gap-2 mt-4 pt-2 border-t border-slate-100 text-red-600 font-medium group-hover:gap-3 transition-all">
                                            <span className="text-sm">
                                                {article.hasFullArticle ? 'Leer artículo' : 'Ver PDF'}
                                            </span>
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                )}
            </Section>

            {/* CTA Section */}
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

                <div className="container-fluid text-center relative z-10 px-4">
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: 'var(--white)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        GESTIUM S.A. Hoy
                    </motion.h2>

                    <motion.div
                        className="w-20 sm:w-24 md:w-32 h-1 mx-auto mb-6 sm:mb-8"
                        style={{ backgroundColor: 'var(--red-gestium)' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '8rem' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    />

                    <motion.p
                        className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto"
                        style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Como GESTIUM S.A., continuamos construyendo sobre la sólida base de confianza
                        y excelencia establecida desde 2005, proyectándonos hacia el futuro con la
                        misma pasión y compromiso que nos ha caracterizado.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <motion.button
                            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden shadow-xl"
                            style={{
                                background: 'var(--gradient-red)',
                                color: 'var(--white)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/nosotros/equipo')}
                        >
                            <span className="relative z-10">
                                Conocer Nuestro Equipo
                            </span>
                        </motion.button>

                        <motion.button
                            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider border-2 transition-all duration-300 bg-transparent"
                            style={{
                                borderColor: 'var(--white)',
                                color: 'var(--white)',
                                cursor: 'pointer'
                            }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/nosotros/valores')}
                        >
                            Nuestros Valores
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}