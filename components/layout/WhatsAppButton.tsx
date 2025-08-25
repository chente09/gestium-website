'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import {
    ChatBubbleOvalLeftEllipsisIcon,
    XMarkIcon,
    BuildingOffice2Icon,
    HomeModernIcon,
    UserGroupIcon,
    ClipboardDocumentListIcon,
    ScaleIcon,
    BriefcaseIcon
} from '@heroicons/react/24/outline';

// --- COMPONENTE DE ONDAS ANIMADAS ---
const RippleEffect = ({ isVisible }: { isVisible: boolean }) => (
    <AnimatePresence>
        {isVisible && (
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{
                            scale: [0, 2, 3],
                            opacity: [0.6, 0.2, 0]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.6,
                            repeat: Infinity,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>
        )}
    </AnimatePresence>
);

// --- INDICADOR DE ESTADO PREMIUM ---
const StatusIndicator = ({ isOfficeHours }: { isOfficeHours: boolean }) => (
    <motion.div
        className={`absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white shadow-lg z-30 ${isOfficeHours ? 'bg-green-500' : 'bg-orange-500'
            }`}
        animate={{
            scale: [1, 1.1, 1],
        }}
        transition={{
            duration: isOfficeHours ? 2 : 2.5,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <motion.div
            className={`w-full h-full rounded-full ${isOfficeHours ? 'bg-green-400' : 'bg-orange-400'
                }`}
            animate={{
                opacity: [1, 0.4, 1],
            }}
            transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    </motion.div>
);


// --- TOAST NOTIFICATION PARA MÓVIL ---
const MobileStatusToast = ({
    isOfficeHours,
    messageCount,
    isVisible,
    onClose
}: {
    isOfficeHours: boolean;
    messageCount: number;
    isVisible: boolean;
    onClose: () => void;
}) => {
    const getToastContent = () => {
        if (isOfficeHours) {
            return {
                title: "✅ En línea - Respuesta inmediata",
                subtitle: "Disponible hasta las 5:30 PM",
                bgColor: "bg-green-50 border-green-200 text-green-800"
            };
        }
        return {
            title: "🟡 Fuera de horario",
            subtitle: "Te responderemos mañana desde las 8:30 AM",
            bgColor: "bg-orange-50 border-orange-200 text-orange-800"
        };
    };

    const content = getToastContent();

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-4 left-4 right-4 z-50"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="status"
            aria-live="polite"
        >
            <div className={`${content.bgColor} rounded-lg shadow-lg p-4 border mx-auto max-w-sm`}>
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{content.title}</h4>
                        <p className="text-xs opacity-80">{content.subtitle}</p>

                        {messageCount > 0 && (
                            <div className="mt-2 text-xs font-bold text-red-600">
                                {messageCount} mensaje{messageCount > 1 ? 's' : ''} pendiente{messageCount > 1 ? 's' : ''}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className="ml-2 text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Cerrar notificación"
                    >
                        <XMarkIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

// --- TOOLTIP DESKTOP (SOLO DESKTOP) ---
const DesktopTooltip = ({
    isOfficeHours,
    isMenuOpen,
    messageCount,
    isVisible
}: {
    isOfficeHours: boolean;
    isMenuOpen: boolean;
    messageCount: number;
    isVisible: boolean;
}) => {
    if (isMenuOpen || !isVisible) return null;

    const content = isOfficeHours ? {
        title: "En línea",
        subtitle: "Respuesta inmediata",
        time: "Hasta las 5:30 PM"
    } : {
        title: "Fuera de horario",
        subtitle: "Te responderemos pronto",
        time: "Mañana 8:30 AM"
    };

    return (
        <motion.div
            className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <div className="bg-white text-charcoal rounded-lg shadow-xl p-3 border border-gray-200 min-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm text-gray-800">{content.title}</h4>
                    <motion.div
                        className={`w-3 h-3 rounded-full ${isOfficeHours ? 'bg-green-500' : 'bg-orange-500'}`}
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
                <p className="text-xs text-gray-600 mb-1">{content.subtitle}</p>
                <p className="text-xs text-gray-500">{content.time}</p>

                {messageCount > 0 && (
                    <div className="mt-2 text-xs text-red-600 font-medium">
                        {messageCount} mensaje{messageCount > 1 ? 's' : ''} pendiente{messageCount > 1 ? 's' : ''}
                    </div>
                )}
            </div>
            <div className="absolute left-full top-1/2 -translate-y-1/2">
                <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
            </div>
        </motion.div>
    );
};

// --- COMPONENTE PRINCIPAL OPTIMIZADO ---
const PhenomenalWhatsAppButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOfficeHours, setIsOfficeHours] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [messageCount, setMessageCount] = useState(0);
    const [, setLastInteraction] = useState<Date | null>(null);
    const [showDesktopTooltip, setShowDesktopTooltip] = useState(false);
    const [showMobileToast, setShowMobileToast] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
    const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

    const phoneNumber = '593989335061';

    // --- SERVICIOS ---
    const serviceOptions = [
        { text: "Recuperación Cartera", message: "Hola! visité su página web, necesito asistencia URGENTE con recuperación de cartera. He visto su experiencia de 20 años y 95% efectividad en gestium-sli.com", icon: <ScaleIcon className="h-5 w-5" />, premium: true },
        { text: "Derecho Inmobiliario", message: "Hola! visité su página web, tengo una consulta sobre derecho inmobiliario. Vi que han participado en proyectos exitosos en gestium-sli.com", icon: <HomeModernIcon className="h-5 w-5" /> },
        { text: "Derecho Corporativo", message: "Buenos días Dr. Maldonado, necesito asesoría corporativa especializada. Vengo por recomendación desde gestium-sli.com", icon: <BuildingOffice2Icon className="h-5 w-5" /> },
        { text: "Mediación & Arbitraje", message: "Hola! visité su página web, requiero servicios de mediación y arbitraje. He escuchado de su excelencia profesional en gestium-sli.com", icon: <BriefcaseIcon className="h-5 w-5" /> },
        { text: "Derecho de Familia", message: "Hola! visité su página web, necesito ayuda urgente con un asunto de derecho familiar. Me interesan sus servicios desde gestium-sli.com", icon: <UserGroupIcon className="h-5 w-5" /> },
        { text: "Gestiones & Trámites", message: "Hola!, me contacto desde gestium-sli.com para consultar sobre gestiones y trámites especializados.", icon: <ClipboardDocumentListIcon className="h-5 w-5" /> }
    ];

    // --- EFECTOS Y LÓGICA ---
    useEffect(() => {
        const checkDevice = () => setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    const handleScroll = useCallback(() => setIsVisible(window.scrollY > 300), []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const checkOfficeHours = () => {
            const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Guayaquil' }));
            const day = now.getDay();
            const time = now.getHours() + now.getMinutes() / 60;
            const isOpen = day >= 1 && day <= 5 && time >= 8.5 && time < 17.5;
            setIsOfficeHours(isOpen);
            setMessageCount(!isOpen && Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0);
        };
        checkOfficeHours();
        const interval = setInterval(checkOfficeHours, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        return () => {
            if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
        };
    }, []);

    // --- MANEJADORES DE EVENTOS ---
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (isMobile || !buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - (rect.left + rect.width / 2));
        mouseY.set(e.clientY - (rect.top + rect.height / 2));
    }, [mouseX, mouseY, isMobile]);

    const handleMouseLeave = () => {
        if (isMobile) return;
        setIsHovered(false);
        setShowDesktopTooltip(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleButtonClick = () => {
        if (isMobile && !isMenuOpen) {
            setShowMobileToast(true);
            if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
            toastTimeoutRef.current = setTimeout(() => setShowMobileToast(false), 4000);
            setTimeout(() => setIsMenuOpen(true), 1000);
        } else {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    const handleOptionClick = (message: string) => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
        setIsMenuOpen(false);
        setShowMobileToast(false);
        setLastInteraction(new Date());
    };

    // --- VARIANTES DE ANIMACIÓN ---
    const menuVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                // <-- CORRECCIÓN: Se añade "as const" para asegurar la compatibilidad de tipos en TypeScript.
                type: "spring" as const,
                stiffness: 400,
                damping: 25,
                staggerChildren: 0.08
            }
        },
        exit: { opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                // <-- CORRECCIÓN: Se añade "as const" para asegurar la compatibilidad de tipos en TypeScript.
                type: "spring" as const,
                stiffness: 500,
                damping: 25
            }
        }
    };

    return (
        <>
            <AnimatePresence>
                {showMobileToast && (
                    <MobileStatusToast
                        isOfficeHours={isOfficeHours}
                        messageCount={messageCount}
                        isVisible={showMobileToast}
                        onClose={() => setShowMobileToast(false)}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        ref={menuRef}
                        className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 flex flex-col items-end gap-3"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <AnimatePresence>
                            {showDesktopTooltip && <DesktopTooltip isOfficeHours={isOfficeHours} isMenuOpen={isMenuOpen} messageCount={messageCount} isVisible={showDesktopTooltip} />}
                        </AnimatePresence>

                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    className="w-full max-h-[65vh] overflow-y-auto flex flex-col items-end gap-2 sm:gap-3 p-1"
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {serviceOptions.map((option) => (
                                        <motion.button
                                            key={option.text}
                                            onClick={() => handleOptionClick(option.message)}
                                            className={`
                                                group relative flex items-center justify-between gap-3 w-full max-w-xs
                                                h-12 px-4 bg-white rounded-full shadow-lg border border-gray-200
                                                text-charcoal font-medium text-sm cursor-pointer
                                                hover:shadow-xl hover:border-gray-300 transition-all duration-200
                                                ${option.premium ? 'border-red-gestium/30 bg-red-50' : ''}
                                            `}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.03, x: isMobile ? 0 : -5 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="truncate">{option.text}</span>
                                            <div className="flex-shrink-0 text-gray-600">{option.icon}</div>

                                            {option.premium && (
                                                <div className="absolute -top-1 -right-1 bg-red-gestium text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center z-10 animate-pulse">
                                                    ★
                                                </div>
                                            )}
                                        </motion.button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            ref={buttonRef}
                            className="relative"
                            style={{ perspective: isMobile ? 'none' : 1000 }}
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => { if (!isMobile) { setIsHovered(true); setShowDesktopTooltip(true); } }}
                            onMouseLeave={handleMouseLeave}
                        >
                            <StatusIndicator isOfficeHours={isOfficeHours} />

                            {!isMobile && <RippleEffect isVisible={isHovered && !isMenuOpen} />}

                            {messageCount > 0 && !isMenuOpen && (
                                <motion.div
                                    className="absolute -top-3 -left-3 bg-red-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center border-2 border-white shadow-lg z-30"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                                >
                                    {messageCount}
                                </motion.div>
                            )}

                            <motion.button
                                onClick={handleButtonClick}
                                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú de servicios"}
                                className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer bg-gradient-to-br from-[#25D366] via-[#20BF55] to-[#128C7E]"
                                style={{
                                    rotateX: isMobile ? 0 : rotateX,
                                    rotateY: isMobile ? 0 : rotateY,
                                    transformStyle: "preserve-3d",
                                }}
                                animate={{ scale: isMenuOpen ? 1.05 : 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                whileHover={isMobile ? {} : { scale: 1.1, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={isMenuOpen ? 'close' : 'chat'}
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        {isMenuOpen ? (
                                            <XMarkIcon className="h-8 w-8 text-white" />
                                        ) : (
                                            <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-white" />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PhenomenalWhatsAppButton;