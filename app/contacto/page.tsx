'use client';

import React, { useState, useRef, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { CTAButton } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowRight,
    CheckCircle,
    Users,
    Building
} from 'lucide-react';

export default function ContactoPage() {
    const [contactMethod, setContactMethod] = useState<'email' | 'call' | 'visit' | null>(null);
    const [isEmailCopied, setIsEmailCopied] = useState(false);

    // --- INICIO: CÓDIGO AÑADIDO PARA EL SCROLL ---
    // 1. Creamos una referencia para el contenedor de los detalles de contacto.
    const contactDetailsRef = useRef<HTMLDivElement>(null);

    // 2. Usamos useEffect para observar cambios en 'contactMethod'.
    useEffect(() => {
        // Si se selecciona un método de contacto (no es null)...
        if (contactMethod) {
            // ...hacemos scroll hacia la vista de detalles.
            // Se usa un pequeño timeout para dar tiempo a que el elemento se renderice antes de hacer scroll.
            setTimeout(() => {
                contactDetailsRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center', // 'start' o 'center' para ajustar la posición final del scroll
                });
            }, 100);
        }
    }, [contactMethod]); // Este efecto se ejecuta cada vez que el valor de 'contactMethod' cambia.
    // --- FIN: CÓDIGO AÑADIDO PARA EL SCROLL ---

    // Información de contacto
    const contactInfo = {
        address: "Av. 12 de Octubre N24-660 y Francisco Salazar, Edificio Concorde, piso 15, Oficina 15C",
        phones: ["022-543-653", "022-553-923", "0998-028-605"],
        email: "dmaldonado@gestium-sli.com",
        hours: {
            weekdays: "Lun - Vie: 8:30 AM - 5:30 PM",
            weekends: "Sáb - Dom: Cerrado"
        }
    };

    // Función para copiar email
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(contactInfo.email);
            setIsEmailCopied(true);
            setTimeout(() => setIsEmailCopied(false), 2000);
        } catch (err) {
            console.error('Error al copiar email:', err);
        }
    };

    // Función para llamar
    const makeCall = (phone: string) => {
        window.location.href = `tel:+593${phone.replace(/[-\s]/g, '')}`;
    };

    // Función para abrir email
    const openEmail = () => {
        const subject = encodeURIComponent('Consulta Legal - GESTIUM S.A.');
        const body = encodeURIComponent('Estimados Señores GESTIUM:\n\nMe dirijo a ustedes para solicitar información sobre...\n\nQuedo atento a su respuesta.\n\nSaludos cordiales,');
        window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    };

    return (
        <MainLayout>
            {/* Hero Section */}
            <div
                className="relative py-32 overflow-hidden"
                style={{
                    background: 'var(--gradient-primary)',
                    backgroundImage: "url('/images/ofi/Ofi.JPG')",
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} />

                <div className="container-fluid relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                color: 'var(--white)'
                            }}
                        >
                            Hablemos de su{' '}
                            <motion.span
                                style={{ color: 'var(--red-gestium)', textShadow: '0 0 20px rgba(167, 26, 33, 0.5)' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Caso Legal
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="w-24 h-1 mx-auto mb-8"
                            style={{ backgroundColor: 'var(--red-gestium)' }}
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        />

                        <motion.p
                            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            Consulta gratuita • Respuesta inmediata • 20+ años de experiencia
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Contact Methods Section */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="¿Cómo Prefiere Contactarnos?"
                    description="Elija el método que mejor se adapte a su necesidad"
                    centered={true}
                    className="mb-16"
                />

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Opción Email */}
                        <motion.div
                            className={`relative p-8 border-2 cursor-pointer transition-all duration-300 ${contactMethod === 'email'
                                ? 'border-black bg-red-gestium text-black shadow-lg'
                                : 'border-[#8f8e8e] bg-white text-black hover:border-charcoal hover:shadow-xl'
                                }`}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            animate={contactMethod !== 'email' ? {
                                y: [0, -2, 0],
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            } : {}}
                            onClick={() => setContactMethod(contactMethod === 'email' ? null : 'email')}
                        >
                            {/* Indicador de click sutil */}
                            <div className="absolute top-3 right-3">
                                <motion.div
                                    className="w-2 h-2 bg-red rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>

                            <div className="text-center">
                                <motion.div
                                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${contactMethod === 'email'
                                        ? 'bg-[#8f8e8e] text-[#a01919]'
                                        : 'bg-red-gestium text-black'
                                        }`}
                                    whileHover={{
                                        rotate: [0, -10, 10, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    <Mail size={24} />
                                </motion.div>
                                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${contactMethod === 'email' ? 'text-[#a01919]' : 'text-[#000]'
                                    }`}>
                                    Enviar Email
                                </h3>
                                <p className={`mb-4 transition-colors duration-300 ${contactMethod === 'email' ? 'text-red-900' : 'text-silver'
                                    }`}>
                                    Describa su caso detalladamente
                                </p>
                                <motion.span
                                    className="text-sm font-medium inline-flex items-center gap-1"
                                    style={{ color: contactMethod === 'email' ? 'rgba(0, 0, 2, 0.9)' : 'var(--red-gestium)' }}
                                    animate={{
                                        x: [0, 3, 0]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    Respuesta en menos de 24 horas
                                    <ArrowRight size={14} />
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* Opción Llamada */}
                        <motion.div
                            className={`relative p-8 border-2 cursor-pointer transition-all duration-300 ${contactMethod === 'call'
                                ? 'border-black bg-red-gestium text-black shadow-lg'
                                : 'border-[#8f8e8e]  bg-white text-black hover:border-charcoal hover:shadow-xl'
                                }`}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            animate={contactMethod !== 'call' ? {
                                y: [0, -2, 0],
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3
                                }
                            } : {}}
                            onClick={() => setContactMethod(contactMethod === 'call' ? null : 'call')}
                        >
                            {/* Indicador de click sutil */}
                            <div className="absolute top-3 right-3">
                                <motion.div
                                    className="w-2 h-2 bg-red-gestium rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.3
                                    }}
                                />
                            </div>

                            <div className="text-center">
                                <motion.div
                                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${contactMethod === 'call'
                                        ? 'bg-[#8f8e8e] text-[#a01919]'
                                        : 'bg-red-gestium text-black'
                                        }`}
                                    whileHover={{
                                        rotate: [0, 15, -15, 0],
                                        transition: { duration: 0.6 }
                                    }}
                                >
                                    <Phone size={24} />
                                </motion.div>
                                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${contactMethod === 'call' ? 'text-red-900' : 'text-silver'
                                    }`}>
                                    Llamar Ahora
                                </h3>
                                <p className={`mb-4 transition-colors duration-300 ${contactMethod === 'call' ? 'text-red-900' : 'text-silver'
                                    }`}>
                                    Consulta inmediata por teléfono
                                </p>
                                <motion.span
                                    className="text-sm font-medium inline-flex items-center gap-1"
                                    style={{ color: contactMethod === 'call' ? 'rgba(0, 0, 0, 0.9)' : 'var(--red-gestium)' }}
                                    animate={{
                                        x: [0, 3, 0]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.3
                                    }}
                                >
                                    Horario: Lun-Vie 8:30-17:30
                                    <ArrowRight size={14} />
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* Opción Visita */}
                        <motion.div
                            className={`relative p-8 border-2 cursor-pointer transition-all duration-300 ${contactMethod === 'visit'
                                ? 'border-black bg-red-gestium text-black shadow-lg'
                                : 'border-[#8f8e8e]  bg-white text-black hover:border-charcoal hover:shadow-xl'
                                }`}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            animate={contactMethod !== 'visit' ? {
                                y: [0, -2, 0],
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.6
                                }
                            } : {}}
                            onClick={() => setContactMethod(contactMethod === 'visit' ? null : 'visit')}
                        >
                            {/* Indicador de click sutil */}
                            <div className="absolute top-3 right-3">
                                <motion.div
                                    className="w-2 h-2 bg-red-gestium rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.6
                                    }}
                                />
                            </div>

                            <div className="text-center">
                                <motion.div
                                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${contactMethod === 'visit'
                                        ? 'bg-[#8f8e8e] text-[#a01919]'
                                        : 'bg-red-gestium text-black'
                                        }`}
                                    whileHover={{
                                        scale: [1, 1.1, 1],
                                        transition: { duration: 0.4 }
                                    }}
                                >
                                    <Building size={24} />
                                </motion.div>
                                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${contactMethod === 'visit' ? 'text-red-900' : 'text-silver'
                                    }`}>
                                    Visitar Oficina
                                </h3>
                                <p className={`mb-4 transition-colors duration-300 ${contactMethod === 'visit' ? 'text-red-900' : 'text-silver'
                                    }`}>
                                    Reunión presencial personalizada
                                </p>
                                <motion.span
                                    className="text-sm font-medium inline-flex items-center gap-1"
                                    style={{ color: contactMethod === 'visit' ? 'rgba(0, 0, 0, 0.9)' : 'var(--red-gestium)' }}
                                    animate={{
                                        x: [0, 3, 0]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.6
                                    }}
                                >
                                    Previa cita
                                    <ArrowRight size={14} />
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- INICIO: CÓDIGO MODIFICADO PARA EL SCROLL --- */}
                    {/* 3. Asignamos la referencia al div que envuelve el contenido expandible. */}
                    <div ref={contactDetailsRef}>
                        <AnimatePresence mode="wait">
                            {contactMethod && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    {contactMethod === 'email' && (
                                        <div
                                            className="relative p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32"
                                            style={{
                                                backgroundImage: 'url(/images/ofi/ofi3.jpg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} />

                                            <div className="relative z-10 max-w-4xl mx-auto">
                                                <div className="text-center mb-8">
                                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--red-dark)' }}>
                                                        Contacto por Email
                                                    </h4>
                                                    <p className="text-sm sm:text-base md:text-lg text-black mb-6 leading-relaxed">
                                                        Haga clic en el botón para abrir su cliente de email con un mensaje pre-estructurado
                                                    </p>
                                                </div>

                                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                                                    <CTAButton
                                                        variant="primary"
                                                        size="lg"
                                                        onClick={openEmail}
                                                    >
                                                        Redactar Email
                                                    </CTAButton>

                                                    <div className="text-center">
                                                        <p className="text-xs sm:text-sm text-gray-900 mb-2">O copie nuestro email:</p>
                                                        <button
                                                            onClick={copyEmail}
                                                            className="text-red-gestium hover:text-red-dark transition-colors flex items-center gap-2 text-sm sm:text-base"
                                                        >
                                                            <span className="break-all sm:break-normal">{contactInfo.email}</span>
                                                            {isEmailCopied ? <CheckCircle size={16} /> : <ArrowRight size={16} />}
                                                        </button>
                                                        {isEmailCopied && (
                                                            <motion.p
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                className="text-green-600 text-xs sm:text-sm mt-1"
                                                            >
                                                                ¡Email copiado!
                                                            </motion.p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {contactMethod === 'call' && (
                                        <div
                                            className="relative p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32 "
                                            style={{
                                                backgroundImage: 'url(/images/ofi/ofi3.jpg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <div className="absolute inset-0 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} />

                                            <div className="relative z-10 max-w-4xl mx-auto">
                                                <div className="text-center mb-8">
                                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--red-dark)' }}>
                                                        Llamar a GESTIUM
                                                    </h4>
                                                    <p className="text-sm sm:text-base md:text-lg text-black mb-6 leading-relaxed">
                                                        Seleccione el número que prefiera para su consulta
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                                    {contactInfo.phones.map((phone) => (
                                                        <motion.button
                                                            key={phone}
                                                            onClick={() => makeCall(phone)}
                                                            className="p-4 border-2 border-red-gestium text-red-gestium hover:bg-red-gestium hover:text-black transition-all duration-300 flex items-center justify-center gap-2  bg-white/90 backdrop-blur-sm"
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.98 }}
                                                        >
                                                            <Phone size={16} />
                                                            <span className="text-sm sm:text-base">{phone}</span>
                                                        </motion.button>
                                                    ))}
                                                </div>

                                                <div className="text-center">
                                                    <div className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                                                        <Clock size={16} className="text-red-gestium" />
                                                        <span className="text-sm sm:text-base text-black font-medium">{contactInfo.hours.weekdays}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {contactMethod === 'visit' && (
                                        <div
                                            className="relative p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32"
                                            style={{
                                                backgroundImage: 'url(/images/ofi/ofi3.jpg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} />

                                            <div className="relative z-10 max-w-6xl mx-auto">
                                                <div className="text-center mb-8">
                                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--red-dark)' }}>
                                                        Visitar Nuestras Oficinas
                                                    </h4>
                                                    <p className="text-sm sm:text-base md:text-lg text-black mb-6 leading-relaxed">
                                                        Ubicados en el corazón financiero de Quito
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                    <div className="bg-white/90 backdrop-blur-sm p-6 ">
                                                        <h5 className="font-semibold mb-4 flex items-center gap-2 text-base sm:text-lg">
                                                            <MapPin className="text-red-gestium" size={18} />
                                                            Dirección
                                                        </h5>
                                                        <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">{contactInfo.address}</p>

                                                        <h5 className="font-semibold mb-4 flex items-center gap-2 text-base sm:text-lg">
                                                            <Clock className="text-red-gestium" size={18} />
                                                            Horarios
                                                        </h5>
                                                        <p className="text-sm sm:text-base text-gray-700 mb-2">{contactInfo.hours.weekdays}</p>
                                                        <p className="text-sm sm:text-base text-gray-700 mb-6">{contactInfo.hours.weekends}</p>

                                                        <CTAButton
                                                            variant="primary"
                                                            onClick={() => makeCall(contactInfo.phones[2])}
                                                            className="w-full sm:w-auto"
                                                        >
                                                            Agendar Cita
                                                        </CTAButton>
                                                    </div>

                                                    <div className="relative h-64 sm:h-80 lg:h-full min-h-[250px] bg-white/90 backdrop-blur-sm  overflow-hidden">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.792886824642!2d-78.48673609022296!3d-0.20458063539800178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59bd0fca99265%3A0x961706262f764d99!2sGESTIUM%20-%20SERVICIOS%20LEGALES%20INTEGRALES!5e0!3m2!1ses-419!2sec!4v1752904430906!5m2!1ses-419!2sec"
                                                            width="100%"
                                                            height="100%"
                                                            style={{ border: 0 }}
                                                            allowFullScreen
                                                            loading="lazy"
                                                            referrerPolicy="no-referrer-when-downgrade"
                                                            className="rounded-lg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    {/* --- FIN: CÓDIGO MODIFICADO PARA EL SCROLL --- */}
                </div>
            </Section>

            {/* Contact Info Cards */}
            <Section padding="lg" background="gray">
                <div className="max-w-6xl mx-auto" >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            className="group  p-6 shadow-sm border hover:shadow-lg hover:border-charcoal transition-all duration-300"
                            whileHover={{ y: -5 }} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', }}
                        >
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-4 bg-red-gestium text-[#d52929] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-charcoal">
                                    <Phone size={20} />
                                </div>
                                <h4 className="font-semibold mb-2 text-white group-hover:text-red-gestium transition-colors">Teléfonos</h4>
                                <div className="text-sm text-white space-y-1">
                                    {contactInfo.phones.map(phone => (
                                        <div key={phone}>{phone}</div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="group p-6 shadow-sm border  hover:shadow-lg hover:border-charcoal transition-all duration-300"
                            whileHover={{ y: -5 }} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                        >
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-4 bg-red-gestium text-[#d52929] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-charcoal">
                                    <Mail size={20} />
                                </div>
                                <h4 className="font-semibold mb-2 text-white group-hover:text-red-gestium transition-colors">Email</h4>
                                <p className="text-sm text-white">{contactInfo.email}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="group p-6 shadow-sm border  hover:shadow-lg hover:border-charcoal transition-all duration-300"
                            whileHover={{ y: -5 }} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                        >
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-4 bg-red-gestium text-[#d52929] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-charcoal">
                                    <Clock size={20} />
                                </div>
                                <h4 className="font-semibold mb-2 text-white group-hover:text-red-gestium transition-colors">Horarios</h4>
                                <div className="text-sm text-white">
                                    <p>{contactInfo.hours.weekdays}</p>
                                    <p>{contactInfo.hours.weekends}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="group p-6 shadow-sm border  hover:shadow-lg hover:border-charcoal transition-all duration-300"
                            whileHover={{ y: -5 }} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                        >
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-4 bg-red-gestium text-[#d52929] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-charcoal">
                                    <Users size={20} />
                                </div>
                                <h4 className="font-semibold mb-2  text-white group-hover:text-red-gestium transition-colors">Experiencia</h4>
                                <p className="text-sm  text-white">20+ años atendiendo casos legales</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
}
