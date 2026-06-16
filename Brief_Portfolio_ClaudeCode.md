# Brief de Contenido — Portfolio / Book de Clientes
### Para Claude Code · Proyecto Nuxt 3 + Vue 3 (ya inicializado)

---

## Contexto del proyecto (LÉEME PRIMERO)

Este portfolio NO es un portfolio genérico de freelance. Es una **herramienta de venta dirigida a un lector específico**: un cliente potencial llamado **Samuel**, dueño de dos negocios del sector salud auditiva (Phonomedical y CAEB), que está evaluando contratar al autor (**Hugo Pedroza**, desarrollador full-stack en Aguascalientes, México) como su **desarrollador web de cabecera bajo esquema de iguala mensual** (mantenimiento continuo, no proyecto único).

Samuel pidió explícitamente un "book de clientes" para **respaldar una cotización** — quiere poder decir "este dev ya trabajó con estas empresas" y sentirse seguro. Por lo tanto, cada decisión de contenido debe responder a una pregunta: **¿esto le da confianza a Samuel de que Hugo puede ser su dev de cabecera?**

### Las 5 capacidades que el portfolio DEBE proyectar
(Salieron directamente de lo que Samuel dijo que le importa. Son el esqueleto de la narrativa.)

1. **SEO y SEM** — Es su prioridad declarada. Pauta en Meta y Google, mide campañas constantemente, quiere estrategia SEO orgánica además de la pauta. El portfolio debe mostrar que Hugo entiende posicionamiento, Google Tag Manager, Analytics, Pixel, conversion tracking y funnels a formularios.
2. **Mantenimiento, respaldos y actualizaciones** — Lo llamó "lo primero" y "prioritario". Tuvo un trauma real: un respaldo mal hecho le borró el aviso de privacidad. Quiere alguien confiable y metódico con los respaldos.
3. **eCommerce / WooCommerce / tiendas en línea** — Hugo acaba de terminar una tienda de productos de cómputo; encaja perfecto porque Phonomedical tiene WooCommerce.
4. **Analítica y medición** — Samuel "constantemente mide rendimiento de campañas, alcances". Conversion tracking es clave.
5. **Confiabilidad y continuidad** — Busca un dev "de cabecera", de largo plazo, no alguien que desaparece. El tono debe transmitir profesionalismo estable y comunicación clara.

### Tono y estilo
- Español de México, profesional pero cercano (no acartonado).
- Orientado a **resultados y capacidades de negocio**, no a presumir tecnologías por presumir.
- Limpio, rápido, impecable en móvil. Irónicamente, este portfolio ES una muestra de trabajo: si carga lento o se ve mal en celular, contradice todo lo que Hugo va a criticar de los sitios de Samuel. **Debe sacar 90+ en PageSpeed y ser perfecto en responsividad.**
- Aprovechar Nuxt para SSR/SSG y SEO impecable (meta tags, Open Graph, sitemap, datos estructurados). Esto es coherente con vender servicios de SEO.

### CTA principal
**Descargar CV en PDF.** Botón visible en el header y repetido al final. Secundario: contacto (WhatsApp / correo / LinkedIn).

---

## Estructura de secciones y contenido

### 1. Hero / Encabezado
- Nombre: **Hugo Pedroza** (Hugo David Pedroza Hernández).
- Título posicionador: algo como *"Desarrollador Full-Stack · Web, eCommerce y posicionamiento SEO/SEM"*.
- Subtítulo de una línea que comunique la propuesta de valor: desarrollo + mantenimiento + posicionamiento, con enfoque en negocios que necesitan presencia digital que realmente convierta.
- Ubicación: Aguascalientes, México (trabajo remoto).
- CTA: **Descargar CV (PDF)** + enlace a contacto.

### 2. Sobre mí / Perfil
Breve (3-4 párrafos). Debe transmitir:
- Full-stack con base sólida: **Python, Django, PostgreSQL, WordPress/WooCommerce, JavaScript** (y ahora Vue/Nuxt — este mismo sitio es prueba).
- Que no solo programa, sino que **entiende el lado de negocio**: posicionamiento, medición, funnels, mantenimiento responsable.
- Mención de que trabaja con clientes de forma continua y confiable (no "proyecto y desaparezco").
- Honestidad calibrada: Hugo valora la honestidad intelectual. No inventar expertise que no tiene; presentar el SEO/SEM como un área en la que tiene experiencia práctica creciente y reciente (la tienda de cómputo), no como gurú de 10 años.

### 3. Áreas de servicio / Qué hago
Tarjetas o bloques. Ordenar por las prioridades de Samuel:
1. **Desarrollo web y eCommerce** — sitios y tiendas (WordPress/WooCommerce y stacks modernos como Nuxt/Vue, Django).
2. **SEO y SEM** — optimización on-page, estructura de etiquetas/títulos, Google Tag Manager, Analytics (GA4), Meta Pixel, conversion tracking, funnels a formularios.
3. **Mantenimiento y soporte continuo** — respaldos, actualizaciones de core/plugins, monitoreo, seguridad, ajustes graduales (esquema iguala).
4. **Integraciones y automatización** — scraping, catálogos, APIs, migraciones de datos.

### 4. Proyectos / Casos (el corazón del "book")
Formato de **caso de estudio corto** por proyecto: problema → qué hizo → resultado/tecnologías. Estos son los reales de Hugo (puede nombrarlos):

**a) Tienda en línea — productos de cómputo (impresoras, etc.)**
- El más relevante para Samuel (eCommerce + fase de marketing/SEO en curso).
- Destacar: desarrollo completo de la tienda + fase actual de implementación de herramientas de mkt (Google Tag, analítica, recuperación de carritos abandonados, trabajo conjunto con especialista en marketing).
- Conecta directo con WooCommerce de Phonomedical.

**b) Scrapers de catálogo — Abasteo y Azerty (distribuidores mexicanos)**
- Scrapers async en Python para catálogos de distribuidores.
- Destacar capacidad técnica: resolución de encoding (mojibake Latin-1/Windows-1252), manejo de rate limiting de WAF con circuit breakers, retrieval de imágenes. Esto demuestra que Hugo resuelve problemas difíciles del mundo real.
- Enmarcar como "integración de catálogos / automatización de datos para eCommerce".

**c) Sistema de RRHH — RH V3**
- Sistema de recursos humanos full-stack (módulo de vacaciones, etc.).
- Demuestra capacidad de construir aplicaciones de negocio completas, no solo sitios vitrina.
- Enmarcar como "desarrollo de aplicaciones de negocio a medida".

**d) (Opcional) Herramientas propias / side projects**
- Si Hugo quiere mostrar versatilidad: el editor de CV con preview en vivo y export a PDF, analizador de historial de Spotify, instancia self-hosted de WorldGuessr. Usar con criterio — solo si suman y no diluyen el mensaje profesional. Para el público "Samuel", probablemente mejor dejarlos fuera o en una sección menor "Proyectos personales".

> **Nota para cada caso:** incluir las tecnologías usadas como tags. Si hay métricas reales (ej. "redujo X", "catálogo de N productos"), úsalas — Samuel es de números. Si no hay métricas, no inventarlas.

### 5. Stack / Tecnologías
Lista visual agrupada:
- **Backend:** Python, Django, PostgreSQL
- **Frontend:** JavaScript, Vue, Nuxt, HTML/CSS
- **CMS/eCommerce:** WordPress, WooCommerce
- **SEO/Analítica:** Google Tag Manager, GA4, Meta Pixel, PageSpeed/Core Web Vitals
- **Otros:** scraping async, APIs, Git, Docker

### 6. Cómo trabajo / Proceso (sección de confianza)
Opcional pero MUY recomendada para este lector específico. Un bloque breve que aborde justo lo que a Samuel le preocupa:
- Respaldos antes de cualquier cambio (responde directo a su trauma del aviso de privacidad borrado).
- Trabajo en staging, no en producción a ciegas.
- Comunicación clara y continua.
- Esquema de trabajo flexible (compatible con iguala / cambios graduales).
Esto no es presumir; es responder preguntas que Samuel ya hizo en voz alta.

### 7. Contacto + CTA final
- Repetir **Descargar CV (PDF)**.
- WhatsApp, correo, LinkedIn, GitHub.
- Frase de cierre orientada a la relación de largo plazo.

---

## Requisitos técnicos no negociables (porque el sitio ES una demo)

- **PageSpeed 90+ en móvil y desktop.** Imágenes optimizadas (WebP, srcset, lazy correcto), sin render-blocking innecesario.
- **SEO impecable:** meta title/description por página, Open Graph, Twitter cards, sitemap.xml, robots.txt, datos estructurados (JSON-LD tipo Person/ProfessionalService). Aprovechar `@nuxtjs/seo` o módulos equivalentes.
- **Responsividad perfecta** en 360px / 768px / 1024px+. Cero scroll horizontal. (Justo el bug que Hugo va a criticar en Phonomedical — no cometerlo aquí.)
- **Accesibilidad:** contraste correcto, alt en imágenes, jerarquía de headings ordenada, tap targets adecuados.
- **El CV en PDF** debe ser descargable (archivo estático en `/public` o generado). Tracking opcional del click de descarga con un evento (coherente con el discurso de medición).
- Favicon, dominio propio si lo hay, HTTPS.

---

## Lo que NO hacer
- No llenar de jerga técnica que Samuel no entienda; él mide negocio, no admira frameworks.
- No inflar experiencia en SEO/SEM más allá de lo real (Hugo valora la honestidad; además Samuel sabrá distinguir).
- No incluir tanto side project que diluya el mensaje "soy confiable para tu negocio".
- No descuidar el rendimiento ni la responsividad: este sitio es la primera prueba viviente de la calidad de Hugo.
