'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import { 
    ShieldCheckIcon, 
    DocumentTextIcon, 
    LockClosedIcon,
    UserGroupIcon,
    ClockIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function PoliticaPrivacidadPage() {
    const sections = [
        {
            id: 'informacion-general',
            title: '1. Información General',
            icon: DocumentTextIcon,
            content: `
                <p><strong>GESTIUM S.A.</strong> (en adelante "la Empresa", "nosotros" o "GESTIUM") es una sociedad anónima constituida bajo las leyes ecuatorianas, especializada en servicios jurídicos integrales, con más de 20 años de experiencia en el mercado.</p>
                
                <h4>Datos de la Empresa:</h4>
                <ul>
                    <li><strong>Razón Social:</strong> GESTIUM S.A.</li>
                    <li><strong>Domicilio:</strong> Av. 12 de Octubre N24-660 y Francisco Salazar, Edificio Concorde, piso 15, Oficina 15C, Quito, Ecuador</li>
                    <li><strong>Teléfonos:</strong> +593 2-543-653</li>
                    <li><strong>Email:</strong> dmaldonado@gestium-sli.com</li>
                    <li><strong>Representante Legal:</strong> Dr. David Maldonado Viteri</li>
                </ul>

                <p>Esta Política de Privacidad regula el tratamiento de datos personales que GESTIUM S.A. recopila, almacena, procesa y utiliza en el desarrollo de sus actividades profesionales y a través de su sitio web y plataforma GESTIUM-APP.</p>
            `
        },
        {
            id: 'datos-recopilados',
            title: '2. Datos Personales Recopilados',
            icon: UserGroupIcon,
            content: `
                <p>En el ejercicio de nuestras actividades profesionales, podemos recopilar las siguientes categorías de datos personales:</p>
                
                <h4>2.1 Datos de Clientes:</h4>
                <ul>
                    <li>Información de identificación (nombre, cédula, RUC, pasaporte)</li>
                    <li>Datos de contacto (dirección, teléfono, email)</li>
                    <li>Información financiera y patrimonial</li>
                    <li>Documentos legales y contractuales</li>
                    <li>Información corporativa y societaria</li>
                </ul>

                <h4>2.2 Datos en Procesos de Recuperación de Cartera:</h4>
                <ul>
                    <li>Información de deudores (identificación, ubicación, contacto)</li>
                    <li>Datos financieros y obligaciones pendientes</li>
                    <li>Información patrimonial y bienes</li>
                    <li>Historial crediticio y comportamiento de pago</li>
                </ul>

                <h4>2.3 Datos del Sitio Web:</h4>
                <ul>
                    <li>Información de contacto en formularios</li>
                    <li>Cookies y datos de navegación</li>
                    <li>Dirección IP y datos técnicos del dispositivo</li>
                    <li>Preferencias de usuario</li>
                </ul>
            `
        },
        {
            id: 'finalidades',
            title: '3. Finalidades del Tratamiento',
            icon: ShieldCheckIcon,
            content: `
                <p>Los datos personales son tratados por GESTIUM S.A. para las siguientes finalidades legítimas:</p>
                
                <h4>3.1 Prestación de Servicios Jurídicos:</h4>
                <ul>
                    <li>Representación legal y asesoría jurídica</li>
                    <li>Gestión de procesos judiciales y extrajudiciales</li>
                    <li>Recuperación de cartera y cobranza</li>
                    <li>Mediación y arbitraje</li>
                    <li>Constitución y gestión societaria</li>
                </ul>

                <h4>3.2 Gestión Administrativa:</h4>
                <ul>
                    <li>Facturación y gestión contable</li>
                    <li>Cumplimiento de obligaciones legales y regulatorias</li>
                    <li>Comunicación con clientes y terceros</li>
                    <li>Archivo y conservación de expedientes</li>
                </ul>

                <h4>3.3 Mejora de Servicios:</h4>
                <ul>
                    <li>Análisis estadístico y mejora de procesos</li>
                    <li>Desarrollo de la plataforma GESTIUM-APP</li>
                    <li>Comunicaciones institucionales</li>
                    <li>Estudios de satisfacción del cliente</li>
                </ul>
            `
        },
        {
            id: 'bases-legales',
            title: '4. Bases Legales del Tratamiento',
            icon: LockClosedIcon,
            content: `
                <p>El tratamiento de datos personales por parte de GESTIUM S.A. se fundamenta en:</p>
                
                <h4>4.1 Consentimiento:</h4>
                <p>Cuando el titular ha otorgado su consentimiento expreso para el tratamiento de sus datos personales para finalidades específicas.</p>

                <h4>4.2 Ejecución Contractual:</h4>
                <p>Para el cumplimiento de contratos de prestación de servicios jurídicos suscritos con nuestros clientes.</p>

                <h4>4.3 Obligación Legal:</h4>
                <p>Para cumplir con obligaciones establecidas en la normativa ecuatoriana, incluyendo:</p>
                <ul>
                    <li>Ley Orgánica de Protección de Datos Personales</li>
                    <li>Código Orgánico General de Procesos (COGEP)</li>
                    <li>Regulaciones del Consejo de la Judicatura</li>
                    <li>Normativas de la Superintendencia de Bancos</li>
                    <li>Disposiciones tributarias y contables</li>
                </ul>

                <h4>4.4 Interés Legítimo:</h4>
                <p>Para la gestión administrativa interna, mejora de servicios y protección de derechos legítimos de la empresa.</p>
            `
        },
        {
            id: 'conservacion',
            title: '5. Conservación de Datos',
            icon: ClockIcon,
            content: `
                <p>Los datos personales serán conservados por los siguientes períodos:</p>
                
                <h4>5.1 Expedientes Judiciales:</h4>
                <p>Según lo establecido en el Código Orgánico General de Procesos y normativas del Consejo de la Judicatura, generalmente por un período mínimo de 20 años.</p>

                <h4>5.2 Documentos Contables y Tributarios:</h4>
                <p>Por un período de 7 años, conforme a las disposiciones del Servicio de Rentas Internas.</p>

                <h4>5.3 Expedientes de Clientes:</h4>
                <p>Por un período de 10 años desde la finalización de la relación profesional, salvo disposición legal en contrario.</p>

                <h4>5.4 Datos de Navegación Web:</h4>
                <p>Por un período máximo de 24 meses, salvo que sean necesarios para cumplir obligaciones legales.</p>

                <p><strong>Importante:</strong> Una vez vencidos estos períodos, los datos serán eliminados de forma segura, salvo que exista una obligación legal que requiera su conservación por mayor tiempo.</p>
            `
        },
        {
            id: 'derechos',
            title: '6. Derechos de los Titulares',
            icon: ExclamationTriangleIcon,
            content: `
                <p>Conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador, los titulares tienen derecho a:</p>
                
                <h4>6.1 Derechos ARCO Plus:</h4>
                <ul>
                    <li><strong>Acceso:</strong> Conocer qué datos personales posee GESTIUM sobre usted</li>
                    <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                    <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos cuando sea procedente</li>
                    <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en casos específicos</li>
                    <li><strong>Portabilidad:</strong> Obtener sus datos en formato estructurado</li>
                </ul>

                <h4>6.2 Limitaciones:</h4>
                <p>Estos derechos pueden verse limitados cuando:</p>
                <ul>
                    <li>Exista una obligación legal de conservar los datos</li>
                    <li>Sea necesario para el ejercicio de la defensa en procesos judiciales</li>
                    <li>Se requiera para el cumplimiento de contratos vigentes</li>
                    <li>Sea indispensable para la protección de derechos de terceros</li>
                </ul>

                <h4>6.3 Ejercicio de Derechos:</h4>
                <p>Para ejercer estos derechos, puede contactarnos a través de:</p>
                <ul>
                    <li><strong>Email:</strong> dmaldonado@gestium-sli.com</li>
                    <li><strong>Oficina:</strong> Av. 12 de Octubre N24-660 y Francisco Salazar, Edificio Concorde, piso 15, Oficina 15C</li>
                    <li><strong>Teléfono:</strong> +593 2-543-653</li>
                </ul>
            `
        },
        {
            id: 'seguridad',
            title: '7. Medidas de Seguridad',
            icon: ShieldCheckIcon,
            content: `
                <p>GESTIUM S.A. implementa medidas técnicas y organizativas apropiadas para proteger los datos personales:</p>
                
                <h4>7.1 Medidas Técnicas:</h4>
                <ul>
                    <li>Plataforma GESTIUM-APP con protocolos de seguridad avanzados</li>
                    <li>Cifrado de datos sensibles</li>
                    <li>Sistemas de backup y recuperación de información</li>
                    <li>Controles de acceso y autenticación</li>
                    <li>Monitoreo de seguridad continuo</li>
                </ul>

                <h4>7.2 Medidas Organizativas:</h4>
                <ul>
                    <li>Política de confidencialidad para todo el personal</li>
                    <li>Capacitación continua en protección de datos</li>
                    <li>Controles de acceso físico a las instalaciones</li>
                    <li>Procedimientos de respuesta a incidentes de seguridad</li>
                    <li>Auditorías regulares de seguridad</li>
                </ul>

                <h4>7.3 Transferencias de Datos:</h4>
                <p>Los datos personales pueden ser compartidos con:</p>
                <ul>
                    <li>Autoridades judiciales y administrativas (cuando sea legalmente requerido)</li>
                    <li>Terceros autorizados para la prestación de servicios específicos</li>
                    <li>Profesionales colaboradores bajo acuerdos de confidencialidad</li>
                </ul>
            `
        },
        {
            id: 'cambios',
            title: '8. Modificaciones y Contacto',
            icon: DocumentTextIcon,
            content: `
                <h4>8.1 Modificaciones a esta Política:</h4>
                <p>GESTIUM S.A. se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Las modificaciones serán comunicadas a través de nuestro sitio web y, cuando sea aplicable, directamente a los titulares afectados.</p>

                <h4>8.2 Vigencia:</h4>
                <p>Esta Política de Privacidad entra en vigencia desde su publicación y permanecerá vigente hasta que sea reemplazada por una nueva versión.</p>

                <h4>8.3 Información de Contacto:</h4>
                <div class="contact-info">
                    <p><strong>GESTIUM S.A.</strong><br>
                    Responsable del Tratamiento de Datos Personales</p>
                    
                    <p><strong>Dr. David Maldonado Viteri</strong><br>
                    Gerente General y Representante Legal</p>
                    
                    <p><strong>Dirección:</strong> Av. 12 de Octubre N24-660 y Francisco Salazar,<br>
                    Edificio Concorde, piso 15, Oficina 15C, Quito, Ecuador</p>
                    
                    <p><strong>Teléfonos:</strong> +593 2-543-653 | +593 99-802-8605</p>
                    
                    <p><strong>Email:</strong> dmaldonado@gestium-sli.com</p>
                    
                    <p><strong>Horario de Atención:</strong> Lunes a Viernes de 8:30 AM a 5:30 PM</p>
                </div>

                <h4>8.4 Autoridad de Control:</h4>
                <p>En caso de controversias relacionadas con el tratamiento de datos personales, los titulares pueden acudir a la Superintendencia de Telecomunicaciones (SUPERTEL) como autoridad de control en materia de protección de datos personales en Ecuador.</p>
            `
        }
    ];

    return (
        <MainLayout>
            {/* Hero Section */}
            <HeroSection
                backgroundImage="/images/ofi/Ofi.JPG"
                title={
                    <>
                        Política de{' '}
                        <span style={{ color: 'var(--gold)' }}>Privacidad</span>
                    </>
                }
                description="Protección y tratamiento responsable de datos personales en GESTIUM S.A."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Transparencia', 'Seguridad', 'Confidencialidad'].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/10 rounded-full backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        >
                            <ShieldCheckIcon className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                            <span className="font-medium text-white">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </HeroSection>

            {/* Última Actualización */}
            <Section background="platinum" padding="sm">
                <div className="text-center">
                    <p className="text-sm text-slate-600">
                        <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-EC', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                        })} | 
                        <strong> Vigente desde:</strong> {new Date().toLocaleDateString('es-EC', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                        })}
                    </p>
                </div>
            </Section>

            {/* Contenido Principal */}
            <Section background="white" padding="lg">
                <div className="max-w-4xl mx-auto">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={section.id}
                                className="mb-12 border-b border-slate-100 pb-8 last:border-b-0"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div 
                                        className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: 'var(--red-gestium)' }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 
                                        className="text-2xl font-bold text-slate-900"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {section.title}
                                    </h2>
                                </div>
                                
                                <div 
                                    className="prose prose-slate max-w-none legal-content"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Styles */}
            <style jsx>{`
                .legal-content h4 {
                    color: var(--red-gestium);
                    font-weight: 600;
                    margin: 1.5rem 0 0.75rem 0;
                    font-size: 1.1rem;
                }
                
                .legal-content ul {
                    margin: 0.75rem 0;
                    padding-left: 1.5rem;
                }
                
                .legal-content li {
                    margin: 0.5rem 0;
                    line-height: 1.6;
                }
                
                .legal-content p {
                    margin: 1rem 0;
                    line-height: 1.7;
                    color: #475569;
                }
                
                .contact-info {
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-left: 4px solid var(--red-gestium);
                    margin: 1rem 0;
                    border-radius: 0 0.5rem 0.5rem 0;
                }
                
                .contact-info p {
                    margin: 0.5rem 0;
                }
            `}</style>
        </MainLayout>
    );
}