'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChatBubbleOvalLeftEllipsisIcon, 
    XMarkIcon,
    BuildingOffice2Icon,
    HomeModernIcon,
    UserGroupIcon,
    ClipboardDocumentListIcon,
    ScaleIcon
} from '@heroicons/react/24/outline';

// --- COMPONENTE PRINCIPAL ---
const WhatsAppButton: React.FC = () => {
    // --- ESTADOS ---
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOfficeHours, setIsOfficeHours] = useState(true);
    const menuRef = useRef<HTMLDivElement>(null);

    const phoneNumber = '593989335061';

    // --- LÓGICA DE VISIBILIDAD Y HORARIOS ---
    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.scrollY > 300);
        window.addEventListener('scroll', toggleVisibility);

        const checkOfficeHours = () => {
            const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Guayaquil' }));
            const day = now.getDay();
            const time = now.getHours() + now.getMinutes() / 60;
            setIsOfficeHours(day >= 1 && day <= 5 && time >= 8.5 && time < 17.5);
        };
        
        checkOfficeHours();
        const interval = setInterval(checkOfficeHours, 60000);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            clearInterval(interval);
        };
    }, []);

    // --- LÓGICA PARA CERRAR EL MENÚ AL HACER CLIC FUERA ---
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuRef]);

    // --- OPCIONES DEL MENÚ CON MENSAJES PERSONALIZADOS ---
    const serviceOptions = [
        { text: "Cobranza", message: "Hola, necesito asistencia con la recuperación de cartera.", icon: <ScaleIcon className="h-6 w-6" /> },
        { text: "Inmobiliario", message: "Hola, tengo una consulta sobre derecho inmobiliario.", icon: <HomeModernIcon className="h-6 w-6" /> },
        { text: "Corporativo", message: "Hola, me gustaría recibir asesoría en derecho corporativo.", icon: <BuildingOffice2Icon className="h-6 w-6" /> },
        { text: "Familia", message: "Hola, necesito ayuda con un asunto de derecho de familia.", icon: <UserGroupIcon className="h-6 w-6" /> },
        { text: "Otros Trámites", message: "Hola, me contacto para consultar sobre gestiones y trámites.", icon: <ClipboardDocumentListIcon className="h-6 w-6" /> }
    ];

    // --- MANEJADOR DE CLIC PARA LAS OPCIONES ---
    const handleOptionClick = (message: string) => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        setIsMenuOpen(false);
    };

    // --- VARIANTES DE ANIMACIÓN PARA EL MENÚ ---
    const menuVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.08,
            },
        },
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div ref={menuRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 cursor-pointer">
                    {/* --- MENÚ DE OPCIONES --- */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                className="flex flex-col items-end gap-3 cursor-pointer"
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {serviceOptions.map((option) => (
                                    <motion.button
                                        key={option.text}
                                        onClick={() => handleOptionClick(option.message)}
                                        className="flex items-center gap-3 h-12 px-4 bg-white rounded-full shadow-strong text-charcoal font-semibold cursor-pointer"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, x: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>{option.text}</span>
                                        {option.icon}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* --- BOTÓN PRINCIPAL FLOTANTE CON EFECTO PALPITANTE --- */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú de contacto"}
                        className={`flex h-16 w-16 items-center justify-center rounded-full shadow-strong transition-colors duration-300 cursor-pointer ${
                            isOfficeHours ? 'bg-[#25D366] hover:bg-[#128C7E]' : 'bg-steel hover:bg-navy'
                        }`}
                        title={isOfficeHours ? 'Estamos en línea' : 'Fuera de horario'}
                        animate={{
                            scale: isMenuOpen ? 1 : [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isMenuOpen ? 'close' : 'chat'}
                                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isMenuOpen ? (
                                    <XMarkIcon className="h-8 w-8 text-white" />
                                ) : (
                                    <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-white" />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;