'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    FileText,
    Building2,
    Users,
    House,
    UserCheck,
    Calculator,
    Target,
    ArrowRight,
    CheckCircle,
    Briefcase // Icono que faltaba
} from 'lucide-react';

export default function AreasPage() {
    const router = useRouter();

    // DATOS PARA LAS ÁREAS PRINCIPALES
    const mainAreas = [
        {
            title: 'Recuperación de Cartera',
            subtitle: 'Nuestra Especialidad Principal',
            description: 'Gestión integral de cobranza judicial, extrajudicial y coactiva con tecnología propia y más de 20 años de experiencia, garantizando los más altos índices de efectividad.',
            icon: FileText,
            specialties: [
                'Cobranza Judicial especializada',
                'Gestión Extrajudicial preventiva',
                'Proceso Coactivo (14+ años experiencia)',
                'Mediación y arbitraje en cobranzas'
            ],
            image: '/images/areas/cobranza.jpg',
            href: '/areas/recuperacion-cartera',
        },
        {
            title: 'Derecho Inmobiliario',
            subtitle: 'Proyectos Seguros y Rentables',
            description: 'Asesoría especializada en el desarrollo de proyectos inmobiliarios, desde la estructuración legal hasta la comercialización, con experiencia en más de 50 desarrollos exitosos.',
            icon: House,
            specialties: [
                'Constitución de proyectos inmobiliarios',
                'Declaratorias de propiedad horizontal',
                'Compraventas y promesas de compraventa',
                'Hipotecas y garantías reales'
            ],
            image: '/images/areas/inmobiliaria.jpg',
            href: '/areas/inmobiliario',
        },
        {
            title: 'Derecho Corporativo',
            subtitle: 'Asesoría Empresarial Integral',
            description: 'Ofrecemos un respaldo legal completo para la vida de su compañía: constitución, transformación, fusión, aumentos de capital y procesos de liquidación.',
            icon: Building2,
            specialties: [
                'Constitución de compañías',
                'Fusiones y transformaciones societarias',
                'Aumentos y disminuciones de capital',
                'Liquidaciones y disoluciones'
            ],
            image: '/images/areas/companias.jpg',
            href: '/areas/corporativo',
        },
        {
            title: 'Mediación y Arbitraje',
            subtitle: 'Resolución Alternativa de Conflictos',
            description: 'Solución efectiva de controversias mediante negociación especializada y métodos alternativos que ahorran tiempo y recursos a nuestros clientes.',
            icon: Users,
            specialties: [
                'Mediación comercial y civil',
                'Arbitraje institucional y Ad Hoc',
                'Negociación estratégica',
                'Soluciones extrajudiciales eficientes'
            ],
            image: '/images/areas/mediacion.jpg',
            href: '/areas/mediacion',
        }
    ];

    // DATOS PARA ÁREAS COMPLEMENTARIAS
    const additionalAreas = [
        { title: 'Derecho Civil', description: 'Resolución de conflictos en materias de bienes, sucesiones y obligaciones.', icon: Target },
        { title: 'Derecho Laboral', description: 'Asesoría integral en relaciones laborales, contratos y resolución de conflictos.', icon: UserCheck },
        { title: 'Consultoría Financiera', description: 'Asesoramiento especializado en temas financieros, bancarios y de seguros.', icon: Calculator }
    ];

    // DATOS PARA EL PROCESO DE TRABAJO
    const processSteps = [
        { step: '01', title: 'Consulta Inicial', description: 'Análisis detallado de su caso y definición de la estrategia legal a seguir.' },
        { step: '02', title: 'Planificación', description: 'Desarrollo de un plan de acción con cronograma y objetivos claros y medibles.' },
        { step: '03', title: 'Ejecución', description: 'Implementación de la estrategia con seguimiento continuo y comunicación constante.' },
        { step: '04', title: 'Resultados', description: 'Obtención de resultados efectivos y entrega de reportes detallados del proceso.' }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/ofi/ofi.JPG"
                title={
                    <>
                        Áreas de <span style={{ color: 'var(--red-gestium)', textShadow: '0 0 9px gray' }}>Práctica</span>
                    </>
                }
                description={
                    <>
                        Especialización comprobada en las{' '}
                        <span className="font-semibold" style={{ color: 'var(--red-light)', textShadow: '0 0 9px black' }}>
                            principales ramas del derecho
                        </span>, respaldada por décadas de experiencia y resultados.
                    </>
                }
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Experiencia', 'Especialización', 'Resultados', 'Tecnología'].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/10 rounded-full backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        >
                            <CheckCircle size={16} style={{ color: 'var(--red-gestium)' }} />
                            <span className="font-medium text-white">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </HeroSection>

            {/* --- ÁREAS PRINCIPALES (REDiseñado) --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Nuestras Especialidades"
                    description="Áreas donde concentramos nuestra mayor experiencia y conocimiento especializado para ofrecer soluciones de alto impacto."
                    centered={true}
                    className="mb-16"
                />
                <div className="space-y-16">
                    {mainAreas.map((area, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className={`relative h-80 lg:h-[450px] overflow-hidden ${isEven ? 'lg:order-last' : ''}`}>

                                    <Image
                                        src={area.image}
                                        alt={area.title}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110 "
                                        // ✨ CONFIGURACIONES CLAVE PARA CALIDAD MÁXIMA
                                        quality={95} // Calidad máxima para fotos profesionales
                                        priority={true} // Prioridad para las primeras 4 imágenes
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                        placeholder="blur" // Blur mientras carga
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                    />
                                    <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />
                                    {/* Overlay Premium */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                </div>
                                <div className="p-4">
                                    <p className="font-semibold text-red-gestium mb-2">{area.subtitle}</p>
                                    <h3 className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-slate-900">{area.title}</h3>
                                    <p className="text-slate-600 mb-6">{area.description}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                        {area.specialties.map((spec, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle size={16} className="text-red-900 flex-shrink-0" />
                                                <span className="text-sm text-slate-700">{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <motion.button
                                        onClick={() => router.push(area.href)}
                                        className="inline-flex items-center gap-2 font-bold text-red-900"
                                        whileHover="hover"
                                    >
                                        <span>Conocer Más</span>
                                        <motion.div variants={{ hover: { x: 5 } }}>
                                            <ArrowRight size={16} />
                                        </motion.div>
                                    </motion.button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* --- ÁREAS COMPLEMENTARIAS --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Áreas Complementarias"
                    description="Servicios adicionales que complementan nuestra oferta especializada para brindar un respaldo legal 360°."
                    centered={true}
                    className="mb-12"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {additionalAreas.map((area, index) => {
                        const IconComponent = area.icon;
                        return (
                            <motion.div
                                key={index}
                                className="bg-white p-8 border border-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
                                    <IconComponent size={28} className="text-red-gestium" />
                                </div>
                                <h4 className="text-xl font-bold font-playfair mb-3 text-slate-900">{area.title}</h4>
                                <p className="text-sm leading-relaxed text-slate-600">{area.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* --- PROCESO DE TRABAJO --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Nuestro Proceso de Trabajo"
                    description="Metodología probada que garantiza resultados efectivos y transparentes en cada caso que asumimos."
                    centered={true}
                    className="mb-16"
                />
                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8">
                    {/* Línea conectora para desktop */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-slate-200" />

                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative text-center px-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg border-4 border-white shadow-lg"
                                style={{ background: 'var(--gradient-red)' }}>
                                {step.step}
                            </div>
                            <h4 className="text-lg font-bold mb-3 text-slate-900">{step.title}</h4>
                            <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <div className="py-20 text-center relative" style={{ backgroundImage: "url('/images/ofi/justicia.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }} />
                <div className="container-fluid relative z-10 text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <Briefcase size={40} className="mx-auto mb-4 text-red-gestium" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>¿En Qué Área Podemos Ayudarle?</h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Nuestros especialistas están listos para brindarle la asesoría que necesita para alcanzar sus objetivos.</p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white"
                            style={{ background: 'var(--gradient-red)' }}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Consulta Especializada
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
