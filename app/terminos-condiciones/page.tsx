'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import { 
    DocumentCheckIcon, 
    ScaleIcon, 
    HandRaisedIcon,
    ExclamationCircleIcon,
    CurrencyDollarIcon,
    ClockIcon,
    ShieldExclamationIcon,
    PhoneIcon
} from '@heroicons/react/24/outline';

export default function TerminosCondicionesPage() {
    const sections = [
        {
            id: 'aceptacion',
            title: '1. Aceptación de los Términos',
            icon: DocumentCheckIcon,
            content: `
                <p>Los presentes Términos y Condiciones (en adelante "Términos") regulan el uso del sitio web de <strong>GESTIUM S.A.</strong>, la contratación de nuestros servicios jurídicos, y el acceso a la plataforma GESTIUM-APP.</p>
                
                <p>Al acceder a nuestro sitio web, utilizar nuestros servicios o contratar nuestros servicios profesionales, usted acepta expresamente estos Términos y se compromete a cumplirlos. Si no está de acuerdo con alguno de estos términos, le solicitamos que no utilice nuestros servicios.</p>

                <h4>Información de la Empresa:</h4>
                <ul>
                    <li><strong>Razón Social:</strong> GESTIUM S.A.</li>
                    <li><strong>Naturaleza:</strong> Sociedad Anónima constituida bajo las leyes ecuatorianas</li>
                    <li><strong>Actividad:</strong> Servicios Jurídicos Integrales</li>
                    <li><strong>Experiencia:</strong> Más de 20 años en el mercado ecuatoriano</li>
                    <li><strong>Representante Legal:</strong> Dr. David Maldonado Viteri</li>
                </ul>
            `
        },
        {
            id: 'servicios',
            title: '2. Servicios Ofrecidos',
            icon: ScaleIcon,
            content: `
                <p>GESTIUM S.A. ofrece servicios jurídicos especializados en las siguientes áreas:</p>
                
                <h4>2.1 Servicios Principales:</h4>
                <ul>
                    <li><strong>Recuperación de Cartera:</strong> Gestión judicial y extrajudicial de cobros (especialidad principal)</li>
                    <li><strong>Derecho Corporativo:</strong> Constitución, modificación y liquidación de sociedades</li>
                    <li><strong>Derecho Inmobiliario:</strong> Asesoría en proyectos inmobiliarios y transacciones</li>
                    <li><strong>Mediación y Arbitraje:</strong> Resolución alternativa de conflictos</li>
                    <li><strong>Derecho de Familia:</strong> Procesos matrimoniales, divorcio, alimentos</li>
                    <li><strong>Derecho Laboral:</strong> Relaciones laborales y procesos laborales</li>
                    <li><strong>Gestiones y Trámites:</strong> Trámites ante entidades públicas y privadas</li>
                </ul>

                <h4>2.2 Plataforma Tecnológica:</h4>
                <ul>
                    <li><strong>GESTIUM-APP:</strong> Plataforma propia para gestión de procesos jurídicos</li>
                    <li>Portal de consultas para clientes</li>
                    <li>Seguimiento en línea de casos</li>
                    <li>Gestión documental digital</li>
                </ul>

                <h4>2.3 Alcance Geográfico:</h4>
                <p>Nuestros servicios tienen cobertura nacional en todo el territorio ecuatoriano, con oficina principal en Quito y capacidad de atención en todas las provincias del Ecuador.</p>
            `
        },
        {
            id: 'contratacion',
            title: '3. Contratación y Relación Profesional',
            icon: HandRaisedIcon,
            content: `
                <h4>3.1 Inicio de la Relación Profesional:</h4>
                <p>La relación profesional entre GESTIUM S.A. y el cliente se establece mediante:</p>
                <ul>
                    <li>Suscripción de contrato de prestación de servicios profesionales</li>
                    <li>Carta de compromiso o poder especial</li>
                    <li>Aceptación expresa de propuesta de servicios</li>
                    <li>Cualquier otra forma prevista en la legislación ecuatoriana</li>
                </ul>

                <h4>3.2 Obligaciones del Cliente:</h4>
                <ul>
                    <li>Proporcionar información veraz, completa y oportuna</li>
                    <li>Entregar toda la documentación requerida</li>
                    <li>Cumplir puntualmente con el pago de honorarios</li>
                    <li>Colaborar activamente en el desarrollo del caso</li>
                    <li>Informar cambios relevantes en su situación</li>
                    <li>Respetar las recomendaciones y estrategias legales</li>
                </ul>

                <h4>3.3 Obligaciones de GESTIUM S.A.:</h4>
                <ul>
                    <li>Prestar servicios con la máxima diligencia profesional</li>
                    <li>Mantener absoluta confidencialidad</li>
                    <li>Informar periódicamente sobre el avance de los casos</li>
                    <li>Actuar con lealtad y buena fe</li>
                    <li>Cumplir con los códigos de ética profesional</li>
                    <li>Proporcionar asesoría jurídica especializada</li>
                </ul>
            `
        },
        {
            id: 'honorarios',
            title: '4. Honorarios y Facturación',
            icon: CurrencyDollarIcon,
            content: `
                <h4>4.1 Estructura de Honorarios:</h4>
                <p>Los honorarios se determinan considerando:</p>
                <ul>
                    <li>Complejidad del caso</li>
                    <li>Tiempo estimado de dedicación</li>
                    <li>Experiencia requerida</li>
                    <li>Urgencia del asunto</li>
                    <li>Modalidad del servicio (éxito, igualas, tarifas fijas)</li>
                </ul>

                <h4>4.2 Modalidades de Pago:</h4>
                <ul>
                    <li><strong>Honorarios por Éxito:</strong> Especialmente en recuperación de cartera</li>
                    <li><strong>Igualas Mensuales:</strong> Para servicios continuos</li>
                    <li><strong>Tarifas Fijas:</strong> Para servicios específicos</li>
                    <li><strong>Honorarios Mixtos:</strong> Combinación de modalidades</li>
                </ul>

                <h4>4.3 Condiciones de Pago:</h4>
                <ul>
                    <li>Los honorarios serán pactados previamente por escrito</li>
                    <li>El pago deberá realizarse según los plazos acordados</li>
                    <li>El incumplimiento en el pago puede dar lugar a la terminación del contrato</li>
                    <li>Los gastos procesales corren por cuenta del cliente</li>
                </ul>

                <h4>4.4 Gastos Adicionales:</h4>
                <p>Adicionalmente a los honorarios, el cliente asumirá:</p>
                <ul>
                    <li>Tasas judiciales y costas procesales</li>
                    <li>Gastos notariales y registrales</li>
                    <li>Honorarios de peritos y especialistas</li>
                    <li>Gastos de desplazamiento fuera de Quito</li>
                    <li>Publicaciones en prensa y notificaciones</li>
                    <li>Otros gastos necesarios para el caso</li>
                </ul>
            `
        },
        {
            id: 'confidencialidad',
            title: '5. Confidencialidad y Secreto Profesional',
            icon: ShieldExclamationIcon,
            content: `
                <h4>5.1 Compromiso de Confidencialidad:</h4>
                <p>GESTIUM S.A. se compromete a mantener absoluta confidencialidad sobre:</p>
                <ul>
                    <li>Toda información proporcionada por el cliente</li>
                    <li>Documentos y datos relacionados con el caso</li>
                    <li>Estrategias legales y decisiones adoptadas</li>
                    <li>Información financiera y patrimonial</li>
                    <li>Cualquier otro dato de carácter reservado</li>
                </ul>

                <h4>5.2 Secreto Profesional:</h4>
                <p>Como firma de abogados, estamos sujetos al secreto profesional establecido en:</p>
                <ul>
                    <li>Código de Ética del Foro de Abogados del Ecuador</li>
                    <li>Ley Orgánica de la Función Judicial</li>
                    <li>Código Orgánico General de Procesos</li>
                    <li>Normativas del Consejo de la Judicatura</li>
                </ul>

                <h4>5.3 Excepciones Legales:</h4>
                <p>La confidencialidad solo puede ser levantada cuando:</p>
                <ul>
                    <li>Exista autorización expresa del cliente</li>
                    <li>Sea requerido por autoridad judicial competente</li>
                    <li>Sea necesario para la defensa de nuestros derechos profesionales</li>
                    <li>Lo establezca imperiosamente la ley</li>
                </ul>
            `
        },
        {
            id: 'responsabilidad',
            title: '6. Limitación de Responsabilidad',
            icon: ExclamationCircleIcon,
            content: `
                <h4>6.1 Estándares Profesionales:</h4>
                <p>GESTIUM S.A. se compromete a prestar sus servicios con:</p>
                <ul>
                    <li>Máxima diligencia profesional</li>
                    <li>Conocimiento técnico especializado</li>
                    <li>Cumplimiento de códigos de ética</li>
                    <li>Observancia de la normativa legal vigente</li>
                </ul>

                <h4>6.2 Limitaciones:</h4>
                <p>Nuestra responsabilidad se limita a:</p>
                <ul>
                    <li>La correcta aplicación del derecho vigente</li>
                    <li>El cumplimiento de obligaciones contractuales</li>
                    <li>La observancia de estándares profesionales</li>
                    <li>El desarrollo diligente de las estrategias acordadas</li>
                </ul>

                <h4>6.3 Exclusiones de Responsabilidad:</h4>
                <p>GESTIUM S.A. no será responsable por:</p>
                <ul>
                    <li>Resultados adversos derivados de decisiones judiciales</li>
                    <li>Cambios en la legislación durante el proceso</li>
                    <li>Información falsa o incompleta proporcionada por el cliente</li>
                    <li>Incumplimiento de obligaciones por parte del cliente</li>
                    <li>Actuaciones de terceros ajenos a nuestro control</li>
                    <li>Fuerza mayor o caso fortuito</li>
                </ul>

                <h4>6.4 Seguro de Responsabilidad:</h4>
                <p>GESTIUM S.A. mantiene pólizas de seguro de responsabilidad civil profesional para cubrir eventuales daños derivados de errores u omisiones en el ejercicio profesional.</p>
            `
        },
        {
            id: 'terminacion',
            title: '7. Terminación del Contrato',
            icon: ClockIcon,
            content: `
                <h4>7.1 Terminación por Cumplimiento:</h4>
                <p>El contrato terminará naturalmente cuando:</p>
                <ul>
                    <li>Se cumplan los objetivos pactados</li>
                    <li>Finalice el proceso judicial o extrajudicial</li>
                    <li>Se complete el servicio contratado</li>
                    <li>Se alcance la solución definitiva del caso</li>
                </ul>

                <h4>7.2 Terminación Anticipada por el Cliente:</h4>
                <p>El cliente puede terminar el contrato:</p>
                <ul>
                    <li>En cualquier momento, con notificación previa</li>
                    <li>Debe asumir los honorarios por servicios prestados</li>
                    <li>Debe cancelar gastos incurridos hasta la fecha</li>
                    <li>Debe facilitar la transición a otro profesional</li>
                </ul>

                <h4>7.3 Terminación por Parte de GESTIUM S.A.:</h4>
                <p>Podemos terminar el contrato en casos de:</p>
                <ul>
                    <li>Incumplimiento de pago de honorarios</li>
                    <li>Falta de colaboración del cliente</li>
                    <li>Conflicto de intereses sobreviniente</li>
                    <li>Imposibilidad de continuar la representación</li>
                    <li>Violación de estos términos y condiciones</li>
                </ul>

                <h4>7.4 Efectos de la Terminación:</h4>
                <ul>
                    <li>Entrega de expediente y documentos al cliente</li>
                    <li>Liquidación final de honorarios y gastos</li>
                    <li>Mantenimiento del secreto profesional</li>
                    <li>Cooperación en la transición si es requerida</li>
                </ul>
            `
        },
        {
            id: 'uso-web',
            title: '8. Uso del Sitio Web y GESTIUM-APP',
            icon: DocumentCheckIcon,
            content: `
                <h4>8.1 Uso Permitido:</h4>
                <p>El sitio web y la plataforma GESTIUM-APP pueden ser utilizados para:</p>
                <ul>
                    <li>Obtener información sobre nuestros servicios</li>
                    <li>Establecer contacto inicial</li>
                    <li>Acceder al portal de clientes (con credenciales)</li>
                    <li>Consultar el estado de procesos</li>
                    <li>Descargar documentos autorizados</li>
                </ul>

                <h4>8.2 Uso Prohibido:</h4>
                <p>Está prohibido:</p>
                <ul>
                    <li>Utilizar el sitio para fines ilegales</li>
                    <li>Intentar acceder a información no autorizada</li>
                    <li>Interferir con el funcionamiento del sitio</li>
                    <li>Reproducir contenido sin autorización</li>
                    <li>Transmitir virus o código malicioso</li>
                </ul>

                <h4>8.3 Propiedad Intelectual:</h4>
                <p>Todo el contenido del sitio web es propiedad de GESTIUM S.A.:</p>
                <ul>
                    <li>Textos, imágenes y diseños</li>
                    <li>Software GESTIUM-APP</li>
                    <li>Marcas y logotipos</li>
                    <li>Metodologías y procesos</li>
                </ul>

                <h4>8.4 Disponibilidad del Servicio:</h4>
                <p>Nos esforzamos por mantener el sitio web disponible 24/7, pero no garantizamos:</p>
                <ul>
                    <li>Disponibilidad ininterrumpida</li>
                    <li>Ausencia de errores técnicos</li>
                    <li>Compatibilidad con todos los dispositivos</li>
                    <li>Velocidad específica de conexión</li>
                </ul>
            `
        },
        {
            id: 'modificaciones',
            title: '9. Modificaciones y Legislación Aplicable',
            icon: ScaleIcon,
            content: `
                <h4>9.1 Modificaciones de los Términos:</h4>
                <p>GESTIUM S.A. se reserva el derecho de modificar estos términos:</p>
                <ul>
                    <li>Las modificaciones serán publicadas en el sitio web</li>
                    <li>Los clientes actuales serán notificados por escrito</li>
                    <li>Las modificaciones no afectarán contratos vigentes</li>
                    <li>El uso continuado implica aceptación de cambios</li>
                </ul>

                <h4>9.2 Legislación Aplicable:</h4>
                <p>Estos términos se rigen por:</p>
                <ul>
                    <li>Constitución de la República del Ecuador</li>
                    <li>Código Civil Ecuatoriano</li>
                    <li>Ley Orgánica de la Función Judicial</li>
                    <li>Código Orgánico General de Procesos</li>
                    <li>Código de Ética del Foro de Abogados</li>
                    <li>Demás normativa ecuatoriana aplicable</li>
                </ul>

                <h4>9.3 Jurisdicción y Competencia:</h4>
                <p>Para cualquier controversia derivada de estos términos:</p>
                <ul>
                    <li>Competencia de los tribunales de Quito, Ecuador</li>
                    <li>Aplicación preferente de métodos alternativos (mediación/arbitraje)</li>
                    <li>Renuncia a fueros especiales</li>
                    <li>Sometimiento a la jurisdicción ecuatoriana</li>
                </ul>
            `
        },
        {
            id: 'contacto',
            title: '10. Información de Contacto y Atención al Cliente',
            icon: PhoneIcon,
            content: `
                <h4>10.1 Datos de Contacto:</h4>
                <div class="contact-info">
                    <p><strong>GESTIUM S.A.</strong><br>
                    Servicios Jurídicos Integrales</p>
                    
                    <p><strong>Dirección:</strong> Av. 12 de Octubre N24-660 y Francisco Salazar,<br>
                    Edificio Concorde, piso 15, Oficina 15C<br>
                    Quito, Ecuador</p>
                    
                    <p><strong>Teléfonos:</strong><br>
                    +593 2-543-653 (Principal)<br>
                    +593 98-933-5061 (Celular)</p>
                    
                    <p><strong>Email:</strong> dmaldonado@gestium-sli.com</p>
                    
                    <p><strong>Portal Clientes:</strong> <a href="https://gestium-app.netlify.app/consultas" target="_blank">GESTIUM-APP</a></p>
                </div>

                <h4>10.2 Horarios de Atención:</h4>
                <ul>
                    <li><strong>Lunes a Viernes:</strong> 8:30 AM - 5:30 PM</li>
                    <li><strong>Sábados:</strong> Previa cita únicamente</li>
                    <li><strong>Domingos:</strong> Cerrado</li>
                    <li><strong>Emergencias:</strong> Coordinación vía celular</li>
                </ul>

                <h4>10.3 Canales de Comunicación:</h4>
                <ul>
                    <li>Atención presencial en oficinas</li>
                    <li>Comunicación telefónica</li>
                    <li>Correo electrónico</li>
                    <li>Portal GESTIUM-APP para clientes</li>
                    <li>Videoconferencias (previa coordinación)</li>
                </ul>

                <h4>10.4 Tiempo de Respuesta:</h4>
                <ul>
                    <li><strong>Consultas generales:</strong> 24-48 horas</li>
                    <li><strong>Consultas de clientes:</strong> 12-24 horas</li>
                    <li><strong>Emergencias:</strong> Respuesta inmediata</li>
                    <li><strong>Documentos:</strong> Según complejidad</li>
                </ul>

                <h4>10.5 Efectividad de estos Términos:</h4>
                <p>Estos Términos y Condiciones entran en vigencia desde su publicación y permanecen vigentes hasta ser reemplazados por una nueva versión. La fecha de última actualización se indica al inicio del documento.</p>
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
                        Términos y{' '}
                        <span style={{ color: 'var(--gold)' }}>Condiciones</span>
                    </>
                }
                description="Condiciones de uso y contratación de servicios jurídicos de GESTIUM S.A."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {['Transparencia', 'Profesionalismo', 'Legalidad'].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/10 rounded-full backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        >
                            <ScaleIcon className="w-4 h-4" style={{ color: 'var(--gold)' }} />
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
                                        <Icon width={24} height={24} className="text-white" />
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
                
                .contact-info a {
                    color: var(--red-gestium);
                    text-decoration: none;
                    font-weight: 600;
                }
                
                .contact-info a:hover {
                    color: var(--gold);
                    text-decoration: underline;
                }
            `}</style>
        </MainLayout>
    );
}