// components/ui/PDFViewer.tsx
// Versión actualizada para @react-pdf-viewer v4.x con pdfjs-dist v4.x

'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ExternalLink } from 'lucide-react';

// Importaciones para @react-pdf-viewer v4.x
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Estilos
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

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
    // Crear instancia del plugin
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                />

                <motion.div
                    className="relative w-full h-full bg-white overflow-hidden flex flex-col"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                >
                    {/* Header */}
                    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white z-10">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-red-500 to-red-600 flex items-center justify-center shrink-0">
                                <FileText size={20} className="text-white" />
                            </div>
                            <div className="min-w-0">
                                <h2
                                    className="text-lg font-bold text-slate-900 truncate"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {title}
                                </h2>
                                {author && (
                                    <p className="text-sm text-slate-600 truncate">
                                        Por: {author}
                                    </p>
                                )}
                                {institution && (
                                    <p className="text-xs text-slate-500 truncate">
                                        {institution}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-4">
                            <a
                                href={pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Abrir en nueva pestaña"
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                            >
                                <ExternalLink size={20} />
                            </a>
                            <button
                                onClick={onClose}
                                title="Cerrar visor"
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </header>

                    {/* PDF Viewer - Actualizado para v4.x */}
                    <div className="flex-1 overflow-hidden">
                        {/* 
                          IMPORTANTE: Para pdfjs-dist v4.x, el worker usa extensión .mjs
                          Descarga de: https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs
                          Guárdalo como: public/pdf.worker.min.mjs
                        */}
                        <Worker workerUrl="/pdf.worker.min.mjs">
                            <Viewer
                                fileUrl={pdfUrl}
                                plugins={[defaultLayoutPluginInstance]}
                            />
                        </Worker>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}