'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import { motion, useAnimation } from 'framer-motion';
import { Building2, Users, User, Clock, Target, Award, Briefcase, House, UserCheck, Calculator, FileText, ArrowRight, Bell, BarChart3, ShieldCheck, Activity, Zap, Eye, BookOpen, BrainCircuit, Feather, } from 'lucide-react';
import { CTAButton } from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { SectionButton } from '@/components/ui/Button';
import TechGrid from '@/components/ui/TechGrid';

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

      {/* SECCIÓN 2: NUESTRA FIRMA (Diseño Editorial Unificado) */}
      <div
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/images/ofi/Ofi.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay sutil para mantener legibilidad */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(245, 245, 249, 0.85)' // Aumentamos opacidad para enfocar en el contenido
          }}
        />
        <div className="container-fluid relative z-10">
          <SectionHeader
            title="Nuestra Firma"
            description="Confianza, experiencia y un equipo dedicado a proteger sus intereses."
            centered={true}
            className="mb-16"
          />

          {/* Contenedor principal de dos columnas */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* Columna Izquierda: Imagen del Líder */}
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div
                className="rounded-lg shadow-lg"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
              >
                {/* Contenedor relativo para que 'fill' funcione */}
                <div className="relative w-full overflow-hidden rounded-md" style={{ minHeight: '450px' }}>
                  <Image
                    src="/images/logo.sa.sf.png"
                    alt="Dr. David Maldonado Viteri, Gerente General de Gestium S.A."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw" // Opcional pero recomendado para optimizar más
                  />
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Narrativa, Métricas y CTA */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--charcoal)' }}>
                Más de 20 Años Forjando <span style={{ color: 'var(--red-gestium)' }}>Confianza</span>
              </h2>

              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--silver)' }}>
                Bajo la dirección del Dr. David Maldonado Viteri, hemos consolidado una firma legal que es sinónimo de integridad y resultados. Nuestra trayectoria no se mide solo en años, sino en la solidez de las soluciones que ofrecemos y la tranquilidad que brindamos a cada cliente.
              </p>

              {/* Métricas integradas de forma sutil */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-md flex items-center justify-center" style={{ backgroundColor: 'rgba(244, 196, 1, 0.1)', border: '1px solid rgba(244, 196, 1, 0.2)' }}>
                    <Award size={20} style={{ color: 'var(--gold-dark)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--steel)' }}>95% de Tasa de Efectividad</h4>
                    <p className="text-sm" style={{ color: 'var(--silver)' }}>En la gestión y recuperación de casos.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-md flex items-center justify-center" style={{ backgroundColor: 'rgba(167, 26, 33, 0.05)', border: '1px solid rgba(167, 26, 33, 0.1)' }}>
                    <Users size={20} style={{ color: 'var(--red-gestium)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--steel)' }}>Equipo de 12 Profesionales</h4>
                    <p className="text-sm" style={{ color: 'var(--silver)' }}>Expertos en diversas áreas del Derecho.</p>
                  </div>
                </div>
              </div>

              {/* Call to Action (CTA) */}
              <div className="flex items-center flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-slate-200">
                <motion.button
                  onClick={() => router.push('/nosotros/equipo')}
                  className="group text-lg font-semibold flex items-center gap-2 transition-colors duration-300 cursor-pointer"
                  style={{ color: 'var(--red-gestium)' }}
                  whileHover={{ x: 5 }}
                >
                  <span>Conocer al Equipo</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
                <motion.button
                  onClick={() => router.push('/historia')}
                  className="group text-lg font-semibold flex items-center gap-2 transition-colors duration-300 cursor-pointer"
                  style={{ color: 'var(--steel)' }}
                  whileHover={{ x: 5, color: 'var(--charcoal)' }}
                >
                  <span>Nuestra Trayectoria</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: SERVICIOS (Diseño Híbrido: Minimalista + Imagen) */}
      <Section background="platinum" padding="lg">
        <SectionHeader
          title="Nuestros Servicios Especializados"
          description="Asesoría jurídica integral respaldada por nuestra trayectoria y la confianza de las principales instituciones del país."
          centered={true}
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            {
              title: 'Cobranza Judicial Civil y Coactiva',
              description: 'Gestión judicial, extrajudicial y coactiva. Optimizamos procesos con tecnología propia para una máxima efectividad.',
              icon: Calculator,
              number: '01',
              image: '/images/servicios/recuperacion.avif',
              href: '/servicios/recuperacion-cartera',
            },
            {
              title: 'Derecho Inmobiliario',
              description: 'Brindamos respaldo legal integral en el desarrollo de proyectos inmobiliarios en Quito y a nivel nacional.',
              icon: House,
              number: '02',
              image: '/images/servicios/inmoviliaria.avif',
              href: '/servicios/inmobiliario'
            },
            {
              title: 'Derecho Corporativo',
              description: 'Asesoría experta en constitución, fusiones, liquidaciones y todo tipo de actos societarios para empresas.',
              icon: Building2,
              number: '03',
              image: '/images/servicios/corporativo.avif',
              href: '/servicios/corporativo'
            },
            {
              title: 'Mediación y Arbitraje',
              description: 'Facilitamos la resolución alternativa de conflictos a través de negociación sólida y procesos de mediación efectivos.',
              icon: Users,
              number: '04',
              image: '/images/servicios/mediacion.avif',
              href: '/servicios/mediacion'
            },
            {
              title: 'Derecho de Familia',
              description: 'Asesoría integral y con enfoque humano en divorcios, alimentos, régimen de visitas y protección de menores.',
              icon: User,
              number: '05',
              image: '/images/servicios/familia.avif',
              href: '/servicios/familia'
            },
            {
              title: 'Derecho Laboral',
              description: 'Representación en contratos, liquidaciones, despidos y procesos ante las autoridades competentes.',
              icon: UserCheck,
              number: '06',
              image: '/images/servicios/laboral.avif',
              href: '/servicios/laboral'
            },
            {
              title: 'Gestiones y Trámites',
              description: 'Realizamos gestiones eficientes ante entidades públicas y privadas, incluyendo trámites notariales y registrales.',
              icon: FileText,
              number: '07',
              image: '/images/servicios/tramites.avif',
              href: '/servicios/tramites'
            }
          ].map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white flex flex-col overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-medium)' }}
                onClick={() => router.push(service.href)}
              >
                {/* --- SECCIÓN DE IMAGEN --- */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`Imagen de ${service.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay sutil para dar profundidad */}
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* --- SECCIÓN DE CONTENIDO --- */}
                <div className="relative p-6 flex-grow flex flex-col">
                  {/* Indicador superior sutil que se anima */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-200 group-hover:w-full group-hover:bg-[var(--red-gestium)] transition-all duration-400" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(167, 26, 33, 0.05)', border: '1px solid rgba(167, 26, 33, 0.1)' }}>
                      <IconComponent size={16} style={{ color: 'var(--red-gestium)' }} />
                    </div>
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--charcoal)', fontFamily: "'Inter', sans-serif" }}>
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed flex-grow" style={{ color: 'var(--silver)' }}>
                    {service.description}
                  </p>

                  {/* --- FOOTER CON CTA --- */}
                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <div className="group/btn text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--red-gestium)' }}>
                      <span>Ver Servicio</span>
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action de servicios */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <SectionButton onClick={() => router.push('/servicios')}>
            <span className="flex items-center gap-2">
              Ver Todos los Servicios
              <Briefcase className="w-5 h-5" />
            </span>
          </SectionButton>
        </motion.div>
      </Section>

      {/* SECCIÓN 4: GESTIUM-APP - Diferenciación Tecnológica */}
      <div
        className="py-16 relative overflow-hidden"
        style={{
          background: 'var(--gradient-primary)'
        }}
      >
        {/* Patrón tecnológico de fondo */}
        <TechGrid />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Contenido principal */}
            <motion.div
              className="lg:pr-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 backdrop-blur-sm bg-white/10 border"
                style={{ borderColor: 'rgba(244, 196, 1, 0.3)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: '#f4c401',
                    animation: 'pulse 2s infinite'
                  }}
                />
                <span className="text-sm font-medium text-white">Portal Exclusivo para Clientes</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                >
                  Transparencia y Control
                </span>
                <br />
                Sobre su Caso, 24/7
              </motion.h2>

              <motion.p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Con <b className="text-white">GESTIUM-APP</b>, nuestra plataforma de desarrollo propio, le ofrecemos acceso directo y en tiempo real al estado de sus procesos. La información que necesita, cuando la necesita, con total seguridad.
              </motion.p>

              {/* Características para el Cliente */}
              <motion.div
                className="space-y-3 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {[
                  { icon: Clock, title: "Seguimiento de Caso en Tiempo Real" },
                  { icon: Bell, title: "Notificaciones y Alertas Clave" },
                  { icon: FileText, title: "Documentación Centralizada" },
                  { icon: BarChart3, title: "Reportes de Avance Claros" }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 backdrop-blur-sm bg-white/10 rounded-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <div
                        className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg"
                        style={{ background: 'rgba(244, 196, 1, 0.1)' }}
                      >
                        <IconComponent className="w-4 h-4" style={{ color: '#f4c401' }} />
                      </div>
                      <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.a
                  href="https://gestium-app.netlify.app/consultas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, #f4c401 0%, #d4a017 100%)',
                    color: '#2c2c2c',
                    textDecoration: 'none',
                    boxShadow: '0 10px 25px rgba(244, 196, 1, 0.3)'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Consultar mi Proceso</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Visualización tecnológica */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative ">
                <motion.div
                  className="bg-white rounded-2xl p-8 glass-effect border-2 relative z-10"
                  style={{ borderColor: 'var(--gold)' }}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                >
                  {/* Header del mockup */}
                  <div className="bg-white rounded-t-lg p-3 flex justify-between items-center border-b">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: 'var(--gradient-red)' }}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <span className="text-white font-bold text-sm">G</span>
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-charcoal text-sm sm:text-base">Detalle del Proceso</h4>
                        <p className="text-xs text-silver">Portal Corporativo</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  {/* Cuerpo del mockup */}
                  <div className="bg-white rounded-b-lg p-4 space-y-4">
                    {/* Métricas principales */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                        { label: "Casos Activos", value: "247", color: "var(--red-gestium)" },
                        { label: "Efectividad", value: "95%", color: "var(--gold)" },
                        { label: "Recuperado", value: "$2.4M", color: "var(--red-gestium)" }
                      ].map((metric, index) => (
                        <motion.div
                          key={index}
                          className="p-3 bg-slate-50 rounded-lg text-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            className="text-lg font-bold"
                            style={{ color: metric.color }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          >
                            {metric.value}
                          </motion.div>
                          <div className="text-xs text-silver">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Información del cliente */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-charcoal">Información Principal</h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                        <p><strong className="text-silver">Cliente:</strong> YACH... MILTON</p>
                        <p><strong className="text-silver">Cédula:</strong> 0501...72</p>
                        <p><strong className="text-silver">Materia:</strong> ISSFA</p>
                        <p><strong className="text-silver">Fecha Inicio:</strong> 15 ago 2025</p>
                      </div>
                    </div>

                    {/* Etapas del proceso mejoradas */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-charcoal">Etapas del Proceso</h4>
                      <div className="relative flex justify-between items-start">
                        {/* Línea de progreso animada */}
                        <div className="absolute top-2 left-4 right-4 h-0.5 bg-slate-200">
                          <motion.div
                            className="h-full"
                            style={{ background: 'linear-gradient(to right, var(--red-gestium), var(--gold))' }}
                            initial={{ width: 0 }}
                            whileInView={{ width: '75%' }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
                          />
                        </div>

                        {/* Puntos de etapa mejorados */}
                        {['Ingreso', 'Revisión', 'Facturación', 'Elaboración', 'Pago'].map((stage, i) => {
                          const isActive = i === 3;
                          const isCompleted = i < 3;
                          return (
                            <motion.div
                              key={i}
                              className="relative text-center flex flex-col items-center"
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.8 + i * 0.2 }}
                            >
                              <motion.div
                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isActive ? 'border-red-gestium bg-white' :
                                  isCompleted ? 'border-red-gestium bg-red-gestium' :
                                    'border-slate-300 bg-white'
                                  }`}
                                whileHover={{ scale: 1.2 }}
                              >
                                {isActive && (
                                  <motion.div
                                    className="w-1.5 h-1.5 bg-red-gestium rounded-full"
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                  />
                                )}
                              </motion.div>
                              <p className="text-[10px] font-medium mt-1 w-16"
                                style={{ color: isActive || isCompleted ? 'var(--charcoal)' : 'var(--silver)' }}>
                                {stage}
                              </p>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Elementos flotantes decorativos */}
                <motion.div
                  className="absolute -top-20 -right-4 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10"
                  style={{
                    boxShadow: '0 10px 25px rgba(244, 196, 1, 0.3)',
                    // Se elimina la animación de CSS 'float'
                  }}
                  initial={{ opacity: 0, scale: 0, y: 50 }} // Añadimos y: 50
                  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animamos y a 0
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <ShieldCheck className="w-8 h-8 text-yellow-400" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-20 -left-6 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10"
                  style={{
                    boxShadow: '0 10px 25px rgba(220, 38, 38, 0.3)',
                    // Se elimina la animación de CSS 'float'
                  }}
                  initial={{ opacity: 0, scale: 0, y: -50 }} // Añadimos y: -50
                  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animamos y a 0
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <Activity className="w-7 h-7 text-red-500" />
                </motion.div>

                {/* Líneas conectoras animadas */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M50,50 Q150,25 250,50 T450,50"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6, duration: 2 }}
                  />
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#f4c401', stopOpacity: 0 }} />
                      <stop offset="50%" style={{ stopColor: '#f4c401', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#f4c401', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Sección de beneficios */}
          <motion.div
            className="mt-16 pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center mb-10">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Ventajas Clave de Nuestra Tecnología
              </motion.h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Eficiencia", description: "La automatización agiliza cada etapa de su proceso, optimizando tiempos.", icon: Zap },
                { title: "Visibilidad", description: "Control total con reportes y acceso a su expediente en tiempo real.", icon: Eye },
                { title: "Confianza", description: "Un portal transparente que fortalece la relación abogado-cliente.", icon: UserCheck }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-5 backdrop-blur-sm bg-white/10 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div
                      className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(244, 196, 1, 0.1)' }}
                    >
                      <IconComponent className="w-7 h-7 text-yellow-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: .5; }
    }
  `}</style>
      </div>

      {/* Values Section*/}
      <div
        className="px-6 py-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--platinum)' }}
      >

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

      {/* SECCIÓN 7: PUBLICACIONES (Versión Refinada) */}
      <div
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/ofi/justicia.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay elegante */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.8))'
          }}
        />

        <div className="container-fluid relative z-10">


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Contenido principal: Narrativa */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 glass-dark border"
                style={{ borderColor: 'rgba(244, 196, 1, 0.3)' }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse-glow-gold" style={{ backgroundColor: 'var(--gold)' }} />
                <span className="text-sm font-medium text-white">Contenido de Valor</span>
              </motion.div>

              <h3
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Conocimiento que <span className="text-gradient-gold">Transforma</span> la Práctica Legal
              </h3>

              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Nuestro compromiso con la excelencia se refleja en la investigación continua y el desarrollo de conocimiento jurídico que enriquece nuestra práctica y aporta valor a la comunidad legal.
              </p>

              {/* Lista de áreas de conocimiento */}
              <div className="space-y-4 mb-10 text-white">
                {[
                  { icon: BrainCircuit, title: "Tesis sobre Legal Tech e Innovación" },
                  { icon: BarChart3, title: "Análisis de Tendencias y Normativas" },
                  { icon: Feather, title: "Artículos sobre Derecho Corporativo y Financiero" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                    >
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <IconComponent className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-white">{item.title}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Principal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.button
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 rounded-lg animate-pulse-glow-gold cursor-pointer"
                  style={{ background: 'var(--gradient-gold)', color: 'var(--charcoal)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/publicaciones')}
                >
                  <span>Explorar Publicaciones</span>
                  <BookOpen className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Showcase visual abstracto (AHORA CLICKEABLE) */}
            <motion.div
              className="relative h-6 hidden lg:flex items-center justify-center cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onClick={() => router.push('/publicaciones')}
              whileHover={{ scale: 1.03 }}
            >
              {/* Documentos abstractos */}
              <motion.div
                className="absolute w-75 h-95 bg-white/500 glass-dark rounded-xl border border-white/500"
                animate={{ y: [-10, 10] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute w-75 h-95 bg-white/500 glass-dark rounded-xl border border-white/10"
                style={{ transform: 'rotate(-8deg)' }}
                animate={{ y: [10, -10], rotate: [-8, -6] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute w-75 h-95 bg-white/100 glass-dark rounded-xl border border-white/20 p-6 flex flex-col"
                style={{ transform: 'rotate(6deg)' }}
                animate={{ y: [-5, 5], rotate: [6, 8] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full mb-4" style={{ background: 'var(--gradient-gold)' }}>
                  <BookOpen className="w-4 h-4 text-charcoal" />
                </div>
                <div className="w-full h-1.5 bg-white/80 rounded-full mb-2"></div>
                <div className="w-3/4 h-1.5 bg-white/80 rounded-full mb-4"></div>
                <div className="w-full h-1 bg-white/70 rounded-full mb-1.5"></div>
                <div className="w-full h-1 bg-white/70 rounded-full mb-1.5"></div>
                <div className="w-1/2 h-1 bg-white/70 rounded-full"></div>
                <br />
                <div className="w-full h-1.5 bg-white/80 rounded-full mb-2"></div>
                <div className="w-3/4 h-1.5 bg-white/80 rounded-full mb-4"></div>
                <div className="w-full h-1 bg-white/70 rounded-full mb-1.5"></div>
                <div className="w-full h-1 bg-white/70 rounded-full mb-1.5"></div>
                <div className="w-1/2 h-1 bg-white/70 rounded-full"></div>
                <br />
                <div className="w-full h-1.5 bg-white/80 rounded-full mb-2"></div>
                <div className="w-3/4 h-1.5 bg-white/80 rounded-full mb-4"></div>
                <div className="w-full h-1 bg-white/70 rounded-full mb-1.5"></div>
                <div className="w-full h-1 bg-white/70 rounded-full mb-1.5"></div>
                <div className="w-1/2 h-1 bg-white/70 rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

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
            style={{ backgroundColor: 'var(--gold-dark)' }} // Cambiado de gold
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
            Contáctenos para una consulta gratuita y personalizada
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
                background: 'var(--gradient-gold)', // Cambiado de gradient-gold
                color: 'var(--black)', // Cambiado a negro
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