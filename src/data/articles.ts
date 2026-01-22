// src/data/articles.ts

export interface Article {
    slug: string;
    title: string;
    category: string;
    author: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    type: string;
    institution: string;
    pdfUrl: string;
    hasFullArticle: boolean;
    content?: string; // Contenido en markdown/HTML
    tags?: string[];
}

export const articles: Article[] = [
    {
        slug: 'amicus-curiae-crisis-carcelaria-ecuador',
        title: "Amicus Curiae sobre la Crisis Carcelaria y Derechos Humanos en Ecuador",
        category: "Derechos Humanos",
        author: "INREDH: Vivian Santander, Sofía Terán, et al.",
        excerpt: "Intervención legal que califica las masacres carcelarias como ejecuciones extrajudiciales por omisión del Estado y analiza la responsabilidad institucional ante la crisis penitenciaria.",
        date: "09 Junio 2023",
        readTime: "15 min",
        image: "/documents/AmicusCuriae.png",
        type: "Amicus Curiae",
        institution: "Fundación Regional de Asesoría en Derechos Humanos (INREDH)",
        pdfUrl: "/documents/AmicusCuriae.pdf",
        hasFullArticle: true,
        tags: ["Derechos Humanos", "Crisis Carcelaria", "Ejecuciones Extrajudiciales", "INREDH"],
        content: `
# Amicus Curiae: Responsabilidad Estatal en la Crisis Carcelaria

> **Resumen Ejecutivo:** Este documento jurídico sostiene que las masacres carcelarias en Ecuador no son hechos aislados, sino **ejecuciones extrajudiciales** permitidas por la omisión y aquiescencia del Estado, quien falló en su deber de garante.

---

## I. Introducción y Objeto

La **Fundación Regional de Asesoría en Derechos Humanos (INREDH)** presenta este *Amicus Curiae* dentro del proceso de Acción de Protección No. **09332-2023-08863**.

El objetivo es aportar elementos técnicos-jurídicos sobre la responsabilidad del Estado ecuatoriano frente a las masacres carcelarias y la sistemática vulneración de derechos de las personas privadas de libertad (PPL). Este escrito se dirige contra las omisiones de:

* El Servicio Nacional de Atención Integral (SNAI).
* El Ministerio de la Mujer y Derechos Humanos.
* El Ministerio de Gobierno.
* La Presidencia de la República.

## II. Contexto Fáctico: La Escalada de Violencia

El documento denuncia un aumento alarmante de la violencia intracarcelaria que ha dejado de ser esporádica para volverse **estructural y sistémica**:

1.  **Periodo 2019-2020:** Se registraron 81 muertes violentas en total.
2.  **Periodo 2021 en adelante:** La situación se desbordó con **11 masacres carcelarias**.
3.  **Saldo Mortal:** Al momento de este escrito, se contabilizan **416 personas fallecidas** bajo custodia del Estado.

> "Estas masacres son de conocimiento público y generalizado, generando un impacto social que revictimiza no solo a los internos, sino a sus familiares mediante discursos estigmatizantes."

---

## III. Fundamentos Jurídicos

### 1. Las PPL como Grupo de Atención Prioritaria

Conforme al **Artículo 35 de la Constitución**, las personas privadas de libertad son un grupo de atención prioritaria. La privación de libertad no implica la suspensión de la condición humana ni de la dignidad.

El Estado, al tener la custodia física del individuo, asume una **Posición de Garante** absoluta sobre su vida e integridad. Si el Estado encarcela a alguien, se vuelve el único responsable de que esa persona siga viva.

### 2. Responsabilidad por Acción y Omisión

INREDH argumenta que la crisis no es fortuita, sino resultado de decisiones estatales concretas:

* **Política Criminal Punitiva:** El abuso de la prisión preventiva provocó un hacinamiento inmanejable.
* **Déficit de Seguridad Crítico:**
    * *Realidad:* Un (1) guía penitenciario custodia a **110 personas**.
    * *Estándar Internacional:* Se recomienda un (1) guía por cada **20 internos**.
* **Corrupción:** Complicidad funcionaria en el ingreso de armas y falta de inteligencia penitenciaria.

---

## IV. El Argumento Central: Ejecuciones Extrajudiciales

Este es el punto más contundente del *Amicus Curiae*: las muertes en las masacres deben ser tratadas bajo la figura de **Ejecuciones Extrajudiciales**.

### ¿Por qué se configura esta figura?

Según los estándares internacionales (Informe del Relator Amos Wako), una ejecución extrajudicial no solo es el acto directo de matar, sino la muerte que ocurre por **aquiescencia, tolerancia o complicidad** del Estado.

### La Prueba de la Aquiescencia (Tolerancia)

El Estado **sabía** que las masacres iban a ocurrir y no actuó. Los testimonios presentados son desgarradores:

> *"Esto ya se sabía hace semanas. Los mismos guías nos dijeron que estemos pilas por la matanza que se venía. Mire que yo no he matado a nadie, pero ahora tengo hasta que ver cómo me consigo un machete para defenderme."*
>
> — **Testimonio de "Carlos", PPL en la Penitenciaría.**

> *"Muchas madres me contaban cómo los maridos las llamaban a despedirse porque ya sabían que los iban a matar."*
>
> — **Testimonio de familiar de una víctima.**

Al existir alertas previas y ante la **inacción absoluta de las autoridades** para prevenir los hechos inminentes, el Estado incurrió en tolerancia, configurando la responsabilidad por ejecución extrajudicial.

## V. Conclusiones y Petitorio

La crisis carcelaria en Ecuador refleja el abandono estatal. Ante la gravedad de los hechos, INREDH solicita a la autoridad judicial:

1.  **Acoger el razonamiento jurídico** expuesto sobre la responsabilidad estatal.
2.  Reconocer la violación de derechos constitucionales por parte de las carteras de Estado.
3.  Permitir la **comparecencia telemática** del equipo legal para sustentar estos argumentos.

---

`
    },
    {
        slug: 'prescripcion-adquisitiva-dominio',
        title: "La Prescripción Adquisitiva del Dominio",
        category: "Derecho Civil",
        author: "Nahomí Padilla, et al.",
        excerpt: "Análisis sobre la prescripción como modo de adquirir el dominio, sus requisitos y clases, y su aplicación en la legislación ecuatoriana.",
        date: "09 Septiembre 2020",
        readTime: "25 min",
        image: "/documents/prescripcion.jpg",
        type: "Ensayo Académico",
        institution: "Universidad Central del Ecuador",
        pdfUrl: "/documents/prescripcion.pdf",
        hasFullArticle: false,
        tags: ["Derecho Civil", "Propiedad", "Prescripción"]
    },
    {
        slug: 'rebelion-granja-ecuador',
        title: 'La Rebelión de la Granja ¿Distopía o una profecía al Estado ecuatoriano?',
        category: 'Análisis Político',
        author: 'María Paula Peralta',
        excerpt: 'Análisis comparativo entre la obra distópica de George Orwell y la realidad política contemporánea del Ecuador.',
        date: '2025',
        readTime: '10 min',
        image: '/documents/rebelion-granja.jpg',
        type: 'Ensayo Académico',
        institution: 'Análisis Literario-Político',
        pdfUrl: '/documents/rebelion-granja-ecuador.pdf',
        hasFullArticle: false,
        tags: ["Política", "Literatura", "Ecuador"]
    },
    {
        slug: 'facturacion-electronica-pymes-ecuador',
        title: "Transformación Digital: PYMES y Facturación Electrónica en Ecuador",
        category: "Derecho Tributario",
        author: "Alexa Gabriela Vásconez Silva",
        excerpt: "Análisis sobre el impacto de la facturación electrónica en las PYMES del Ecuador.",
        date: "2024",
        readTime: "15 min",
        image: "/documents/LaFacturacionElectronica.jpg",
        type: "Ensayo Académico",
        institution: "Universidad Central del Ecuador",
        pdfUrl: "/documents/LaFacturacionElectronica.pdf",
        hasFullArticle: false,
        tags: ["Tributario", "PYMES", "Digital"]
    },
    {
        slug: 'perspectivas-genero-actuacion-judicial',
        title: "Perspectivas de Género en Actuación y Diligencias Judiciales",
        category: "Derecho y Género",
        author: "Ingrid Pérez",
        excerpt: "Análisis sobre la perspectiva de género en el sistema judicial ecuatoriano.",
        date: "2024",
        readTime: "18 min",
        image: "/documents/perspectivasGenero.png",
        type: "Artículo de Investigación",
        institution: "Investigación Académica",
        pdfUrl: "/documents/perspectivasGenero.pdf",
        hasFullArticle: false,
        tags: ["Género", "Sistema Judicial", "Derechos"]
    },
    {
        slug: 'plataforma-web-gestion-procesos-juridicos',
        title: 'Desarrollo de una Plataforma Web para Gestión de Procesos Jurídicos',
        category: 'Legal Tech',
        author: 'Nenger Coral Celso Vicente',
        excerpt: 'Proyecto de titulación sobre la implementación de una plataforma web en GESTIUM para la automatización de demandas, gestión de itinerarios y consulta de procesos en tiempo real.',
        date: '31 Marzo 2025',
        readTime: '12 min', // Estimado basado en el resumen
        image: '/documents/tesis-legal-tech.jpeg',
        type: 'Tesis Tecnológica',
        institution: 'Instituto Superior Tecnológico Quito Metropolitano (ITSQMET)',
        pdfUrl: '/documents/tesis-legal-tech.pdf',
        hasFullArticle: true, // ✅ Activamos el artículo completo
        tags: ["Legal Tech", "Transformación Digital", "Automatización", "Angular"],
        content: `
# Plataforma Web para la Gestión Integral de Procesos Jurídicos

> **Resumen del Proyecto:** Este trabajo de titulación documenta el desarrollo e implementación de una solución tecnológica a medida para **GESTIUM Servicios Legales Integrales**. La plataforma logró reducir en un **87% los tiempos de búsqueda** de expedientes y aumentar en un **100% la capacidad de redacción** de demandas mediante automatización.

---

## I. Introducción y Contexto

En la era digital, la eficiencia operativa es clave para el sector legal. Esta tesis aborda la problemática de la gestión manual de documentos y la comunicación tradicional en los despachos jurídicos.

El proyecto se centró en solucionar desafíos operativos de **GESTIUM**, tales como:
* La dependencia de procesos manuales y hojas de cálculo (Excel) para itinerarios.
* La falta de sincronización en tiempo real entre los abogados.
* La necesidad de automatizar la redacción de documentos repetitivos.

## II. Solución Tecnológica

Se desarrolló una plataforma web administrable utilizando tecnologías de vanguardia para asegurar escalabilidad y seguridad:

* **Frontend:** Angular con componentes ng-zorro para una interfaz intuitiva.
* **Backend & Base de Datos:** Firebase para autenticación segura y almacenamiento en tiempo real.
* **Diseño:** Enfoque centrado en el usuario (UX/UI) validado mediante prototipos en Figma.

### Funcionalidades Implementadas

1.  **Automatización de Documentos:** Generación automática de demandas, oficios y providencias, reduciendo drásticamente la carga operativa.
2.  **Itinerario Digital:** Sistema centralizado para coordinar audiencias y diligencias, eliminando conflictos de agenda.
3.  **Portal de Clientes:** Interfaz exclusiva para que los clientes consulten el estado de sus procesos en tiempo real (24/7).
4.  **Control de Etapas Procesales:** Seguimiento estructurado desde la admisión de la demanda hasta la sentencia.

---

## III. Resultados e Impacto (KPIs)

La implementación del sistema generó resultados cuantitativos contundentes que validan la inversión en *Legal Tech*:

### Eficiencia Operativa
* **Redacción de Demandas:** Incremento del **100%** (de 5-6 a 10-12 demandas diarias por abogado).
* **Generación de Providencias:** Incremento del **150%** (hasta 100 providencias diarias).
* **Búsqueda de Información:** Reducción del **87%** en el tiempo de acceso a expedientes (de 15 minutos a menos de 2 minutos).

### Calidad y Satisfacción
* **Reducción de Errores:** Disminución del **75%** en errores documentales gracias a plantillas inteligentes.
* **Satisfacción Interna:** Incremento del **104%** en la satisfacción de los abogados con las herramientas de trabajo.

> *"El sistema ha reducido significativamente el tiempo invertido en tareas repetitivas, permitiéndome concentrarme en la estrategia legal. La calidad de mis análisis ha mejorado notablemente."*
>
> — **Testimonio de Abogada Senior de GESTIUM.**

---

## IV. Conclusiones

La transformación digital en **GESTIUM Servicios Legales Integrales** ha posicionado a la firma como un referente de innovación en el sector legal ecuatoriano.

La plataforma no solo optimizó los tiempos de respuesta y la precisión documental, sino que también mejoró la transparencia hacia el cliente. Este proyecto demuestra que la adopción de tecnología (Legal Tech) no es una opción, sino una necesidad estratégica para garantizar un servicio jurídico moderno, eficiente y de alta calidad.

---
`
    },
    {
        slug: 'debido-proceso-citacion-telematica',
        title: "El Debido Proceso en la Citación Telemática",
        category: "Derecho Procesal",
        author: "David Maldonado y Luis Guijarro",
        excerpt: "Análisis sobre la citación telemática y el derecho a la defensa en Ecuador.",
        date: "2023",
        readTime: "Documento extenso",
        image: "/documents/tesisDavid.png",
        type: "Tesis de Maestría",
        institution: "Universidad Bolivariana del Ecuador",
        pdfUrl: "/documents/tesisDavid.pdf",
        hasFullArticle: false,
        tags: ["Procesal", "Citación", "Digital"]
    },
    {
        slug: 'reforma-losep-2025-sumarios-administrativos',
        title: "Reforma a la LOSEP (junio 2025): Sumarios administrativos",
        category: "Derecho Administrativo",
        author: "Tatiana Cordonez",
        excerpt: "Análisis de la reforma de 2025 sobre sumarios administrativos en el sector público.",
        date: "Junio 2025",
        readTime: "2 min",
        image: "/documents/ReformaLosep.jpg",
        type: "Análisis Jurídico",
        institution: "Análisis Legal",
        pdfUrl: "/documents/ReformaLosep.pdf",
        hasFullArticle: false,
        tags: ["LOSEP", "Administrativo", "Reforma"]
    },
    {
        slug: 'cambios-ley-inquilinato-ecuador',
        title: "Cambios Importantes en la Ley de Inquilinato",
        category: "Derecho Inmobiliario",
        author: "Sofía Guaña",
        excerpt: "Análisis de las reformas a la Ley de Inquilinato en Ecuador.",
        date: "Agosto 2025",
        readTime: "2 min",
        image: "/documents/articuloSg.jpg",
        type: "Artículo",
        institution: "GESTIUM Servicios Legales Integrales",
        pdfUrl: "/documents/articuloSg.pdf",
        hasFullArticle: false,
        tags: ["Inquilinato", "Inmobiliario", "Reforma"]
    }
];

// Función helper para obtener un artículo por slug
export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find(article => article.slug === slug);
}

// Función helper para obtener artículos relacionados
export function getRelatedArticles(currentSlug: string, category: string, limit: number = 3): Article[] {
    return articles
        .filter(article =>
            article.slug !== currentSlug &&
            article.category === category
        )
        .slice(0, limit);
}