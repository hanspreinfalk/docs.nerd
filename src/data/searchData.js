export const searchData = {
  pages: [
    {
      title: "Prompting 1.1",
      route: "/ingenieria-prompts-page",
      description: "Estructura de prompts, niveles de prompting, meta/reverso meta prompting, y tácticas fundamentales con ejemplos.",
      sections: [
        {
          id: "introduccion",
          title: "Introducción a la Ingeniería de Prompts",
          content: "Para ayudarte a aprovechar al máximo Nerd.lat, hemos compilado una lista de estrategias y enfoques de prompting. Algunas de estas fueron recopiladas de la experiencia de nuestro equipo, y otras fueron compartidas con nosotros por miembros de nuestra comunidad. Dado que Nerd.lat se basa en modelos de lenguaje grandes (LLMs), las estrategias de prompting efectivas pueden mejorar significativamente su eficiencia y precisión."
        },
        {
          id: "que-es-prompting",
          title: "¿Qué es el Prompting?",
          content: "El prompting se refiere a las instrucciones textuales que le das a un sistema de IA para realizar una tarea. En Nerd.lat (un constructor de aplicaciones impulsado por IA), los prompts son cómo \"le dices\" a la IA qué hacer, desde crear una interfaz de usuario hasta escribir lógica de backend. El prompting efectivo es crítico porque Nerd.lat usa modelos de lenguaje grandes (LLMs), por lo que prompts claros y bien elaborados pueden mejorar enormemente la eficiencia y precisión de la IA al construir tu aplicación. En resumen, mejores prompts llevan a mejores resultados."
        },
        {
          id: "por-que-importa",
          title: "¿Por qué Importa el Prompting?",
          content: "La mayoría de las personas piensan que el prompting es solo escribir una solicitud en una IA y esperar lo mejor, pero no es así. La diferencia entre una respuesta mediocre de IA y tener a la IA construyendo flujos de trabajo completos para ti se reduce a cómo haces el prompting. Ya seas desarrollador o no técnico, dominar la ingeniería de prompts en Nerd.lat puede ayudarte a: Automatizar tareas repetitivas instruyendo a la IA exactamente qué hacer. Depurar más rápido con insights y soluciones generadas por IA. Construir y optimizar flujos de trabajo sin esfuerzo, dejando que la IA maneje el trabajo pesado una vez que esté correctamente guiada. ¿Y la mejor parte? No necesitas ser un programador experto. Con las técnicas de prompting correctas, puedes desbloquear el potencial completo de la IA en Nerd.lat sin desperdiciar tiempo en prueba y error."
        },
        {
          id: "como-piensa-ai",
          title: "Entendiendo Cómo Piensa la IA",
          content: "A diferencia de la programación tradicional, trabajar con IA se trata de comunicar tus intenciones claramente. Los Modelos de Lenguaje Grandes (LLMs) como los que impulsan Nerd.lat no \"entienden\" en el sentido humano, sino que predicen salidas basándose en patrones en sus datos de entrenamiento. Para resultados consistentes es útil estructurar tu prompt en secciones claras. Proporciona Contexto y Detalles: Los modelos de IA no tienen sentido común ni contexto implícito más allá de lo que les das. Siempre proporciona antecedentes o requisitos relevantes. Sé Explícito con Instrucciones y Restricciones: Nunca asumas que la IA inferirá tus objetivos. Si tienes restricciones o preferencias, decláralas. La Estructura Importa (Orden y Énfasis): Gracias a la arquitectura transformer, los modelos prestan atención especial al inicio y final de tu prompt. Conoce los Límites del Modelo: El conocimiento de la IA viene de datos de entrenamiento. No puede saber sobre eventos recientes o información propietaria que no le hayas dado."
        },
        {
          id: "principios-claros",
          title: "Principios de Prompting: El Marco C.L.A.R.O.",
          content: "Los grandes prompts siguen un conjunto de principios simples. Una forma útil de recordarlos es C.L.A.R.O.: Conciso, Lógico, Explícito, Adaptativo, Reflexivo. Conciso: Sé claro y ve al grano. El lenguaje vago o innecesario puede confundir al modelo. Usa lenguaje directo. Lógico: Organiza tu prompt de manera paso a paso o bien estructurada. Divide solicitudes complejas en pasos ordenados o puntos para que la IA pueda seguir fácilmente. Explícito: Declara exactamente lo que quieres y no quieres. Si algo es importante, dilo claramente. Proporciona ejemplos de formato o contenido si es posible. Adaptativo: No te conformes con la primera respuesta si no es perfecta. Los prompts se pueden refinar iterativamente. Una gran ventaja de la IA de Nerd.lat es que puedes tener un diálogo. Reflexivo: Tómate tiempo para revisar qué funcionó y qué no después de cada interacción con la IA."
        },
        {
          id: "niveles-prompting",
          title: "Los Cuatro Niveles de Prompting",
          content: "El prompting efectivo es una habilidad que crece con la práctica. Aquí describimos cuatro niveles de dominio del prompting: 1. Prompting Estructurado \"Ruedas de Entrenamiento\": Cuando estás comenzando o abordando una tarea muy compleja, es útil usar una estructura etiquetada en tu prompt. Contexto, Tarea, Directrices, Restricciones. 2. Prompting Conversacional: A medida que te sientas cómodo, no siempre necesitarás una estructura tan rígida. El prompting conversacional significa que puedes escribir a la IA de manera más natural, similar a cómo explicarías una tarea a un colega. 3. Meta Prompting: Esta es una técnica avanzada donde literalmente le pides a la IA que te ayude a mejorar tu prompt o plan. 4. Reverse Meta Prompting: El reverse meta prompting significa usar la IA para resumir o documentar lo que sucedió después de una tarea, para que puedas aprender o reutilizarlo más tarde."
        },
        {
          id: "tecnicas-avanzadas",
          title: "Técnicas Avanzadas de Prompting",
          content: "Una vez que tengas los conceptos básicos, es momento de aprovechar estrategias más avanzadas para obtener el máximo de la IA de Nerd.lat. Zero-Shot vs Few-Shot Prompting: Zero-Shot significa que le pides al modelo que realice una tarea sin ejemplos. Few-Shot significa que proporcionas un par de ejemplos o demostraciones en tu prompt. Manejando Alucinaciones y Asegurando Precisión: Las \"alucinaciones\" de IA son momentos cuando el modelo confiadamente inventa información o código que no es correcto. Proporciona Datos de Base, Referencias en el Prompt, Pide Razonamiento Paso a Paso."
        },
        {
          id: "consejos-lovable",
          title: "Consejos Específicos para Nerd.lat",
          content: "Comienza con una Base de Conocimientos Sólida: Antes de escribir un prompt, configura la Base de Conocimientos de tu proyecto. Incluye los Requisitos del Proyecto (PRD), flujos de usuario, detalles del stack tecnológico, directrices de diseño de UI, y cualquier detalle específico del backend. Sé Específico, Evita la Vaguedad: Los prompts vagos llevan a resultados vagos. Prompting Incremental: Resiste la tentación de pedir una aplicación compleja completa en un prompt. Divide tu proceso de desarrollo en pasos lógicos. Incluye Restricciones y Requisitos: No dudes en especificar restricciones. Usa los Modos de Nerd.lat Intencionalmente: Utiliza el Modo Chat para planificar y el Modo Predeterminado para construir."
        },
        {
          id: "casos-uso",
          title: "Casos de Uso y Aplicaciones",
          content: "Los principios de prompting anteriores se aplican no solo en el chat de Nerd.lat, sino en cualquier lugar donde interactúes con herramientas de IA o automatización. En el Constructor de Nerd.lat: Principalmente usarás estos prompts en la interfaz de chat de Nerd.lat para construir y refinar tu aplicación. Integraciones y Casos Extremos: Nerd.lat se integra con muchos servicios (Stripe, GitHub, Supabase, etc.). Cuando hagas prompting para estos, trata los detalles de integración como parte de tu Contexto/Restricciones."
        }
      ]
    },
    {
      title: "Mejores Prácticas",
      route: "/consejos-y-trucos",
      description: "Aprovecha al Máximo Nerd.lat",
      sections: [
        {
          id: "fundacion",
          title: "1. Establece tu Fundación: Usa el Archivo de Conocimiento",
          content: "El archivo de Conocimiento es el cerebro de tu proyecto. Se envía con cada prompt y ayuda a la IA a entender el contexto completo. Qué incluir: Tu visión del producto (piénsalo como un PRD), Jornadas de usuario y personas, Características y funcionalidades clave, Sistemas de diseño y guías de UI, Comportamiento específico por rol (ej. Admin, Usuario, Inversor). Puedes generar automáticamente un archivo de Conocimiento a través del Modo Chat: 'Genera conocimiento para mi proyecto en T=0 basado en las características que ya he implementado.'"
        },
        {
          id: "prompting",
          title: "2. Mejores Prácticas de Prompting",
          content: "Prompts claros y verbosos = mejor salida. Piensa en la IA como tu compañero de ingeniería, solo sabe lo que le dices. Consejos de Prompting: Sé específico: Menciona la página exacta (ej. /dashboard) y el comportamiento esperado. Usa lenguaje natural. Agrega capturas de pantalla: Especialmente útil para describir bugs o problemas de UX. Agrega barreras de protección: Dile a la IA qué no tocar. Plantilla de Desglose de Características: 1. Crear la nueva página, 2. Agregar layout de UI, 3. Conectar los datos, 4. Agregar lógica + casos extremos, 5. Probar por rol."
        },
        {
          id: "chat-mode",
          title: "3. Usa el Modo Chat Temprano y Frecuentemente",
          content: "Modo Chat = tu co-piloto de IA. Te ayuda a depurar, hacer lluvia de ideas y planificar implementaciones, sin editar tu código hasta que estés listo. Cuándo cambiar al Modo Chat: Después de 2-3 intentos fallidos de \"Intentar Arreglar\", Al depurar lógica compleja o problemas de base de datos, Al planificar nuevas características. Consejo de Flujo de Trabajo: Algunos usuarios prefieren usar el Modo Chat para 60-70% de su tiempo. Solo haz clic en \"Implementar el plan\" cuando estés completamente satisfecho."
        },
        {
          id: "supabase",
          title: "4. Evita Errores Comunes con Supabase",
          content: "Atención: Supabase no revierte limpiamente. Si reviertes una versión, tu esquema de base de datos puede romperse. Mejores Prácticas: Conecta Supabase después de que el front-end esté estable. Si debes revertir, pídele a la IA: 'Por favor valida el esquema SQL en T=0 y asegúrate de que no hayan ocurrido cambios que rompan la funcionalidad.' Siempre prueba características vinculadas a la base de datos antes de publicar."
        },
        {
          id: "visual-edit",
          title: "5. Usa la Edición Visual para Arreglos Rápidos de UI",
          content: "La herramienta de Edición Visual es gratuita y rápida. Úsala en lugar de prompts para: Cambiar texto, colores, fuentes, ajustes de layout. Editar múltiples elementos pequeños a la vez. Commits seguros y sin créditos (con deshacer disponible)."
        },
        {
          id: "github",
          title: "6. Usa GitHub y Control de Versiones Sabiamente",
          content: "Cada edición es un commit. Usa el pinning para marcar versiones estables. Después de cada característica funcional: Pínala. Después de cada bug: Compara versiones visualmente. 'Compara la versión en T-1 con T-0. ¿Qué cambió? ¿Qué podría estar rompiendo?'"
        },
        {
          id: "remix",
          title: "7. Cuando Todo Falle, Remix",
          content: "Muchos usuarios se dan cuenta: hacerlo todo de nuevo toma menos tiempo la segunda vez. Remix crea una copia limpia de tu proyecto en T=0. Reconstruye con mejor prompting + conocimiento más claro. Usa tu proyecto anterior solo como referencia. Casos de uso: estás atascado en un bucle buggy, quieres reiniciar limpio con historia preservada. Nota: Remix requiere desconectar Supabase primero."
        },
        {
          id: "paciencia",
          title: "8. Mantén la Paciencia, Mantén la Calma",
          content: "No estás solo. La IA puede ser mágica un momento y frustrante al siguiente. El 5% final de cualquier construcción suele ser el más lento, pero el más importante. Regla de oro: Tómate tu tiempo con los prompts. Revisa todo. Divide el trabajo en bloques pequeños y probables. Cuanto más precisos sean tus inputs, mejores serán tus outputs."
        },
        {
          id: "documentacion",
          title: "9. Usa la Documentación y Pide Ayuda",
          content: "La documentación contiene tutoriales, plantillas, consejos de SEO, integraciones y más. Puedes hacer preguntas directamente en el asistente de IA de la documentación. Únete a la comunidad Discord para apoyo entre pares. Cuando estés listo, envía tu proyecto a Nerd.lat Launch."
        },
        {
          id: "bonus",
          title: "10. Consejos Adicionales",
          content: "Agrega un prompt de nota de voz usando dictado para prompts largos. Crearás mejor input más rápido, especialmente útil cuando estés frustrado o cansado. Usa el patrón de prompt \"Estoy frustrado...\" para empujar mejor enfoque de la IA. Después de una edición mayor, siempre re revisa múltiples roles y su comportamiento (especialmente con lógica condicional). Almacena versiones estables como respaldos para depuración rápida. Si ves efectos secundarios inesperados: 'Crea un componente específicamente para [rol X] y no reutilices componentes compartidos a menos que estén claramente delimitados.'"
        }
      ]
    },
    {
      title: "Glosario",
      route: "/glosario",
      description: "Aprende los términos clave de desarrollo que necesitas para navegar y usar Nerd.lat efectivamente.",
      sections: [
        {
          id: "conceptos-generales",
          title: "Conceptos Generales",
          content: "IA (Inteligencia Artificial): La simulación de procesos de inteligencia humana por máquinas, especialmente sistemas informáticos, que permite tareas como aprendizaje, razonamiento y resolución de problemas. Prompt: Una pieza de texto o entrada que guía a los modelos de IA en la generación de resultados o la realización de ciertas tareas. Es parte de la funcionalidad central de Nerd.lat y es con prompts que creas, modificas un componente específico o elemento en tu aplicación."
        },
        {
          id: "terminos-nerd",
          title: "Términos Específicos de Nerd.lat",
          content: "Modo Chat: Nerd.lat va más allá de solo generar código; se convierte en un asistente interactivo que te guía a través de cada fase del desarrollo. Ayuda a los fundadores a pensar críticamente, planificar efectivamente, depurar inteligentemente y lanzar con confianza. Modo Edición: La acción de hacer cambios o modificaciones al contenido o código. Historial: El sistema de seguimiento y gestión de cambios en tu app y código a lo largo del tiempo. Conocimiento: Captura detalles esenciales del proyecto en un documento vivo que evoluciona con tu app. Vista Previa: Permite a los usuarios ver o experimentar contenido en vivo o funcionalidades de características antes de que sean finalizadas o publicadas, de manera interactiva. Diff: Una comparación que muestra las diferencias entre dos versiones de un archivo o código."
        },
        {
          id: "producto-desarrollo",
          title: "Conceptos de Producto y Desarrollo",
          content: "MVP (Producto Mínimo Viable): Una versión de un producto con las características mínimas necesarias para satisfacer a los primeros usuarios y validar una idea antes del desarrollo a gran escala. Hoja de Ruta: Un plan estratégico de alto nivel que describe la visión, dirección y características planificadas para un producto a lo largo del tiempo. Historia de Usuario: Una descripción corta y simple de una característica o requisito escrita desde la perspectiva de un usuario final. Persona: Una representación ficticia de un usuario objetivo, basada en investigación, para guiar las decisiones de diseño y desarrollo. PRD (Documento de Requisitos de Producto): Un documento integral que describe los objetivos, características y especificaciones de un producto para guiar el desarrollo. API (Interfaz de Programación de Aplicaciones): Una forma para que diferentes servicios se comuniquen. Los tipos más comunes son las APIs REST y las APIs GraphQL. Refactorizar: El proceso de reestructurar código existente sin cambiar su comportamiento externo para mejorar la legibilidad, mantenibilidad o rendimiento."
        },
        {
          id: "ui-ux-frontend",
          title: "UI/UX y Desarrollo Frontend",
          content: "Frontend: La parte de una aplicación de software con la que los usuarios interactúan directamente, abarcando los elementos de interfaz de usuario y experiencia de usuario. React: Una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario, particularmente aplicaciones de una sola página. Tailwind CSS: Framework CSS de código abierto basado en utilidades que proporciona un conjunto integral de clases predefinidas. Diseño Responsivo: Un enfoque de diseño web que asegura que el contenido se adapte sin problemas a varios tamaños de dispositivos. Botón: Un elemento clickeable que inicia una acción o evento, como enviar un formulario o abrir un diálogo. Modal (Diálogo): Una ventana que aparece frente al contenido principal para captar la atención del usuario. Toast: Una notificación breve y no intrusiva que aparece temporalmente para informar a los usuarios del resultado de una acción. Formulario: Una colección estructurada de campos de entrada que permite a los usuarios enviar datos."
        },
        {
          id: "backend-bases-datos",
          title: "Desarrollo Backend y Bases de Datos",
          content: "Backend: La infraestructura del lado del servidor de una aplicación que maneja el procesamiento de datos, almacenamiento y lógica de negocio. Supabase: Una plataforma de backend como servicio de código abierto que proporciona una base de datos Postgres, autenticación, APIs instantáneas y capacidades en tiempo real. CRUD (Crear, Leer, Actualizar, Eliminar): Las cuatro operaciones básicas realizadas en datos en una base de datos o aplicación. SQL (Lenguaje de Consulta Estructurada): Un lenguaje de programación específico de dominio diseñado para gestionar y manipular bases de datos relacionales. RLS (Seguridad a Nivel de Fila): Una característica en bases de datos que permite controlar el acceso a filas específicas en una tabla basado en roles de usuario o atributos."
        },
        {
          id: "seguridad-autenticacion",
          title: "Seguridad y Autenticación",
          content: "OAuth: Un protocolo de autenticación ampliamente utilizado que permite a los usuarios iniciar sesión en aplicaciones usando servicios de terceros como Google, Facebook o GitHub. Autenticación de Dos Factores (2FA): Una medida de seguridad que requiere que los usuarios proporcionen dos formas de identificación antes de acceder a una cuenta. CORS (Compartir Recursos de Origen Cruzado): Una política de seguridad que controla qué sitios web o aplicaciones pueden acceder a recursos en un servidor. Proveedor de Autenticación: Una entidad o servicio que verifica las credenciales de usuario, permitiendo acceso seguro a aplicaciones o sistemas."
        }
      ]
    },
    {
      title: "Tiempo de Inspiración",
      route: "/casos-de-uso",
      description: "¿Qué está construyendo la gente con Nerd.lat?",
      sections: [
        {
          id: "landing-pages",
          title: "Páginas de Aterrizaje",
          content: "Dream Catcher: Registra, analiza y descubre patrones en tus sueños. Awaken Ambiance: IA de voz en tiempo real que responde de manera natural. Alpine Ventures: Inversionista en fundadores obsesionados con el producto. PrintPigeon: Envía cartas en línea con facilidad."
        },
        {
          id: "plataformas-educativas",
          title: "Plataformas Educativas",
          content: "Vpromise: Herramientas interactivas y soluciones innovadoras para la educación moderna. Backchannel: Sistema que revoluciona la búsqueda de empleo. CAR33R: Mercado de contratación impulsado por criptomonedas. Eva: Recibe tus recomendaciones personalizadas de IA. SkillStep: Ayuda a las mujeres a encontrar trabajos seguros y educación en Europa. CodeLearn: Plataforma interactiva para aprender programación a través de proyectos prácticos."
        },
        {
          id: "productos-fullstack",
          title: "Productos Full-stack",
          content: "LOOK AI (recaudó $500K): Búsqueda asistida por IA para ropa construida con Nerd.lat. Wiktok: TikTok para páginas de Wikipedia. BluePrintA: Simplifica el desarrollo de productos. Wildcard AI (YC): API de selección inteligente de herramientas para agentes de IA. BlueMint AI: IA que transforma ideas de productos en especificaciones detalladas listas para desarrolladores. Stardust Analytics: Ayuda a propietarios de tiendas Shopify a encontrar el KPI exacto que bloquea su crecimiento. Access AI: Transforma cualquier sitio en una experiencia interactiva por voz. HealthSync: Plataforma de gestión que integra información con seguimiento de salud personal. ChatPDF: Habla con tus documentos de manera natural. RaiseFlow: Un CRM para inversores."
        },
        {
          id: "juegos",
          title: "Juegos",
          content: "Echo of the Forge: Experiencia narrativa de IA que se adapta a tus decisiones. Kaleidoscope: Texto que genera un espacio 3D. Color Islands: Juego multijugador."
        }
      ]
    },
    {
      title: "Integraciones",
      route: "/integraciones",
      description: "Extiende la funcionalidad de tu sitio web usando integraciones y APIs externas.",
      sections: [
        {
          id: "introduccion",
          title: "Introducción",
          content: "Para usar Nerd.lat al máximo, solo necesitas obtener dos claves API: Supabase y OpenAI. Una vez que tengas estas claves, Nerd.lat las conectará automáticamente y podrás usar todas las funcionalidades avanzadas sin preocuparte por configuraciones técnicas."
        },
        {
          id: "supabase-api",
          title: "Obtener API de Supabase",
          content: "Supabase te permitirá tener una base de datos, autenticación de usuarios y almacenamiento de archivos en tu aplicación de Nerd.lat. Pasos: 1. Crear una cuenta en Supabase: Ve a supabase.com, Haz clic en \"Start your project\", Crea una cuenta usando GitHub, Google o email, Crea un nuevo proyecto y selecciona una región. 2. Obtener las claves de API: Ve a la configuración del proyecto (Settings), Selecciona \"API\" en el menú lateral, Encontrarás la URL del Proyecto y la Clave Anónima (anon key). 3. Copiar las claves: Copia estas dos claves y guárdalas. Una vez que tengas estas claves, Nerd.lat se encargará automáticamente de conectar tu base de datos y autenticación."
        },
        {
          id: "openai-api",
          title: "Obtener API de OpenAI",
          content: "OpenAI te permitirá usar inteligencia artificial avanzada en tu aplicación para generar texto, imágenes y procesar audio. Pasos: 1. Crear cuenta en OpenAI: Ve a platform.openai.com, Crea una cuenta o inicia sesión, Verifica tu número de teléfono, Configura tu método de pago (se requiere para usar la API). 2. Generar clave de API: Ve a \"API keys\" en el menú lateral, Haz clic en \"Create new secret key\", Dale un nombre descriptivo a tu clave, Copia la clave generada (solo se muestra una vez). 3. Copiar la clave: Copia la clave generada y guárdala. Importante: Guarda tu clave de API en un lugar seguro. No la compartas públicamente ni la subas a repositorios de código. Importante: Gestión de costos - OpenAI cobra por uso. Te recomendamos: Configura un límite de gasto en tu cuenta de OpenAI, Empieza con un límite bajo (ej: $10) para probar, Monitorea tu uso regularmente en el dashboard de OpenAI. Una vez que tengas ambas claves API, simplemente proporciónaselas a Nerd.lat y podrás usar todas las funcionalidades avanzadas sin configuraciones adicionales."
        }
      ]
    }
  ]
};