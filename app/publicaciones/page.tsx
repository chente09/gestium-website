'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import HeroSection from '@/components/ui/HeroSection';
import dynamic from 'next/dynamic';
import { useArticleClicks } from '@/hooks/useArticleClicks';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Calendar,
    Clock,
    CheckCircle,
    Eye
} from 'lucide-react';

export default function PublicacionesPage() {
    const router = useRouter();
    const { clickCounts, loading, incrementClick } = useArticleClicks();

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

    // Función para generar ID único del artículo
    const generateArticleId = (title: string) => {
        return title.toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '-')
            .substring(0, 50);
    };

    const featuredArticles = [
        {
            "title": "Amicus Curiae sobre la Crisis Carcelaria y Derechos Humanos en Ecuador",
            "category": "Derechos Humanos",
            "author": "Sofía Terán, et al.",
            "excerpt": "Presentación de argumentos jurídicos sobre la responsabilidad del Estado ecuatoriano frente a las masacres carcelarias, la vulneración de derechos de las personas privadas de libertad y la figura de las ejecuciones extrajudiciales.",
            "date": "09 Junio 2023",
            "readTime": "28 min",
            "image": "/documents/AmicusCuriae.png",
            "type": "Amicus Curiae",
            "institution": "Fundación Regional de Asesoría en Derechos Humanos (INREDH)",
            "pdfUrl": "/documents/AmicusCuriae.pdf"
        },
        {
            "title": "La Prescripción Adquisitiva del Dominio",
            "category": "Derecho Civil",
            "author": "Nahomí Padilla, et al.",
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
            readTime: '10 min',
            image: '/documents/rebelion-granja.jpg',
            type: 'Ensayo Académico',
            institution: 'Análisis Literario-Político',
            pdfUrl: '/documents/rebelion-granja-ecuador.pdf'
        },
        {
            "title": "Transformación Digital: PYMES y Facturación Electrónica en Ecuador",
            "category": "Derecho Tributario",
            "author": "Alexa Gabriela Vásconez Silva",
            "excerpt": "Análisis sobre el impacto, las ventajas y desventajas de la facturación electrónica en las pequeñas y medianas empresas (PYMES) del Ecuador, explorando su implementación y requisitos.",
            "date": "2024",
            "readTime": "15 min",
            "image": "/documents/LaFacturacionElectronica.jpg",
            "type": "Ensayo Académico",
            "institution": "Universidad Central del Ecuador",
            "pdfUrl": "/documents/LaFacturacionElectronica.pdf"
        },
        {
            "title": "Perspectivas de Género en Actuación y Diligencias Judiciales",
            "category": "Derecho y Género",
            "author": "Ingrid Pérez",
            "excerpt": "Análisis sobre la importancia y aplicación de la perspectiva de género en el sistema judicial ecuatoriano, abordando la legislación vigente, desafíos estructurales y una comparativa con los sistemas de España y México.",
            "date": "2024",
            "readTime": "18 min",
            "image": "/documents/perspectivasGenero.png",
            "type": "Artículo de Investigación",
            "institution": "Investigación Académica",
            "pdfUrl": "/documents/perspectivasGenero.pdf"
        },
        {
            title: 'Desarrollo de una Plataforma Web Administrable para la Gestión Integral de Procesos Jurídicos',
            category: 'Legal Tech',
            author: 'Vicente Nenger',
            excerpt: 'Proyecto de titulación sobre el desarrollo de tecnología innovadora para optimizar la gestión de procesos jurídicos mediante plataformas web administrables.',
            date: '31 Marzo 2025',
            readTime: 'Documento extenso',
            image: '/documents/tesis-legal-tech.jpeg',
            type: 'Tesis',
            institution: 'ITSQMET - Instituto Superior Tecnológico Quito Metropolitano',
            pdfUrl: '/documents/tesis-legal-tech.pdf'
        },
        {
            "title": "El Debido Proceso en la Citación Telemática y su Impacto en el Derecho a la Defensa",
            "category": "Derecho Procesal",
            "author": "David Maldonado y Luis Guijarro",
            "excerpt": "Análisis sobre la implementación de la citación telemática en Ecuador, su alineación con los principios del debido proceso y el derecho a la defensa, y los desafíos asociados a la brecha digital y la seguridad de la información.",
            "date": "2023",
            "readTime": "Documento extenso",
            "image": "/documents/tesisDavid.png",
            "type": "Tesis de Maestría",
            "institution": "Universidad Bolivariana del Ecuador",
            "pdfUrl": "/documents/tesisDavid.pdf"
        },
        {
            "title": "Reforma a la LOSEP (junio 2025): Sumarios administrativos a cargo de la institución",
            "category": "Derecho Administrativo",
            "author": "Tatiana Cordonez",
            "excerpt": "Análisis de la reforma de junio de 2025 a la LOSEP, que transfiere la competencia de los sumarios administrativos del Ministerio del Trabajo a cada entidad pública, y sus implicaciones en la eficiencia y los derechos laborales.",
            "date": "Junio 2025",
            "readTime": "2 min",
            "image": "/documents/ReformaLosep.jpg",
            "type": "Análisis Jurídico",
            "institution": "Análisis Legal",
            "pdfUrl": "/documents/ReformaLosep.pdf"
        },
        {
            "title": "Cambios Importantes en la Ley de Inquilinato",
            "category": "Derecho Inmobiliario",
            "author": "Sofía Guaña",
            "excerpt": "Análisis de las reformas que introducen la inscripción obligatoria de contratos, topes al valor del arriendo y nuevas sanciones para proteger a los inquilinos en Ecuador.",
            "date": "Agosto 2025",
            "readTime": "2 min",
            "image": "/documents/articuloSg.jpg",
            "type": "Artículo",
            "institution": "GESTIUM Servicios Legales Integrales",
            "pdfUrl": "/documents/articuloSg.pdf"
        }

    ];

    // Función para abrir el visor PDF
    const openPDFViewer = async (article: typeof featuredArticles[0]) => {
        if (article.pdfUrl) {
            // Incrementar contador de clicks en Supabase
            const articleId = generateArticleId(article.title);
            await incrementClick(articleId, article.title);

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
                        {featuredArticles.map((article, index) => {
                            const articleId = generateArticleId(article.title);
                            const clicks = clickCounts[articleId] || 0;
                            return (
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
                                    <div className="relative h-58 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Overlay que crece con la imagen */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:to-black/20"></div>

                                        {/* Categoría en la esquina superior derecha */}
                                        <div className="absolute top-3 right-3">
                                            <span className="text-xs px-3 py-1 rounded-full text-white font-semibold backdrop-blur-sm"
                                                style={{ backgroundColor: 'var(--red-gestium)' }}>
                                                {article.category}
                                            </span>
                                        </div>

                                        {/* Contador de clicks en la esquina superior izquierda */}
                                        {clicks > 0 && (
                                            <div className="absolute top-3 left-3">
                                                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 text-white text-xs backdrop-blur-sm">
                                                    <Eye size={12} />
                                                    <span>{clicks}</span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Tipo en la esquina inferior derecha */}
                                        {article.type && (
                                            <div className="absolute bottom-3 right-3">
                                                <span className="text-xs px-3 py-1 rounded-full bg-white/20 text-white font-semibold backdrop-blur-sm">
                                                    {article.type}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex flex-col grow">
                                        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-(--red-gestium) transition-colors duration-300 grow"
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

                                        {/* Mostrar contador de clicks en el footer */}
                                        {clicks > 0 && (
                                            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100">
                                                <Eye size={14} className="text-slate-400" />
                                                <span className="text-xs text-slate-500">
                                                    {clicks} {clicks === 1 ? 'vista' : 'vistas'}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                )}
            </Section>

            {/* --- CATEGORÍAS --- */}
            {/* <Section background="platinum" padding="lg">
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
            </Section> */}

            {/* --- RECURSOS ADICIONALES --- */}
            {/* <Section background="white" padding="lg">
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
            </Section> */}

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