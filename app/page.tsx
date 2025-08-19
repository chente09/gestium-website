'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import { motion, useAnimation } from 'framer-motion';
import { Building2, Users, User, Building, Clock, Target, Award, Briefcase, House, UserCheck, Calculator, FileText, ArrowRight, } from 'lucide-react';
import { CTAButton } from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { SectionButton } from '@/components/ui/Button';

const useTypewriter = (text: string, speed = 50, delay = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setHasFinished(true);
    }
  }, [displayedText, text, speed, isTyping]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return { displayedText, showCursor, hasFinished };
};

// 2. COMPONENTE TYPEWRITER - Agrega esto también al inicio
type TypewriterWithCursorProps = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
};

const TypewriterWithCursor = ({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete = () => { },
}: TypewriterWithCursorProps) => {
  const { displayedText, showCursor, hasFinished } = useTypewriter(text, speed, delay);

  useEffect(() => {
    if (hasFinished) {
      onComplete();
    }
  }, [hasFinished, onComplete]);

  // 🔥 ESTA ES LA FUNCIÓN CLAVE
  const renderTextWithBreaks = (text: string) => {
    return text.split('\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <><br /></>}
      </React.Fragment>
    ));
  };

  return (
    <span className={className}>
      {renderTextWithBreaks(displayedText)}
      <span
        className={`inline-block w-0.5 ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        style={{
          backgroundColor: 'var(--gold)',
          height: '1.2em',
          verticalAlign: 'middle'
        }}
      />
    </span>
  );
};



export default function Home() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const [showCTAs, setShowCTAs] = useState(false);
  const throttleRef = useRef<NodeJS.Timeout | null>(null);
  const lastUpdateRef = useRef(0);

  const fullText = `Nuestra experiencia de más de veinte años y la confianza de las mayores Instituciones Financieras de nuestro País nos respaldan. Gestionamos todo tipo de procesos a nivel judicial y extrajudicial con la agilidad, iniciativa y proactividad que nuestros clientes requieren.\n\nLe invitamos a navegar por nuestra página web para conocer más sobre nuestra estructura, personal, respaldo y servicios. Es un honor contar con su confianza.`;

  const handleTypewriterComplete = () => {
    setShowCTAs(true);
  };

  useEffect(() => {
    setIsLoaded(true);
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    // Capturar la referencia actual
    const currentRef = throttleRef.current;

    return () => {
      // Usar la referencia capturada
      if (currentRef) {
        clearTimeout(currentRef);
      }
    };
  }, []);


  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!e?.currentTarget) return;

    const now = Date.now();
    if (now - lastUpdateRef.current < 50) return; // Reducir a 20fps
    lastUpdateRef.current = now;

    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);


  const services = [
    {
      title: 'Recuperación de Cartera',
      description: 'Judicial, extrajudicial y coactiva. Estudio jurídico especializado.',
      icon: FileText,
      number: '01',
      image: '/images/areas/cobranza.jpg'
    },
    {
      title: 'Derecho Inmobiliario',
      description: 'Proyectos inmobiliarios desarrollados en Quito y otras ciudades.',
      icon: House,
      number: '02',
      image: '/images/areas/inmobiliaria.jpg'
    },
    {
      title: 'Derecho Corporativo',
      description: 'Constitución, liquidación, fusiones y todo tipo de actos societarios.',
      icon: Building2,
      number: '03',
      image: '/images/areas/companias.jpg'
    },
    {
      title: 'Mediación y Arbitraje',
      description: 'Solución de conflictos con resultados positivos y negociación sólida.',
      icon: Users,
      number: '04',
      image: '/images/areas/mediacion.jpg'
    }
  ];

  const values = [
    {
      title: 'Puntualidad',
      description: 'Cumplimos con los plazos establecidos y respetamos el tiempo de nuestros clientes.',
      icon: Clock,
      metric: '100%',
      metricText: 'Puntualidad'
    },
    {
      title: 'Dedicación',
      description: 'Brindamos atención personalizada y nos dedicamos completamente a cada caso.',
      icon: Target,
      metric: '24/7',
      metricText: 'Disponibilidad'
    },
    {
      title: 'Excelencia',
      description: 'Cuidamos el más mínimo detalle para que nuestro servicio sea de la más alta calidad.',
      icon: Award,
      metric: '95%',
      metricText: 'Satisfacción'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section - CENTRADO */}
      <div
        className="hero-section flex items-center justify-center relative overflow-hidden"
        style={{ background: 'var(--gradient-primary)' }}
        onMouseMove={handleMouseMove}
      >
        {/* Imagen de fondo profesional desde local */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/ofi/bg-sala.jpg')",
            opacity: 0.30
          }}
          animate={{
            scale: [1, 1.02, 1],
            x: mousePosition.x * 10,
            y: mousePosition.y * 10
          }}
          transition={{
            scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 0.3 },
            y: { duration: 0.3 }
          }}
        />

        {/* Patrón geométrico sutil con animación */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-white transform rotate-45"
            animate={{
              rotate: [45, 55, 45],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 right-32 w-24 h-24 border border-red-gestium transform rotate-12"
            animate={{
              rotate: [12, 22, 12],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 border border-white transform -rotate-12"
            animate={{
              rotate: [-12, -2, -12],
              x: [0, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 container-fluid py-20">
          <div className="flex items-center justify-center min-h-[80vh]">

            {/* Contenido Principal - CENTRADO */}
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Título Principal GESTIUM S.A. - CENTRADO con efectos de texto */}
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight text-center"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'var(--white)'
                  }}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
                >
                  {/* Animación de letras individuales para GESTIUM */}
                  {"GESTIUM".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        delay: 0.6 + index * 0.1,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{
                        scale: 1.1,
                        color: 'var(--gold)',
                        textShadow: '0 0 20px rgba(0, 0, 0, 0.8)',
                        transition: { duration: 0.3 }
                      }}
                      style={{ display: 'inline-block', cursor: 'default' }}
                    >
                      {letter}
                    </motion.span>
                  ))}{' '}

                  {/* S.A. con efectos especiales */}
                  <motion.span
                    className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight"
                    style={{
                      color: 'var(--gold-dark)',
                      display: 'inline-block'
                    }}
                    initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                      textShadow: [
                        '0 0 20px rgba(0, 0, 0, 0.8)',
                      ]
                    }}
                    transition={{
                      delay: 1.3,
                      duration: 0.8,
                      textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -2, 2, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    S.A.
                  </motion.span>
                </motion.h1>

                {/* Línea decorativa central con animación avanzada */}
                <motion.div
                  className="mx-auto mb-8 h-1"
                  style={{ backgroundColor: 'var(--gold-dark)' }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: 128,
                    opacity: 1,
                    boxShadow: [
                      '0 0 0px var(--gold-dark)',
                      '0 0 20px var(--gold-dark)',
                      '0 0 0px var(--gold-dark)'
                    ]
                  }}
                  transition={{
                    delay: 1.8,
                    duration: 1.2,
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />

                {/* Subtítulo con animación suave y elegante */}
                <motion.div
                  className="text-lg md:text-xl mb-12 leading-relaxed max-w-4xl mx-auto text-justify"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.01 } }}
                  >
                    <TypewriterWithCursor
                      text={fullText}
                      speed={25}        // Más rápido
                      delay={3000}      // Empieza a los 3 segundos
                      onComplete={handleTypewriterComplete} // Callback cuando termine
                    />
                  </motion.div>
                </motion.div>

                {/* CTAs MODIFICADOS - Solo aparecen cuando termina el typewriter */}
                {showCTAs && (
                  <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -50, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 10px 30px rgba(167, 26, 33, 0.4)',
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <CTAButton
                        variant="primary"
                        size="lg"
                        onClick={() => router.push('/contacto')}
                        className="font-normal"
                      >
                        Consulta Gratuita
                      </CTAButton>
                    </motion.div>

                    <motion.a
                      href="https://gestium-app.netlify.app/consultas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-block px-12 py-4 font-normal text-lg uppercase tracking-wider transition-all duration-300 border-2 bg-transparent text-white border-white hover:bg-white hover:text-[var(--charcoal)] hover:scale-105 active:scale-95 text-center relative overflow-hidden"
                      initial={{ opacity: 0, x: 50, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8 }}
                      />
                      <span className="relative z-10">
                        Consulta el Estado de tu Proceso
                      </span>
                    </motion.a>
                  </motion.div>
                )}

                {/* Indicadores de scroll centrados con animación mejorada */}
                {showCTAs && (
                  <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  >
                    <motion.div
                      className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer group"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
                      animate={{
                        y: [0, 10, 0],
                        borderColor: [
                          'rgba(255, 255, 255, 0.5)',
                          'rgba(244, 196, 1, 0.8)',
                          'rgba(255, 255, 255, 0.5)'
                        ]
                      }}
                      transition={{
                        y: { duration: 2, repeat: Infinity },
                        borderColor: { duration: 3, repeat: Infinity }
                      }}
                      whileHover={{
                        scale: 1.1,
                        borderColor: 'rgba(244, 196, 1, 1)',
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div
                        className="w-1 h-3 bg-white rounded-full mt-2"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                        animate={{
                          opacity: [1, 0.3, 1],
                          backgroundColor: [
                            'rgba(255, 255, 255, 0.8)',
                            'rgba(244, 196, 1, 0.8)',
                            'rgba(255, 255, 255, 0.8)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          backgroundColor: { duration: 3, repeat: Infinity }
                        }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Línea decorativa inferior animada - CENTRADA con efectos mejorados */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, var(--red-gestium) 30%, var(--red-gestium) 70%, transparent 100%)',
          }}
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: '60%',
            opacity: 1,
            boxShadow: [
              '0 0 0px var(--red-gestium)',
              '0 0 20px var(--red-gestium)',
              '0 0 0px var(--red-gestium)'
            ]
          }}
          transition={{
            delay: 6,
            duration: 1.5,
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* CSS para animación de parpadeo del cursor */}
        <style jsx>{`
        @keyframes blink {
          0%, 50% { border-color: var(--gold); }
          51%, 100% { border-color: transparent; }
        }
      `}</style>
      </div>


      {/* SECCIÓN DE ESPECIALIZACIÓN MINIMALISTA */}
      <div
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/images/ofi/Ofi.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay sutil para mantener legibilidad */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(245, 245, 249, 0.85)'
          }}
        />
        <div className="container-fluid relative z-10">
          <SectionHeader
            title="Áreas de Especialización"
            description="Experiencia especializada en las principales ramas del derecho"
            centered={true}
          />

          {/* Grid Minimalista de Especialidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Cobranza Judicial',
                description: 'Ejecutamos procesos judiciales para recuperar deudas con respaldo legal y representación experta.',
                icon: FileText,
                stats: 'Especialistas',
              },
              {
                title: 'Cobranza Extrajudicial',
                description: 'Gestionamos cobranzas preventivas y negociaciones directas sin necesidad de juicio.',
                icon: Users,
                stats: 'Experiencia',
              },
              {
                title: 'Cobranza Coactiva',
                description: 'Aplicamos la vía coactiva para ejecutar cobros mediante títulos de crédito y actos administrativos.',
                icon: Building,
                stats: 'Eficiencia',
              },
              {
                title: 'Derecho Inmobiliario',
                description: 'Asesoramos proyectos inmobiliarios con seguridad jurídica desde la planificación hasta la ejecución.',
                icon: House,
                stats: 'Precisión',
              },
              {
                title: 'Derecho Civil',
                description: 'Atendemos procesos civiles y familiares con soluciones legales personalizadas.',
                icon: User,
                stats: 'Confianza',
              },
              {
                title: 'Derecho Corporativo',
                description: 'Brindamos asesoría legal integral para empresas, contratos, sociedades y cumplimiento normativo.',
                icon: Briefcase,
                stats: 'Solidez',
              }
            ]
              .map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Card Minimalista */}
                    <div
                      className="relative p-6 bg-white transition-all duration-300 group-hover:shadow-lg border"
                      style={{
                        borderColor: '#e2e8f0',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      {/* Indicador superior sutil */}
                      <motion.div
                        className="absolute top-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-400"
                        style={{ backgroundColor: 'var(--red-gestium)' }}
                      />

                      {/* Contenido */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-md flex items-center justify-center transition-all duration-300"
                            style={{
                              backgroundColor: 'rgba(216, 30, 39, 0.05)',
                              border: '1px solid rgba(216, 30, 39, 0.1)'
                            }}
                          >
                            <IconComponent
                              size={16}
                              style={{ color: 'var(--red-gestium)' }}
                            />
                          </div>
                          <div>
                            <h3
                              className="text-lg font-semibold mb-1"
                              style={{
                                color: 'var(--charcoal)',
                                fontFamily: "'Inter', sans-serif"
                              }}
                            >
                              {area.title}
                            </h3>
                          </div>
                        </div>

                        {/* Estadística discreta */}
                        <div className="text-right">
                          <span
                            className="text-xs font-medium uppercase tracking-wider"
                            style={{ color: 'var(--silver)' }}
                          >
                            {area.stats}
                          </span>
                        </div>
                      </div>

                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--silver)' }}
                      >
                        {area.description}
                      </p>

                      {/* Indicador de hover discreto */}
                      <motion.div
                        className="absolute bottom-0 right-0 w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          background: 'rgba(216, 30, 39, 0.05)',
                          borderTopLeftRadius: '6px'
                        }}
                      >
                        <ArrowRight
                          size={12}
                          style={{ color: 'var(--red-gestium)', cursor: 'pointer' }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
          </div>

          {/* Call to Action Discreto */}
          <SectionButton onClick={() => router.push('/areas')} cursor='pointer'>
            Ver Todas las Áreas
          </SectionButton>
        </div>
      </div>

      {/* Services Section - Con nueva paleta roja */}
      <Section background="white" padding="lg">
        <SectionHeader
          title="Nuestros Servicios"
          description="Asesoría jurídica especializada respaldada por nuestra experiencia y trayectoria."
          centered={true}
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white transition-all duration-500 hover:scale-105 relative overflow-hidden hover-lift"
                style={{ boxShadow: 'var(--shadow-minimal)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                {/* Imagen de fondo */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(0, 0, 0, 0.3) 100%)'
                    }}
                  />

                  {/* Número decorativo */}
                  <div
                    className="absolute top-4 right-4 text-4xl font-black opacity-80"
                    style={{ color: 'var(--white)' }}
                  >
                    {service.number}
                  </div>

                  {/* Icono con nueva paleta */}
                  <div className="absolute bottom-4 left-4">
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                      style={{ background: 'var(--gradient-red)' }} // Cambiado de gradient-gold
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: 'var(--white)' }} />
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mb-4 text-sm leading-relaxed"
                    style={{ color: 'var(--silver)' }}
                  >
                    {service.description}
                  </p>
                  <motion.button
                    className="group text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300"
                    style={{ color: 'var(--red-gestium)', cursor: 'pointer' }} // Cambiado de gold
                    whileHover={{ x: 5 }}
                  >
                    Ver Más
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Values Section*/}
      <div
        className="px-6 py-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--platinum)' }}
      >
        {/* Imagen de fondo sutil */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('/images/ofi/justicia.jpg')",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            title="Nuestros Valores"
            description="Principios que nos distinguen en el ejercicio profesional del derecho"
            centered={true}
            className="mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white transition-all duration-500 hover:scale-105 group relative overflow-hidden hover-lift"
                  style={{ boxShadow: 'var(--shadow-minimal)' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Métrica destacada con nueva paleta */}
                  <motion.div
                    className="absolute top-4 right-4 text-right"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <div
                      className="text-2xl font-black"
                      style={{ color: 'var(--red-gestium)' }}
                    >
                      {value.metric}
                    </div>
                    <div
                      className="text-xs uppercase tracking-wider"
                      style={{ color: 'var(--silver)' }}
                    >
                      {value.metricText}
                    </div>
                  </motion.div>

                  {/* Icono con nueva paleta */}
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: 'rgba(167, 26, 33, 0.1)' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: 'var(--red-gestium)' }} />
                  </motion.div>

                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{
                      color: 'var(--charcoal)',
                      fontFamily: "'Playfair Display', serif"
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: 'var(--silver)' }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Practice Areas - REFACTORIZADA CON INFORMACIÓN REAL */}
      <Section background="white" padding="lg">
        <SectionHeader
          title="Áreas de Práctica"
          description={
            <>
              Experiencia comprobada en las principales ramas del derecho respaldada por
              <span className="font-semibold" style={{ color: 'var(--red-gestium)' }}> más de 20 años</span> de trayectoria profesional
            </>
          }
          centered={true}
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: 'Derecho Corporativo',
              icon: Building2,
              focus: 'Asesoría empresarial integral',
              description: 'Constitución, transformación, fusión, liquidación y otros actos societarios con respaldo legal y experiencia comprobada.',
              specialty: 'Especialistas'
            },
            {
              name: 'Derecho Financiero',
              icon: Calculator,
              focus: 'Gestión de riesgos financieros',
              description: 'Asesoría estratégica en instituciones financieras, estructuración de operaciones y recuperación de cartera vencida.',
              specialty: 'Experiencia'
            },
            {
              name: 'Derecho Civil',
              icon: House,
              focus: 'Soluciones legales familiares',
              description: 'Resolución de conflictos entre personas naturales o jurídicas en materias de bienes, sucesiones y obligaciones.',
              specialty: 'Confianza'
            },
            {
              name: 'Derecho Laboral',
              icon: UserCheck,
              focus: 'Relaciones laborales efectivas',
              description: 'Representación y asesoría en contratos laborales, liquidaciones, despidos y procesos judiciales o de mediación.',
              specialty: 'Eficiencia'
            },
            {
              name: 'Derecho Inmobiliario',
              icon: Briefcase,
              focus: 'Proyectos inmobiliarios seguros',
              description: 'Experiencia consolidada en el desarrollo de proyectos habitacionales y comerciales, con respaldo legal en cada etapa.',
              specialty: 'Precisión'
            },
            {
              name: 'Mediación y Arbitraje',
              icon: Users,
              focus: 'Resolución alternativa de conflictos',
              description: 'Negociación y métodos alternativos para resolver controversias de manera ágil, eficaz y sin litigio judicial.',
              specialty: 'Resultados'
            }
          ].map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #f1f5f9'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                {/* Línea indicadora superior animada */}
                <motion.div
                  className="absolute top-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: 'var(--red-gestium)' }}
                />

                <div className="p-8">
                  {/* Header del card */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="flex items-center justify-center w-14 h-14 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(167, 26, 33, 0.08)',
                        border: '1px solid rgba(167, 26, 33, 0.15)'
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent
                        size={24}
                        style={{ color: 'var(--black)' }}
                      />
                    </motion.div>

                    {/* Badge de especialidad */}
                    <motion.div
                      className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full"
                      style={{
                        backgroundColor: 'rgba(167, 26, 33, 0.05)',
                        color: 'var(--red-gestium)',
                        border: '1px solid rgba(167, 26, 33, 0.1)'
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    >
                      {area.specialty}
                    </motion.div>
                  </div>

                  {/* Contenido principal */}
                  <div className="mb-6">
                    <h3
                      className="text-xl font-bold mb-2 group-hover:text-red-gestium transition-colors duration-300"
                      style={{
                        color: 'var(--charcoal)',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {area.name}
                    </h3>
                    <p
                      className="text-sm font-medium mb-3"
                      style={{ color: 'var(--red-gestium)' }}
                    >
                      {area.focus}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--silver)' }}
                    >
                      {area.description}
                    </p>
                  </div>

                  {/* Call to action */}
                  <motion.div
                    className="flex items-center justify-between pt-4 border-t border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                  >
                    <motion.button
                      className="group/btn text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300"
                      style={{ color: 'var(--red-gestium)' }}
                      whileHover={{ x: 5 }}
                      onClick={() => router.push(`/areas/${area.name.toLowerCase()}`)}
                    >
                      Más Información
                    </motion.button>

                    {/* Indicador de hover discreto */}
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(167, 26, 33, 0.08)'
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight
                        size={12}
                        style={{ color: 'var(--red-gestium)' }}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Efecto de hover en todo el card */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(167, 26, 33, 0.02) 0%, transparent 50%)'
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Mejorado */}
        <SectionButton onClick={() => router.push('/areas')}>
          Ver Todas las Áreas de Práctica
        </SectionButton>
      </Section>

      {/* CTA Section - Con nueva paleta */}
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
        <div className="container-fluid text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-shadow-strong"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--white)'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ¿Necesita Asistencia Legal?
          </motion.h2>

          <motion.div
            className="w-32 h-1 mx-auto mb-8"
            style={{ backgroundColor: 'var(--red-gestium)' }} // Cambiado de gold
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          <motion.p
            className="text-xl mb-12 leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Contáctenos para una{' '}
            <motion.span
              style={{ color: 'var(--red-gestium)' }} // Cambiado de gold
              whileHover={{ scale: 1.1 }}
            >
              consulta gratuita
            </motion.span>{' '}
            y personalizada
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.button
              className="group px-12 py-4 font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden shadow-xl"
              style={{
                background: 'var(--gradient-red)', // Cambiado de gradient-gold
                color: 'var(--white)', // Cambiado a blanco
                border: 'none',
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/contacto')}
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                style={{ opacity: 0.2 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Contactar Ahora
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>

            <motion.button
              className="group px-12 py-4 font-bold uppercase tracking-wider border-2 transition-all duration-300 bg-transparent"
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
              onClick={() => router.push('tel:+5932543653')}
            >
              (+593) 2-543-653
            </motion.button>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};