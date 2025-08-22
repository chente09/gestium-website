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
                {[...Array(3)].map((_, i) => (
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
        className={`absolute -top-1 right-1 w-3 h-3 rounded-full border-2 border-white shadow-sm ${isOfficeHours ? 'bg-green-500' : 'bg-orange-500'
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

// --- TOOLTIP MINIMALISTA CON HOVER ---
const SmartTooltip = ({
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

    const getTooltipContent = () => {
        if (isOfficeHours) {
            return {
                title: "En línea",
                subtitle: "Respuesta inmediata",
                time: "Hasta las 5:30 PM"
            };
        } else {
            return {
                title: "Fuera de horario",
                subtitle: "Te responderemos pronto",
                time: "Mañana 8:30 AM"
            };
        }
    };

    const content = getTooltipContent();

    return (
        <motion.div
            className="hidden sm:block absolute right-20 top-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <div className="bg-white text-charcoal rounded-lg shadow-xl p-3 border border-gray-200 min-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm text-gray-800">{content.title}</h4>
                    <motion.div
                        className={`w-3 h-3 rounded-full ${isOfficeHours ? 'bg-green-500' : 'bg-orange-500'
                            }`}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.6, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
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

            {/* Triángulo */}
            <div className="absolute left-full top-1/2 -translate-y-1/2">
                <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
            </div>
        </motion.div>
    );
};

// --- COMPONENTE PRINCIPAL FUSIONADO ---
const PhenomenalWhatsAppButton: React.FC = () => {
    // --- ESTADOS COMBINADOS ---
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOfficeHours, setIsOfficeHours] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [messageCount, setMessageCount] = useState(0);
    const [, setLastInteraction] = useState<Date | null>(null);
    const [showTooltip, setShowTooltip] = useState(false);

    // --- REFERENCIAS Y MOTION VALUES ---
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
    const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

    const phoneNumber = '593989335061';

    // --- SERVICIOS MINIMALISTAS ---
    const serviceOptions = [
        {
            text: "Recuperación Cartera",
            message: "Hola! visité su página web, necesito asistencia URGENTE con recuperación de cartera. He visto su experiencia de 20+ años y 95% efectividad en gestium-sli.com",
            icon: <ScaleIcon className="h-4 w-4" />,
            premium: true
        },
        {
            text: "Derecho Inmobiliario",
            message: "Hola! visité su página web, tengo una consulta sobre derecho inmobiliario. Vi que han participado en proyectos exitosos en gestium-sli.com",
            icon: <HomeModernIcon className="h-4 w-4" />,
            premium: false
        },
        {
            text: "Derecho Corporativo",
            message: "Buenos días Dr. Maldonado, necesito asesoría corporativa especializada. Vengo por recomendación desde gestium-sli.com",
            icon: <BuildingOffice2Icon className="h-4 w-4" />,
            premium: false
        },
        {
            text: "Mediación & Arbitraje",
            message: "Hola! visité su página web, requiero servicios de mediación y arbitraje. He escuchado de su excelencia profesional en gestium-sli.com",
            icon: <BriefcaseIcon className="h-4 w-4" />,
            premium: false
        },
        {
            text: "Derecho de Familia",
            message: "Hola! visité su página web, necesito ayuda urgente con un asunto de derecho familiar. Me contacto desde gestium-sli.com",
            icon: <UserGroupIcon className="h-4 w-4" />,
            premium: false
        },
        {
            text: "Gestiones & Trámites",
            message: "Hola!, me contacto desde gestium-sli.com para consultar sobre gestiones y trámites especializados.",
            icon: <ClipboardDocumentListIcon className="h-4 w-4" />,
            premium: false
        }
    ];

    // --- LÓGICA DE SCROLL OPTIMIZADA ---
    const handleScroll = useCallback(() => {
        const scrolled = window.scrollY > 300;
        setIsVisible(scrolled);
    }, []);

    useEffect(() => {
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        return () => window.removeEventListener('scroll', throttledScroll);
    }, [handleScroll]);

    // --- LÓGICA DE HORARIO CON SIMULACIÓN DE MENSAJES ---
    useEffect(() => {
        const checkOfficeHours = () => {
            const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Guayaquil' }));
            const day = now.getDay();
            const time = now.getHours() + now.getMinutes() / 60;
            const isOpen = day >= 1 && day <= 5 && time >= 8.5 && time < 17.5;
            setIsOfficeHours(isOpen);

            // Simulación inteligente de mensajes pendientes
            if (!isOpen && Math.random() > 0.6) {
                setMessageCount(Math.floor(Math.random() * 4) + 1);
            } else {
                setMessageCount(0);
            }
        };

        checkOfficeHours();
        const interval = setInterval(checkOfficeHours, 60000);
        return () => clearInterval(interval);
    }, []);

    // --- CERRAR MENÚ AL HACER CLIC FUERA ---
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // --- MANEJO DE MOVIMIENTO DEL MOUSE ---
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    }, [mouseX, mouseY]);

    // --- MANEJADOR DE OPCIONES CON ANALYTICS ---
    const handleOptionClick = (message: string, serviceName: string) => {
        const timestamp = new Date().toLocaleString('es-EC');
        const enhancedMessage = `${message}\n\n Contacto: ${timestamp}\n Desde: gestium-sli.com`;
        const encodedMessage = encodeURIComponent(enhancedMessage);

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
        setIsMenuOpen(false);
        setLastInteraction(new Date());

        // Aquí podrías agregar analytics
        console.log(`Servicio contactado: ${serviceName} a las ${timestamp}`);
    };

    // --- ANIMACIONES DEL MENÚ CON TIPOS CORREGIDOS ---
    const menuVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 25,
                when: "beforeChildren" as const,
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            y: 20,
            scale: 0.9,
            transition: {
                duration: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            x: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 500,
                damping: 25
            }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={menuRef}
                    className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
                    initial={{ opacity: 0, scale: 0, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0, x: 100 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* --- TOOLTIP SOLO EN HOVER --- */}
                    <AnimatePresence>
                        {showTooltip && (
                            <SmartTooltip
                                isOfficeHours={isOfficeHours}
                                isMenuOpen={isMenuOpen}
                                messageCount={messageCount}
                                isVisible={showTooltip}
                            />
                        )}
                    </AnimatePresence>

                    {/* --- MENÚ DE SERVICIOS MEJORADO --- */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                className="flex flex-col items-end gap-3 mb-2"
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {serviceOptions.map((option, index) => (
                                    <motion.button
                                        key={option.text}
                                        onClick={() => handleOptionClick(option.message, option.text)}
                                        className={`
                                            group relative flex items-center gap-3 h-12 px-4 pr-12 
                                            bg-white rounded-full shadow-lg border border-gray-200
                                            text-charcoal font-medium text-sm cursor-pointer
                                            hover:shadow-xl hover:border-gray-300 transition-all duration-200
                                            ${option.premium ? 'border-red-gestium/30 bg-red-50' : ''}
                                        `}
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.02,
                                            x: -8,
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{ zIndex: 50 - index }}
                                    >
                                        <span className="relative z-10 flex-1 text-left">{option.text}</span>
                                        <div className="relative z-10 text-gray-600">{option.icon}</div>

                                        {option.premium && (
                                            <motion.div
                                                className="absolute -top-1 -right-1 bg-red-gestium text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                                                animate={{
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{
                                                    scale: { duration: 2, repeat: Infinity }
                                                }}
                                            >
                                                ★
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* --- BOTÓN PRINCIPAL FUSIONADO --- */}
                    <motion.div
                        ref={buttonRef}
                        className="relative"
                        style={{ perspective: 1000 }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => {
                            setIsHovered(true);
                            setShowTooltip(true);
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            setShowTooltip(false);
                            mouseX.set(0);
                            mouseY.set(0);
                        }}
                    >
                        {/* Efecto de ondas */}
                        <RippleEffect isVisible={isHovered && !isMenuOpen} />

                        {/* Contador de mensajes */}
                        {messageCount > 0 && !isMenuOpen && (
                            <motion.div
                                className="absolute -top-3 -left-3 bg-red-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center border-3 border-white shadow-lg z-10"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            >
                                {messageCount}
                            </motion.div>
                        )}

                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Cerrar menú de servicios" : "Abrir menú de servicios de GESTIUM"}
                            className="relative flex h-18 w-18 items-center justify-center rounded-full shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer bg-gradient-to-br from-[#25D366] via-[#20BF55] to-[#128C7E] hover:from-[#128C7E] hover:to-[#0d6c5e]"
                            style={{
                                rotateX: rotateX,
                                rotateY: rotateY,
                                transformStyle: "preserve-3d",
                                width: '72px',
                                height: '72px'
                            }}
                            animate={{
                                scale: isMenuOpen ? 1.1 : [1, 1.06, 1],
                                rotate: isMenuOpen ? 180 : 0,
                            }}
                            transition={{
                                scale: {
                                    duration: isMenuOpen ? 0.3 : 2.5,
                                    repeat: isMenuOpen ? 0 : Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut"
                                },
                                rotate: {
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{
                                scale: 1.08,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Indicador de estado */}
                            <StatusIndicator isOfficeHours={isOfficeHours} />

                            {/* Efecto de brillo del botón */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full"
                                animate={isHovered && !isMenuOpen ? {
                                    translateX: ['-100%', '100%'],
                                    transition: { duration: 0.8, ease: "easeInOut" }
                                } : {}}
                            />

                            {/* Iconos con transición */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isMenuOpen ? 'close' : 'chat'}
                                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="relative z-10"
                                >
                                    {isMenuOpen ? (
                                        <XMarkIcon className="h-9 w-9 text-white" />
                                    ) : (
                                        <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 text-white" />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PhenomenalWhatsAppButton;