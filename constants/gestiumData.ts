// constants/gestiumData.ts
// Datos reales de GESTIUM S.A. basados en documentos oficiales

export const GESTIUM_COMPANY_INFO = {
    legal: {
        name: "GESTIUM S.A.",
        previousName: "GESTIUM Servicios Legales Integrales",
        founded: 2005,
        incorporated: 2024,
        ruc: "1711716819001" // Del Dr. Maldonado como representante
    },

    experience: {
        total: "20+",
        cobranzaCoactiva: "14+",
        inmobiliario: "50+",
        description: "Más de 20 años de experiencia en el área de cobranzas"
    },

    contact: {
        address: {
            full: "Av. 12 de Octubre N24-660 y Francisco Salazar, Edificio Concorde, piso 15, Oficina 15C",
            street: "Av. 12 de Octubre N24-660 y Francisco Salazar",
            building: "Edificio Concorde",
            floor: "Piso 15",
            office: "Oficina 15C",
            city: "Quito",
            country: "Ecuador"
        },
        phones: {
            main: "022-543-653",
            secondary: "022-553-923",
            mobile: "0998-028-605"
        },
        email: {
            main: "dmaldonado@gestium-sli.com",
            website: "www.gestium-sli.com"
        },
        parking: "50+ parqueaderos disponibles para clientes"
    }
} as const;

export const GESTIUM_LEADERSHIP = {
    ceo: {
        name: "Dr. David Maldonado Viteri",
        fullName: "Guillermo David Maldonado Viteri",
        title: "Gerente General",
        cedula: "171171681-9",
        age: 48,
        education: {
            law: "Doctor en Jurisprudencia - Universidad Central del Ecuador",
            master: "Maestría en Derecho Procesal - Universidad Bolivariana del Ecuador",
            specialization: "Especialista en recuperación de cartera"
        },
        experience: {
            notary: "Ex-Notario Primero de Quito (2007-2014)",
            banking: "Banco Amazonas, Banco Cofiec, Administradora de Fideicomisos",
            cobranza: "Especialista en cobranza con más de 20 años de experiencia"
        },
        matricula: "FACJ 17-2003-192"
    }
} as const;

export const GESTIUM_TECHNOLOGY = {
    platform: {
        name: "GESTIUM-APP",
        type: "Plataforma intranet corporativa propia",
        description: "Creada por nuestro personal de sistemas, centraliza la gestión operativa del despacho",
        features: [
            "Gestión de Itinerarios y Actividades",
            "Administración de Procesos",
            "Calendario Corporativo",
            "Flujo de Trabajo Colaborativo"
        ]
    },
    infrastructure: {
        callCenter: "Call Center debidamente conformado y estructurado",
        contactability: "Sistemas especializados de contactabilidad",
        software: ["Lexis", "ICS", "Outlook", "Excel"],
        coverage: "Cobertura nacional con alianzas estratégicas"
    }
} as const;

export const GESTIUM_CLIENTS = {
    financial: [
        {
            name: "Banco del Pichincha C.A.",
            type: "Institución Financiera",
            services: ["Recuperación de cartera"],
            period: "2016 - presente",
            contact: "Abg. Josselyn Simbaña"
        },
        {
            name: "Banco Produbanco",
            type: "Institución Financiera",
            services: ["Procurador Judicial", "Recuperación de cartera"],
            period: "2020 - presente"
        },
        {
            name: "Banco Nacional de Fomento",
            type: "Institución Financiera",
            services: ["Abogado Externo - Secretaria Ocho"],
            period: "2022 - presente"
        },
        {
            name: "BIESS - Banco del Instituto Ecuatoriano de Seguridad Social",
            type: "Institución Financiera",
            services: ["Secretario Abogado de Coactiva"],
            period: "2022 - 2023"
        }
    ],

    public: [
        {
            name: "Instituto Ecuatoriano de Seguridad Social (IESS)",
            type: "Entidad Pública",
            services: ["Secretario Abogado Externo - Juzgado Nacional de Coactiva"],
            period: "2014-2019, 2021-presente",
            contact: "Abg. Eduardo Melendez"
        },
        {
            name: "Corporación Nacional de Telecomunicaciones (CNT)",
            type: "Empresa Pública",
            services: ["Secretario Abogado Externo - Juzgado Nacional de Coactiva"],
            period: "2011-2019, 2022-presente",
            contact: "Dra. Marcia Flores"
        },
        {
            name: "ISSFA - Instituto de Seguridad Social de las Fuerzas Armadas",
            type: "Entidad Pública",
            services: ["Patrocinar y gestor de procesos", "Compraventas", "Hipotecas"],
            period: "2023 - presente"
        },
        {
            name: "Municipio del Distrito Metropolitano de Quito",
            type: "Gobierno Local",
            services: ["Abogado externo en recuperación de cartera", "Juicios coactivos"],
            period: "2021 - 2023"
        }
    ],

    private: [
        {
            name: "CONAFIPS - Corporación Nacional de Finanzas Populares",
            type: "Entidad Financiera",
            services: ["Abogado externo en recuperación de cartera", "Juicios coactivos"],
            period: "2020 - 2023"
        },
        {
            name: "EXSERSA - Externalización de Servicios S.A.",
            type: "Empresa Privada",
            services: ["Procurador Judicial para recuperación de cartera"],
            period: "2021 - presente"
        }
    ],

    summary: {
        total: "Las dos más grandes instituciones financieras del Ecuador",
        types: ["Instituciones Financieras", "Entidades Públicas", "Empresas Privadas", "PYMES"],
        description: "Confianza de las principales instituciones del sector financiero y público"
    }
} as const;

export const GESTIUM_SERVICES = {
    primary: {
        cobranza: {
            name: "Recuperación de Cartera",
            subtitle: "Especialidad Principal",
            experience: "20+",
            types: [
                {
                    name: "Cobranza Judicial",
                    description: "Procesos judiciales para recuperar deudas con respaldo legal completo",
                    expertise: "Especialistas en demandas ejecutivas y procesos de cobro",
                    tools: ["Medidas cautelares inmediatas", "Depositarios judiciales", "Capturadores especializados"]
                },
                {
                    name: "Cobranza Extrajudicial",
                    description: "Gestión preventiva de cobranzas y negociaciones directas",
                    expertise: "Call Center especializado y estrategias de contactabilidad",
                    tools: ["Llamadas telefónicas", "Redes sociales", "Mensajes de texto", "WhatsApp", "Visitas", "Comunicados"]
                },
                {
                    name: "Cobranza Coactiva",
                    description: "Ejecución de cobros mediante títulos de crédito y actos administrativos",
                    expertise: "14+ años de experiencia en cobranza coactiva",
                    clients: ["IESS", "CNT", "BNF", "ISSFA", "Municipio de Quito"]
                }
            ],
            processSteps: [
                "Revisar documentación",
                "Ubicar al deudor",
                "Contacto telefónico especializado",
                "Investigación del entorno",
                "Preparación de acciones judiciales",
                "Presentación de demanda",
                "Impulso procesal",
                "Ejecución y embargo"
            ]
        }
    },

    secondary: [
        {
            name: "Derecho Inmobiliario",
            description: "Asesoría integral en proyectos inmobiliarios y transacciones de bienes raíces",
            experience: "50+ proyectos desarrollados en Quito y otras ciudades",
            services: [
                "Promesas de Compraventa",
                "Compraventas definitivas",
                "Hipotecas",
                "Declaratorias de Propiedad Horizontal",
                "Subdivisión",
                "Adjudicación",
                "Unificación"
            ]
        },
        {
            name: "Derecho Societario",
            description: "Constitución, transformación y liquidación de sociedades comerciales",
            services: [
                "Constitución de compañías",
                "Liquidación de sociedades",
                "Traspaso de acciones o participaciones",
                "Aumento o disminución de capital",
                "Cambio de denominación",
                "Reactivación",
                "Fusiones"
            ]
        },
        {
            name: "Mediación y Arbitraje",
            description: "Resolución alternativa de conflictos con experiencia comprobada",
            expertise: "Negociación sólida en procura de resultados positivos",
            approach: "Solución extrajudicial preferente antes del litigio"
        },
        {
            name: "Derecho Laboral",
            description: "Representación integral en relaciones laborales",
            approach: "Resolución extrajudicial y mediación preferente",
            services: [
                "Contratos laborales",
                "Liquidaciones",
                "Obtención de visto bueno",
                "Procesos de mediación laboral"
            ]
        },
        {
            name: "Derecho Civil",
            description: "Solución de conflictos entre personas naturales y jurídicas",
            scope: "Bienes, sucesiones, obligaciones y otros temas civiles",
            approach: "Resolución integral con enfoque personalizado"
        }
    ]
} as const;

export const GESTIUM_VALUES = {
    core: [
        {
            name: "Puntualidad",
            description: "Cumplimos con la más estricta puntualidad en todos nuestros servicios",
            metric: "20+",
            metricText: "Años de Experiencia",
            icon: "Clock"
        },
        {
            name: "Dedicación",
            description: "Brindamos atención personalizada y nos dedicamos completamente a cada caso",
            metric: "14+",
            metricText: "Años Cobranza Coactiva",
            icon: "Target"
        },
        {
            name: "Excelencia",
            description: "Cuidamos el más mínimo detalle para que nuestro servicio sea de la más alta calidad",
            metric: "50+",
            metricText: "Proyectos Inmobiliarios",
            icon: "Award"
        }
    ],

    philosophy: "Construcción y mantenimiento de una relación profesional a largo plazo basada en cumplimiento, respeto y confianza mutua",

    mission: "Dar soporte íntegro a nuestros clientes en cualquier campo legal, realizando toda gestión con agilidad y eficiencia, apoyándonos en recurso humano especializado y capacitado",

    vision: "Consolidar nuestro crecimiento y mantenernos como alternativa altamente eficaz y cercana para la solución de todo tipo de conflicto o gestión",

    objective: "Obtener los resultados que nuestros clientes requieren en el menor tiempo posible, superando cualquier inconveniente, brindando servicio personalizado y precios competitivos"
} as const;

export const GESTIUM_INFRASTRUCTURE = {
    physical: {
        location: "Edificio Concorde - Zona financiera de Quito",
        spaces: [
            "Dos amplias salas de recepción",
            "Varias salas de reuniones",
            "Espacios de archivo especializados",
            "Oficinas individuales para el equipo",
            "Área de cocina y servicios",
            "50+ parqueaderos para clientes"
        ]
    },

    team: {
        structure: [
            "Abogados especializados",
            "Asistentes legales",
            "Personal de call center",
            "Capturadores de procesos",
            "Impulsores judiciales",
            "Mensajeros especializados"
        ],
        scalability: "Personal escalable según requerimientos del cliente"
    },

    coverage: {
        primary: "Quito y Valles aledaños",
        national: "Cobertura nacional mediante alianzas estratégicas",
        mobility: "Dos motorizados para cobertura de campo"
    }
} as const;

// Funciones helper para usar los datos
export const getClientsByType = (type: 'financial' | 'public' | 'private') => {
    return GESTIUM_CLIENTS[type];
};

export const getAllClients = () => {
    return [
        ...GESTIUM_CLIENTS.financial,
        ...GESTIUM_CLIENTS.public,
        ...GESTIUM_CLIENTS.private
    ];
};

export const getServiceByName = (serviceName: string) => {
    return GESTIUM_SERVICES.secondary.find(service =>
        service.name.toLowerCase().includes(serviceName.toLowerCase())
    );
};

export const getPrimaryServices = () => {
    return GESTIUM_SERVICES.primary.cobranza.types;
};

export const getCompanyMetrics = () => {
    return {
        experience: GESTIUM_COMPANY_INFO.experience.total,
        coactivaYears: GESTIUM_COMPANY_INFO.experience.cobranzaCoactiva,
        inmobiliarioProjects: GESTIUM_COMPANY_INFO.experience.inmobiliario,
        clientsCount: getAllClients().length,
        technology: GESTIUM_TECHNOLOGY.platform.name
    };
};

// Export por defecto con todos los datos
export default {
    company: GESTIUM_COMPANY_INFO,
    leadership: GESTIUM_LEADERSHIP,
    technology: GESTIUM_TECHNOLOGY,
    clients: GESTIUM_CLIENTS,
    services: GESTIUM_SERVICES,
    values: GESTIUM_VALUES,
    infrastructure: GESTIUM_INFRASTRUCTURE,

    // Helpers
    getClientsByType,
    getAllClients,
    getServiceByName,
    getPrimaryServices,
    getCompanyMetrics
} as const;