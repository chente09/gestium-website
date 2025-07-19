'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Clock, Award, Users, CheckCircle, Lightbulb, Scale } from 'lucide-react';

const missionVisionData = [
    {
        id: 'mission',
        title: 'Nuestra Misión',
        icon: Target,
        content: 'Dar un soporte íntegro a nuestros clientes en cualquier campo que lo requieran dentro del ámbito legal; realizar toda gestión con la mayor agilidad y eficiencia, para satisfacer oportunamente las necesidades de nuestros clientes, apoyándonos principalmente en el recurso humano debidamente especializado y capacitado, buscando brindar la mayor calidad en nuestros servicios, proponiendo siempre precios muy competitivos.',
        color: 'from-red-600 to-red-700',
        bgImage: '/images/mision.jpg'
    },
    {
        id: 'vision',
        title: 'Nuestra Visión',
        icon: Eye,
        content: 'Consolidar nuestro crecimiento y mantenernos en la imagen de nuestros clientes como una alternativa altamente eficaz y cercana para la solución de todo tipo de conflicto o gestión.',
        color: 'from-slate-700 to-slate-900',
        bgImage: '/images/vision.jpg'
    }
];

const coreValues = [
    {
        title: 'Responsabilidad',
        description: 'Asumimos cada caso con el compromiso total hacia nuestros clientes',
        icon: Shield
    },
    {
        title: 'Especialización',
        description: 'Conocimiento profundo y experiencia comprobada en nuestras áreas de práctica',
        icon: Award
    },
    {
        title: 'Puntualidad',
        description: 'Cumplimiento riguroso de plazos y compromisos adquiridos',
        icon: Clock
    },
    {
        title: 'Profesionalismo',
        description: 'Excelencia técnica y ética en cada actuación jurídica',
        icon: Scale
    },
    {
        title: 'Compromiso',
        description: 'Dedicación absoluta para alcanzar los objetivos de nuestros clientes',
        icon: Heart
    },
    {
        title: 'Calidad',
        description: 'Servicios de la más alta calidad respaldados por resultados tangibles',
        icon: CheckCircle
    },
    {
        title: 'Integridad',
        description: 'Transparencia y honestidad en todas nuestras relaciones profesionales',
        icon: Users
    },
    {
        title: 'Honestidad',
        description: 'Comunicación clara y veraz en cada etapa del proceso',
        icon: Lightbulb
    }
];

const principlesData = [
    {
        title: 'Filosofía de Trabajo',
        description: 'Nuestra filosofía está enfocada en la construcción y el mantenimiento de una relación profesional a largo plazo con nuestros clientes, basada en el cumplimiento, respeto y la confianza mutua.',
        image: '/images/filosy.avif'
    },
    {
        title: 'Servicio Personalizado',
        description: 'Contamos con un equipo de profesionales idóneo y personalizado, así como integrado y estable, lo que nos permite establecer sólidas relaciones con nuestros clientes.',
        image: '/images/servicio.avif'
    },
    {
        title: 'Adaptabilidad',
        description: 'Tenemos la flexibilidad para adaptarnos al perfil y requerimientos de nuestro cliente, lo que nos permite intervenir en diferentes campos del derecho.',
        image: '/images/adptabilidad.avif'
    }
];

export default function NuestrosValoresPage() {
    const router = useRouter();

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
                            Nuestros{' '}
                            <motion.span
                                style={{ color: 'var(--red-gestium)', textShadow: '0 0 9px gray' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Valores
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
                            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            Principios fundamentales que guían nuestra actuación profesional
                            y fortalecen la confianza de nuestros clientes.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Misión y Visión */}
            <Section background="platinum" padding="lg">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeader
                        title="Misión y Visión"
                        subtitle="Nuestro propósito y dirección estratégica"
                        description="Los pilares que definen nuestro compromiso con la excelencia jurídica y el servicio al cliente."
                        centered={true}
                    />

                    <div className="mt-16 space-y-16">
                        {missionVisionData.map((item, index) => {
                            const IconComponent = item.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
                                >
                                    {/* Imagen */}
                                    <div className="w-full lg:w-1/2">
                                        <motion.div
                                            className="relative h-64 sm:h-80 lg:h-96 rounded-none overflow-hidden group"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            
                                            <Image
                                                src={item.bgImage}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                quality={95}
                                                priority={true}
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                            />
                                            <div className="absolute inset-0 transition-all duration-300"></div>
                                        </motion.div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="lg:w-1/2 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-3xl font-playfair font-bold text-slate-900">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="text-lg text-slate-700 leading-relaxed">
                                            {item.content}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Valores Fundamentales */}
            <Section background="white" padding="lg">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeader
                        title="Valores Fundamentales"
                        subtitle="Los principios que nos definen"
                        description="Cada uno de estos valores se constituye en componente fundamental e intangible de nuestra ideología de trabajo y de nuestro actuar diario como profesionales."
                        centered={true}
                    />

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => {
                            const IconComponent = value.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card padding="lg" shadow="strong" rounded="sm" className="bg-white">
                                        <div className="text-center">
                                            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                                style={{ backgroundColor: 'rgba(167, 26, 33, 0.1)' }}>
                                                <IconComponent
                                                    className="w-8 h-8"
                                                    style={{ color: 'var(--red-gestium)' }}
                                                />
                                            </div>

                                            <h4 className="text-xl font-playfair font-bold mb-4"
                                                style={{ color: 'var(--charcoal)' }}>
                                                {value.title}
                                            </h4>

                                            <p className="leading-relaxed"
                                                style={{ color: 'var(--silver)' }}>
                                                {value.description}
                                            </p>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Filosofía y Principios */}
            <Section background="platinum" padding="lg">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeader
                        title="Nuestra Filosofía"
                        subtitle="Principios que guían nuestro actuar"
                        description="La base de nuestra relación profesional con los clientes y la comunidad jurídica."
                        centered={true}
                    />

                    <div className="mt-16 grid lg:grid-cols-3 gap-8">
                        {principlesData.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card padding="lg" shadow="medium" rounded="sm">
                                    <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                                        <Image
                                            src={principle.image}
                                            alt={principle.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                                    </div>

                                    <h4 className="text-xl font-playfair font-bold mb-4"
                                        style={{ color: 'var(--charcoal)' }}>
                                        {principle.title}
                                    </h4>
                                    <p className="leading-relaxed"
                                        style={{ color: 'var(--silver)' }}>
                                        {principle.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Call to Action */}
            <div
                className="py-20 relative overflow-hidden"
                style={{
                    background: 'var(--gradient-primary)',
                    backgroundImage: "url('/images/ofi/justicia.jpg')",
                    backgroundBlendMode: 'overlay'
                }}
            >
                <div className="container-fluid text-center relative z-10">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: 'var(--white)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Comprometidos con la Excelencia
                    </motion.h2>

                    <motion.div
                        className="w-32 h-1 mx-auto mb-8"
                        style={{ backgroundColor: 'var(--red-gestium)' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    />

                    <motion.p
                        className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto"
                        style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Nuestros valores no son solo palabras, son el fundamento de cada decisión
                        y cada acción que emprendemos en favor de nuestros clientes.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <motion.button
                            className="px-12 py-4 font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden shadow-xl"
                            style={{
                                background: 'var(--gradient-red)',
                                color: 'var(--white)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/nosotros/historia')}
                        >
                            <span className="relative z-10">
                                Conocer Nuestra Historia
                            </span>
                        </motion.button>

                        <motion.button
                            className="px-12 py-4 font-bold uppercase tracking-wider border-2 transition-all duration-300 bg-transparent"
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
                            onClick={() => router.push('/nosotros/equipo')}
                        >
                            Nuestro Equipo
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}