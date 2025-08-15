'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import {
    ScaleIcon,
    Building2,
    Users,
    House,
    ArrowRight,
    CheckCircle,
    Clock,
    Award,
    Heart
} from 'lucide-react';

export default function ServiciosPage() {
    const router = useRouter();

    // DATA FOR THE COMPONENT
    const mainServices = [
        {
            title: 'Recuperación de Cartera',
            subtitle: 'Especialidad Principal',
            description: 'Gestión integral de cobranza judicial, extrajudicial y coactiva respaldada por años de experiencia comprobada. Contamos con metodologías propias desarrolladas específicamente para optimizar los procesos de recuperación, manteniendo la confianza de las principales instituciones financieras del país. Nuestro enfoque combina tecnología avanzada con expertise legal para maximizar la efectividad en cada caso, desde la gestión preventiva hasta la ejecución judicial.',
            icon: ScaleIcon,
            features: [
                'Cobranza Judicial especializada con representación experta',
                'Gestión Extrajudicial efectiva y negociación directa',
                'Proceso Coactivo con más de 14 años de experiencia',
                'Tecnología propia GESTIUM-APP para seguimiento'
            ],
            stats: '95% Efectividad',
            href: '/servicios/recuperacion-cartera',
            image: '/images/servicios/recuperacion.avif'
        },
        {
            title: 'Derecho Inmobiliario',
            subtitle: 'Proyectos Seguros',
            description: 'Asesoría legal integral para el desarrollo de proyectos inmobiliarios. Protegemos su inversión, tanto desde la perspectiva de constructor o desarrollador de proyectos, como de comprador de una unidad habitacional, así como de inversionista, ya sea de manera directa o a través de compañías o fideicomisos. Hemos participado en la constitución y desarrollo de más de cincuenta proyectos inmobiliarios tanto en Quito como en otras ciudades del país.',
            icon: House,
            features: [
                'Constitución y desarrollo de proyectos inmobiliarios',
                'Declaratorias de propiedad horizontal y subdivisiones',
                'Compraventas definitivas y promesas de compraventa',
                'Estructuración a través de compañías o fideicomisos'
            ],
            stats: 'Cumplimiento',
            href: '/servicios/inmobiliario',
            image: '/images/servicios/inmoviliaria.avif'
        },
        {
            title: 'Derecho Corporativo',
            subtitle: 'Asesoría Empresarial',
            description: 'Constitución, transformación, fusión y liquidación de compañías con respaldo legal integral. Brindamos asesoría estratégica en estructuración corporativa, fusiones, transformaciones, aumentos de capital y todos los actos societarios necesarios para el crecimiento y consolidación de su empresa. Nuestra experiencia incluye el manejo de relaciones laborales tanto bajo prestación de servicios como relación de dependencia, asegurando el cumplimiento normativo en cada etapa del ciclo empresarial.',
            icon: Building2,
            features: [
                'Constitución de compañías y estructuración societaria',
                'Fusiones, transformaciones y reorganizaciones',
                'Aumentos y disminuciones de capital social',
                'Liquidaciones societarias y cambios de denominación'
            ],
            stats: 'Respaldo Total',
            href: '/servicios/corporativo',
            image: '/images/servicios/corporativo.avif'
        },
        {
            title: 'Mediación y Arbitraje',
            subtitle: 'Solución de Conflictos',
            description: 'Resolución alternativa de controversias con negociación sólida y resultados positivos. Nuestra experiencia y constante capacitación en este campo nos permite anticipar negociaciones efectivas en procura de soluciones favorables en todo tipo de procesos de mediación y arbitraje. Ofrecemos técnicas especializadas que han demostrado alta efectividad en la resolución extrajudicial de disputas comerciales y civiles, evitando los costos y tiempos del litigio tradicional.',
            icon: Users,
            features: [
                'Mediación especializada en conflictos comerciales',
                'Arbitraje comercial con árbitros certificados',
                'Negociación efectiva con técnicas avanzadas',
                'Soluciones extrajudiciales personalizadas'
            ],
            stats: 'Resultados Positivos',
            href: '/servicios/mediacion',
            image: '/images/servicios/mediacion.avif'
        },
        {
            title: 'Derecho de Familia',
            subtitle: 'Acompañamiento Humano',
            description: 'Ofrecemos un acompañamiento cercano y humano en todas las cuestiones relacionadas con el derecho de familia. Esto incluye asesoría y representación en procesos de divorcio, acuerdos de custodia, alimentos, patria potestad y mediación familiar. Nos enfocamos en encontrar soluciones que protejan el bienestar de la familia y resuelvan los conflictos de la manera más armoniosa posible, priorizando siempre el interés superior de los menores cuando están involucrados.',
            icon: Heart,
            features: [
                'Procesos de divorcio y separación consensuada',
                'Acuerdos de custodia y régimen de visitas',
                'Fijación y modificación de pensiones alimenticias',
                'Mediación familiar y soluciones amigables'
            ],
            stats: 'Enfoque Humano',
            href: '/servicios/familia',
            image: '/images/servicios/familia.avif'
        },
        {
            title: 'Derecho Laboral',
            subtitle: 'Relaciones Equilibradas',
            description: 'En el ámbito laboral, brindamos asesoría integral tanto a empleadores como a trabajadores. Esto abarca desde la elaboración y revisión de contratos laborales, hasta la representación en casos de despidos, visto bueno ante el Ministerio de Trabajo, reclamaciones de derechos laborales y mediación en conflictos laborales. Nuestro objetivo es asegurar que cada parte entienda sus derechos y obligaciones, logrando soluciones justas y equitativas que fortalezcan las relaciones laborales.',
            icon: Clock,
            features: [
                'Elaboración y revisión de contratos laborales',
                'Representación en despidos y visto bueno',
                'Reclamaciones de derechos laborales',
                'Mediación en conflictos empleador-trabajador'
            ],
            stats: 'Soluciones Justas',
            href: '/servicios/laboral',
            image: '/images/servicios/laboral.avif'
        },
        {
            title: 'Gestiones y Trámites',
            subtitle: 'Eficiencia Institucional',
            description: 'Desde una perspectiva profesional, cuidando el cumplimiento del más mínimo detalle, podemos guiar sus procesos, calificaciones y reclamos de todo tipo ante instituciones públicas, basándonos en nuestra experiencia y la solvencia de nuestros conocimientos. Contamos con contactos estratégicos en diferentes entidades públicas y privadas, lo que nos permite realizar todo trámite de manera rápida y eficaz, eludiendo las trabas que comúnmente se generan en los procesos administrativos.',
            icon: Award,
            features: [
                'Trámites ante instituciones públicas',
                'Procesos de calificación y certificación',
                'Reclamos administrativos especializados',
                'Gestión eficaz con contactos estratégicos'
            ],
            stats: 'Agilidad Comprobada',
            href: '/servicios/tramites',
            image: '/images/servicios/tramites.avif'
        }
    ];



    const heroBadges = ['Especialización', 'Experiencia', 'Tecnología', 'Resultados'];

    // RENDER METHOD
    return (
        <MainLayout>
            {/* Hero Section */}
            <HeroSection
                backgroundImage="/images/ofi/Ofi.JPG"
                title={
                    <>
                        Nuestros{' '}
                        <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>
                            Servicios
                        </span>
                    </>
                }
                description={
                    <>
                        Soluciones jurídicas especializadas respaldadas por{' '}
                        <span className="font-semibold" style={{ textShadow: '0 0 9px black' }}>
                            más de 20 años de experiencia
                        </span>{' '}
                        y la confianza de las principales instituciones del Ecuador.
                    </>
                }
            >
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                    {heroBadges.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/10 rounded-full backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        >
                            <CheckCircle size={16} style={{ color: 'var(--gold-dark)' }} />
                            <span className="font-medium text-white">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </HeroSection>

            {/* ÚNICAMENTE Servicios Principales */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Nuestros Servicios Especializados"
                    description="Áreas de práctica donde concentramos nuestra experiencia de más de 20 años y el conocimiento desarrollado junto a las principales instituciones del país"
                    centered={true}
                    className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {mainServices.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group bg-white border transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                                style={{
                                    boxShadow: 'var(--shadow-minimal)',
                                    borderColor: '#e2e8f0'
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                onClick={() => router.push(service.href)}
                            >
                                <div
                                    className="relative p-8 text-white min-h-[300px] flex flex-col"
                                    style={{
                                        backgroundImage: `url(${service.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Header compacto */}
                                        <div className="flex items-center justify-between mb-3 flex-shrink-0">
                                            <div className="flex items-center gap-3">
                                                <IconComponent size={24} />
                                                <span className="text-sm font-medium opacity-90">{service.subtitle}</span>
                                            </div>
                                            <div className="text-lg font-bold" style={{ color: 'var(--red-gestium)' }}>
                                                {service.stats}
                                            </div>
                                        </div>

                                        {/* Título */}
                                        <h3 className="text-2xl font-bold mb-4 flex-shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {service.title}
                                        </h3>

                                        {/* Descripción que crece para ocupar el espacio restante */}
                                        <div className="flex-1">
                                            <p className="text-sm leading-relaxed opacity-90 text-justify">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-white">
                                    <div className="grid grid-cols-1 gap-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm">
                                                <CheckCircle size={14} style={{ color: 'var(--red-gestium)' }} />
                                                <span style={{ color: 'var(--silver)' }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <motion.button
                                        className="group/btn w-full flex items-center justify-center gap-2 py-3 px-4 border-2 transition-all duration-300"
                                        style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}
                                        whileHover={{ backgroundColor: 'var(--charcoal)', color: 'white' }}
                                    >
                                        <span className="font-medium">Ver Detalles</span>
                                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* CTA Section mantiene igual */}
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
                <div className="container-fluid relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                            ¿Necesita Asesoría Legal Especializada?
                        </h2>
                        <motion.div
                            className="w-32 h-1 mx-auto mb-8"
                            style={{ backgroundColor: 'var(--red-gestium)' }}
                            initial={{ width: 0 }}
                            whileInView={{ width: 128 }}
                            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        />
                        <p className="text-lg mb-8 max-w-2xl mx-auto">
                            Contáctenos para una consulta personalizada y descubra cómo podemos ayudarle
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300"
                                style={{ background: 'var(--gradient-red)', color: 'white', border: 'none' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => router.push('/contacto')}
                            >
                                Consulta Gratuita
                            </motion.button>
                            <motion.button
                                className="px-8 py-3 font-bold uppercase tracking-wider border-2 bg-transparent transition-all duration-300"
                                style={{ borderColor: 'white', color: 'white' }}
                                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                onClick={() => router.push('tel:+5932543653')}
                            >
                                (+593) 2-543-653
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
