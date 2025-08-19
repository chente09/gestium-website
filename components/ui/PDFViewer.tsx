'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X, Download, FileText, ExternalLink, RefreshCw, Monitor, Smartphone
} from 'lucide-react';

interface PDFViewerProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    title: string;
    author?: string;
    institution?: string;
}

export default function PDFViewer({ 
    isOpen, 
    onClose, 
    pdfUrl, 
    title, 
    author, 
    institution 
}: PDFViewerProps) {
    const [viewMode, setViewMode] = useState<'google' | 'mozilla' | 'fallback'>('google');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Reset states when modal opens
    useEffect(() => {
        if (isOpen) {
            setViewMode('google');
            setIsLoading(true);
            setError(null);
        }
    }, [isOpen, pdfUrl]);

    // URLs para diferentes visores (que SÍ funcionan)
    const getViewerUrl = () => {
        switch (viewMode) {
            case 'google':
                return `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
            case 'mozilla':
                return `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
            default:
                return pdfUrl;
        }
    };

    const downloadPDF = useCallback(() => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${title}.pdf`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [pdfUrl, title]);

    const openInNewTab = useCallback(() => {
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    }, [pdfUrl]);

    const switchToGoogleViewer = () => {
        setViewMode('google');
        setIsLoading(true);
        setError(null);
    };

    const switchToMozillaViewer = () => {
        setViewMode('mozilla');
        setIsLoading(true);
        setError(null);
    };

    const handleIframeLoad = () => {
        setIsLoading(false);
        setError(null);
    };

    const handleIframeError = () => {
        setIsLoading(false);
        setError('No se pudo cargar el documento');
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;
        if (e.key === 'Escape') onClose();
    }, [isOpen, onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                />

                <motion.div
                    className="relative w-full h-full max-w-7xl mx-auto my-6 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {/* Header Profesional */}
                    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                                    <FileText size={20} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900 truncate" 
                                        style={{ fontFamily: "'Playfair Display', serif" }}>
                                        {title}
                                    </h2>
                                    {author && <p className="text-sm text-slate-600">Por: {author}</p>}
                                    {institution && <p className="text-xs text-slate-500">{institution}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                            {/* Selector de visor */}
                            <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                <button 
                                    onClick={switchToGoogleViewer}
                                    className={`px-3 py-1 text-xs rounded transition-colors ${
                                        viewMode === 'google' 
                                            ? 'bg-white shadow-sm text-gray-900' 
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                    title="Visor de Google"
                                >
                                    <Monitor size={14} className="inline mr-1" />
                                    Google
                                </button>
                                <button 
                                    onClick={switchToMozillaViewer}
                                    className={`px-3 py-1 text-xs rounded transition-colors ${
                                        viewMode === 'mozilla' 
                                            ? 'bg-white shadow-sm text-gray-900' 
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                    title="Visor de Mozilla"
                                >
                                    <Smartphone size={14} className="inline mr-1" />
                                    Mozilla
                                </button>
                            </div>

                            {/* Botones de acción */}
                            <button 
                                onClick={openInNewTab}
                                className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                title="Abrir en nueva pestaña"
                            >
                                <ExternalLink size={16} />
                                <span className="hidden sm:inline">Nueva pestaña</span>
                            </button>
                            
                            <button 
                                onClick={downloadPDF} 
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors" 
                                style={{ color: 'var(--gold-dark)' }}
                                title="Descargar PDF"
                            >
                                <Download size={20} />
                            </button>

                            <button 
                                onClick={onClose} 
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                                title="Cerrar visor"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </header>

                    {/* Indicador de estado */}
                    {isLoading && (
                        <div className="bg-blue-50 border-b border-blue-200 px-4 py-2">
                            <div className="flex items-center gap-2 text-sm text-blue-700">
                                <RefreshCw size={14} className="animate-spin" />
                                Cargando documento PDF...
                                <span className="text-xs text-blue-500">
                                    ({viewMode === 'google' ? 'Google Docs' : 'Mozilla PDF.js'})
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Mensaje de error con alternativas */}
                    {error && (
                        <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-amber-700">
                                    <FileText size={14} />
                                    {error} - Pruebe otra opción
                                </div>
                                <div className="flex gap-2">
                                    {viewMode !== 'google' && (
                                        <button
                                            onClick={switchToGoogleViewer}
                                            className="px-3 py-1 bg-amber-600 text-white text-xs rounded hover:bg-amber-700 transition-colors"
                                        >
                                            Google Viewer
                                        </button>
                                    )}
                                    {viewMode !== 'mozilla' && (
                                        <button
                                            onClick={switchToMozillaViewer}
                                            className="px-3 py-1 bg-amber-600 text-white text-xs rounded hover:bg-amber-700 transition-colors"
                                        >
                                            Mozilla Viewer
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Visor PDF Principal */}
                    <main className="flex-1 relative overflow-hidden">
                        <iframe
                            key={`${viewMode}-${pdfUrl}`} // Forzar re-render cuando cambia
                            src={getViewerUrl()}
                            className="w-full h-full border-0"
                            title={title}
                            loading="lazy"
                            onLoad={handleIframeLoad}
                            onError={handleIframeError}
                            allow="autoplay; encrypted-media"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"
                        />

                        {/* Overlay de carga */}
                        {isLoading && (
                            <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                                    <p className="text-gray-600 mb-2">Cargando documento...</p>
                                    <p className="text-sm text-gray-500">
                                        {viewMode === 'google' 
                                            ? 'Usando Google Docs Viewer (recomendado)' 
                                            : 'Usando Mozilla PDF.js Viewer'
                                        }
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Fallback cuando todo falla */}
                        {error && !isLoading && (
                            <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                                <div className="text-center p-8 max-w-md">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                                        <FileText size={32} className="text-red-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                        Documento no disponible
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        No se puede mostrar el PDF en el navegador actual. 
                                        Puede abrirlo directamente o descargarlo.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                        <button 
                                            onClick={openInNewTab}
                                            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Abrir PDF directamente
                                        </button>
                                        <button 
                                            onClick={downloadPDF}
                                            className="flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg hover:opacity-90 transition-colors"
                                            style={{ backgroundColor: 'var(--gold-dark)' }}
                                        >
                                            <Download size={16} />
                                            Descargar PDF
                                        </button>
                                    </div>
                                    
                                    {/* Botón para probar ambos visores */}
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <p className="text-xs text-gray-500 mb-2">O pruebe con:</p>
                                        <div className="flex gap-2 justify-center">
                                            <button
                                                onClick={switchToGoogleViewer}
                                                className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
                                            >
                                                Google Viewer
                                            </button>
                                            <button
                                                onClick={switchToMozillaViewer}
                                                className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
                                            >
                                                Mozilla Viewer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </main>

                    {/* Footer con información del documento */}
                    <footer className="px-4 py-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-600">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span>📄 Documento PDF</span>
                                {viewMode === 'google' && <span>🌐 Google Docs Viewer</span>}
                                {viewMode === 'mozilla' && <span>🦊 Mozilla PDF.js</span>}
                                {!isLoading && !error && <span className="text-green-600">✅ Cargado</span>}
                            </div>
                            <div className="flex items-center gap-2">
                                <span>GESTIUM © 2024</span>
                            </div>
                        </div>
                    </footer>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}