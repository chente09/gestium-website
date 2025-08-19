// components/ui/PDFViewer.tsx

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink } from 'lucide-react';

// Importaciones de la nueva biblioteca
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Estilos de la nueva biblioteca
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
    // Crea una instancia del plugin de la interfaz
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

                <motion.div
                    className="relative w-full h-full bg-white overflow-hidden flex flex-col"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                >
                    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                                <FileText size={20} className="text-white" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-lg font-bold text-slate-900 truncate" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h2>
                                {author && <p className="text-sm text-slate-600 truncate">Por: {author}</p>}
                                {institution && <p className="text-xs text-slate-500 truncate">{institution}</p>}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" title="Abrir en nueva pestaña" className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
                                <ExternalLink size={20} />
                            </a>
                            <a href={pdfUrl} download={`${title}.pdf`} title="Descargar PDF" className="p-2 rounded-lg hover:bg-gray-100 transition-colors" style={{ color: 'var(--gold-dark)' }}>
                                <Download size={20} />
                            </a>
                            <button onClick={onClose} title="Cerrar visor" className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
                                <X size={20} />
                            </button>
                        </div>
                    </header>

                    {/* El Worker procesa el PDF. Usa el mismo archivo que ya copiaste. */}
                    <div className="flex-1 overflow-hidden">
                        <Worker workerUrl="/pdf.worker.min.js">
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