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
    Award,
    FileText,
    Building,
    CheckCircle,
    Clock,
    Users,
    Phone,
    Shield
} from 'lucide-react';

// Definimos la "forma" de los datos para TypeScript
interface InstitutionalService {
    icon: React.ElementType;
    title: string;
    description: string;
}

interface ProcessType {
    category: string;
    processes: string[];
}

export default function GestionesTramitesPage() {
    const router = useRouter();

    const institutionalServices: InstitutionalService[] = [
        {
            icon: Building,
            title: 'Trámites ante Instituciones Públicas',
            description: 'Gestión integral de procesos ante ministerios, municipios, superintendencias y demás entidades gubernamentales, aprovechando nuestros contactos estratégicos.'
        },
        {
            icon: FileText,
            title: 'Procesos de Calificación y Certificación',
            description: 'Acompañamiento en obtención de permisos, licencias, certificaciones y calificaciones requeridas para el desarrollo de actividades empresariales.'
        },
        {
            icon: Phone,
            title: 'Reclamos y Recursos Administrativos',
            description: 'Representación especializada en reclamos ante entidades públicas y privadas, incluyendo recursos de reposición, apelación y revisión.'
        },
        {
            icon: Shield,
            title: 'Cumplimiento Regulatorio',
            description: 'Asesoría para el cumplimiento de normativas específicas por sector, manteniendo actualizados todos los requerimientos legales de su actividad.'
        }
    ];

    const processTypes: ProcessType[] = [
        {
            category: 'Entidades Municipales',
            processes: [
                'Permisos de construcción y habitabilidad',
                'Licencias metropolitanas únicas (LUAE)',
                'Patentes municipales y renovaciones',
                'Certificados de no adeudar al municipio'
            ]
        },
        {
            category: 'Superintendencias y Ministerios',
            processes: [
                'Trámites ante Superintendencia de Compañías',
                'Gestiones en Ministerio de Trabajo',
                'Procesos ante Superintendencia de Bancos',
                'Certificaciones ministeriales especializadas'
            ]
        },
        {
            category: 'Servicios de Rentas Internas (SRI)',
            processes: [
                'Obtención y actualización de RUC',
                'Devoluciones de impuestos y retenciones',
                'Procesos de exoneración tributaria',
                'Reclamos y recursos ante el SRI'
            ]
        },
        {
            category: 'Registro Civil y Notarías',
            processes: [
                'Inscripciones y certificaciones civiles',
                'Apostillas y legalizaciones',
                'Procesos notariales especializados',
                'Gestiones consulares y migratorias'
            ]
        }
    ];

    const advantages = [
        {
            icon: Clock,
            title: 'Agilidad Comprobada',
            description: 'Nuestros contactos estratégicos y conocimiento profundo de los procesos nos permiten acelerar significativamente los tiempos de gestión.'
        },
        {
            icon: Users,
            title: 'Red de Contactos Institucionales',
            description: 'Mantenemos relaciones profesionales sólidas con funcionarios clave en diversas entidades públicas y privadas.'
        },
        {
            icon: Shield,
            title: 'Cumplimiento Garantizado',
            description: 'Aseguramos que todos los trámites cumplan estrictamente con los requisitos legales y normativos vigentes.'
        }
    ];

    return (
        <MainLayout>
            {/* --- HERO SECTION --- */}
            <HeroSection
                backgroundImage="/images/servicios/tramites.avif"
                title={
                    <>
                        Gestiones y <span style={{ color: 'var(--gold-dark)', textShadow: '0 0 9px gray' }}>Trámites</span>
                    </>
                }
                description="Eficiencia institucional respaldada por contactos estratégicos. Simplificamos los procesos burocráticos y garantizamos el cumplimiento normativo con agilidad comprobada."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Contactos Estratégicos', 'Agilidad Comprobada', 'Cumplimiento Total'].map((item, index) => (
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

            {/* --- SERVICIOS INSTITUCIONALES --- */}
            <Section background="platinum" padding="lg">
                <SectionHeader
                    title="Servicios de Gestión Institucional"
                    description="Cobertura integral para todos sus requerimientos ante entidades públicas y privadas."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {institutionalServices.map((service, index) => (
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
                            <Award className="w-20 h-20 text-white" />
                        </motion.div>
                    </div>
                    <div className="md:col-span-2">
                        <SectionHeader
                            title="Navegando la Burocracia con Experticia"
                            description="Los trámites ante instituciones públicas pueden ser complejos y consume tiempo valioso. Nuestro servicio especializado se basa en años de experiencia, contactos estratégicos y un profundo conocimiento de los procesos administrativos. Eliminamos las trabas burocráticas comunes y aseguramos que sus gestiones se realicen de manera rápida, eficaz y con total cumplimiento normativo."
                            centered={false}
                            showDivider={true}
                            className="mb-0 text-justify"
                        />
                    </div>
                </div>
            </Section>

            {/* --- TIPOS DE PROCESOS --- */}
            <Section background="white" padding="lg">
                <SectionHeader
                    title="Procesos que Gestionamos"
                    description="Amplia cobertura en las principales entidades del sector público y privado."
                    centered={true}
                    className="mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processTypes.map((category, index) => (
                        <motion.div
                            key={index}
                            className="bg-platinum p-6 border border-slate-200/80"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <h3 className="text-lg font-bold mb-4 text-slate-900" style={{ color: 'var(--red-gestium)' }}>
                                {category.category}
                            </h3>
                            <div className="space-y-3">
                                {category.processes.map((process, processIndex) => (
                                    <div key={processIndex} className="flex items-start gap-2">
                                        <CheckCircle size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--red-gestium)' }} />
                                        <span className="text-sm text-slate-700">{process}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- VENTAJAS COMPETITIVAS --- */}
            <Section background="platinum" padding="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-80 lg:h-[450px] overflow-hidden">
                        <Image src="/images/areas/tramitess.avif" alt="Instituciones públicas" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
                    </div>
                    <div>
                        <SectionHeader
                            title="Nuestra Ventaja Diferencial"
                            description="Factores clave que nos permiten ofrecer un servicio superior en gestiones institucionales."
                            centered={false}
                            className="mb-8"
                        />
                        <div className="space-y-6">
                            {advantages.map((advantage, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                >
                                    <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-white shadow-md">
                                        <advantage.icon className="w-6 h-6" style={{ color: 'var(--red-gestium)' }} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800">{advantage.title}</h4>
                                        <p className="text-sm text-slate-600">{advantage.description}</p>
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Simplifique sus Trámites Institucionales</h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--red-gestium)' }} />
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Ahorre tiempo y evite complicaciones. Permítanos gestionar sus trámites con la eficiencia y agilidad que su empresa necesita.</p>
                        <motion.button
                            className="px-8 py-3 font-bold uppercase tracking-wider text-white"
                            style={{ background: 'var(--gradient-red)', cursor: 'pointer' }}
                            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-red-strong)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/contacto')}
                        >
                            Solicitar Gestión
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}