'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { Building2, Users, User, Building, Clock, Target, Award, Briefcase, House, UserCheck, Calculator, FileText, ArrowRight, } from 'lucide-react';
import { CTAButton } from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { SectionButton } from '@/components/ui/Button';

export default function Home() {
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
      {/* Hero Section - DISEÑO DEFINITIVO */}
      <div
        className="hero-section flex items-center justify-center relative overflow-hidden"
        style={{ background: 'var(--gradient-primary)' }}
      >
        {/* Imagen de fondo profesional desde local */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/ofi/bg-sala.jpg')",
            opacity: 0.30
          }}
        />

        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white transform rotate-45"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 border border-red-gestium transform rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white transform -rotate-12"></div>
        </div>

        <div className="relative z-10 container-fluid py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">

            {/* Columna Izquierda - Contenido Principal */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Título Principal GESTIUM S.A. */}
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'var(--white)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  GESTIUM{' '}
                  <motion.span
                    className="text-6xl md:text-7xl lg:text-7xl font-black" // Mismo tamaño que GESTIUM
                    style={{ color: 'var(--red-light)', textShadow: '0 0 9px gray' }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    S.A.
                  </motion.span>
                </motion.h1>

                {/* Subtítulo especializado */}
                <motion.p
                  className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <motion.span
                    style={{ color: 'var(--red-light)', textShadow: '0 0 9px gray' }}
                    className="font-semibold"
                  >
                    Recuperación de cartera especializada
                  </motion.span>
                  {' '}respaldada por tecnología propia y la confianza de las principales instituciones del Ecuador.
                </motion.p>

                {/* Badge de experiencia */}
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-2 border mb-8"
                  style={{
                    borderColor: 'var(--red-gestium)',
                    backgroundColor: 'rgba(167, 26, 33, 0.15)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="w-2 h-2" style={{ backgroundColor: 'var(--red-gestium)' }}></div>
                  <span className="text-sm font-medium uppercase tracking-wider text-white">
                    20+ Años de Experiencia
                  </span>
                </motion.div>

                {/* ✨ CTAs usando componentes refactorizados */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  <CTAButton
                    variant="primary"
                    size="lg"
                  >
                    Consulta Gratuita
                  </CTAButton>

                  <motion.button
                    className="group px-12 py-4 font-bold uppercase tracking-wider transition-all duration-300 border-2 bg-transparent"
                    style={{
                      borderColor: 'var(--white)',
                      color: 'var(--white)'
                    }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: 'var(--white)',
                      color: 'var(--charcoal)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver Servicios
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Columna Derecha - Clientes y Credibilidad MEJORADA */}
            <div className="lg:col-span-4">
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {/* Panel de clientes con efectos hover */}
                <div
                  className="p-8 border border-gray-600 backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 className="text-sm font-medium uppercase tracking-wider text-gray-300 mb-6">
                    Confianza de Instituciones Líderes
                  </h3>

                  <div className="space-y-3">
                    {[
                      'Banco Pichincha C.A.',
                      'Banco Produbanco',
                      'IESS - Instituto Ecuatoriano de Seguridad Social',
                      'ISSFA - Fuerzas Armadas',
                      'CNT - Corporación Nacional de Telecomunicaciones'
                    ].map((client, index) => (
                      <motion.div
                        key={index}
                        className="group cursor-pointer flex items-center gap-3 py-3 px-2 border-b border-gray-700 last:border-b-0 transition-all duration-300 hover:bg-white"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + (index * 0.1), duration: 0.5 }}
                        whileHover={{ x: 8 }}
                      >
                        <motion.div
                          className="w-1 h-6 transition-all duration-300 group-hover:w-2 group-hover:h-8"
                          style={{ backgroundColor: 'var(--red-gestium)' }}
                        />
                        <span className="text-sm text-gray-200 leading-tight group-hover:text-black transition-colors duration-300">
                          {client}
                        </span>
                        <motion.div
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.2 }}
                        >
                          <ArrowRight size={12} style={{ color: 'var(--red-gestium)' }} />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tecnología Propia Mejorada */}
                  <motion.div
                    className="mt-8 pt-6 border-t border-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className="w-2 h-2"
                        style={{ backgroundColor: 'var(--red-gestium)' }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm font-medium text-white uppercase tracking-wider">
                        Tecnología Propia
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      <span className="font-semibold" style={{ color: 'var(--red-light)' }}>GESTIUM-APP:</span> Plataforma intranet corporativa para gestión operativa especializada
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Línea decorativa inferior animada */}
        <motion.div
          className="absolute bottom-0 left-0 h-1"
          style={{
            background: 'linear-gradient(90deg, var(--red-gestium) 0%, rgba(167, 26, 33, 0.5) 70%, transparent 100%)',
            width: '70%'
          }}
          initial={{ width: 0 }}
          animate={{ width: '70%' }}
          transition={{ delay: 2.5, duration: 1.2 }}
        />
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
                          style={{ color: 'var(--red-gestium)' }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
          </div>

          {/* Call to Action Discreto */}
          <SectionButton>
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
                    style={{ color: 'var(--red-gestium)' }} // Cambiado de gold
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
        <SectionButton>
          Ver Todas las Áreas de Práctica
        </SectionButton>
      </Section>

      {/* CTA Section - Con nueva paleta */}
      <div
        className="section-padding-y relative overflow-hidden"
        style={{
          background: 'var(--gradient-primary)',
          backgroundImage: "url('/images/ofi/justicia.jpg')",
          backgroundBlendMode: 'overlay'
        }}
      >
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
                border: 'none'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
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
                color: 'var(--white)'
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              (+593) 2-543-653
            </motion.button>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};