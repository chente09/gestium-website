'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  User,
  Building,
  Clock,
  Target,
  Award,
  Briefcase,
  House,
  UserCheck,
  Calculator,
  FileText,
  ArrowRight,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Instituciones Financieras',
      description: 'Servicios legales especializados para el sector financiero, incluyendo regulación bancaria y compliance.',
      icon: Building2,
      number: '01',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Compañías',
      description: 'Asesoría jurídica integral para empresas, desde constitución hasta fusiones y adquisiciones.',
      icon: Building,
      number: '02',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Personas Naturales',
      description: 'Atención legal personalizada para individuos en diversos asuntos civiles y familiares.',
      icon: User,
      number: '03',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Pequeñas y Medianas Empresas',
      description: 'Soluciones legales adaptadas a las necesidades específicas de PYMES.',
      icon: Users,
      number: '04',
      image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?w=400&h=300&fit=crop&crop=center'
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

  const practiceAreas = [
    { name: 'Derecho Corporativo', icon: Building2, cases: '120+' },
    { name: 'Derecho Financiero', icon: Calculator, cases: '85+' },
    { name: 'Derecho Civil', icon: House, cases: '200+' },
    { name: 'Derecho Laboral', icon: UserCheck, cases: '150+' },
    { name: 'Derecho Tributario', icon: FileText, cases: '95+' },
    { name: 'Contratos Comerciales', icon: Briefcase, cases: '180+' }
  ];

  return (
    <MainLayout>
      {/* Hero Section - Con padding responsivo mejorado */}
      <div
        className="hero-section flex items-center justify-center relative overflow-hidden"
        style={{ background: 'var(--gradient-primary)' }}
      >
        {/* Imagen de fondo con overlay mejorado */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://www.gestium-sli.com/uploads/2/1/0/8/21081106/background-images/619440374.jpg')",
            opacity: 0.9
          }}
        />

        <div className="text-center relative z-10 container-fluid">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge Animado con nueva paleta */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >

            </motion.div>

            {/* Título Principal con animación */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight text-shadow-strong"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: 'var(--white)'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              GESTIUM
              <motion.span
                className="block text-4xl md:text-6xl lg:text-7xl font-light mt-2"
                style={{ color: 'var(--gold)' }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                SLI
              </motion.span>
            </motion.h1>

            {/* Línea decorativa animada */}
            <motion.div
              className="w-32 h-1 mx-auto mb-8"
              style={{ backgroundColor: 'var(--gold)' }}
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 1, duration: 0.8 }}
            />

            {/* Subtítulo con animación - HTML corregido */}
            <motion.div
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: "'Inter', sans-serif"
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Soluciones jurídicas{' '}
              <motion.span
                className="relative inline-block text-gradient-gold"
                whileHover={{ scale: 1.05 }}
              >
                integrales
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 rounded"
                  style={{ backgroundColor: 'var(--gold)' }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                />
              </motion.span>
              {' '}para instituciones financieras, empresas y personas naturales
            </motion.div>

            {/* CTAs con animaciones doradas */}
            <motion.div
              className="flex flex-col md:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <motion.button
                className="group px-10 py-4 font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden shadow-xl"
                style={{
                  background: 'var(--gradient-gold)',
                  color: 'var(--charcoal)',
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
                <span className="relative z-10">Consulta Gratuita</span>
              </motion.button>

              <motion.button
                className="group px-10 py-4 font-bold uppercase tracking-wider transition-all duration-300 border-2 bg-transparent"
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
                Contactar
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SECCIÓN DE ESPECIALIZACIÓN PROFESIONAL */}
      <div
        className="relative py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--platinum) 0%, #F1F5F9 50%, var(--white) 100%)',
        }}
      >
        {/* Patrón de fondo sutil */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A961' fill-opacity='0.03'%3E%3Cpath d='M50 50L25 25h50L50 50zM50 50L75 75H25L50 50z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-fluid relative z-10">
          {/* Header de la Sección */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span
                className="px-6 py-2 text-sm font-bold uppercase tracking-[0.15em] border-2 bg-white"
                style={{
                  color: 'var(--gold)',
                  borderColor: 'var(--gold)',
                  borderRadius: '50px',
                  boxShadow: '0 4px 15px rgba(201, 169, 97, 0.1)'
                }}
              >
                Áreas de Especialización
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: 'var(--charcoal)',
                lineHeight: 1.1
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Expertos en
              <motion.span
                className="block"
                style={{ color: 'var(--gold)' }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Derecho Integral
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--silver)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Cobertura completa en las principales ramas del derecho con
              <span className="font-semibold" style={{ color: 'var(--gold)' }}> experiencia comprobada</span>
              {' '}y resultados excepcionales
            </motion.p>
          </motion.div>

          {/* Grid Premium de Especialidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Cobranza Judicial',
                description: 'Procesos judiciales especializados para recuperación de cartera',
                icon: '',
                stats: '200+ casos',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Cobranza Extrajudicial',
                description: 'Negociación estratégica y mediación para soluciones eficientes',
                icon: '',
                stats: '150+ acuerdos',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Cobranza Coactiva',
                description: 'Ejecución administrativa especializada en entidades públicas',
                icon: '',
                stats: '120+ procesos',
                color: 'from-orange-500 to-orange-600'
              },
              {
                title: 'Derecho Inmobiliario',
                description: 'Transacciones, registro y asesoría en bienes raíces',
                icon: '',
                stats: '180+ transacciones',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Derecho Civil',
                description: 'Asuntos civiles, familiares y representación integral',
                icon: '',
                stats: '300+ casos',
                color: 'from-teal-500 to-teal-600'
              },
              {
                title: 'Derecho Corporativo',
                description: 'Asesoría empresarial, constituciones y compliance',
                icon: '',
                stats: '100+ empresas',
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                {/* Card Principal */}
                <div
                  className="relative p-8 bg-white transition-all duration-500 group-hover:shadow-2xl overflow-hidden"
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(201, 169, 97, 0.1)'
                  }}
                >
                  {/* Efecto de brillo superior */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ background: 'var(--gradient-gold)' }}
                  />

                  {/* Icono grande */}
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {area.icon}
                  </motion.div>

                  {/* Contenido */}
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3 group-hover:text-opacity-100 transition-all duration-300"
                    style={{
                      color: 'var(--charcoal)',
                      fontFamily: "'Playfair Display', serif"
                    }}
                  >
                    {area.title}
                  </h3>

                  <p
                    className="text-sm md:text-base mb-4 leading-relaxed"
                    style={{ color: 'var(--silver)' }}
                  >
                    {area.description}
                  </p>

                  {/* Estadística */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm font-bold uppercase tracking-wider"
                      style={{ color: 'var(--gold)' }}
                    >
                      {area.stats}
                    </span>

                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: 'rgba(201, 169, 97, 0.1)' }}
                      whileHover={{ rotate: 90 }}
                    >
                      <ArrowRight size={16} style={{ color: 'var(--gold)' }} />
                    </motion.div>
                  </div>

                  {/* Efecto de hover lateral */}
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-500"
                    style={{ backgroundColor: 'var(--gold)' }}
                  />
                </div>

                {/* Sombra flotante */}
                <motion.div
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-30 transition-all duration-500"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(201, 169, 97, 0.15) 0%, transparent 70%)',
                    filter: 'blur(15px)',
                    transform: 'translateY(8px) scale(0.95)'
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              className="group px-10 py-4 font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden"
              style={{
                background: 'var(--gradient-gold)',
                color: 'var(--charcoal)',
                border: 'none',
                borderRadius: '50px',
                boxShadow: '0 8px 25px rgba(201, 169, 97, 0.3)'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent)' }}
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Ver Todas Nuestras Áreas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Services Section - Con paleta dorada */}
      <Section background="white" padding="lg">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--charcoal)'
            }}
          >
            Nuestros Servicios
          </h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: 'var(--gold)' }}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--silver)' }}
          >
            Asesoría jurídica especializada respaldada por años de experiencia
          </p>
        </motion.div>

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
                      style={{ background: 'var(--gradient-gold)' }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: 'var(--charcoal)' }} />
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
                    style={{ color: 'var(--gold)' }}
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

      {/* Values Section - Iconos corregidos */}
      <div
        className="px-6 py-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--platinum)' }}
      >
        {/* Imagen de fondo sutil */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&crop=center')"
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: 'var(--charcoal)'
              }}
            >
              Nuestros Valores
            </h2>
            <motion.div
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: 'var(--gold)' }}
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: 'var(--silver)' }}
            >
              Principios que nos distinguen en el ejercicio profesional del derecho
            </p>
          </motion.div>

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
                      style={{ color: 'var(--gold)' }}
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

                  {/* Icono con nueva paleta - CORREGIDO */}
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: 'rgba(201, 169, 97, 0.1)' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: 'var(--gold)' }} />
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

      {/* Practice Areas - Con nueva paleta */}
      <Section background="white" padding="lg">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--charcoal)'
            }}
          >
            Áreas de Práctica
          </h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: 'var(--gold)' }}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--silver)' }}
          >
            Experiencia comprobada en las principales ramas del derecho
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={index}
                className="group p-6 bg-white border-l-4 transition-all duration-500 hover:scale-105 relative overflow-hidden hover-lift"
                style={{
                  borderLeftColor: 'var(--gold)',
                  boxShadow: 'var(--shadow-minimal)'
                }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent
                        className="w-8 h-8 mt-1 flex-shrink-0"
                        style={{ color: 'var(--gold)' }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h4
                        className="font-bold text-lg mb-2"
                        style={{ color: 'var(--charcoal)' }}
                      >
                        {area.name}
                      </h4>
                      <p
                        className="text-sm mb-3"
                        style={{ color: 'var(--silver)' }}
                      >
                        Asesoría especializada y representación legal profesional.
                      </p>
                      <motion.button
                        className="group text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300"
                        style={{ color: 'var(--gold)' }}
                        whileHover={{ x: 5 }}
                      >
                        Más Info
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Número de casos */}
                  <div className="text-right ml-4">
                    <motion.div
                      className="text-lg font-black"
                      style={{ color: 'var(--gold)' }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {area.cases}
                    </motion.div>
                    <div
                      className="text-xs uppercase tracking-wider"
                      style={{ color: 'var(--silver)' }}
                    >
                      Casos
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="px-12 py-4 font-bold uppercase tracking-wider transition-all duration-300 border-2 relative overflow-hidden group"
            style={{
              borderColor: 'var(--charcoal)',
              color: 'var(--charcoal)',
              backgroundColor: 'transparent'
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'var(--charcoal)',
              color: 'var(--white)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Todas las Áreas
          </motion.button>
        </motion.div>
      </Section>

      {/* CTA Section - Con padding responsivo */}
      <div
        className="section-padding-y relative overflow-hidden"
        style={{
          background: 'var(--gradient-primary)',
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&crop=center')",
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
            style={{ backgroundColor: 'var(--gold)' }}
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
              style={{ color: 'var(--gold)' }}
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
                background: 'var(--gradient-gold)',
                color: 'var(--charcoal)',
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
              (+593) 2-XXX-XXXX
            </motion.button>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}