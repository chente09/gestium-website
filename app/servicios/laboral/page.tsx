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
    Clock,
    Users,
    FileSignature,
    ShieldCheck,
    CheckCircle,
    Briefcase,
    Scale,
    HandHeart
} from 'lucide-react';

// Definimos la "forma" de los datos para TypeScript
interface LaborService {
    icon: React.ElementType;
    title: string;
    description: string;
}

interface ClientType {
    type: 'employer' | 'employee';
    title: string;
    services: string[];
}

export default function DerechoLaboralPage() {
    const router = useRouter();

    const laborServices: LaborService[] = [
        {
            icon: FileSignature,
            title: 'Contratos Laborales',
            description: 'Elaboración y revisión de contratos de trabajo, acuerdos de confidencialidad, cláusulas de no competencia y toda la documentación necesaria para formalizar relaciones laborales.'
        },
        {
            icon: Scale,
            title: 'Procesos de Despido y Visto Bueno',
            description: 'Representación legal en procesos de terminación laboral, gestión de visto bueno ante el Ministerio de Trabajo y defensa en casos de despido intempestivo.'
        },
        {
            icon: HandHeart,
            title: 'Mediación Laboral',
            description: 'Facilitamos la resolución amigable de conflictos entre empleadores y trabajadores, evitando litigios costosos y preservando las relaciones laborales.'
        },
        {
            icon: ShieldCheck,
            title: 'Cumplimiento Normativo',
            description: 'Asesoría en el cumplimiento de la legislación laboral ecuatoriana, políticas internas, reglamentos de trabajo y normativas de seguridad ocupacional.'
        }
    ];

    const clientTypes: ClientType[] = [
        {
            type: 'employer',
            title: 'Para Empleadores',
            services: [
                'Estructuración de políticas laborales internas',
                'Gestión de procesos disciplinarios',
                'Asesoría en reorganizaciones empresariales',
                'Prevención de riesgos laborales legales'
            ]
        },
        {
            type: 'employee',
            title: 'Para Trabajadores',
            services: [
                'Defensa en casos de despido injustificado',
                'Reclamación de derechos laborales',
                'Asesoría en acoso laboral y discriminación',
                'Negociación de liquidaciones'
            ]
        }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/servicios/laboral.avif"
                title={
                    <>
                        Derecho <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>Laboral</span>
                    </>
                }
                description="Asesoría integral en relaciones laborales para empleadores y trabajadores. Promovemos relaciones equilibradas y justas que fortalezcan el ambiente laboral."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Relaciones Equilibradas', 'Cumplimiento Legal', 'Soluciones Justas'].map((item, index) => (
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

            {/* --- SERVICIOS LABORALES --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Servicios Especializados en Derecho Laboral"
                    description="Cobertura integral de todas las áreas del derecho del trabajo, desde la prevención hasta la resolución de conflictos."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {laborServices.map((service, index) => (
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
                            <Clock className="w-20 h-20 text-white" />
                        </motion.div>
                    </div>
                    <div className="md:col-span-2">
                        <SectionHeader
                            title="Equilibrio y Justicia en las Relaciones Laborales"
                            description="Las relaciones laborales exitosas se construyen sobre la base del respeto mutuo, el cumplimiento de la normativa y la comprensión de los derechos y obligaciones de cada parte. Nuestro enfoque busca crear un ambiente de trabajo armonioso donde tanto empleadores como trabajadores puedan prosperar, ofreciendo soluciones legales que protejan los intereses legítimos de ambas partes."
                            centered={false}
                            showDivider={true}
                            className="mb-0 text-justify"
                        />
                    </div>
                </div>
            </Section>

            {/* --- SERVICIOS POR TIPO DE CLIENTE --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Asesoría Especializada para Cada Parte"
                    description="Entendemos las necesidades específicas tanto de empleadores como de trabajadores, ofreciendo servicios personalizados para cada situación."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {clientTypes.map((client, index) => (
                        <motion.div
                            key={index}
                            className="bg-platinum p-8 border border-slate-200/80"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-md">
                                    {client.type === 'employer' ? (
                                        <Briefcase size={28} style={{ color: 'var(--red-gestium)' }} />
                                    ) : (
                                        <Users size={28} style={{ color: 'var(--red-gestium)' }} />
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">{client.title}</h3>
                            </div>
                            <div className="space-y-3">
                                {client.services.map((service, serviceIndex) => (
                                    <div key={serviceIndex} className="flex items-center gap-3">
                                        <CheckCircle size={16} style={{ color: 'var(--red-gestium)' }} />
                                        <span className="text-slate-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- SECCIÓN CON IMAGEN --- */}
            <Section background="white" padding="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionHeader
                            title="Prevención y Resolución de Conflictos"
                            description="La mejor estrategia legal es la prevención. Nuestro enfoque proactivo ayuda a evitar conflictos laborales antes de que surjan, pero cuando es necesario, contamos con la experiencia para resolverlos de manera eficiente y justa."
                            centered={false}
                            className="mb-8 "
                        />
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="w-6 h-6 mt-1" style={{ color: 'var(--red-gestium)' }} />
                                <div>
                                    <h4 className="font-semibold text-slate-800">Asesoría Preventiva</h4>
                                    <p className="text-sm text-slate-600">Identificamos y solucionamos potenciales problemas antes de que se conviertan en conflictos.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <HandHeart className="w-6 h-6 mt-1" style={{ color: 'var(--red-gestium)' }} />
                                <div>
                                    <h4 className="font-semibold text-slate-800">Mediación Especializada</h4>
                                    <p className="text-sm text-slate-600">Facilitamos espacios de diálogo para encontrar soluciones que beneficien a ambas partes.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Scale className="w-6 h-6 mt-1" style={{ color: 'var(--red-gestium)' }} />
                                <div>
                                    <h4 className="font-semibold text-slate-800">Representación Legal</h4>
                                    <p className="text-sm text-slate-600">Cuando es necesario litigar, ofrecemos una defensa sólida y estratégica.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-80 lg:h-[450px] overflow-hidden">
                        <Image src="/images/areas/ambiente.avif" alt="Ambiente laboral" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
                    </div>
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <div className="py-20 text-center relative" style={{ backgroundImage: "url('/images/ofi/justicia.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }} />
                <div className="container-fluid relative z-10 text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Fortalezca sus Relaciones Laborales</h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Ya sea empleador o trabajador, podemos ayudarle a proteger sus derechos y cumplir con sus obligaciones. Contáctenos para una asesoría personalizada.</p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white"
                            style={{ background: 'var(--gradient-red)', cursor: 'pointer' }}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Asesoría Laboral
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}