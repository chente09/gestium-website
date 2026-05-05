// src/components/publicaciones/ArticleLayout.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import MainLayout from '@/components/layout/MainLayout';
import ArticleSidebar from '@/src/components/publicaciones/ArticleSidebar';
import { Article } from '@/src/data/articles';

interface ArticleLayoutProps {
    article: Article;
}

export default function ArticleLayout({ article }: ArticleLayoutProps) {
    const router = useRouter();

    return (
        <MainLayout>
            {/* Hero del artículo */}
            <div className="relative h-[60vh] min-h-100 w-full overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30" />
                
                <div className="absolute inset-0 flex items-end">
                    <div className="container mx-auto px-4 pb-12">
                        

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="px-4 py-1 rounded-full text-sm font-semibold text-white"
                                    style={{ backgroundColor: 'var(--red-gestium)' }}>
                                    {article.category}
                                </span>
                                <span className="px-4 py-1 rounded-full text-sm font-semibold bg-white/20 text-white backdrop-blur-sm">
                                    {article.type}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl"
                                style={{ fontFamily: "'Playfair Display', serif" }}>
                                {article.title}
                            </h1>

                            <p className="text-lg text-white/90 max-w-3xl">
                                {article.excerpt}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Contenido principal - Layout 2 columnas */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Columna principal - Contenido del artículo */}
                            <div className="lg:col-span-2">
                                <motion.article
                                    className="prose prose-lg max-w-none
                                        prose-headings:font-playfair prose-headings:text-slate-900
                                        prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-12 prose-h1:leading-tight
                                        prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-5 prose-h2:mt-10 prose-h2:leading-snug
                                        prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-8
                                        prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                                        prose-a:text-red-600 prose-a:no-underline prose-a:font-medium hover:prose-a:underline
                                        prose-strong:text-slate-900 prose-strong:font-bold
                                        prose-em:text-slate-700 prose-em:italic
                                        prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                                        prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                                        prose-li:text-slate-700 prose-li:mb-2 prose-li:text-lg prose-li:leading-relaxed
                                        prose-blockquote:border-l-4 prose-blockquote:border-red-600 
                                        prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-6
                                        prose-blockquote:italic prose-blockquote:text-slate-600 prose-blockquote:bg-red-50
                                        prose-code:text-red-600 prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                                        prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                                        prose-table:w-full prose-table:my-6
                                        prose-thead:bg-slate-100
                                        prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-slate-900
                                        prose-td:p-3 prose-td:border-t prose-td:border-slate-200
                                        prose-hr:my-8 prose-hr:border-slate-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeRaw]}
                                        components={{
                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                            h1: ({node, ...props}) => (
                                                <h1 className="scroll-mt-20" {...props} />
                                            ),
                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                            h2: ({node, ...props}) => (
                                                <h2 className="scroll-mt-20" {...props} />
                                            ),
                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                            h3: ({node, ...props}) => (
                                                <h3 className="scroll-mt-20" {...props} />
                                            ),
                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                            a: ({node, ...props}) => (
                                                <a target="_blank" rel="noopener noreferrer" {...props} />
                                            ),
                                        }}
                                    >
                                        {article.content || ''}
                                    </ReactMarkdown>
                                </motion.article>

                                {/* CTA de descarga PDF */}
                                {article.pdfUrl && (
                                    <motion.div
                                        className="mt-12 p-8 bg-linear-to-r from-slate-50 to-slate-100 rounded-2xl border border-slate-200"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                    >
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 mb-2"
                                                    style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    Descargar Documento Completo
                                                </h3>
                                                <p className="text-slate-600">
                                                    Accede a la versión PDF de este artículo para consultarlo offline
                                                </p>
                                            </div>
                                            
                                            <a 
                                                href={article.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-8 py-4 bg-linear-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
                                            >
                                                <Download size={20} />
                                                <span>Descargar PDF</span>
                                            </a>
                                        </div>
                                    </motion.div>
                                )}

                                {/* CTA de contacto */}
                                <motion.div
                                    className="mt-8 p-8 bg-linear-to-r from-red-50 to-red-100 rounded-2xl border border-red-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                >
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3"
                                            style={{ fontFamily: "'Playfair Display', serif" }}>
                                            ¿Necesitas Asesoría Legal Especializada?
                                        </h3>
                                        <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
                                            Nuestro equipo de expertos está listo para ayudarte con tu caso
                                        </p>
                                        <button
                                            onClick={() => router.push('/contacto')}
                                            className="px-8 py-4 bg-linear-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                                        >
                                            Contactar con GESTIUM
                                        </button>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sidebar - Información adicional */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24">
                                    <ArticleSidebar article={article} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}