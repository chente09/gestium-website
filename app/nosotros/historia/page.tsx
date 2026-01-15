'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import {
    Building2,
    Scale,
    TrendingUp,
    Award,
    Users,
    Briefcase,
    ChevronRight,
    Star,
    Heart
} from 'lucide-react';

const stageData = [
    {
        id: 'constitucion-arranque',
        period: '2005 - 2008',
        title: 'Constitución y Arranque',
        subtitle: 'Los Cimientos de la Excelencia',
        icon: Building2,
        description: 'Nuestro Estudio Jurídico se constituyó en el año 2005, iniciando operaciones en nuestra primera oficina ubicada en el octavo piso del Edificio El Girón de la ciudad de Quito. Desde el comienzo, establecimos las bases de lo que sería una trayectoria de crecimiento y especialización.',
        highlights: [
            'Constitución del Estudio Jurídico en 2005',
            'Inicio de operaciones en el Edificio El Girón, Quito',
            'Especialización inicial en el campo inmobiliario',
            'Participación en diversos proyectos a nivel nacional',
            'Inicio de participación en procesos coactivos',
            'Obtención de la confianza de varias instituciones públicas'
        ],
        imageAlt: 'Constitución de GESTIUM en 2005',
        bgGradient: 'from-slate-900 via-slate-800 to-slate-900'
    },
    {
        id: 'consolidacion-diversificacion',
        period: '2009 - 2015',
        title: 'Consolidación y Diversificación',
        subtitle: 'Crecimiento Estratégico y Expansión de Servicios',
        icon: Scale,
        description: 'Período de consolidación marcado por la diversificación estratégica de nuestros servicios jurídicos y el fortalecimiento de nuestra presencia tanto en el sector público como privado. Expandimos significativamente nuestro portafolio de especialidades.',
        highlights: [
            'Constitución como Secretarios Abogados de dependencias públicas',
            'Especialización en cobranzas por vía judicial y extrajudicial',
            'Participación activa en procesos de mediación y arbitraje',
            'Intervención en procesos de contratación pública',
            'Servicios especializados en Derecho societario',
            'Incorporación al Derecho Familiar',
            'Incursión en temas de derecho laboral'
        ],
        imageAlt: 'Consolidación y diversificación del estudio',
        bgGradient: 'from-red-900 via-red-800 to-slate-900'
    },
    {
        id: 'estabilidad-fortalecimiento',
        period: '2016 - 2020',
        title: 'Estabilidad y Fortalecimiento',
        subtitle: 'Madurez Institucional y Confianza Consolidada',
        icon: Award,
        description: 'Alcanzamos estabilidad operativa y financiera, culminando con nuestra constitución como Sociedad Anónima. Consolidamos relaciones de largo plazo con nuestros clientes y fortalecimos nuestro compromiso con la formación profesional.',
        highlights: [
            'Constitución como Sociedad Anónima (GESTIUM S.A.)',
            'Mantenimiento de la confianza de las principales Instituciones Financieras',
            'Clientes con más de quince años de confianza en nuestros servicios',
            'Crecimiento continuo en la gama de servicios ofrecidos',
            'Apertura a pasantes de diferentes Universidades del país',
            'Fortalecimiento de la formación académica estudiantil'
        ],
        imageAlt: 'Estabilidad y fortalecimiento institucional',
        bgGradient: 'from-slate-900 via-red-900 to-black'
    },
    {
        id: 'expansion-innovacion',
        period: '2021 - 2023',
        title: 'Expansión e Innovación',
        subtitle: 'Crecimiento Integral y Compromiso Social',
        icon: Users,
        description: 'Período de expansión significativa tanto en alcance geográfico como en impacto social. Desarrollamos nuevas iniciativas de responsabilidad social y continuamos creciendo en todos los aspectos operativos.',
        highlights: [
            'Asesoría gratuita a grupos vulnerables',
            'Crecimiento en experiencia y celeridad de procedimientos',
            'Mejoramiento de prestaciones sociales',
            'Capacitación a grupos de diversos intereses',
            'Expansión del compromiso social corporativo'
        ],
        imageAlt: 'Expansión e innovación social',
        bgGradient: 'from-blue-900 via-slate-800 to-slate-900'
    },
    {
        id: 'ampliacion-tecnologia',
        period: '2024',
        title: 'Ampliación de Servicios y Tecnología',
        subtitle: 'Transformación Digital y Modernización',
        icon: TrendingUp,
        description: 'Revolucionamos nuestra operación a través de la tecnología, rediseñando completamente nuestra presencia digital y desarrollando herramientas propias para optimizar el servicio a nuestros clientes.',
        highlights: [
            'Rediseño completo de la página web',
            'Acceso facilitado para clientes al estado de sus casos',
            'Desarrollo de GESTIUM-APP para nuestros clientes',
            'Modernización de la experiencia digital',
            'Optimización de la comunicación cliente-estudio'
        ],
        imageAlt: 'Transformación digital',
        bgGradient: 'from-purple-900 via-slate-800 to-slate-900'
    },
    {
        id: 'diversificacion-liderazgo',
        period: '2024 - Presente',
        title: 'Diversificación y Liderazgo Nacional',
        subtitle: 'Presencia Nacional y Liderazgo Reconocido',
        icon: Briefcase,
        description: 'Consolidamos nuestra presencia a nivel nacional estableciendo alianzas estratégicas en todas las provincias del país. Nos posicionamos como líderes reconocidos en nuestras áreas de especialización.',
        highlights: [
            'Alianzas estratégicas en todas las provincias del Ecuador',
            'Servicios a nivel nacional',
            'Liderazgo reconocido en recuperación de cartera',
            'Presencia consolidada a nivel nacional'
        ],
        imageAlt: 'Liderazgo nacional consolidado',
        bgGradient: 'from-green-900 via-slate-800 to-slate-900'
    },
    {
        id: 'renovacion-constante',
        period: 'Presente - Futuro',
        title: 'Renovación Constante',
        subtitle: 'Innovación Continua y Excelencia Sostenida',
        icon: Star,
        description: 'Mantenemos nuestro compromiso con la renovación constante, la capacitación continua y el desarrollo de metodologías propias que nos permiten mantenernos a la vanguardia del ejercicio profesional del derecho.',
        highlights: [
            'Capacitación continua de nuestro personal',
            'Construcción constante de metodologías propias',
            'Expansión tecnológica avanzada',
            'Presencia consolidada a nivel nacional',
            'Innovación permanente en procesos y servicios'
        ],
        imageAlt: 'Renovación constante y futuro',
        bgGradient: 'from-red-900 via-black to-slate-900'
    }
];

const achievements = [
    {
        icon: Users,
        title: 'Formación y Crecimiento',
        description: 'Apertura a pasantes universitarios y capacitación continua, contribuyendo al desarrollo profesional del sector',
        highlight: 'Compromiso Educativo'
    },
    {
        icon: Heart,
        title: 'Responsabilidad Social',
        description: 'Asesoría jurídica gratuita a grupos vulnerables, demostrando nuestro compromiso con la sociedad',
        highlight: 'Impacto Social'
    },
    {
        icon: Briefcase,
        title: 'Diversificación Integral',
        description: 'Servicios especializados desde derecho societario hasta mediación, cubriendo todas las necesidades legales',
        highlight: 'Cobertura Completa'
    },
    {
        icon: TrendingUp,
        title: 'Renovación Constante',
        description: 'Construcción permanente de metodologías propias y expansión tecnológica avanzada',
        highlight: 'Innovación Continua'
    }
];

export default function NuestroHistoriaPage() {
    const router = useRouter();

    return (
        <MainLayout>
            {/* Hero Section - Responsivo corregido */}
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
                            Nuestra{' '}
                            <motion.span
                                style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Historia
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="w-24 h-1 mx-auto mb-8"
                            style={{ backgroundColor: 'var(--gold-dark)' }}
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        />

                        <motion.p
                            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            Dos décadas forjando confianza y excelencia jurídica,
                            desde GESTIUM Servicios Legales Integrales hasta GESTIUM S.A.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Etapas de Desarrollo - Timeline responsivo corregido */}
            <Section className="py-16 sm:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeader
                        title="Etapas de Desarrollo"
                        subtitle="Un recorrido de crecimiento sostenido"
                        description="Desde nuestros primeros pasos como GESTIUM Servicios Legales Integrales hasta nuestra consolidación como GESTIUM S.A., cada etapa ha sido un paso firme hacia la excelencia."
                        centered={true}
                    />

                    <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-16">
                        {stageData.map((stage, index) => {
                            const IconComponent = stage.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={stage.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-12`}
                                >
                                    {/* Imagen Real - Responsivo corregido */}
                                    <div className="w-full lg:w-1/2">
                                        <motion.div
                                            className="relative h-64 sm:h-80 md:h-96 rounded-none overflow-hidden group"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src={
                                                    stage.id === 'constitucion-arranque' ? '/images/ofi/inicios.jpg' :
                                                        stage.id === 'consolidacion-diversificacion' ? '/images/ofi/david-bn.jpg' :
                                                            stage.id === 'estabilidad-fortalecimiento' ? '/images/ofi/Ofi.JPG' :
                                                                stage.id === 'expansion-innovacion' ? '/images/ofi/bg-sala.jpg' :
                                                                    stage.id === 'ampliacion-tecnologia' ? '/images/ofi/tecnologia.jpg' :
                                                                        stage.id === 'diversificacion-liderazgo' ? '/images/ofi/equipo.jpg' :
                                                                            '/images/logo.sfn.png'
                                                }
                                                alt={stage.imageAlt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 group-hover:opacity-40 transition-all duration-300"></div>
                                        </motion.div>
                                    </div>

                                    {/* Contenido - Responsivo corregido */}
                                    <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                                        <div className="flex items-start sm:items-center gap-3 flex-col sm:flex-row">
                                            <div
                                                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full flex-shrink-0"
                                                style={{ backgroundColor: 'var(--red-gestium)' }}
                                            >
                                                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-1"
                                                    style={{ color: 'var(--red-gestium)' }}>
                                                    {stage.period}
                                                </p>
                                                <h3 className="text-2xl sm:text-3xl font-bold mb-1"
                                                    style={{
                                                        fontFamily: "'Playfair Display', serif",
                                                        color: 'var(--charcoal)'
                                                    }}>
                                                    {stage.title}
                                                </h3>
                                                <p className="text-base sm:text-lg font-medium"
                                                    style={{ color: 'var(--silver)' }}>
                                                    {stage.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-base sm:text-lg leading-relaxed"
                                            style={{ color: 'var(--steel)' }}>
                                            {stage.description}
                                        </p>

                                        <div className="space-y-2 sm:space-y-3">
                                            {stage.highlights.map((highlight, highlightIndex) => (
                                                <motion.div
                                                    key={highlightIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * highlightIndex }}
                                                    className="flex items-start gap-2 sm:gap-3"
                                                >
                                                    <ChevronRight
                                                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                                                        style={{ color: 'var(--red-gestium)' }}
                                                    />
                                                    <span className="text-sm sm:text-base"
                                                        style={{ color: 'var(--steel)' }}>
                                                        {highlight}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Logros y Reconocimientos - Grid responsivo corregido */}
            <Section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeader
                        title="Logros que nos Definen"
                        subtitle="Reconocimiento y excelencia"
                        description="Nuestra trayectoria se refleja en la confianza depositada por nuestros clientes y en los logros alcanzados a lo largo de estas dos décadas."
                        centered={true}
                    />

                    <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {achievements.map((achievement, index) => {
                            const IconComponent = achievement.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center group"
                                >
                                    <div
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-full"
                                        style={{ backgroundColor: 'var(--red-gestium)' }}
                                    >
                                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                    </div>
                                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3"
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            color: 'var(--charcoal)'
                                        }}>
                                        {achievement.title}
                                    </h4>
                                    <p className="leading-relaxed text-sm sm:text-base"
                                        style={{ color: 'var(--silver)' }}>
                                        {achievement.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Presente y Futuro - CTA responsivo corregido */}
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

                <div className="container-fluid text-center relative z-10 px-4">
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: 'var(--white)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        GESTIUM S.A. Hoy
                    </motion.h2>

                    <motion.div
                        className="w-20 sm:w-24 md:w-32 h-1 mx-auto mb-6 sm:mb-8"
                        style={{ backgroundColor: 'var(--red-gestium)' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '8rem' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    />

                    <motion.p
                        className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto"
                        style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Como GESTIUM S.A., continuamos construyendo sobre la sólida base de confianza
                        y excelencia establecida desde 2005, proyectándonos hacia el futuro con la
                        misma pasión y compromiso que nos ha caracterizado.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <motion.button
                            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden shadow-xl"
                            style={{
                                background: 'var(--gradient-red)',
                                color: 'var(--white)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/nosotros/equipo')}
                        >
                            <span className="relative z-10">
                                Conocer Nuestro Equipo
                            </span>
                        </motion.button>

                        <motion.button
                            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider border-2 transition-all duration-300 bg-transparent"
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
                            onClick={() => router.push('/nosotros/valores')}
                        >
                            Nuestros Valores
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}