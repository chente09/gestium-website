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
    Heart,
    Users,
    FileText,
    Shield,
    CheckCircle,
    Baby,
    Home,
    Gavel
} from 'lucide-react';

// Definimos la "forma" de los datos para TypeScript
interface FamilyService {
    icon: React.ElementType;
    title: string;
    description: string;
}

interface FamilyValue {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function DerechoFamiliaPage() {
    const router = useRouter();

    const familyServices: FamilyService[] = [
        {
            icon: Users,
            title: 'Procesos de Divorcio',
            description: 'Asesoría integral en procesos de divorcio consensual y contencioso, priorizando el bienestar de todos los miembros de la familia y buscando soluciones armoniosas.'
        },
        {
            icon: Baby,
            title: 'Custodia y Régimen de Visitas',
            description: 'Establecimiento de acuerdos de custodia y régimen de visitas que protejan el interés superior de los menores, garantizando el derecho de los niños a mantener relación con ambos padres.'
        },
        {
            icon: Home,
            title: 'Pensiones Alimenticias',
            description: 'Fijación, modificación y seguimiento de pensiones alimenticias, asegurando que los menores y beneficiarios reciban el sustento económico adecuado.'
        },
        {
            icon: Gavel,
            title: 'Mediación Familiar',
            description: 'Facilitamos espacios de diálogo constructivo para resolver conflictos familiares de manera pacífica, preservando los vínculos afectivos y evitando traumas innecesarios.'
        }
    ];

    const familyValues: FamilyValue[] = [
        {
            icon: Heart,
            title: 'Enfoque Humano y Empático',
            description: 'Entendemos que cada situación familiar es única y requiere un trato personalizado, con sensibilidad hacia las emociones involucradas.'
        },
        {
            icon: Shield,
            title: 'Protección de Menores',
            description: 'En todos nuestros procesos priorizamos el interés superior de los niños, garantizando su bienestar físico, emocional y económico.'
        },
        {
            icon: FileText,
            title: 'Confidencialidad y Respeto',
            description: 'Mantenemos la más estricta confidencialidad y respeto por la privacidad familiar, creando un ambiente de confianza y seguridad.'
        }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/servicios/familia.avif"
                title={
                    <>
                        Derecho de <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>Familia</span>
                    </>
                }
                description="Acompañamiento cercano y humano en todas las cuestiones relacionadas con el derecho de familia. Priorizamos el bienestar familiar y el interés superior de los menores."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Enfoque Humano', 'Soluciones Armoniosas', 'Protección de Menores'].map((item, index) => (
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

            {/* --- SERVICIOS FAMILIARES --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Nuestros Servicios Especializados"
                    description="Cubrimos todas las áreas del derecho de familia con un enfoque integral y humanizado."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {familyServices.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 border border-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-red-50 group-hover:bg-red-100 transition-colors duration-300 mx-auto">
                                <service.icon size={28} className="text-gold-dark" />
                            </div>
                            <h3 className="text-xl font-bold font-playfair mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600 text-justify">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- INTRODUCCIÓN AL SERVICIO --- */}
            <Section background="white" padding="lg">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="w-40 h-40 rounded-full flex items-center justify-center"
                            style={{ background: 'var(--gradient-red)' }}
                        >
                            <Heart className="w-20 h-20 text-white" />
                        </motion.div>
                    </div>
                    <div className="md:col-span-2">
                        <SectionHeader
                            title="Cuidando el Bienestar de su Familia"
                            description="Los conflictos familiares requieren un manejo especializado que vaya más allá del aspecto legal. Nuestro enfoque integral combina conocimiento jurídico con sensibilidad humana, buscando soluciones que protejan los vínculos familiares y promuevan el bienestar de todos los involucrados, especialmente de los menores. Creemos en la resolución pacífica de controversias y en la construcción de acuerdos duraderos."
                            centered={false}
                            showDivider={true}
                            className="mb-0 text-justify"
                        />
                    </div>
                </div>
            </Section>

            {/* --- VALORES Y PRINCIPIOS --- */}
            <Section background="platinum" padding="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-80 lg:h-[450px] overflow-hidden">
                        <Image src="/images/areas/familia2.avif" alt="Consulta familiar" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
                    </div>
                    <div>
                        <SectionHeader
                            title="Nuestros Valores en la Práctica"
                            description="Cada caso es abordado con los más altos estándares éticos y un profundo respeto por la dignidad humana."
                            centered={false}
                            className="mb-8 text-justify"
                        />
                        <div className="space-y-6">
                            {familyValues.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                >
                                    <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-platinum">
                                        <value.icon className="w-6 h-6" style={{ color: 'var(--red-gestium)' }} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800">{value.title}</h4>
                                        <p className="text-sm text-slate-600 text-justify">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <div className="py-20 text-center relative" style={{ backgroundImage: "url('/images/ofi/justicia.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }} />
                <div className="container-fluid relative z-10 text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Proteja el Bienestar de su Familia</h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Permítanos acompañarle en este momento importante. Ofrecemos consultas confidenciales en un ambiente de respeto y comprensión.</p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white"
                            style={{ background: 'var(--gradient-red)', cursor: 'pointer' }}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Consulta Confidencial
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}