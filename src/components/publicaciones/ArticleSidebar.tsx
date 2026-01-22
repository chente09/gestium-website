// src/components/publicaciones/ArticleSidebar.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Calendar, 
    Clock, 
    User, 
    Building2, 
    Share2,
    Mail
} from 'lucide-react';

// Importamos los iconos de marca desde react-icons
// Nota: FaXTwitter está en la colección 'fa6' (FontAwesome 6)
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import { Article } from '@/src/data/articles';

interface ArticleSidebarProps {
    article: Article;
}

export default function ArticleSidebar({ article }: ArticleSidebarProps) {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    const shareOnX = () => {
        const text = encodeURIComponent(`${article.title} por ${article.author}`);
        const url = encodeURIComponent(currentUrl);
        // Usamos la URL de twitter.com ya que redirige correctamente y es la API estándar de share
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    };

    const shareOnFacebook = () => {
        const url = encodeURIComponent(currentUrl);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    };

    const shareOnLinkedIn = () => {
        const url = encodeURIComponent(currentUrl);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    };

    const shareByEmail = () => {
        const subject = encodeURIComponent(article.title);
        const body = encodeURIComponent(`Te comparto este artículo interesante:\n\n${article.title}\n${currentUrl}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    return (
        <div className="space-y-6">
            {/* Información del Autor */}
            <motion.div
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-lg font-bold text-slate-900 mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    Sobre el Autor
                </h3>
                
                <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                        <User size={18} className="text-red-600 mt-0.5 shrink-0" />
                        <div>
                            <p className="font-semibold text-slate-900">{article.author}</p>
                        </div>
                    </div>

                    {article.institution && (
                        <div className="flex items-start gap-3">
                            <Building2 size={18} className="text-red-600 mt-0.5 shrink-0" />
                            <p className="text-slate-600">{article.institution}</p>
                        </div>
                    )}

                    <div className="flex items-start gap-3">
                        <Calendar size={18} className="text-red-600 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-slate-600">
                                <span className="font-medium">Publicado:</span> {article.date}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Clock size={18} className="text-red-600 mt-0.5 shrink-0" />
                        <p className="text-slate-600">
                            <span className="font-medium">Lectura:</span> {article.readTime}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Compartir en Redes */}
            <motion.div
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h3 className="text-lg font-bold text-slate-900 mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    Compartir
                </h3>

                <div className="grid grid-cols-2 gap-3">
                    {/* Botón de X (Antes Twitter) */}
                    <button
                        onClick={shareOnX}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                        title="Compartir en X"
                    >
                        <FaXTwitter size={18} />
                        <span className="text-sm font-medium"></span>
                    </button>

                    <button
                        onClick={shareOnFacebook}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-[#4267B2] text-white rounded-lg hover:bg-[#365899] transition-colors cursor-pointer"
                        title="Compartir en Facebook"
                    >
                        <FaFacebook size={18} />
                        <span className="text-sm font-medium">Facebook</span>
                    </button>

                    <button
                        onClick={shareOnLinkedIn}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors cursor-pointer"
                        title="Compartir en LinkedIn"
                    >
                        <FaLinkedin size={18} />
                        <span className="text-sm font-medium">LinkedIn</span>
                    </button>

                    <button
                        onClick={shareByEmail}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                        title="Compartir por Email"
                    >
                        <Mail size={18} />
                        <span className="text-sm font-medium">Email</span>
                    </button>
                </div>

                <button
                    onClick={() => {
                        navigator.clipboard.writeText(currentUrl);
                        alert('¡Enlace copiado al portapapeles!');
                    }}
                    className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                    <Share2 size={18} />
                    <span className="text-sm font-medium">Copiar enlace</span>
                </button>
            </motion.div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
                <motion.div
                    className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-lg font-bold text-slate-900 mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        Temas
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-red-50 text-red-700 text-sm font-medium rounded-full hover:bg-red-100 transition-colors cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Categoría y Tipo */}
            <motion.div
                className="bg-linear-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="space-y-3">
                    <div>
                        <p className="text-xs font-medium text-red-900 mb-1">Categoría</p>
                        <p className="text-sm font-bold text-red-700">{article.category}</p>
                    </div>
                    <div className="border-t border-red-200 pt-3">
                        <p className="text-xs font-medium text-red-900 mb-1">Tipo de documento</p>
                        <p className="text-sm font-bold text-red-700">{article.type}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}